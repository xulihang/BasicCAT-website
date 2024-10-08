---
date: 2023-05-03 08:37:50+08:00
layout: post
title: 使用ImageTrans翻译美漫
categories: blog
tags: imagetrans
---

ImageTrans是通用的计算机辅助图片翻译软件，并针对漫画做了很多功能设计。本文会以《复仇者》漫画的一张图片为例来演示如何用ImageTrans翻译美漫。

所选图片来自《复仇者解散》系列，故事一开始轻松愉快的场景。

原图：

![原图](/album/us-comics/avengers.jpg)

翻译的版本：

![中文翻译版本](/album/us-comics/avengers-translated.jpg)


## 具体操作流程

1. 使用[启发式文字区域检测方法](https://imagetrans.readthedocs.io/zh-cn/latest/textarea_detection_and_text_reinjection.html)或者[气泡检测](https://imagetrans.readthedocs.io/zh-cn/latest/settings.html#balloon-detection)去检测所有文字区域。如果有误识别的区域，则手动进行去除。
2. 生成文字掩膜，去除文字。文字去除有两种方式，一种是用背景颜色覆盖（涂白），一种是用图像修复方法，可以还原背景。这里因为文字多存在气泡里，文字和气泡边缘比较近，可以选择背景颜色覆盖法。生成下图这样的掩膜，之后就可以得到去文字图。

   掩膜：

   ![掩膜](/album/us-comics/avengers-mask.jpg)
   
   去文字图：
   
   ![去文字图](/album/us-comics/avengers-text-removed.jpg)

3. 选取一个OCR引擎，比如百度，识别所有文字区域的文字。
4. 设置字体，在偏好设置里取消自动调整文字大小，并新建一个默认的文字样式。
5. 手动完成每个区域的翻译，可以比对多个机器翻译引擎，或者直接调用机器翻译的结果。

   小技巧：
   
   美漫翻译会遇到很多人名，比如Janet，机器翻译的结果是珍妮特。如果我们希望翻译成詹尼特，可以添加自动更正规则，将“珍妮”替换为“詹尼”。
   
   
6. 在翻译过程中完成嵌字工作，并根据气泡大小调整译文的内容和换行。

   小技巧：
   
   美漫常常使用粗斜体来进行强调。在ImageTrans里我们可以使用BBCode来给文字添加富文本效果。因为中文字体通常不支持斜体，我们这里使用仿斜体来实现倾斜效果。下面是一个示例：
   
   原文：
   
   ![原文](/album/us-comics/bold-italic-example.jpg)
   
   翻译版：
   
   ![翻译版](/album/us-comics/bold-italic-transaltion-example.jpg)
   
   
7. 翻译完成后导出成品图。如果需要使用Photoshop生成翻译版图片，可以使用脚本生成PSD文件。

视频教程：<https://www.bilibili.com/video/BV18L411a749/>
