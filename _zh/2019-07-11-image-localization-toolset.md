---
date: 2019-07-11 16:46:17+08:00
layout: post
title: 图像本地化工具套件
categories: releasenote
tags: 
---

注意：这套工具已经不再更新了。请使用[ImageTrans](/imagetrans/)。

主要有两个工具：

1. PSD Localization 可以从PSD文件提取文本，并将翻译好的文本回填。
2. Image Transcriber 辅助图片OCR工具。可以进一步生成含有文字图层的PSD文件。

操作指导：

## PSD Localization

### 导出文字：

![](/album/image-localization/psd_export.jpg)

1. 选择PSD文件夹
2. 点击导出可以在PSD文件夹下生成一个xlsx表格文件

有5列内容，分别是文件名、图层名、文本、译文和备注。

![](/album/image-localization/psd-output-table.jpg)

有些图层名不需要添加，可以在输入框中输入过滤词，过滤这些图层。

注：非文本图层会有一个non-text的备注，它的文本就是图层名。对于已经由文字转换为图像，但图层名还是文本内容的图层比较有用。


### 文字回填：

![](/album/image-localization/psd_refill.jpg)

1. 选择PSD文件夹
2. 选择之前生成的xlsx文件，其中译文一列已经填充好。
3. 点击回填会打开Photoshop进行回填。


### OCR验证

新增功能，将每个图层导出为图片，用OCR识别文字，并保存结果到表格中。可以用于快速甄别不包含文字的图层，同时也能补全文本内容（非文字图层，图层名并不包含所有文本）。

![](/album/image-localization/ocr-verification.JPG)

添加OCR结果后的表格：

![](/album/image-localization/ocr-verification-table.JPG)


## Image Transcriber


1. 识别区域文字
	
    打开ImageTranscriber，新建项目，导入图片文件夹。如果图片文件为psd，可以使用SaveAsJPG.exe批量转换psd为jpg。

	在打开的图片上方双击，会显示一个红色的方框。将方框对准所需识别的文字区域，选择一个OCR引擎进行识别。点住方框左上角移动是移动方框，右下角是调整大小。
	
	![](/album/image-localization/imagetranscriber.jpg)
	
2. 生成可编辑的PSD文件

	点击文件-生成可编辑的PSD文件导出PSD，可以进一步用PSD Localization工具进行翻译的回填。生成PSD时，会根据框的位置和大小生成一个遮盖层，遮住原来的文字，并在上面加上一个文字图层。遮盖层的颜色可以进一步进行设置，默认为白色。
	
	![](/album/image-localization/imagetranscriber-menu.jpg)
	


[前往工具页下载](https://www.basiccat.org/zh/tools/)

## 注意

### 字体设置

从JPG生成PSD以及处理非文本图层时，需要指定字体大小。而后者还需要指定文本层的宽度和高度。

以上工具都提供了设置的接口。你也可以通过修改图像文件夹的config.ini来手动设置。
