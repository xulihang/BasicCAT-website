---
date: 2026-04-11 20:39:50+08:00
layout: post
title: 实时屏幕翻译器
categories: blog
tags: imagetrans
---

最近，我想玩下原版日文的GBA游戏《逆转裁判》。我喜欢玩原版日文的感觉，也希望借此提升自己的日语水平。但由于我的日语能力有限，仍然需要借助屏幕翻译工具来辅助。

[ImageTrans](/zh/imagetrans/)就是这样一款程序。它集成了多种OCR和翻译引擎，可以作为实时屏幕翻译工具，用于玩视觉小说、游戏以及阅读漫画。

它的工作流程如下：

1. 程序检测用户指定区域的屏幕截图是否发生变化，并判断当前画面是否已经稳定。
2. 使用OCR识别该区域中的文字。
3. 使用像ChatGPT、DeepSeek这样的 AI 翻译引擎对文字进行翻译。
4. （可选）添加[读音标注](/zh/how-to-add-pronunciation-annotation-furigana-to-Japanese-kanji/)（日语的振假名或中文的拼音），使用语音合成引擎朗读文本。
5. （可选）保存识别结果，供后续[学习](/zh/how-to-learn-japanese-by-reading-manga/)使用。

整个过程是自动完成的。当然，也可以手动截取屏幕并让程序进行翻译，因为有时可能需要读取指定区域之外的文本。

下面是一个演示视频。虽然OCR和翻译需要一些时间完成，但还是可以玩的。

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116385896268517&bvid=BV19nDkBiEUS&cid=37421580919&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

ImageTrans还可以翻译其他媒介，例如书籍和漫画。它是一个集成化的翻译工具，就像翻译领域的Photoshop一样。

ImageTrans可以在Windows、macOS和Linux这样的桌面平台使用，目前暂不支持安卓和iOS。
