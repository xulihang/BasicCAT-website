---
date: 2025-11-24 20:00:50+08:00
layout: post
title: 使用Nano Banana翻译日语漫画
categories: blog
tags: imagetrans
---

这周谷歌发布了基于Gemini 3的Nano Banana Pro，可以输入一张图片，直接给出它的翻译版本。

原图（[男子高生×新人OLの話](https://www.dlsite.com/girls/work/=/product_id/RJ276847.html)）：

![原图](/album/dlsite/006-ja.webp)


翻译好的漫画图：

![nano翻译图](/album/nano-banana/nano.webp)


可以看到，它可以比较准确地去除原文，回填译文，并且翻译质量不错。

但它也存在一些问题：

1. 文字显示奇怪。
2. 输出的图像质量会有损失。
3. 输出的图像内容和原图有差别，比例也不对。


改成让它只输出去文字的版本，可以看到日漫的网点还原得不错，但还是对图像内容和比例做了改变。

![nano去文字图](/album/nano-banana/text-removed-nano.webp)

这样看来，想用它来辅助快速翻译图片是可行的，但要人工漫画翻译，融合它到传统人工翻译流程，输出高质量的翻译结果还是存在一些问题。

下面是使用计算机辅助图片翻译软件[ImageTrans](/zh/imagetrans/)走人工翻译流程的结果。

文字掩膜：

![文字掩膜](/album/nano-banana/mask.png)

去文字图：

![去文字图](/album/nano-banana/text-removed.webp)

翻译的版本：

![翻译的版本](/album/nano-banana/translated.webp)


