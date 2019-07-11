---
date: 2019-07-11 18:10:17+08:00
layout: post
title: Image Localization Toolset
categories: releasenote
tags: 
---


There are two tools:

1. PSD Localization which extracts text from psd files and refills translation. Need Photoshop installed. Currently, only windows is supported.
2. Image Transcriber which aids people to transcribe images. It can furthur generate PSD files with text layers.

Guides：

## PSD Localization

### Export text:

![](/album/image-localization/psd_export.jpg)

1. Select the PSD folder
2. Click Export to generate an xlsx table file under the PSD folder

There are five columns: file name, layer name, source, target and note.

![](/album/image-localization/psd-output-table.jpg)

Some layers do not need to handle, you can enter filter words in the text area so that these layers will be filtered.

Note: Non-text layers will have a note indicating that it is non-text. The source text is as same as the layer name. It is useful for layers that have been converted from text to image but their names are still as same as the text content.


### Refill Text:

![](/album/image-localization/psd_refill.jpg)

1. Select the PSD folder
2. Select the xlsx file generated before with its target column filled.
3. Click refill to open Photoshop and replace source with target.



## Image Transcriber


1. Extract text of regions

    Open Image Transcriber, create a new project, and import the image folder. If the image file is psd, you can use SaveAsJPG.exe to batch convert PSD to JPG.
Double-click the image. A red box will appear. Move and resize the box to fit the required area. Choose an OCR engine to extract text. Hold your mouse on the upper left corner of the box and drag it to move the box, and the lower right corner to adjust the size.
	![](/album/image-localization/imagetranscriber.jpg)
	
2. Select the PSD folder

    Click on File - Generate editable PSD files to export PSD, which can be further refilled with translation with the PSD Localization tool. Mask layers will be generated according to the positions and sizes of the boxes, covering the original text. Text layer will then be created above them. The color of mask layers can be set. The default is white. 
	![](/album/image-localization/imagetranscriber-menu.jpg)


[Download at the tools page](https://www.basiccat.org/tools/)
