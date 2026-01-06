---
date: 2026-01-05 18:50:50+08:00
layout: post
title: 转换超星图书馆下载的PDZ文件为PDF
categories: blog
tags: imagetrans
---

上大学时一直用超星的汇雅图书馆阅读电子扫描版的图书，毕业了我以为不能用了，最近发现只要注册一个个人账号，然后输入之前学校的学号就可以继续使用了。

于是我兴致冲冲地下载几本电子书，但发现都是PDZ格式的，没办法在电子墨水平板上阅读。
我便稍微研究了下，将这一功能集成到了[ImageTrans](/zh/imagetrans/)中。

一般转换PDZ为PDF有三种方法：

1. 直接使用阅读器打印为PDF。这种方式比较费时，而且得到的文件非常大。
2. 直接复制阅读器缓存的图片文件，然后做成PDF
3. 直接下载网页版的图片


ImageTrans使用了第二种方法。选择好要导出图片的pdz文件，它会自动用超星阅读器打开文件，自动切换页面，直到获取所有图片，并且能读取目录信息。

超星图书馆扫描的图书质量可能不佳，不适合直接用电子墨水设备看，我还专门给图像做了漂白的处理，具体见这篇文章：[扫描图书的漂白、矫正和清晰化处理](/zh/clean-deskew-enhance-scanned-books/)


视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115847666336407&bvid=BV1ztqwBaEod&cid=35224554595&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
