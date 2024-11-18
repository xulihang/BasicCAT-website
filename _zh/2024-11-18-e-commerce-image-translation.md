---
date: 2024-11-18 20:01:50+08:00
layout: post
title: 跨境电商图片翻译
categories: blog
tags: imagetrans 电商
---

[ImageTrans](/zh/imagetrans/)是一款计算机辅助图片翻译软件，我们可以用它翻译跨境电商用的图片。

跨境电商的图片种类丰富，有用于搜索结果的主图、有详情页图片，给翻译提出了不少挑战：

1. 会存在需要翻译、不需要翻译以及需要去除的文字。
2. 文字可能存在花纹、渐变等复杂背景上，需要较好地去除文字，还原背景。
3. 翻译过来的英文文字会比中文文字更长，占用更大的面积。
4. 对文字对齐的要求较高。


ImageTrans提供以下功能，能较好地处理跨境电商图片的翻译。

1. 使用OCR技术，自动生成文本框，并能去除文字，免去手动框选和抹除文字的操作。此外也支持手动对文本框进行增删改。

   原图：
   
   ![复杂背景原图](/gallery/projects/e-commerce/complex-background.webp)
   
   文字掩膜：
   
   ![复杂背景文字掩膜](/album/e-commerce/complex-background.jpg-mask.png)
   
   去文字图：
   
   ![复杂背景去文字图](/album/e-commerce/complex-background.jpg-text-removed.jpg)
2. 支持预先用机器翻译进行翻译，并能调用多个机器翻译（阿里电商、ChatGPT、DeepL、百度等），为翻译提供参考。虽然电商翻译是一种创造性翻译，但机器翻译还是能提供一定的帮助。

   ![机器翻译](/album/e-commerce/machine-translation.jpg)
   
3. 支持多选文字后对文字样式统一进行设置。

    ![多选](/album/e-commerce/multiple-selection.jpg)


4. 支持选中多个区域后进行位置的对齐，并支持和原文区域进行对齐。

   ![对齐](/album/e-commerce/alignment.jpg)
   
5. 移动区域时，支持显示对齐线。

   ![对齐线](/album/e-commerce/alignment-line.jpg)
   
6. 支持将结果导出为Photoshop图片，或者直接处理已有PSD文件，用于处理需要复杂修改的图片。
7. 内建搜索与替换，可以用于统一文字大小写等操作。

以下是一些翻译示例，字体使用Lato。这一字体拥有多种字重，间距较小，可以满足复杂的图片中译英需求。为了保证文字清楚，字体大小均在15像素以上。

示例1：

![手册](/gallery/projects/e-commerce/manual.webp)

![手册](/gallery/projects/e-commerce/out/manual.webp)

示例2：

![复杂背景](/gallery/projects/e-commerce/complex-background.webp)

![复杂背景](/gallery/projects/e-commerce/out/complex-background.webp)


示例3：

![表格](/gallery/projects/e-commerce/table.webp)

![表格](/gallery/projects/e-commerce/out/table.webp)


示例4：

![头图](/gallery/projects/e-commerce/overview.webp)

![头图](/gallery/projects/e-commerce/out/overview.webp)


[点此](https://www.basiccat.org/zh/gallery/)查看更多图片翻译例子
