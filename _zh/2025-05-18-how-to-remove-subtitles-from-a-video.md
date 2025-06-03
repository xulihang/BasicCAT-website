---
date: 2025-05-18 17:50:50+08:00
layout: post
title: 如何去除视频中的字幕
categories: blog
tags: silhouette imagetrans
---

找不到无字幕的原版视频，我们又想做些二次创作，比如创作解说视频、剪辑和翻译时，我们只有对带字幕的视频进行处理，对其中的字幕进行去除或者遮盖的操作。

下面是对《士兵突击》视频片段的视频帧进行处理的示例，点击图片可以查看视频。

带字幕的原始视频帧：

[![frame](/album/subtitle-removal/frame52.jpg)](https://github.com/xulihang/BasicCAT-website/releases/download/attachments/Subtitle-Removal-Sample.mp4)

用AI算法去掉字幕的视频帧：

[![frame ai](/album/subtitle-removal/frame52-ai.jpg)](https://github.com/xulihang/BasicCAT-website/releases/download/attachments/Subtitle-Removal-Sample-AI.mp4)

对字幕进行模糊处理以进行遮盖的视频帧：

[![frame blur](/album/subtitle-removal/frame52-blur.jpg)](https://github.com/xulihang/BasicCAT-website/releases/download/attachments/Subtitle-Removal-Sample-Blur.mp4)

可以看到，AI算法对背景还原的效果还是可以的。不过虽然单张图片效果可以，放在视频里还是能看到明显的修改痕迹和画面波动。毕竟一般的视频一秒有25帧，每帧AI处理的结果都有所不同，这点目前没找到特别好的解决方法。而模糊处理则没有明显的画面波动。

**更新：** 新版ImageTrans添加了STTN网络模型，可以根据多帧的结果去除文字，画面波动会小很多。

下面讲下如何使用图片翻译软件[ImageTrans](/zh/imagetrans/)和音视频翻译软件[Silhouette](/zh/silhouette/)去除视频中的字幕。


1. 使用Silhouette打开视频，导出视频帧为图片。使用PNG格式保存来保持画面质量。

   ![提取帧](/album/subtitle-removal/extract-frames-zh.jpg)

2. 使用Silhouette根据声音生成字幕（也可以直接[检测硬字幕](/zh/how-to-extract-hardcoded-subtitle/)）。从而知道哪些图像包含字幕，减少需要处理的数据量。

   ![检测语音活动](/album/subtitle-removal/detect-voice-activity-zh.jpg)
   
3. 使用ImageTrans打开导出的图像。打开视频字幕去除器，导入SRT格式的字幕，选择好字幕位置，生成去文字图。如果有漏抹除的图（一般在字幕的开头和结尾位置），可以用OCR等技术检测文字，调整有文字的图的范围。

   ![字幕去除器](/album/subtitle-removal/subtitle-remover-zh.jpg)
   
   文字抹除方式可以在项目设置中进行设置。
   
   ![文字去除设置](/album/subtitle-removal/text-removal-settings-zh.jpg)

4. 使用Silhouette基于去文字图生成最终的视频。





