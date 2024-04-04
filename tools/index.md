---
title: Tools
layout: page
---

Here are a list of translation tools I developed:


1. XLSX to TMX

	This tool will read the first sheet of xlsx files. The table should have heads which are language codes like zh-CN, en-US.

	Example:

	```

	zh-CN	en-US
	你好	Hello
	```
	
	[Download](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)
	
2. Aligner

	This tool aligns source text and target text from individual files or one single bilingual file.

	Detailed intro: [New Tool! Bitext Aligner](/new-tool-bitext-aligner/)
	

3. PSD Localization

	This tool extracts text from psd files and refills translation. Need Photoshop installed. Currently, only windows is supported.

	[Download](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)
	
4. Image Transcriber

	This tool aids people to OCR images. It can furthur generate PSD files with text layers.
	
	It uses tesseract and baidu as the OCR engines. Put tesseact in the tesseract-ocr dir and store baidu api's client id and secret (separated by newline) in a file named baidu in the root. 	
	
	No longer in development, please use [ImageTrans](https://www.basiccat.org/zh/imagetrans/).
	
5. FileDiff

	This tool can show diffs between the old version and the new version of files, supporting all kinds of formats. It is useful when text was changed in the translated document and you want to update the equivalence in CAT tools.
	
	[Source Code](https://github.com/xulihang/FileDiff)
	

PS: You need Java Runtime Environment 8 to run these tools.

