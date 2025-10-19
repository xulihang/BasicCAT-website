---
title: Silhouette文档
layout: page
description: Silhouette文档
---

## 安装

对于Windows ，解压文件后使用`Silhouette.exe`运行程序。

对于macOS，将dmg文件中的应用拖动到`Applications`文件夹中以进行安装。如果显示包已损坏，请打开终端运行以下命令：

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

对于Linux ，可以使用Windows的zip包中的文件。需要安装FFmpeg、Whisper.cpp、Java和JavaFX来运行程序。[模板文件](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip)


## 设置

打开程序时，需要输入订单号和邮箱以验证购买。可以使用7天试用或受限模式先试用程序

此外，还需要完成其他设置。


1. Whisper模型。需要为语音识别选择一个Whisper模型。可以在程序中找到下载链接或者在[这里](https://github.com/xulihang/Silhouette_plugins/#whisper-models)下载。
2. API密钥。如果需要使用ChatGPT、Google或DeepL等翻译服务。需要在偏好设置中填写API密钥


## 快速开始

Silhouette的屏幕截图：

![屏幕截图](/album/silhouette/screenshot_zh.webp)

在左上角，有一个带有各种控件的视频播放器。

在左下角，有一个显示现有字幕行的表格。

在右上角，可以查看当前字幕行对应的波形图，并编辑其时间戳和文本。

在右下角，可以查看多个翻译服务的结果。

以下是使用Silhouette翻译视频/音频文件的基本过程：

1. 使用菜单栏中的文件菜单打开媒体文件并配置语言对。
2. 使用编辑菜单识别语音、检测语音活动并编辑字幕行。
3. 转录和翻译后，可以将结果导出到SRT文件或制表符分隔的txt文件。也可以从这些文件导入数据。





