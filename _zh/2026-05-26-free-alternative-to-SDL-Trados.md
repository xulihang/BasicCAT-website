---
date: 2026-05-26 20:55:50+08:00
layout: post
title: SDL Trados的免费替代品
categories: blog
tags: 
---

SDL Trados是一款计算机辅助翻译工具。它是行业标准，本地化行业几乎每个人都学过它。

它功能强大，比如翻译记忆、术语管理，支持多种文件格式、海量选项，以及一个具备非常多行业专家的社区。

然而，它用起来比较复杂且价格不菲（自由译者版每月43美元）。市面上有不少替代品，比如界面更轻量的memoQ和雪人CAT、云端平台Phrase（原 Memsource）、YiCAT。它们各有特色，但仍然无法满足我的需求：

* 跨平台桌面应用，支持Linux、macOS和Windows，完全离线可用。
* 简单易用的界面。
* 易于扩展。

OmegaT作为一款免费开源的替代方案，也支持跨平台，但我不喜欢它的界面。

最终，我用B4J（一个 RAD 开发工具）创建了自己的CAT工具，命名为 [BasicCAT](/zh/)。

![BasicCAT](/album/main.png)

我从2018年开始开发BasicCAT，并用它完成了许多翻译任务。由于它可以直接翻译Trados的SDLXLIFF文件，即使我没有Trados，也能承接那些要求使用Trados的任务。

最近几年，我主要用它来翻译我自己工具的[界面](/zh/how-to-localize-a-b4j-desktop-app/)、网站和文档。

它的开发工作现在已经稳定了。随着大语言模型的出现，我有添加翻译插件，支持ChatGPT、Gemini、DeepSeek等。

BasicCAT.org还提供了其他工具：

* [Aligner](/zh/new-tool-bitext-aligner/)：双语句对齐工具。
* [ImageTrans](/zh/imagetrans/)：一款计算机辅助图像翻译与转录OCR工具。
* [Silhouette](/zh/silhouette/)：一款计算机辅助视频与音频翻译工具。

这些工具是自由译者、翻译爱好者、教师、学生以及公司的好伙伴。

在AI时代，每个人都可以编写自己的翻译应用。但计算机辅助翻译是一个复杂的领域。由于BasicCAT是开源的，我们可以以BasicCAT为基础，借助AI来打造属于自己的工具。