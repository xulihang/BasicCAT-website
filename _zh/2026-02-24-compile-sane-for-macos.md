---
date: 2026-02-24 10:42:50+08:00
layout: post
title: 编译macOS版SANE
categories: blog
tags: imagetrans
---

最近买了一台富士通的Fi-6130扫描仪，500多元，是比较便宜的馈纸式扫描仪。我想在macOS上使用它，但发现这种比较老的低端的扫描仪，官方已经不提供驱动了，只有通过SANE或者VueScan去使用。

SANE可以通过homebrew安装，不过因为我想编一个分发方便的版本，所有决定重新编译。下面是我的操作步骤。

1. 安装homebrew。

2. 安装相关依赖。

   ```bash
   brew install autoconf automake libtool gettext git pkg-config libusb libjpeg
   ```

3. 到sane官网下载源码包。

4. 执行以下命令进行编译：

   ```bash
   ./autogen.sh
   ./configure --prefix=/usr/local \
               CPPFLAGS="-I/usr/local/include -I/opt/homebrew/include" \
               LDFLAGS="-L/usr/local/lib -L/opt/homebrew/lib"
   make
   make install
   ```
   
5. 如果要分发到没有homebrew的环境，可以用otool再改一下path。


[ImageTrans](/zh/imagetrans/)的macOS版已经集成了SANE，可以直接调用这种老的扫描仪进行扫描。



