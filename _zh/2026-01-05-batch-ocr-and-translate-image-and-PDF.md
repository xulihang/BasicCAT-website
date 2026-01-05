---
date: 2026-01-05 19:00:50+08:00
layout: post
title: 批量OCR和翻译图片和PDF文件
categories: blog
tags: imagetrans
---

ImageTrans在v5.6.0集成了一个Hot Folder功能，它可以监控某个文件夹是否有新的文件加入，如果有，它会以当前项目为模板，执行指定的工作流来处理这些文件。

下面是相关操作事项：

1. 新建一个项目，设置好语言、OCR、自定义工作流等常规操作。
2. 如果要支持导入和导出PDF，需要在项目设置中提前定义导入导出的设置，并在工作流中添加导出PDF。
3. 通过菜单栏-工具-Hot Folder，打开Hot Folder，设置好需要监控的文件夹后就可以批量OCR和翻译文件了。







