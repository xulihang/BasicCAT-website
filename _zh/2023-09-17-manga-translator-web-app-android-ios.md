---
date: 2023-09-17 15:54:50+08:00
layout: post
title: 可用于安卓和iOS的漫画翻译网页应用
categories: blog
tags: imagetrans
---

[ImageTrans](https://www.basiccat.org/zh/imagetrans)是一个图片翻译软件，可以用于翻译漫画、海报等图片。它提供了一个服务器功能，可以在本地运行一个网页应用，从而在浏览器中调用它来翻译图片。这样安卓和iOS设备也能用ImageTrans来翻译图片。

如果在家里运行这个Web应用，只能在本地局域网使用。为了在外网也能使用它，可以使用ngrok提供的内网穿透服务。本文会具体介绍如何进行操作。

1. 新建一个日语到中文的项目。选择mangaOCR作为OCR引擎。

2. 启动ImageTrans的服务器。

   1. 通过菜单栏打开服务器窗口
   
      ![服务器](/album/web-app/zh/menu-server.jpg)
       
   2. 点击启动服务器，连接。这里可以设置需要使用的机器翻译、文字检测和区域合并方式。我们这里选择使用ChatGPT进行翻译，使用气泡检测模型检测文字。
   
      ![服务器界面](/album/web-app/zh/server-form.jpg)
   
   
3. 启动服务器后，我们可以访问<https://local.basiccat.org:51043/>来调用我们电脑上运行的ImageTrans。在这个页面，可以上传需要翻译的图片进行翻译。

   ![网页](/album/web-app/web-page.jpg)
   

4. 为了在外网也能使用这个网页，我们可以使用ngrok的内网穿透服务。

   1. 下载并注册[ngrok](https://ngrok.com/)。
   
   2. 照说明安装后，使用下面的命令运行它：
   
      ```bash
      ngrok http 51042
      ```
      
      运行后会显示如下的界面：
      
      ![ngrok](/album/web-app/ngrok-cli.jpg)
      
      ngrok会提供一个类似`https://3751-101-71-39-138.ngrok-free.app`的网址，我们可以通过这个链接来访问ImageTrans的网页应用。
      
5. 使用手机访问，翻译一张日漫图片：

   <video src="https://github.com/xulihang/BasicCAT-website/releases/download/attachments/ImageTrans-web-demo-ja2zh.mp4" controls="controls" style="max-width:100%;">
   您的浏览器不支持 video 标签。
   </video>

