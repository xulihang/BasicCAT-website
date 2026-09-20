---
date: 2026-09-13 11:38:50+08:00
layout: post
title: 如何确定图片中文字的阅读顺序
categories: blog
tags: imagetrans
---

图片中的文字，需要经过OCR操作才能被提取出来。然后通常还需要按阅读顺序进行排序。PDF也有类似的需求，即使文字可以复制，但依赖阅读器进行合理的排序，才能支持选中、复制、搜索连续的文字的操作。本文主要演示计算机辅助图片翻译软件[ImageTrans](/zh/imagetrans/)如何支持处理各种图片的文字顺序。

一般的段落文字，文字一行一行上下排布，是比较简单的，直接根据纵坐标排序就行了。

像日语这样，竖排的轻小说，则是根据横坐标排序，并且从右往左。

![](/album/vertical-japanese-pdf-imagetrans-ui.jpg){: width="1600" height="1128"}

但实际的图片往往千奇百怪。

比如日文漫画，需要先确定各个分镜的阅读顺序，再确定文字的阅读顺序。需要使用ImageTrans的分镜检测功能。

![](/album/reading-order/manga-with-imagetrans-ui.jpg){: width="1600" height="1128"}

比如论文。需要进行布局分析，处理双栏布局、图表等各种页面组成。需要使用PaddleOCR的PPDocLayout v3等布局分析模型。这个模型自带了阅读顺序确定功能。不过不是所有顺序都是对的，偶尔会有需要在软件中手动修正的情况。

![](/album/pdf-translation/panel-detected.jpg){: width="1599" height="1140"}

如果选择布局检测方法不支持阅读顺序检测，我们则需要用其它排序方法，比如XYCut等等。

还有很多复杂的图片，比如以下信息图。其中罗列的项目是按顺时针方向排序的。这个只有使用支持视觉的大语言模型才可能。

![](/gallery/projects/infographic/capture001.webp){: width="1219" height="1600"}


但因为大模型不支持直接返回坐标，所以还需要适当的提示词，将给出的顺序和对应坐标的文字对应起来。
