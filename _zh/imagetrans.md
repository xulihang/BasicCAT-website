---
title: ImageTrans - 计算机辅助图片翻译工具 
layout: page
permalink: /zh/imagetrans/
---

## 简介

ImageTrans是一款计算机辅助图片文字转录与翻译工具，能够使用OCR技术自动定位并识别文字，自动抹除原文并回填译文，并且拥有针对漫画设计的文字区域合并与检测算法。

![](/album/imagetrans_zh.jpg)

ImageTrans是我硕士毕业论文的成果：[一个漫画翻译辅助工具的设计与实现](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)。

## 软件特色

### 准确定位文字区域

![](/album/imagetrans-features/localization.jpg)

支持使用自然场景文字检测法、目标检测法和启发式等多种定位方法。


### 准确识别文字

* 支持调用多种OCR

    支持谷歌、百度、搜狗、有道等在线OCR服务与Tesseract、PaddleOCR、Windows 10自带OCR等离线OCR引擎。具体的支持情况和使用方法见[FAQ](https://www.basiccat.org/zh/imagetrans/faq/)。
	
	此外也可以通过编写插件来调用其它OCR服务。

* 支持主要语言

	使用的OCR支持世界上所有主要语言。

* 支持使用多种图像处理方法来改善结果

	* 去除背景
	
	    ![](/album/imagetrans-features/image.jpg)
	
		↓
	
	    ![](/album/imagetrans-features/pure_text.jpg)
	 
	* 去除日语振假名
	
	    去除前：
		
		```		
		搜狗OCR：えーっとはいばん灰原さんのせき席は…
		```
		
		去除后：
		
		![](/album/imagetrans-features/no_furigana.jpg)
		
		```
		搜狗OCR：えーっと灰原さんの席は…
		```
	
	* 日语竖排转横排
	
	    基于CRNN训练的OCR多数只能识别横排文字，使用这些OCR模型时需要将竖排图像转横排
		
		![](/album/imagetrans-features/vertical.jpg)
		
		```
		百度OCR：強んな勉とら!文事なかす原るん日で灰すみ今
		```
	
		↓
	
	    ![](/album/imagetrans-features/horizontal.jpg)
		
		```
		百度OCR：今日からみんなと勉強する事になった灰原哀さんです!
		```

* 支持去除换行、空格等文本后处理
* 支持使用拼写检查完善结果

	![](/album/imagetrans-features/spell_check.jpg)

### 辅助翻译功能

支持调用多种机器翻译引擎，支持翻译记忆和术语管理等常见的计算机辅助翻译软件的功能	
	
### 准确抹除文字并回填译文

软件能调用Sickzil-Machine、二值化、PatchMatch等工具和算法生成文字掩膜、去除文字，并根据文字区域的位置和面积回填译文，自动调整译文字体大小。以上操作均支持手动调整。

![](/album/imagetrans-features/text-removal-and-reinjection.jpg)

### 互操作性

* 支持利用脚本将结果保存为Photoshop的PSD格式文件
* 支持将数据导出到Excel、Word、XLIFF等文件或者从这些文件导回翻译
* 支持使用Chrome插件翻译网页中的图片

### 跨平台

和BasicCAT一样，ImageTrans是跨平台的（Windows、macOS、Linux）。此外亦能以服务器的形式运行。

### 其它功能

* 全局字体样式
* 自动检测背景颜色和文字颜色
* 完善的批处理功能

## 漫画翻译结果示例

Come to me , Love —— 美国黄金时代漫画杂志《Boy Loves Girls》第41期

浏览页面：<http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

文本检索页面：<http://comics.xulihang.me/search.html>

## 获取ImageTrans

1. 发送邮件至[admin@basiccat.org](mailto:admin@basiccat.org)申请购买。
2. 使用支付宝或者PayPal完成支付。
3. 得到下载链接和邮件。

或者前往FastSpring支付平台自主购买：[链接](https://basiccat.onfastspring.com/)。

定价：

* ImageTrans个人用途：￥75
* ImageTrans商业用途：￥1500

半年内免费更新。

请按照[安装说明](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2)进行操作。

来自高校的师生可以用教育网邮箱发送邮件至[admin@basiccat.org](mailto:admin@basiccat.org)，说明相关信息，打算用ImageTrans做什么任务，能够得到优惠。

## 更多内容

* [软件文档](https://imagetrans.readthedocs.io/zh_CN/latest/)
* [发布日志](/zh/imagetrans/release-notes/)
* [视频教程](/zh/imagetrans/video/)
* [常见问题](/zh/imagetrans/faq/)
* [技术支持](/zh/support/) 
* [技术博客](/zh/tagged/#imagetrans)

## 相关工具

* [WebP-Converter](https://github.com/xulihang/WebP-Converter)，转换JPG/BMP/PNG格式的图片到WebP或者将WebP转换为JPG。
* [WebImageHelper](https://github.com/xulihang/WebImageHelper)，下载网页中所有图片或者根据屏幕坐标，下载位于鼠标下方的图片。该工具可以用于翻译网页中的图片，能将翻译好的图片替换网页中的图片。

{% include comments.html %}

