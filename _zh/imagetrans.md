---
title: ImageTrans - 计算机辅助图片翻译工具 
layout: page
permalink: /zh/imagetrans/
---

## 简介

ImageTrans是一款计算机辅助图片文字转录与翻译工具，能够使用OCR技术自动定位并识别文字，自动抹除原文并回填译文，并且拥有针对漫画设计的文字区域合并与检测算法。

ImageTrans具有较好的互操作性，能够将数据导出为Word和Excel文件，并能使用脚本与Photoshop这样的图片编辑软件进行交互。

ImageTrans也是一款计算机辅助翻译（CAT）工具，支持语料检索、翻译记忆、术语管理和机器翻译等功能，并针对漫画设计了拟声词检索系统。

和BasicCAT一样，ImageTrans是跨平台(Windows/Mac/Linux)的。

软件文档： <https://imagetrans.readthedocs.io/zh_CN/latest/>

ImageTrans是我硕士毕业论文的成果：[一个漫画翻译辅助工具的设计与实现](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)。

## 视频教程

### 入门

<iframe src="//player.bilibili.com/player.html?aid=89725886&cid=153246062&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 文字区域检测

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### 译文回填

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 语料检索与拟声词检索

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
	
## 漫画翻译结果示例

Come to me , Love —— 美国黄金时代漫画杂志《Boy Loves Girls》第41期

浏览页面：<http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

文本检索页面：<http://comics.xulihang.me/search.html>

## 获取ImageTrans

访问[此处](https://basiccat.onfastspring.com/)购买ImageTrans，你会得到下载链接和一封邮件。

有三个版本可以购买：

* 个人用途版 [（链接）](https://basiccat.onfastspring.com/imagetrans)
* 商业用途版 [（链接）](https://basiccat.onfastspring.com/imagetrans-commercial-purpose)
* 七天试用版 [（链接）](https://basiccat.onfastspring.com/imagetrans-trial)

请按照[安装说明](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2)进行操作。

来自高校的师生可以用教育网邮箱发送邮件至[admin@basiccat.org](mailto:admin@basiccat.org)，说明相关信息，打算用ImageTrans做什么任务，能够得到优惠。

## 版本发布记录

### v1.1.8

* 根据顺序生成文字掩膜和去文字图像并显示批处理进度
* 图像修复操作改用不同线程避免程序不响应的问题
* 在生成掩膜时检查文字区域的位置是否正确
* 修复处理过大的图片时，文字掩膜和图像错位的问题
* 图像的右键菜单里添加文字区域相关操作

### v1.1.7

* 掩膜编辑器支持缩放和在所选区域生成掩膜
* 文字去除器能去除选定区域的文字
* 掩膜的默认颜色重新改为红色
* 添加去除文字图片编辑功能
* Bug修复

### v1.1.6

* 使用PNG保存文字掩膜，以让覆盖方式去除文字模式支持背景颜色为黑色的情况
* 支持创建文本框副本


### v1.1.5

* 新增CJK竖直文字排版引擎
* 添加自动更正功能（可用于解决macOS上全角标点的输入问题）
* Bug修复

### v1.1.4

* 工具栏新工具：字体设置
* 对于新建项目和导入图片操作，曾经选择的路径会得到共享
* 更好的颜色选择

### v1.1.3

* 新的插件类型：OCR插件。代码开源：[github](https://github.com/xulihang/ImageTrans_plugins)。支持调用PaddleOCR离线OCR。
* 新的OCR引擎：ABBYY（使用ABBYY FineReader的命令行接口，只支持Windows）
* 新工具：屏幕阅读器。它能用作一个截图工具，截图能调用ImageTrans的OCR引擎进行文字识别，也能直接添加进ImageTrans的项目里。
* 添加工具栏，能提供更多操作，例如文字区域的分割、合并和选择。
* 鼠标的形状会根据提供的操作做出正确的改变。

### v1.1.2

新OCR选项：将文字竖直排列的图片改成横向排列，适用于竖排的日语，可以改善OCR结果

### v1.1.1

* 添加一键翻译功能
* 新增基于自然场景文字检测的文字区域检测功能
* 记住之前选择文件的路径

### v1.1.0

* 添加外部的文字去除器（试验性）
* 添加本地化支持。软件现在能用中文和英文显示。

### v1.0.1

* 更多设置
* 支持富文本
* XLIFF的导入与导出

### v1.0.0

软件发布。

## 相关工具

[WebP-Converter](https://github.com/xulihang/WebP-Converter)，转换JPG/BMP/PNG格式的图片到WebP或者将WebP转换为JPG。

{% include comments.html %}

