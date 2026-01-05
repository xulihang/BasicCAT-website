---
date: 2026-01-05 18:36:50+08:00
layout: post
title: 扫描图书的漂白、矫正和清晰化处理
categories: blog
tags: imagetrans
---

最近下了几本超星图书馆的电子书，打算转换成PDF用大上电子墨水平板阅读。但我发现这些扫描的图书存在分辨率低、文字倾斜、对比度不够、文字透印、背景干扰等问题，在电子书阅读器上的效果很差（见下方例图）。


![不清晰电子墨水屏](/album/clean-scanned-document/uncleaned-on-eink-tablet.jpg)


最后我经过一番处理，得到了一个清晰版的PDF，总算在电子墨水设备上能看了。

![清晰电子墨水屏](/album/clean-scanned-document/cleaned-on-eink-tablet.jpg)

下面是经过的处理步骤。

原图：

![原图](/album/clean-scanned-document/original.jpg)

对图片做超分辨率操作，提升清晰度：

![](/album/clean-scanned-document/superresolution.jpg)

识别图片中的文字的倾斜角度，根据这一角度矫正图像：

![矫正版](/album/clean-scanned-document/deskewed.jpg)

识别图片中的文字，以文字区域为单位进行二值化，得到只有黑白两种颜色的版本：

![黑白版](/album/clean-scanned-document/black-white.png)

最后得到这本203页的《学说上海话》的PDF只有8MB大小，同时支持搜索PDF中的文字。


以上操作使用[ImageTrans](/zh/imagetrans/)一站式完成。

