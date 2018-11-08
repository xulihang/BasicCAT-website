---
date: 2018-10-23 08:53:50+08:00
layout: post
title: BasicCAT开发笔记（三）：项目创建
categories: 技术随笔
tags: CAT
---

项目需要建立一个项目文件夹，然后有管理项目信息的项目文件以及各个子文件夹。子文件夹包括源语言文件夹、目标语言文件夹、翻译记忆文件夹、术语文件夹以及工作文件文件夹。另外还有一个备份文件夹，每隔一分钟进行备份。

大多数CAT软件在创建项目时都有一个向导，让你选择语言对，添加项目文件，设置翻译记忆库等等，操作繁琐。我们要做的是一个简单易用的汉英版CAT软件，可以直接选择建立英语到汉语或者汉语到英语的项目。然后，我们默认是使用记忆库、术语库的，可以直接建立。目前记忆库和术语库使用sqlite存储，利用b4j的keyvaluestore以键/值的形式保存。

而工作文件，存储了CAT软件从源文件中抽取的可翻译数据，平时的翻译操作主要在这个文件上进行。

工作文件的格式大多数软件都是采用的[xliff](https://blog.xulihang.me/a-brief-introduction-to-xliff/)，因为常见的文件格式都是以xml格式存储的，而且xliff作为一个标准应该得到广泛采用。

不过我决定使用json格式进行存储。

下面是一个工作文件的内容：

```json
{
    "filename": "int_978DPWINER263.idml",
    "files": [
        {
            "Story_u1de62.xml": [
                [
                    "The Real Science of Supers",
                    "超人背后的真科学",
                    "<p1><c0 id=\"0\">The Real Science of Supers<\/c0><\/p1>",
                    "Story_u1de62.xml"
                ]
            ]
        },
        {
            "Story_u1de4b.xml": [
                [
                    "A Discovery Book",
                    "一本发现书",
                    "<p1><c0 id=\"0\">A Discovery Book<\/c0><\/p1>",
                    "Story_u1de4b.xml"
                ]
            ]
        },
        ]
}
```

和xliff的内容其实类似，有file，trans-unit等内容，不过我在file里放的是一个列表，列表里依次是原文、译文、带格式信息的原文、所属的文件名。利用带格式信息的原文，可以判断片段合并时需不需要添加空格，可以方便地生成译文。最后带上文件名信息，主要是便于以片段为单位进行操作时方便确定所属文件。

使用json的好处是操作简单，生成的文件可读性较强。当然，不像xml文件那样有schema，标准化程度低是缺点。

另外还有项目文件，也使用json，主要存储项目设置信息，上次操作的信息等。

```json
{
    "settings": {
        "tmList": [
            "out.txt"
        ]
    },
    "lastEntry": 407,
    "files": [
        "超人总动员_新版原文.txt",
        "超人总动员_short.txt"
    ],
    "source": "en",
    "lastFile": "超人总动员_新版原文.txt",
    "target": "zh"
}
```

下面是一个项目的树状结构：

```
│  project.json
│
├─bak
│      project.json
│      超人总动员_short.txt.json
│      超人总动员_新版原文.txt.json
├─source
│      超人总动员_short.txt
│      超人总动员_新版原文.txt
├─target
│      超人总动员_short.txt
│      超人总动员_新版原文.txt
├─Term
│      term.db
├─TM
│      externalTM.db
│      out.txt
│      TM.db
└─work
        超人总动员_short.txt.json
        超人总动员_新版原文.txt.json
```
