---
date: 2026-06-02 20:55:50+08:00
layout: post
title: "古籍OCR：将古籍扫描件转换为可搜索PDF和Markdown"
categories: blog
tags: imagetrans
---

大多数经典古籍都已经有了现代化版本，不管是电子版还是新的印刷版。但仍有大量古籍文献尚未完成数字化整理，例如地方志、族谱、碑刻拓片、馆藏善本，以及新发现或新整理的古籍版本。为了实现全文检索、版本比对、内容校对、AI 分析和长期保存等目的，这些文献仍然需要进行数字化，其中关键一步是OCR。本文会介绍如何使用桌面OCR软件ImageTrans进行古籍OCR，将古籍扫描件转换为可搜索PDF和Markdown。

## 古籍文字识别难点

古籍文字识别存在竖直排版、版面复杂、画面污损、文字倾斜、异体字和繁体字识别困难等问题。ImageTrans集成了PaddleOCR、mineru、千问等OCR软件，可以对常见繁体文档有较好的识别效果。而对于较难识别的古籍，可以使用看典古籍API。

## 使用ImageTrans

下面我们介绍怎么使用看典古籍API识别《世说新语》的一张图片。

![](/album/ancient-book/shi_shuo_xin_yu02.jpg)

### API配置

1. 安装看典古籍OCR的插件。解压插件到软件的plugins目录。[下载](/assets/kandiangujiOCRPlugin.zip)
2. 打开ImageTrans，在偏好设置中找到API设置，给kandianguji一项填写API和账号（邮箱或手机号）。

可以在看典古籍官网获取API：<https://kandianguji.com/shuzihua?page_mode=ocr_api>

### 识别文字

1. 新建一个项目，导入PDF或图片。ImageTrans可以直接提取扫描PDF中的图片，在数秒内导入几百张图。
2. 选择OCR引擎为kandianguji，然后点编辑-自动识别文字，可以识别单张图片。结果会在原图中高亮出来，识别的位置和文字都可以编辑。
3. 如果要处理所有图片，可以点击菜单-项目-批处理-自动识别所有图片中的文字。

![截图](/album/ancient-book/imagetrans.jpg)

### 导出

识别完成后，我们可以导出为可搜索的PDF或者markdown文件。
可搜索PDF会保留原始扫描图像，同时嵌入隐藏文字层，方便全文检索和复制文本。

Markdown格式则更适合后续编辑、版本管理以及AI处理，例如导入知识库系统、生成训练数据或进行自动翻译。

注意因为古籍存在大量冷门字符，需要使用字符集较大的思源黑体（[下载](https://github.com/unix755/SourceHan-font-ttf/releases/download/latest/SourceHanSansTC_TTF_2.005R.zip)）用于生成PDF的文字层。

### 后处理

使用大语言模型，可以进一步校对识别文本、智能句读添加标点、翻译、异体字转正体字、简繁转换等等。这些功能尚待集成。

## 总结

古籍数字化不仅仅是将纸质文献转换为图片，更重要的是将其转化为可搜索、可编辑和可分析的数据。借助看典古籍OCR与ImageTrans的可视化校对功能，用户可以将古籍扫描件快速转换为可搜索PDF和Markdown文件，为后续研究、整理和AI分析提供基础。  

## 系列文章

* ![古籍OCR：将古籍扫描件转换为可搜索PDF和Markdown](./2026-06-02-Chinese-ancient-books-OCR-PDF-markdown.md)
* ![民国期刊OCR：文字提取与使用简体白话文翻译](./2026-06-03-republican-era-Chinese-periodicals-OCR-and-translation.md)
* ![PDF论文翻译与转换为Markdown](./2026-07-04-pdf-paper-translation-and-conversion-to-markdown.md)