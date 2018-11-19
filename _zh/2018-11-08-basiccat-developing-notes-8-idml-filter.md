---
date: 2018-11-08 12:47:50+08:00
layout: post
title: BasicCAT开发笔记（八）：idml格式文件的支持
categories: blog
tags: note
---

idml是翻译书籍、手册的出版物必须要面对的格式。对这一格式具体的分析可以见我写的系列文章：

* [IDML格式分析](https://blog.xulihang.me/dissection-of-idml/)
* [翻译InDesign文件](https://blog.xulihang.me/translate-indesign-files/)
* [导出IDML格式的InDesign文件为文字](https://blog.xulihang.me/idml-to-text/)

我们接下来要做的是做到对样式的保留。idml的样式分为本地样式和全局样式，本地样式定义在story文件里，而全局样式定义在resources/styles.xml文件里。

story文件里主要有两类元素，paragraphstylerange和characterstylerange。两者都需要有一种全局样式的属性，然后可以在此基础上定义本地样式。

以下是一个story的例子，其中段落定义了Head Main这一全局样式，并添加了居中对齐这一本地样式。段落里的第一个characterstylerange使用了默认的[No character style]，没有全局样式效果。有本地样式StrokeWeight描边、Capitalization大写和StrokeColor描边颜色。

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Story xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="13.0">
	<Story Self="u1c52c" AppliedTOCStyle="n" UserText="true" IsEndnoteStory="false" TrackChanges="false" StoryTitle="$ID/" AppliedNamedGrid="n">
		<StoryPreference OpticalMarginAlignment="false" OpticalMarginSize="12" FrameType="TextFrameType" StoryOrientation="Horizontal" StoryDirection="LeftToRightDirection" />
		<InCopyExportOption IncludeGraphicProxies="true" IncludeAllResources="false" />
		<ParagraphStyleRange AppliedParagraphStyle="ParagraphStyle/Head Main" Justification="CenterAlign">
			<CharacterStyleRange AppliedCharacterStyle="CharacterStyle/$ID/[No character style]" StrokeWeight="4" Capitalization="AllCaps" StrokeColor="Color/C=75 M=10 Y=100 K=10">
				<Content>Conte</Content>
			</CharacterStyleRange>
			<CharacterStyleRange AppliedCharacterStyle="CharacterStyle/$ID/[No character style]" StrokeWeight="4" Capitalization="AllCaps" StrokeColor="Color/C=75 M=10 Y=100 K=10" KerningValue="0">
				<Content>n</Content>
			</CharacterStyleRange>
			<CharacterStyleRange AppliedCharacterStyle="CharacterStyle/$ID/[No character style]" StrokeWeight="4" Capitalization="AllCaps" StrokeColor="Color/C=75 M=10 Y=100 K=10">
				<Content>ts</Content>
			</CharacterStyleRange>
			<CharacterStyleRange AppliedCharacterStyle="CharacterStyle/$ID/[No character style]">
				<Br />
			</CharacterStyleRange>
		</ParagraphStyleRange>
		<ParagraphStyleRange AppliedParagraphStyle="ParagraphStyle/Page number">
			<CharacterStyleRange AppliedCharacterStyle="CharacterStyle/Contents" />
		</ParagraphStyleRange>
	</Story>
</idPkg:Story>
```

我们要对样式保留，可以参考其它CAT软件的做法，将其转为标签。

全局样式存放在styles.xml里，是按顺序进行存放的。我们把这些样式的名字存为一个列表，可以按序号读取，这样我们可以用`<p0>`、`<p1>`、`<c0>`、`<c1>`这样的标签表示全局样式。而本地样式的话，可以读取story，对每个characterstylerange或paragraphstylerange进行排序，序号保存为id，以后生成文件时读取id对应的characterstylerange或paragraphstylerange获得本地样式。当然，只有存在本地样式时才需要添加id属性。

最终，上述文件可以转为以下带标签的文本。

```
<p15><c0 id="0">Conte</c0>

<c0 id="1">n</c0>

<c0 id="2">ts</c0>

<c0>
</c0>

</p15>
<p19><c13></c13>

</p19>

```

我们发现，contents这个词，因为不同的字符的本地样式的原因被拆开了。在英到中翻译时，原文单词内的字符的样式是没有得到保留的意义的。所以，对于相邻的标签，如果全局样式一样，但本地样式不一样的话，可以进行合并。合并后得到以下结果：

```
<p15><c0 id="0">Contents</c0>

<c0>
</c0>

</p15>
<p19><c13></c13>

</p19>

```

然后是要将结果保存到工作文件了。以上内容，保存到工作文件的结果是这样的。

```json
{
            "Story_u1c52c.xml": [
                [
                    "Contents",
                    "",
                    "<p15><c0 id=\"0\">Contents<\/c0><c0>\n<\/c0><\/p15><p19><c13><\/c13><\/p19>",
                    "Story_u1c52c.xml",
                    {}
                ]
            ]
        },
```

呈现给用户的是没有标签的文本，其它的格式信息完全可以隐去。而对于一个句子中有特殊格式的情况，我们要把标签给它显示出来。比如以下这句中有进行斜体设置的标签：

```json
 [
    "Two types, the <c4>smooth<\/c4> muscles (muscles found in your organs) and the <c4>cardiac<\/c4> muscle (your heart), work automatically.",
    "其中<c4>平滑肌<\/c4>（存在于器官中）和<c4>心肌<\/c4>（存在于心脏中）是自动工作的，",
    "Two types, the <\/c0><c4>smooth<\/c4><c0> muscles (muscles found in your organs) and the <\/c0><c4>cardiac<\/c4><c0> muscle (your heart), work automatically. ",
    "Story_u198b2.xml",
    {}
],
```

因为c0标签是正文中默认的无全局样式标签，所以平时可以选择隐藏。显示标签这一步较为复杂，要考虑在文件开头、结尾和中间三种情况。另外，标签的存在也使得句段的合并存在问题。所以要进行跨标签的句段合并，原来隐藏的标签需要全部显示出来。

英文翻译为中文要解决的另一个问题是字体，indesign里如果原文是英文字体，汉字会显示为一个方框，而字重不对也会提示错误。

英文的字体往往有很多字重，但中文字体一般只有一种常规体。我这里选择了思源宋体作为翻译的目标字体，因为它有7种字重，可以满足一个对应关系。

字重可以用数字表示，也可以用英文，比如[adobe官网](https://helpx.adobe.com/fonts/using/css-selectors.html)中是这样定义对应关系的：

* 100 = thin
* 200 = extra-light
* 300 = light
* 400 = normal, book
* 500 = medium
* 600 = demi-bold
* 700 = bold
* 800 = heavy
* 900 = black

思源宋体使用的英文会有不同，比如normal对应的是regular。我们需要对全局样式和本地样式中的字体样式进行转换。另外fonts.xml里需要添加对应的字体信息。这可以通过打开设置过该字体的idml文件得到。

这样，替换stories文件、styles.xml、fonts.xml文件后，把原来解压的idml文件重新打包后就是翻译成功的idml文件了。

相关文件：

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/idmlFilter.bas>

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/idmlUtils.bas>
