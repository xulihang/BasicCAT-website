---
date: 2022-01-23 15:47:50+08:00
layout: post
title: 目前最佳的日漫翻译方法
categories: blog
tags: imagetrans
---

漫画翻译存在诸多问题，如文字区域的定位、文字OCR识别、文字翻译、原文抹除和排版等等。

不同语种的漫画往往需要采用针对性的处理方法。像日语漫画，它的文字是通常是竖排的，但有的说明性文字又是横排。文字边上还会有用来标注发音的振假名。有时，文字并不是在纯色背景上，而是在充满网点的背景上，并且有描边。有时，一句话的内容会被拆分到不同的气泡中。

目前，最佳的处理日漫的是使用自训练的自定义检测模型定位文字区域，之后用基于日漫训练的OCR模型识别文字，准确识别文字后再使用支持上下文、定义术语的大模型进行翻译，最后再进行排版工作。

ImageTrans支持调用下列模型与操作以完成日漫翻译工作，可以较好地处理上面提到的问题：

1. 日漫文字检测模型，能检测文字行，还支持检测气泡、分镜、拟声词等等：[地址](https://github.com/xulihang/balloon-dataset)
2. 基于Transformer的端到端日漫OCR：[地址](https://github.com/xulihang/ImageTrans-docs/issues/140)
3. 使用大语言模型进行翻译，比如[ChatGPT](https://www.basiccat.org/zh/ChatGPT-image-translator/)和Gemini。
4. 在分镜检测的基础上对文字区域进行排序，机器翻译可以更好地利用上下文信息：[地址](https://github.com/xulihang/ImageTrans-docs/issues/147)。
5. 使用上面的文字检测模型生成气泡和文字掩膜，对于气泡，用纯色填充，对于图像上的文字，用Lama Inpaint模型去除文字，重绘文字下方的网点等图案。


这些模型大部分都内置在软件中，开箱即用，可以纯CPU运行，不依赖独立显卡。额外的运行文件也可以在ImageTrans的百度网盘的依赖文件文件夹中找到。

演示视频：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117393586127962&bvid=BV1SJpw62EcL&cid=42512352274&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>






