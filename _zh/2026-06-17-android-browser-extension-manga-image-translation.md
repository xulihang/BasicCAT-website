---
date: 2026-06-17 20:32:50+08:00
layout: post
title: "在安卓浏览器上用插件翻译漫画图片"
categories: blog
tags: imagetrans
---

[之前](./2026-06-16-iphone-browser-extension-doujin-manga-image-translation.md)介绍过如何在 iPhone 上借助 Orion Browser 和 ImageTrans 浏览器插件翻译漫画图片。安卓也同样支持。

我测试了 Kiwi 和 Firefox 浏览器，两者都可以安装 ImageTrans 插件，并正常翻译网页中的图片。并且没有 iOS 上 Orion 浏览器的限制。

Kiwi Browser 支持安装 Chrome 扩展。安装好浏览器后，可以直接从 Chrome Web Store 安装 ImageTrans 插件。

Firefox 可以直接访问 FireFox 的 addon 插件商店下载安装。

安装完成后，打开漫画页面，点击插件按钮即可开始翻译。

ImageTrans 会读取网页中的图片，对图片进行 OCR 识别，然后调用翻译服务获得译文，最后将译文覆盖回原图。整个过程都在当前网页中完成，不需要反复截图和切换应用。

插件还提供了截图翻译功能，可以对屏幕上的任意区域进行识别和翻译。

ImageTrans 浏览器插件项目源代码地址：

* Chrome: <https://github.com/xulihang/ImageTrans_chrome_extension>
* Firefox: <https://github.com/xulihang/ImageTrans_firefox_extension>

演示视频：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116708002041395&bvid=BV131Ex6VEhr&cid=38930809605&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
