---
date: 2018-11-08 13:37:50+08:00
layout: post
title: BasicCAT开发笔记（九）：交互式机器翻译
categories: blog
tags: note
---

关于什么是交互式机器翻译，我在[此文](https://blog.xulihang.me/use-machine-translation-to-help-human-translation/)已经做了较为详细的阐释，下面主要是讲讲BasicCAT中的交互式机器翻译是怎么做的。

BasicCAT采用的是黑箱式的方法，将原文分为多个片段，用机器翻译进行翻译，然后翻译时通过输入的字符匹配对应的片段。Windows下汉语输入时会显示拼音，所以目标语是汉语时，要排除输入非汉字的情况。而英文输入时，进行分词，匹配最后一个单词的内容。

我们可以用ngram的方法进行分段，但这一方法并不好使，有很多无用的片段。所以，我采用stanford corenlp进行句法分析，然后提取短语。

比如对于If the space visitors come, Pooh — don't tell them where I live!这个句子，我们可以得到以下句法分析结果。

```
(ROOT
  (FRAG
    (SBAR (IN If)
      (S
        (NP (DT the) (NN space) (NNS visitors))
        (VP (VBP come) (, ,)
          (SBAR
            (S
              (NP (NNP Pooh))
              (: --)
              (VP (VBP do) (RB n't)
                (VP (VB tell)
                  (NP (PRP them))
                  (SBAR
                    (WHADVP (WRB where))
                    (S
                      (NP (PRP I))
                      (VP (VBP live)))))))))))
    (. !)))
```

然后，比如我们要提取所有动词短语。需要包含长的VP短语，也要包含最小的。我们可以用正则的贪婪模式来匹配最长的那个VP。然后启用非贪婪模式在这个VP里删掉开头的更小的VP后继续用贪婪模式匹配一个长的VP，如此循环往复。

片段提取的过程如下：

```
(NP (DT the) (NN space) (NNS visitors))
(NP (NNP Pooh))
(NP (PRP them))
(NP (PRP I))
(VP (VBP do) (RB n't) (VP (VB tell) (NP (PRP them))
(VP (VBP live)))))))))))
(VP (VBP come)
(VP (VBP do) (RB n't) (VP (VB tell) (NP (PRP them)) (SBAR (WHADVP (WRB where)) (S (NP (PRP I)) (VP (VBP live))))))))))) (. !)))
(VP (VBP do)
(VP (VB tell) (NP (PRP them)) (SBAR (WHADVP (WRB where)) (S (NP (PRP I)) (VP (VBP live))))))))))) (. !)))
(VP (VB tell)
(VP (VBP live))))))))))) (. !)))
(VP (VBP live)
```

最终提取的片段和对应的翻译如下：

```
the space visitors	太空游客
Pooh	呸
them	他们
I	我
do n't tell them	不要告诉他们
live	居住
come	来
do n't tell them where I live !	不要告诉他们我住在哪里！
do	做
tell them where I live !	告诉他们我住在哪里！
tell	告诉
live !	现场直播！
```

相关文件：

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/ITP.bas>