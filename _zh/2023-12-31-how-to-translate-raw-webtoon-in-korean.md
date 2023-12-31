---
date: 2023-12-31 16:36:50+08:00
layout: post
title: 使用ImageTrans翻译韩语条漫
categories: blog
tags: imagetrans
---

ImageTrans是通用的计算机辅助图片翻译软件，并针对漫画做了很多功能设计。本文会以《宫》漫画第一章的一张图片为例来演示如何用ImageTrans翻译韩语条漫。


原图：

![原图](/album/webtoon/original.jpg)

翻译的版本：

![中文翻译版本](/album/webtoon/chinese.jpg)


## 具体操作流程

1. 选择一个OCR引擎，比如有道，点击菜单-编辑-自动识别文字，识别图片中的文字。如果有文字行合并不充分，可以使用软件右侧的合并按钮进行合并。
2. 点击菜单-编辑-自动翻译所有区域，选择一个机器翻译引擎，比如baidu，进行翻译。
3. 勾选软件左下角的“查看翻译”，可以看到原文被替换成译文的图片版本。
4. 我们可以进一步设置字体。在项目设置里取消自动调整文字大小。新建一个默认的文字样式，选择合适的字号和对齐方式。然后修改默认样式，启用加粗，保存为一个表示强调和旁白的文字样式。
5. 之后在软件界面里可以给需要指定样式的文字区域指定样式。
6. 在查看翻译模式下，勾选左下角的排版模式，可以调整文字区域的大小和位置。
7. 翻译完成后可以使用软件导出成品图。如果需要使用Photoshop生成翻译版图片，可以使用脚本生成PSD文件。

视频教程：https://www.bilibili.com/video/BV1Pe411S7sK/


相关配置教程：

* [如何在ImageTrans中使用有道云服务](https://www.basiccat.org/zh/how-to-use-youdao-in-imagetrans/)
* [在ImageTrans中用ChatGPT来辅助翻译](https://www.basiccat.org/zh/ChatGPT-image-translator/)
