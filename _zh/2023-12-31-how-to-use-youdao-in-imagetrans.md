---
date: 2023-12-31 15:28:50+08:00
layout: post
title: 如何在ImageTrans中使用有道云服务
categories: blog
tags: imagetrans
---

有道提供文字识别、翻译等API服务。ImageTrans可以调用这些服务来翻译图片。本文将介绍如何进行相关的设置。

## 前提条件

需要先创建一个[有道智云人工智能平台](https://ai.youdao.com/)的账号。

价格说明：

使用有道的服务需要进行充值。调用1次文字识别是0.7分，翻译1000字为4毛8分。

## 新应用

创建一个应用。

![新应用](/album/youdao/new_app.jpg)

勾选文本翻译、通用文字识别，接入方式选择API。

## 填写密钥

创建应用后可以得到API密钥。

![API密钥](/album/youdao/apikey.jpg)

然后打开ImageTrans的偏好设置，将其填入youdao的设置项里。
![API填写](/album/youdao/apikeyfiller.jpg)


## 使用文字识别

选择有道为OCR引擎。

![引擎选择](/album/youdao/choose_ocr.jpg)

点击菜单栏-编辑-自动识别文字，可以识别出图片中的文字。这一过程会包含文字的位置信息。


![菜单](/album/youdao/menu.jpg)


我们也可以手动框选区域后，点击左上角的OCR按钮，识别单个区域的文字。


## 使用机器翻译

文字识别出来后，我们可以进行翻译。

在偏好设置的机器翻译中勾选youdao。

![机器翻译设置](/album/youdao/mt_preference.jpg)

之后，我们选中一个文字区域，切换右侧的编辑区域到辅助翻译，可以看到多个机器翻译的结果。

![机器翻译列表](/album/youdao/mt_list.jpg)

我们也可以通过点击菜单-编辑-自动翻译所有区域，来选择某个机器翻译进行预翻译，自动翻译所有区域。

文字识别和翻译也可以串联起来，需要通过一键翻译或者自定义功能工作流进行操作。



