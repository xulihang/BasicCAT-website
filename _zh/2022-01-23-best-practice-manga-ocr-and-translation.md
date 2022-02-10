---
date: 2022-01-23 15:47:50+08:00
layout: post
title: 目前最佳的日漫翻译方法
categories: blog
tags: imagetrans
---

漫画翻译存在诸多问题，如文字区域的定位、文字OCR识别、文字翻译、原文抹除和排版等等。

不同语种的漫画往往需要采用针对性的处理方法。像日语漫画，它的文字是通常是竖排的，但有的说明性文字又是横排。文字边上还会有用来标注发音的振假名。有时，文字并不是在纯色背景上，而是在充满网点的背景上，并且有描边。有时，一句话的内容会被拆分到不同的气泡中。

目前，最佳的处理日漫的是使用自训练的气泡检测模型定位文字区域，之后用基于日漫训练的OCR模型识别文字，准确识别文字后再使用基于漫画翻译语料训练的机器翻译进行翻译，最后再进行排版工作。

ImageTrans支持调用下列模型与操作以完成日漫翻译工作，可以较好地处理上面提到的问题：

1. Scaled Yolo v4日漫气泡检测模型，[地址](https://github.com/xulihang/ImageTrans-docs/issues/135)
2. 基于Transformer的端到端日漫OCR，[地址](https://github.com/xulihang/ImageTrans-docs/issues/140)
3. 基于Transformer的日漫机器翻译，[地址](https://github.com/xulihang/ImageTrans-docs/issues/108) （只支持日译英，其它语言对可以用通用的在线机器翻译服务）
4. 在分镜检测的基础上对文字区域进行排序，机器翻译可以更好地利用上下文信息，[地址](https://github.com/xulihang/ImageTrans-docs/issues/147)。

具体操作方法请参考上面地址中的说明。

相关的运行文件可以在ImageTrans的百度网盘的依赖文件文件夹中找到。







