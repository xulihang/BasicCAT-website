---
date: 2022-12-18 18:45:50+08:00
layout: post
title: 使用ImageTrans翻译日语漫画
categories: blog
tags: imagetrans
---

ImageTrans是通用的图片翻译软件，稍加设置我们可以用它来翻译日语漫画到中文。下面是一个简单的操作步骤。

1. 将待翻译的图片放入一个文件夹。
2. 打开ImageTrans，新建一个项目，选择语言对：日语到中文。
3. 导入图片文件夹。
4. 使用气泡检测或者启发式方法检测所有文字区域。
5. 选择一个日语OCR，比如mangaOCR，识别所有区域的文字。
6. 选择一个机器翻译，比如百度、彩云小译，获取所有区域的机器翻译结果。
7. 点击查看翻译，可以看到原文被抹除并用译文回填的成品图。
8. 如果需要竖直排版，可以在项目设置-字体样式里添加一个默认的字体样式，并设置方向为竖向。

## 翻译示例

原图：

![日语原图](/album/manga-translator/japanese.jpg)

翻译的版本：

![中文翻译版本](/album/manga-translator/chinese.jpg)

图片来源：<https://github.com/mantra-inc/open-mantra-dataset>


## 视频教程

[使用ImageTrans翻译日语漫画](https://www.bilibili.com/video/BV1Uo4y1Z7Wo/)

## 相关链接

[目前最佳的日漫翻译方法](https://www.basiccat.org/zh/best-practice-manga-ocr-and-translation/)

