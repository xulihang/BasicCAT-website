---
date: 2024-05-21 20:18:50+08:00
layout: post
title: 日漫英文嵌字指南
categories: blog
tags: imagetrans
---

本文会介绍使用ImageTrans翻译日漫到英语时的一些嵌字技巧。

我们会以下面这个气泡的处理为例子进行演示。文字外围的框表示软件识别出来的文字区域的范围。

![气泡](/album/ja2en-lettering/boxed.jpg)

根据文本框的大小自动调整字体大小后的排版效果如下：

![默认翻译效果](/album/ja2en-lettering/en-default.jpg)

是否启用自动大小调整和字体大小的调整范围可以在项目设置里设置：

![文字大小调节](/album/ja2en-lettering/auto-font-size-settings.jpg)


我们可以看到，因为日文是竖排的，原本的气泡是高度较大，宽度较小的一个区域。排版英文时，存在字体过大以及单词被切分的问题。

这时我们可以在项目设置里启用“渲染时避免切分单词”的选项（2.12.0版本后自动启用）。它会自动计算所需的最小宽度，调节文字区域的文字大小、宽度和横坐标。

![避免切分单词设置](/album/ja2en-lettering/avoid-breaking-setting.jpg)

这时的排版效果就变成了下图这样：

![单词不切分时的排版效果](/album/ja2en-lettering/en-nonbreaking.jpg)


我们发现文字位于气泡的上方，没有处在中央。我们可以添加一个默认的字体样式，启用垂直居中。同时，我们还可以设置字体、描边、水平居中等样式。

![字体样式设置](/album/ja2en-lettering/font-style-settings.jpg)


设置完成后，就可以得到比较好的排版效果了：

![基本样式应用后](/album/ja2en-lettering/en-basic-font-style.jpg)

原文有一个爱心，我们也可以给它加进去。输入♥后，再使用富文本功能，设置它的颜色和大小。

![富文本](/album/ja2en-lettering/rich-text.jpg)


下面是最终的翻译效果。

原图：

![原图](/album/ja2en-lettering/source.jpg)

翻译的图：

![翻译的图](/album/ja2en-lettering/target.jpg)


