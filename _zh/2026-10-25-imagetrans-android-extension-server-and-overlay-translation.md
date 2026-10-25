---
date: 2026-10-25 10:00:00+08:00
layout: post
title: "把手机变成翻译服务器：用 ImageTrans 安卓版看日漫、韩漫，啃生肉游戏"
categories: blog
tags: imagetrans
---

如果你经常在手机上追日漫、韩漫，或者玩日系手游，大概都遇到过同一个问题：看得懂画面，看不懂字。网页翻译能翻网页，却翻不了漫画里的对话框；截图翻译要来回切换应用，翻完一张又要再截一张。

[ImageTrans 安卓版](/zh/imageTrans/android/)就是为了解决这类问题做的。它把 ImageTrans 的图片翻译能力搬到了手机上：在手机上完成文字识别（OCR），调用翻译服务，再把译文按原来的位置、字号、颜色填回图片里。

今天想介绍它的两种新用法：

- 在 Edge 浏览器安卓版里安装 ImageTrans 扩展，通过本机上的 ImageTrans 安卓版作为本地服务器，直接翻译网页里的漫画图片，支持pixiv、DLSite、Lezhin、Ridibooks等各类平台；
- 使用安卓屏幕翻译悬浮窗，在不切换应用的情况下翻译漫画和游戏画面。

## 先简单说说：它是什么？

ImageTrans 安卓版是计算机辅助图片翻译电脑软件 [ImageTrans](https://www.basiccat.org/zh/imagetrans/) 的安卓版本，支持图片翻译、拍照翻译、文件夹翻译和截屏翻译。App 里可以设置翻译方式：

- 连接 ImageTrans 服务器，使用完整的 ImageTrans 处理流程；
- 本地 OCR + OpenAI 兼容接口（也可以填 DeepSeek、通义等兼容 API）；
- 本地 OCR + MyMemory（免费，无需 API Key）；
- 只识别不翻译，用来检查识别结果。

OCR 和图像处理都在手机本地完成，只把识别出来的文字发出去翻译，图片本身不会被上传。

APK 可以从 [GitHub Releases](https://github.com/xulihang/ImageTrans-Android/releases) 下载，需要 Android 8.0 及以上、arm64 设备。

## 用法一：作为本地服务器，配合 Edge 浏览器扩展

### 为什么需要它？

ImageTrans 的浏览器扩展可以识别网页中的图片、翻译并把译文覆盖回原图，在手机上用它看日漫网页非常方便。有以下方式提供这个功能：

- 使用ImageTrans桌面端的服务器，效果好，但需要部署在本地电脑上，不能离开家用，远程服务器则速度较慢，一张图要翻译10几秒
- 使用Web版ONNXRuntime去允许本地OCR，然后在浏览器端完成翻译和排版工作，但性能较差

使用安卓版本地服务器，只需一台安卓设备就能在本地完成所有操作，速度也比较快。

### 怎么用？

1. 在手机上安装 ImageTrans 安卓版，在设置里选好翻译方式，例如“本地 OCR + OpenAI”或“本地 OCR + MyMemory”。
2. 打开 App 里的服务器功能。服务器会监听 `51042` 端口，通知栏里会一直显示服务器地址。
3. 在 Edge 安卓版里安装 ImageTrans 扩展。
4. 打开漫画页面，点击扩展按钮，在扩展设置里把处理方式选为 **ImageTrans Server**，把地址填成 `http://127.0.0.1:51042`。

整个过程是：扩展读取网页图片 → 手机上做 OCR 并合并成段落、翻译、渲染图片→ 扩展替换翻译结果。不需要反复截图，也不需要把图片传到你不知道的第三方服务里。

不限于日漫网站，只要网页中的文字是画在图片里的，都可以这样翻译，例如：

- **日漫网站**：漫画页中的对话框、旁白、拟声词；
- **韩漫平台**：[Lezhin](https://www.lezhin.com/)、[Ridibooks](https://ridibooks.com/) 等平台上的条漫。韩漫一页通常很长、是竖着排下来的长条图，安卓版会按宽度分块识别、分块渲染再拼起来，不会因为图片过长而压缩失真或内存不足。

用 Edge 浏览器配合扩展翻译图片的演示视频：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117499618134284&bvid=BV1i7HV69E7c&cid=43034280445&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 用法二：屏幕翻译悬浮窗，啃生肉漫画和游戏

浏览器扩展只能处理网页里的图片。但生肉漫画可能在本地阅读器里，游戏里的对话、道具说明、任务提示则都是直接画在屏幕上的，没有“图片”可以交给浏览器扩展。

为此，ImageTrans 安卓版提供了一个**常驻的翻译悬浮窗**：

1. 打开“截屏翻译悬浮窗”，屏幕上会出现一个可以拖动、缩放（拖动四角）的选框，不受其他 App 影响；
2. 切到漫画阅读器或游戏，把选框对准要翻译的地方；
3. 点击选框或者悬浮球即可识别、翻译，译文会直接显示在选框里；
4. 框外的屏幕完全不受影响，可以继续点击游戏按钮、翻页。

Android 12 及以上版本通过系统的无障碍服务截图：只要在系统设置里为 ImageTrans 打开一次无障碍权限，之后就可以随意切换应用、随时翻译，不会再弹出授权提示。这个服务只用来截图，不会读取屏幕上的其他内容。

Android 10 没有无障碍截图功能，会改用系统的录屏授权：打开悬浮窗时授权一次，之后可以重复使用一段时间。

阅读生肉漫画和游戏的演示视频：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117501027419895&bvid=BV1PxH56MEcE&cid=43042802683&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>