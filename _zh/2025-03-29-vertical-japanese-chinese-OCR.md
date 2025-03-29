---
date: 2025-03-29 14:18:50+08:00
layout: post
title: 竖排日语和中文的识别
categories: blog
tags: imagetrans
---

日语和中文与其它语言不同，可以纵向竖直排列也可以横向排列。日文的书籍、漫画至今大多是竖排的，而中文现在大多为横排，只在古籍、漫画中还能看到竖排的中文。

竖排和横排混合的日文：

![竖排和横排混合的日文](/album/vertical-text/japanese-sample.jpg)

竖排的繁体中文：

![竖排繁体中文](/album/vertical-text/chinese-sample.jpg)

下面是识别竖排文字的相关方法。

## 单字检测

要识别竖排文字，一个直接的方法是检测每个文字的位置，识别每个文字，然后合并成文字行或者段落。

有很多OCR能返回单字坐标，例如[RapidOCR](https://github.com/xulihang/ImageTrans_plugins/tree/master/PyRapidOCR)。

识别结果：

![单字检测-繁体中文](/album/vertical-text/chinese-sample-detected.jpg)

## 文字行检测

目前流行的基于深度学习的OCR，大多只能检测文字行。需要专门训练，让OCR具备区分横行和竖行的能力。

目前开源的OCR中，[manga-image-translator](https://github.com/xulihang/ImageTrans_plugins/tree/master/mangaTranslatorOCR)的效果表现最好。

识别结果：

![文字行检测-日文](/album/vertical-text/japanese-sample-detected.jpg)

如果OCR只能识别横行，我们可以先对图像做一个处理，将竖排的图像转换成横排的。

![竖排转横排](/album/vertical-text/converted.jpg)

## 识别整个图像

基于Transformer的OCR，可以直接输入图像，得到文字结果。

ChatGPT等大模型和[manga-OCR](https://github.com/xulihang/ImageTrans_plugins/tree/master/mangaOCR)具备竖排文字识别能力。但它们通常需要配合其它文字检测方法使用。


以上功能均已集成进[ImageTrans](/zh/imagetrans/)，可以购买后使用。
