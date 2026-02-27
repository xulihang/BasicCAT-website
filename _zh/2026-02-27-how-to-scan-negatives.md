---
date: 2026-02-27 20:28:50+08:00
layout: post
title: 如何扫描照相底片
categories: blog
tags: imagetrans
---

以前的胶卷相机拍的照片，到照相馆冲印后一般都会留下底片（胶片）。我最近就翻出了不少这种底片。底片里面是一种银盐，具有高度感光性。一般的底片的规格是宽35毫米，高24毫米，冲印出来的内容是反色的负片。

因为底片很小，而且外面还有一层色罩，想要扫描成数字版就不是一件容易的事情。常见的方式是使用专业的胶片扫描仪进行扫描。如果没有扫描仪，也可以用手机或者相机进行翻拍。


## 相机翻拍

1. 底片是透明的，需要透射光才能看出内容。我们可以准备一个白色的面光源，比如手机屏幕、吸顶灯。

   ![屏幕上的底片](/album/negative/negative_on_screen.jpg)
   
2. 使用微距镜头进行拍摄。如果用手机，可以通过外接的方式接入一个。

    ![微距镜头](/album/negative/macro_lens.jpg)

3. 拍摄后，可以用Adobe Photoshop做进一步处理：反色、通过“自动颜色”去除色罩。

   ![反色的](/album/negative/invert.jpg)

   ![自动颜色结果](/album/negative/auto_color_result.jpg)


这里因为是用的手机，所以存在清晰度不够、色彩不准、屏幕波纹等问题。如果用专业的相机，效果应该是不错的，可以比扫描仪有更好的锐度。另外专业相机可以保存文件为raw格式，更方便校色。


## 扫描仪扫描

选择一款支持扫描底片的平板扫描仪，比如爱普生v850。我这里用的是爱普生v300，它具备透扫器和底片夹，支持扫描底片。

![爱普生v300](/album/negative/epson-v300.jpg)

可以使用厂家提供的Epson Scan进行扫描，它能自动裁剪底片，反色和去色罩。

![Epson Scan](/album/negative/epson-scan.jpg)

如果只想得到原始图像，可以使用[ImageTrans](/zh/imagetrans/)，通过TWAIN、ICA和SANE等接口进行扫描。

之后，可以用ImageTrans或者其他软件进行裁剪、反色和去色罩的操作。

使用ImageTrans扫描：

![ImageTrans扫描界面](/album/negative/imagetrans_transparency_unit.jpg)

使用ImageTrans裁剪、反色和去色罩后的结果：

![ImageTrans处理结果](/album/negative/imagetrans_processed_photo.jpg)
