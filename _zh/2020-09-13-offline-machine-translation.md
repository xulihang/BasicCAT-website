---
date: 2020-09-13 10:49:17+08:00
layout: post
title: 离线机器翻译
categories: releasenote
tags: 
---

我在探索哪些机器翻译引擎可以离线使用，发现[fiskmo](https://github.com/Helsinki-NLP/fiskmo-trados)是较为容易使用的一个服务。

Fiskmo是marian nmt的一个Windows客户端。它的翻译预测速度和质量都比较不错。

于是做了一个插件。

如何使用：

1. 参考官方指导安装fiskmo: <https://github.com/Helsinki-NLP/fiskmo-trados>
2. 安装fiskmo的BasicCAT插件
3. 管理员权限运行FiskmoMTEngine.exe
4. 设置参数并启用。其中url参数应该是<http://localhost:8500/MTRestService/Translate>

注：Fiskmo已经更名为OpusCAT

