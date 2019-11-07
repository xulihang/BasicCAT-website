---
title: 工具
layout: page
---

我在翻译工作中开发的一些工具：


1. XLSX to TMX

	读取XLSX的第一张工作表，工作表要有表头，比如zh-CN, en-US这样的语言代码。

	示例：

	```

	zh-CN	en-US
	你好	Hello
	```
	
	[下载](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)
	
2. Aligner

	可以从原文件及目标文件，或者一段原文一段译文的双语文件进行对齐操作。

	详细介绍：[新工具！双语句对齐软件Aligner](/zh/new-tool-bitext-aligner/)
	
3. PSD Localization

	可以从PSD文件提取文本，并将翻译好的文本回填。需要电脑安装Photoshop完整版，目前只支持Windows系统。

	[下载](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)
	
4. Image Transcriber

	辅助图片OCR工具。可以进一步生成含有文字图层的PSD文件（需要电脑安装Photoshop）。
	
	工具使用tesseract和百度API进行OCR，需要把tesseract放在根目录的tesseract-ocr文件夹，把百度API的id和secret存为根目录的baidu文件，并以换行分隔。
		
	[下载](https://github.com/xulihang/ImageTrans/releases/download/v1.1/ImageTranscriber.zip)

注：要运行这些工具，请先安装Java Runtime Environment 8。