---
date: 2026-01-31 19:32:50+08:00
layout: post
title: 文档扫描应用程序接口概述
categories: blog
tags: imagetrans
---

现代文档扫描仪大概在20世纪80年代出现，为了连接扫描仪和电脑，出现了很多文档扫描的API接口：TWAIN、ICA、SANE、WIA、eSCL等等。本文会对这些协议做个概述。

## TWAIN

扫描仪厂商会给主流的操作系统，通常是Windows和macOS提供专门的扫描软件，TWAIN是一种通用的调用厂商提供的软件进行扫描的接口。它和UI有比较强的绑定，虽然可以不显示默认的扫描界面，但执行操作时还是有可能显示不同的UI。

因为直接调用厂商提供的软件，拥有比较多的能力，比如逐行获取扫描的图像、检测图像中的条形码、画面增强等等。


使用TWAIN调用Epson Scan进行扫描：

![epson twain](/album/document-scanning-api/epson-scan.jpg)


TWAIN主要用于Windows。

## WIA
WIA是Windows官方支持的图像获取设备的接口。安装扫描仪驱动后，一般就可以通过Windows的传真和扫描应用进行扫描。

![windows fax](/album/document-scanning-api/windows-fax.jpg)

也可以通过COM，使用程序语言去调用，支持显示UI或者不显示UI。UI的话，是统一的WIA专门的版本。

![wia](/album/document-scanning-api/wia.jpg)

使用WIA就不能使用厂商提供的专门的扫描程序了。

## ICA

ICA是苹果官方提供的接口。安装专门的ICA驱动后，就可以在图像捕获应用中看到定制化的扫描界面了。也支持通过接口不显示UI进行调用。

![ica](/album/document-scanning-api/imagecapture.jpg)


## SANE

SANE是类Unix系统（主要是Linux）上主要的扫描接口。也可以在macOS上使用。

SANE的扫描仪驱动主要是通过逆向工程编写的，当然也有厂商专门提供了SANE驱动，比如Epson。

SANE一开始就是为了网络扫描设计的，所以它不像TWAIN那样和UI强绑定。

## eSCL

eSCL是由苹果推动的一个基于HTTP的网络文档扫描协议，只要扫描仪连接了网络，就能直接通过这一接口进行扫描。现在由佳能、惠普等厂商发起的Mopria组织维护。


## 扫描软件

### 桌面软件

* NAPS2：支持TWAIN、WIA、SANE、eSCL、ICA，是一个开源的、一站式跨平台的扫描软件。
* [ImageTrans](/zh/imagetrans/)：基于WIA、SANE、ICA和eSCL集成了文档扫描功能，可以直接扫描文档，完成OCR、翻译、可搜索PDF生成等任务。
* VueScan：逆向了绝大多数扫描仪的驱动，不需要额外安装驱动就能直接调用扫描仪。
* SilverFast：在扫描照片、底片领域非常专业，一般买扫描仪都会附赠这一软件。

### SDK

* Dynamsoft: Dynamic Web TWAIN
* Aprise: JSane、JTWAIN、Scanner.js
* Leadtools
* Vintasoft
* ScanOnWeb

在这些SDK中，以Dynamic Web TWAIN支持的协议最全，维护程度最高。







