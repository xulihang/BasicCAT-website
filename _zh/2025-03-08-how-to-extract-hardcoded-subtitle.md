---
date: 2025-03-08 19:09:50+08:00
layout: post
title: 视频硬字幕提取
categories: blog
tags: silhouette imagetrans
---

硬字幕是直接融入视频画面的字幕。这种字幕无法直接提取，如果找不到原始字幕文件，我们又希望提取字幕文本和对应的时间轴信息，就需要使用光学字符识别技术（OCR）进行操作。

下面是一个简单的硬字幕的提取过程：直接识别每一帧中的字幕，之后根据文字的位置和内容，确定哪些帧属于同一条字幕以计算出时间轴。

不过实际操作的话，因为OCR是比较耗时的操作，1秒25帧的视频，1分钟的视频就需要处理1500张图，可能需要花费几十分钟。另外还存在识别准确率的问题，会影响结果。所以我们需要对这个操作进行一定的性能优化。

一个方法是使用耗时较少的图像处理方法，确定哪些帧包含字幕，之后再用耗时较长的精准的OCR去识别文字。目前已经有VideoSubFinder、esrXP等工具。但这类软件使用的是传统图像处理方法，准确率不够高。这种情况我们可以直接使用OCR软件的文字定位方法去确定哪些帧包含字幕。

OCR一般分为两个步骤，首先是定位文字区域，然后是识别文字。使用OCR的文字定位方法，准确度更高，然后不识别文字，也可以节省时间。

[ImageTrans](/zh/imagetrans/)提供的硬字幕提取工具，提供了对上述流程的支持。下面我们会以美剧版《甄嬛传》为例子介绍软件的用法。美剧版《甄嬛传》提供了双语字幕，我们可以基于这个双语字幕，制作平行语料库，用于语言学习与研究。

## 字幕分析

首先，我们看下美剧版《甄嬛传》中的字幕是什么样的。下面是几张截图：

![frame16](/album/hardcoded-subtitle-extraction/frame16.jpg)

![frame135](/album/hardcoded-subtitle-extraction/frame135.jpg)

![frame135](/album/hardcoded-subtitle-extraction/frame137.jpg)

可以看到字幕会有两行、三行等多种情况，译文可能分散在多条相同原文的字幕中。

## 提取视频帧

我们打开[Silhouette](/zh/silhouette/)软件，使用它的帧提取器，提取视频帧：

![frame extraction](/album/hardcoded-subtitle-extraction/frame-extraction.jpg)


这里我们可以设置FPS。FPS设置为3时，每秒就只提取3帧。如果希望提取的时间轴准确点，可以把FPS设大点，但处理所需的时间也会更多。如果我们只是需要文本，不需要时间很准确，FPS可以设小点。

## 识别视频帧中的字幕

接下来，我们打开ImageTrans，导入刚才导出的视频帧。

通过菜单栏-工具，打开硬字幕提取器。

![subtitle detection form](/album/hardcoded-subtitle-extraction/subtitle-detection-form.jpg)

设置需要识别的边界，选择检测引擎为"detect only (PaddleOCR)"，设置线程数为4，点击“检测所有图片中的字幕”开始检测。这里，我们处理的54秒的视频，提取FPS设为3，有164张图像需要进行检测。

操作完成后，我们可以看到图片中的字幕行被检测出来了。

![detected text lines](/album/hardcoded-subtitle-extraction/detected-text-lines.jpg)

之后，我们点击“OCR所有关键帧”，会识别所有字幕图像中的文字。因为我们这里只识别关键帧，需要处理的图片数变成了21。

可以看到多了一个文本框，包含识别的文本。

![subtitle recognized](/album/hardcoded-subtitle-extraction/subtitle-recognized.jpg)

之后，我们就可以导出字幕为SRT文件了。

因为这是双语字幕，还有一些额外操作。首先，“OCR所有关键帧”前，要取消勾选“自动去除换行”。之后在硬字幕提取器中，点击“只保留最后一个换行符”。这样我们可以让文本变成一行原文、一行译文的形式。

然后再勾选合并双语字幕同一条字幕对应的多条译文，会把分散的译文都合并到一起。

![bilingual settings](/album/hardcoded-subtitle-extraction/bilingual-settings.jpg)

下面是提取出来的字幕：

```srt
1
00:00:00,999 --> 00:00:02,664
- Shichu. - Huan.
实初哥哥 嬛妹妹

2
00:00:03,663 --> 00:00:04,995
I just checked up on your family.
刚刚我去府上请脉

3
00:00:05,328 --> 00:00:07,659
Your mother told me you'd come here to offer incense.
听甄伯母说你来这里进香了

4
00:00:07,992 --> 00:00:09,657
Simply for a stroll and-to-pass an idle hour.
出来走走 也是散心

5
00:00:11,322 --> 00:00:13,320
Huan, don't try to hide it from me.
嬛妹妹 你就不要再瞒我了

6
00:00:14,319 --> 00:00:17,982
I know you' ve been worried about the audition for many days.
我知道为了殿选之事 你已经烦恼多日了

7
00:00:19,647 --> 00:00:22,644
U may only do what I'm allowed. The rest I leave to fate.
嬛儿是尽人事以听天命

8
00:00:23,643 --> 00:00:26,640
Huan, when my father lived, he often said,
嬛妹妹 家父在世的时候常说

9
00:00:26,973 --> 00:00:28,971
"A jade vessel is the symbol of a pure heart.
一片冰心在玉壶

10
00:00:29,304 --> 00:00:32,301
He wanted me to give this to my future-
他让我把此壶 交予我们温家未来的

11
00:00:33,300 --> 00:00:34,965
It is my own wish as well.
其实这也是我一直以来的心意

12
00:00:35,298 --> 00:00:38,295
If you accept this, you won't be called to the audition.
你若接受的话 就不用再去宫中殿选了

13
00:00:40,626 --> 00:00:43,290
In the time of the Shunzhi Emperor, it was decreed
顺治爷在世的时候就定下定例

14
00:00:43,623 --> 00:00:46,953
that girls qualified to join the harem may not marry before the audition.
所有未经选看的秀女 断不可私下结亲

15
00:00:47,619 --> 00:00:51,948
Though you intend to help, you need not give me such a valuable item.
实初哥哥想一时救急 也不必拿出这么贵重的东西来

16
00:00:52,614 --> 00:00:53,946
I'm profoundly flattered.
嬛儿受不起

```

使用ImageTrans提取硬字幕的优点是，整个过程我们都可以进行干预和修改，可以根据不同的语言选择不同的OCR引擎。

字幕提取后，也可以导入计算机辅助音视频翻译软件Silhouette，结合波形图进行调整。

视频教程：

* 传统图像处理方法（VideoSubFinder + ImageTrans)）：https://www.bilibili.com/video/BV1tGR5YYEJB/
* OCR做检测的方法（Silhouette + ImageTrans）：https://www.bilibili.com/video/BV1tGR5YYEQk/


