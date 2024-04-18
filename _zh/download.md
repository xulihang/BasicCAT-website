---
title: 下载
layout: page
permalink: /zh/download/
---

请根据您的操作系统选择对应的安装包。

### BasicCAT v1.10.6

* Windows: [32位](https://github.com/xulihang/BasicCAT/releases/download/v1.10.6/BasicCAT-windows-x86.exe) /  [64位](https://github.com/xulihang/BasicCAT/releases/download/v1.10.6/BasicCAT-windows-x64.exe)
* macOS:  [DMG](https://github.com/xulihang/BasicCAT/releases/download/v1.10.6/BasicCAT_mac.dmg)
* Linux 和其它系统:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.10.6/BasicCAT-crossplatforms.zip)

也可从百度网盘下载：[链接](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

历史版本：[Releases](https://github.com/xulihang/BasicCAT/releases/)

macOS用户注意事项：从macOS Catalina开始，文件会有一个叫`com.apple.quarantine`的新的属性。打开BasicCAT时会显示应用已损坏。需要用以下命令去除这一属性才能正常运行程序。

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### 翻译记忆与术语共享用服务器程序

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### 插件

目前BasicCAT有两种插件：过滤器插件和机器翻译插件。

可以点[此](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip)下载全部插件。BasicCAT安装包已经包含了最新插件，一般无需单独下载。

记得把解压得到的jar和xml文件放入plugins文件夹里。

目前提供的插件：

机器翻译：

* ChatGPT
* Gemini
* 腾讯
* 小牛
* 谷歌
* IBM Watson
* 彩云小译
* Naver Papago
* 云译（只需设置url参数，详见[官方说明](https://cloudtranslation.com/static/api_zh-cn.html)）
* 亚马逊 (需要单独下载: [链接](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT（离线机器引擎，[说明](/zh/offline-machine-translation)）
* 网页机器翻译（从网页抽取机器翻译，不需要API，[详细介绍](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/)）

过滤器：

* Gettext PO

### 其它工具

用于解决翻译任务而开发的一些小工具：[工具](/zh/tools/)

