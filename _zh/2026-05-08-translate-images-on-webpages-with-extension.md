---
date: 2026-05-08 20:42:50+08:00
layout: post
title: 如何翻译网页中的图片
categories: blog
tags: imagetrans
---

浏览器都有网页翻译功能，但通常只能翻译可以复制的文字，没办法翻译图片。Yandex支持图片翻译，但效果比较有限，Safari支持复制文字，但没有翻译功能。计算机辅助图片翻译软件[ImageTrans](/zh/imagetrans/)提供了一个Chrome浏览器扩展程序，支持直接翻译网页中的图片，直接抹除原图的文字，填充上译文，还原颜色、旋转等各种样式。

下面是它的一个处理流程：

1. 通过浏览器插件，发起图片翻译请求给服务器。
2. 服务器调用连接的ImageTrans程序进行翻译。
3. ImageTrans会进行OCR文字识别、翻译、文字抹除和回填（嵌字）等操作，生成一张翻译好的图。
4. 浏览器插件收到翻译结果后，替换原图为翻译好的版本。

因为是在浏览器里，还需要突破一些技术限制：

1. 浏览器限制对本地程序的使用，本地服务器需要添加允许本地调用的header。老版本的Chrome还要求一定要用https。
2. 如果图片禁止跨域，无法直接下载图片，通过canvas获取图像数据也会提示tainted canvas。这时需要利用插件修改header，移除CORS限制。如果还限制referer等信息，或者不使用img元素，用的canvas，实在无法直接下载，只有使用截图功能，但可视区域外的图片内容会丢失。像pixiv就是限制跨域的。
3. 有的网站图片上面还改了一层东西，导致直接替换图片的内容看不到翻译版本的图片。比如X.com。

ImageTrans的扩展插件已经能做到常见网站的图片的翻译，测试的站点有read comics online，pixiv，mangadex，腾讯动漫等等。支持漫画、插图、扫描图书等各种图片。

市面上的很多插件都依赖于远程服务器，所以需要订阅。ImageTrans这种模式则完全在本地电脑上进行，可以无限制地翻译，使用各种OCR、大模型，直接下载图片到本地，保留翻译结果，自由定义文本样式等等。

插件地址：<https://github.com/xulihang/ImageTrans_chrome_extension>

演示视频：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116533535705831&bvid=BV1TKdPBcE5G&cid=38164957756&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>



