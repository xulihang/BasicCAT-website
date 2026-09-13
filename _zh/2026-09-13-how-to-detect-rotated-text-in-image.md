---
date: 2026-09-13 11:38:50+08:00
layout: post
title: 如何识别图片中旋转的文字
categories: blog
tags: imagetrans
---

图片中的文字可能会存在倾斜。有可能是故意添加的效果，也有可能是扫描文档时，文档放得不正。

目前的OCR通常都可以识别旋转的文字，例如使用DB算法的PaddleOCR，它能生成一张二值图，我们可以据此获取每行文字的文字，包括它的四个角点的坐标和旋转信息。

计算机辅助图片翻译软件[ImageTrans](/zh/imagetrans/)支持使用各种支持旋转文字的OCR。

界面：

![](/album/rotated-text/rotated-text-with-imagetrans-ui.jpg)

二值图：

![](/album/rotated-text/db-thresh.png)

图片来源：<https://ac.qq.com/ComicView/index/id/547921/cid/1>

获取旋转角度有很多用处，一种是文档纠偏，一种是翻译图片时，还原旋转角度。

不过示例图的文字使用了透视变换，实际翻译时，还是建议基于原始PSD文件进行修改。ImageTrans支持导出识别的文字到PSD或者直接修改PSD的文字。

ImageTrans中支持旋转度数的OCR：

* WinRT（Windows 10以上系统自带OCR）
* rapid
* PaddleOCR
* mangaTranslator
* macOCR（macOS自带OCR）
* oneocr（Windows 11截图工具的自带OCR）
