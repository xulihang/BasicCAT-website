---
date: 2018-10-29 16:30:50+08:00
layout: post
title: BasicCAT开发笔记（六）：SRX的算法实现
categories: blog
tags: CAT
---

[前文](https://blog.xulihang.me/TMX-TBX-SRX-Three-Lisa-oscar-standards/)介绍了Lisa的三大翻译标准，我发现分割句段还是应该使用SRX提供的方法。毕竟它是一个标准，可以直接利用前人做好的规则文件，与其它CAT软件也可以进行分割规则的交换。

SRX提供的伪代码看起来很简单，但实现起来我感到有点难度。主要是它需要检查分割点前后的内容，这可以用正则的lookahead和lookbehind来实现，但遍历文本时后面有多少长度的文本要作为afterbreak检测的对象则不能确定。

于是我找了一些开源项目，主要有[segment](https://github.com/loomchild/segment/blob/master/segment/src/main/java/net/loomchild/segment/srx/SrxTextIterator.java)、[omegat](https://github.com/omegat-org/omegat/blob/master/src/org/omegat/core/segmentation/Segmenter.java)以及[heartsome](https://github.com/heartsome/translationstudio8/)。其中omegat使用的规则文件并不是正宗的srx格式，但基本保持了srx的设计。

下面讲一下我参考OmegaT的源码得出的自己的SRX算法实现。

先读取SRX文件，把分割规则和例外规则分开存放。然后依次遍历这些规则，将符合要求的断句位置存放进一个列表。有些规则可能没有beforebreak或者afterbreak，这时处理很简单，匹配到后直接将位置信息进行存储即可。而如果两个break齐全的话，先寻找所有的beforebreak匹配的内容，匹配到一条beforebreak，就开始寻找afterbreak的匹配，然后看看这两个匹配是不是接壤。如果是则记录位置信息。

为了提高效率，每次匹配后，该条规则中需要匹配的文本要去除匹配位置前的内容，而循环到下一条规则的文本时还是要从原来的文本开始。

```vb
For Each rule As Map In rulesList
    textLeft=text
    Dim beforeBreak,afterBreak As String
    beforeBreak=rule.Get("beforebreak")
    afterBreak=rule.Get("afterbreak")

    Dim bbm As Matcher
    bbm=Regex.Matcher2(beforeBreak,32,textLeft)

    If beforeBreak<>"null" Then
        Do While bbm.Find
            If afterBreak="null" Then
                breakPositions.Add(bbm.GetEnd(0)+text.Length-textLeft.Length)
                textLeft=textLeft.SubString2(bbm.GetEnd(0),textLeft.Length)
                bbm=Regex.Matcher2(beforeBreak,32,textLeft)
            End If
        
            Dim abm As Matcher
            abm=Regex.Matcher2(afterBreak,32,textLeft)
            Do While abm.Find
                If bbm.GetEnd(0)=abm.GetStart(0) Then
                    breakPositions.Add(abm.GetEnd(0)+text.Length-textLeft.Length)
                    textLeft=textLeft.SubString2(abm.GetEnd(0),textLeft.Length)
                    abm=Regex.Matcher2(afterBreak,32,textLeft)
                    bbm=Regex.Matcher2(beforeBreak,32,textLeft)
                    Exit
                End If
            Loop
        Loop
    Else if afterBreak<>"null" Then
        Dim abm As Matcher
        abm=Regex.Matcher2(afterBreak,32,textLeft)
        Do While abm.Find
            breakPositions.Add(abm.GetEnd(0)+text.Length-textLeft.Length)
            textLeft=textLeft.SubString2(abm.GetEnd(0),textLeft.Length)
            abm=Regex.Matcher2(afterBreak,32,textLeft)
        Loop
    End If
Next
```

得到需要断句和不需要断句的位置列表后，我们对两个列表进行比对，生成一个不包含例外位置的断句位置列表。然后就可以根据位置信息确定片段了。

```vb
Dim finalBreakPositions As List
finalBreakPositions.Initialize
For Each index As Int In breakPositions
	If nonbreakPositions.IndexOf(index)=-1 Then
		finalBreakPositions.Add(index)
	End If
Next
```

这一方法不需要使用复杂的正则表达式，比较简单明了，但效率不高。如果遇到大段文字，需要先把文章分成段落等小的片段，这时的断句效率还是很可观的。我测试80000词的《哈利波特与魔法石》需要18秒时间。因为考虑了所有的规则，所有相当于cascade没有勾选。

而要实现cascade勾选的模式，需要按照SRX给出的算法，在每个字符串的位置上都匹配一遍规则，而且是优先匹配例外规则，效率会更低。

相关文件：

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/SRX.bas>

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/segmentation.bas>

