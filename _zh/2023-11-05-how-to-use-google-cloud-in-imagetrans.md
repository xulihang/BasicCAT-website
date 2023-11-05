---
date: 2023-11-05 15:11:50+08:00
layout: post
title: 如何在ImageTrans中使用谷歌云服务
categories: blog
tags: imagetrans
---

谷歌提供文字识别、翻译等API服务。ImageTrans可以调用这些服务来翻译图片。本文将介绍如何进行相关的设置。

## 前提条件

需要先创建一个Google Cloud Platform的账号。第一年可以获得300美元的赠金，足够完成212,000次请求。

使用谷歌的服务需要科学上网。

## 新项目

首先创建一个项目。

![新项目](/album/googlecloud/new_project.jpg)

## 启用Cloud Vision OCR

前往API&Services，搜索"OCR"并启用Cloud Vision。

![api services sidemenu](/album/googlecloud/api_services_sidemenu.jpg)

![cloud vision search](/album/googlecloud/cloud_vision_search.jpg)


## 新API Key

创建一个新的API key。

![new api key](/album/googlecloud/cloud_vision_new_api_key.jpg)

在ImageTrans的偏好设置里填入这个key。

![api preferences](/album/googlecloud/google_api_preferences.jpg)

之后，我们可以选择Google作为OCR的引擎完成处理。

![ocr combobox](/album/googlecloud/ocr_combobox.jpg)

## 启用机器翻译

类似的，我们可以启用谷歌的机器翻译服务。

![cloud translate search](/album/googlecloud/cloud_translate_search.jpg)

OCR和机器翻译可以公用一个API key。启用后，我们就可以用谷歌进行机器翻译了。

![cloud translate](/album/googlecloud/google_translate.jpg)

## Google Drive OCR

我们可以把图片传到Google Drive上来完成OCR。和上面的Vision OCR不同的是，这种方式完全免费。

### 启用Drive API

前往API&Services，搜索"Drive"并启用它。

![Google Drive Search](/album/googlecloud/drive_search.jpg)

### 启用OAuth

启用OAuth，这样我们可以登录自己的谷歌账号。

1. 新建一个OAuth screen，类型选择External。
    
   ![oauth](/album/googlecloud/oauth.jpg)
   
2. 填入必需的信息并添加测试账号。

   ![add test user](/album/googlecloud/test_user.jpg)

3. 新建一个OAuth client id。选择桌面程序。

   ![new credentials](/album/googlecloud/cloud_vision_new_api_key.jpg)
   
   ![new oauth client](/album/googlecloud/new_oauth_client.jpg)

4. 下载JSON文件，命名为`credentials.json`后放到ImageTrans的目录里。

### 安装ImageTrans的插件

1. 下载下面的jar文件，放到ImageTrans的目录。 [google_drive_ocr_commandline.jar](https://github.com/xulihang/Google-Drive-OCR-Java/releases/download/builds/google_drive_ocr_commandline.jar)。更名为`google_drive_ocr.jar`。
2. 下载插件的压缩包，解压到ImageTrans的plugins目录：[google_drive.zip](https://github.com/xulihang/ImageTrans-docs/files/7404613/google_drive.zip)
3. 选择google drive作为OCR引擎以进行OCR操作。

   ![ocr combobox google drive](/album/googlecloud/ocr_combobox_google_drive.jpg)

更多说明可以见[这个页面](https://github.com/xulihang/ImageTrans_plugins/tree/master/googledriveOCR)。




