---
date: 2026-01-31 19:08:50+08:00
layout: post
title: 支持国产操作系统的国产OCR和计算机辅助翻译软件
categories: blog
tags: imagetrans
---

这几年国内一直在推信创，我老家海宁的公务员都用上了华为鲲鹏CPU上运行的国产统信操作系统。

其实国产系统和硬件已经有很多年的发展了。国产CPU有MIPS和Loongson架构的龙芯、x86架构的兆芯和海光、arm架构的飞腾、鲲鹏。国产系统从早期的蓝点Linux、中科红旗Linux到现在的银河麒麟、深度、统信、安同等发行版。早期硬件水平和软件生态都远远不如Windows平台，现在逐渐跟了上来，日常办公已经不是问题了。

本站点提供若干基于JavaFX的跨平台OCR和计算机辅助翻译软件，可以在不同CPU架构的国产操作系统上运行。作为原生桌面应用，性能、体验和安全性等方面比网页应用还是好不少的。

## ImageTrans

ImageTrans是一款计算机辅助图片翻译软件，它基于ONNXRuntime集成了百度的PaddleOCR、mangaOCR、YOLO等OCR和深度学习模型，支持识别图片中的文字，翻译并在原图位置回填译文。此外也支持文档扫描、可搜索PDF生成、屏幕翻译等日常办公操作。

![imagetrans kylinos](/album/imagetrans-kylinos.jpg)

## BasicCAT

BasicCAT是一款专业的计算机辅助翻译软件，可以处理Word、Excel、PowerPoint等文件的翻译。

![BasicCAT](/album/main.png)

## Silhouette

Silhouette是一款计算机辅助音视频翻译软件，可以基于Whisper识别语音，生成字幕并翻译。

![Silhouette](/album/silhouette/screenshot_zh.webp)

## Aligner

Aligner是一个语料对齐软件，可以制作语料，为翻译提供参考。

![Aligner](/album/ass-aligning/home.jpg)

## 在国产系统上的问题

Linux桌面软件对中文输入法的支持不佳，可能存在输入法不能跟随光标的问题。推荐更新系统到最新版本，使用Wayland提供桌面服务。

