---
date: 2026-03-15 16:28:50+08:00
layout: post
title: 如何检测图像中文字的颜色
categories: blog
tags: imagetrans
---

检测图像中文字的颜色，包括文字背景的颜色和描边的颜色，可以用于版面还原、翻译等操作。

原图：

![原图](/album/text-color-detection/source.jpg)

翻译的图片：

![翻译的图片](/album/text-color-detection/translated.jpg)

## 实现原理

对于背景颜色，可以使用KMeans对颜色聚类，找到图像的主导色。

对于文字颜色，可以做轮廓检测，计算文字轮廓像素的平均值，并排除与背景颜色相近的像素。

![纯色背景](/album/text-color-detection/plain-color.jpg)

但如果背景比较复杂，并且还需要提取描边颜色、提取每个字符的颜色，传统图像处理方法效果一般。可以使用卷积神经网络进行提取。

计算机辅助图片翻译软件[ImageTrans](/zh/imagetrans/)便集成了上述算法。

## 示例

下面是一些操作示例。

### 示例一

许多CG图，经常用不同的颜色来区分不同人物的对话。

![示例](/album/text-color-detection/example.jpg)


ImageTrans可以检测描边颜色和文字颜色，以下是原始识别结果。

![识别结果](/album/text-color-detection/detected.jpg)

可以看到，文字颜色和描边颜色被识别出来了，但不够准确。

我们可以在项目设置中预先定义几个样式，确定每个样式使用的颜色。

![项目设置](/album/text-color-detection/project-settings.jpg)

之后，执行颜色匹配操作，根据文字颜色匹配样式。

![工作流](/album/text-color-detection/workflow.jpg)

这样就解决了识别的颜色不够准确的问题

![调整了的](/album/text-color-detection/adjusted.jpg)

### 示例二

有的文字使用了富文本格式，一行文字可能存在多种颜色。ImageTrans支持识别每个字符的样式，并输出带有富文本标签的结果。

![内联样式](/album/text-color-detection/inline-text.jpg)




