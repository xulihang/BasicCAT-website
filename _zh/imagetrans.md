---
title: ImageTrans - 计算机辅助图片翻译工具 
layout: page
permalink: /zh/imagetrans/
---

## 简介

ImageTrans是一款计算机辅助图片文字转录与翻译工具，能够使用OCR技术自动定位并识别文字，自动抹除原文并回填译文，并且拥有针对漫画设计的文字区域合并与检测算法。

![](/album/imagetrans_zh.jpg)

ImageTrans除了当作图片翻译器翻译海报、漫画，也可以用作图片阅读器、文字转录器、截图OCR翻译器和深度学习标注器使用。

ImageTrans是我硕士毕业论文的成果：[一个漫画翻译辅助工具的设计与实现](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)。

[获取ImageTrans](#获取imagetrans)

## 软件特色

### 准确定位文字区域

![](/album/imagetrans-features/localization.jpg)

支持使用自然场景文字检测法、目标检测法和启发式等多种定位方法。


### 准确识别文字

* 支持调用多种OCR引擎（允许自定义插件）
* 支持世界上主要的语言
* 支持使用图像预处理、文本替换和拼写检查来改善结果

示例：

|  图片   | OCR结果  | 引擎 |
|  ----  | ----  | ---- |
| ![日文图片](/album/imagetrans-ocr/japanese.jpg)  | ようこそ<br/>亡霊<br/>葬儀屋さん | OCRSpace |
| ![英文图片](/album/imagetrans-ocr/english-calvin-and-hobbes.jpg)  | I RIGGED A TUNA FISH SANDWICH YESTERDAY, SO I'M SURE TO HAVE A TIGER BY NOW! | Google |

### 辅助翻译功能

支持调用多种机器翻译引擎。例如下面是一句日文的不同的机器翻译结果的截图。我们可以比较多个结果，选择最合适的翻译。

![机器翻译](/album/imagetrans-machine-translation/ja2zh.jpg)

此外也支持翻译记忆、语料检索、术语管理等常见的计算机辅助翻译软件的功能，并针对漫画设计了拟声词检索系统。

### 准确抹除文字并回填译文

软件能调用Sickzil-Machine、二值化、PatchMatch等工具和算法生成文字掩膜、去除文字，并根据文字区域的位置和面积回填译文，自动调整译文字体大小。以上操作均支持手动调整。

![](/album/imagetrans-features/text-removal-and-reinjection.jpg)

### 互操作性

* 支持利用脚本将结果保存为Photoshop的PSD格式文件
* 支持将数据导出到Excel、Word、XLIFF等文件或者从这些文件导回翻译
* 支持使用Chrome插件翻译网页中的图片

### 跨平台

和BasicCAT一样，ImageTrans是跨平台的（Windows、macOS、Linux）。此外亦能以服务器的形式在线运行。

### 其它功能

* 全局字体样式
* 自动检测背景颜色和文字颜色
* 完善的批处理功能

## 翻译示例

[访问这里](/zh/gallery/)来浏览使用ImageTrans翻译的图片。

## 获取ImageTrans

请前往面包多自主购买：[链接](https://mbd.pub/o/bread/YpmUmJhs)。

海外用户请使用FastSpring：[链接](https://basiccat.onfastspring.com/)。

定价：

* ImageTrans个人用途：￥75
* ImageTrans商业用途：￥1500

半年内免费更新。

请按照[安装说明](https://imagetrans.readthedocs.io/zh_CN/latest/gettingstarted.html)进行操作。

来自高校的师生可以用教育网邮箱发送邮件至[admin@basiccat.org](mailto:admin@basiccat.org)，说明相关信息，打算用ImageTrans做什么任务，能够得到优惠。

如果无法购买，也请[邮件联系我](mailto:admin@basiccat.org)。

## 更多内容

* [软件文档](https://imagetrans.readthedocs.io/zh_CN/latest/)
* [发布日志](/zh/imagetrans/release-notes/)
* [视频教程](/zh/imagetrans/video/)
* [常见问题](/zh/imagetrans/faq/)
* [技术支持](/zh/support/) 
* [技术博客](/zh/tagged/#imagetrans)
* [帮助完善软件](/zh/imagetrans/how-to-contribute/)

{% include comments.html %}

