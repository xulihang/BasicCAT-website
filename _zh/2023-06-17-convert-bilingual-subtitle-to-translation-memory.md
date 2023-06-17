---
date: 2023-06-17 11:25:17+08:00
layout: post
title: 转换双语字幕到翻译记忆
categories: blog
tags: Aligner
---

很多字幕组做的字幕都是双语版的，我们可以从字幕文件提取原文和译文做成翻译记忆文件，便于导入计算机辅助翻译软件或者当作语料库，用于检索。

BasicCAT工具集中的[Aligner](https://www.basiccat.org/zh/new-tool-bitext-aligner/)可以将ASS格式的双语字幕文件转换为TMX格式的翻译记忆文件。

比如我们下载了人人影视的《老友记》字幕，它的字幕文件按季存放在十个文件夹中，文件名记录了第几集：

```
─Season 01
│     Friends.S01E01.chs&eng.sohu.ass
│     Friends.S01E02.chs&eng.sohu.ass
│     Friends.S01E03.chs&eng.sohu.ass
│     ...
│
├─Season 02
│     Friends.S02E01.chs&eng.sohu.ass
│     Friends.S02E02.chs&eng.sohu.ass
│     Friends.S02E03.chs&eng.sohu.ass
│
...
```

ASS字幕文件中一条时间轴的内容如下：

```ass
Dialogue: 0,0:00:51.17,0:00:53.04,*Default,NTP,0000,0000,0000,,他不过是我的同事\N{\fn微软雅黑}{\fs14}{\b0}{\c&HFFFFFF&&}{\3c&000000&}{\4c&H000000&}He's just some guy I work with!
```

我们可以从中提取原文和译文，把文件名和时间轴作为备注，保存为如下的翻译记忆条目：

```xml
<tu>
    <note>Friends.S01E01.chs&amp;eng.sohu.ass
0:00:51.17,0:00:53.04</note>
    <tuv xml:lang="en">
        <seg>He&apos;s just some guy I work with!</seg>
    </tuv>
    <tuv xml:lang="zh">
        <seg>他不过是我的同事</seg>
    </tuv>
</tu>
```

在Aligner中的具体操作方法：

1. 新建一个英到中的对齐项目。

   ![New project](/album/ass-aligning/new_project.jpg)

   ![Language pair](/album/ass-aligning/language_pair.jpg)
   
2. 读取双语ASS文件。通过菜单调出ASS文件读取器，选择字幕文件所在目录，可以列出该目录和子目录下的所有ASS文件。

   ![Read ass files](/album/ass-aligning/read_ass_files.jpg)
   
   ![Ass picker](/album/ass-aligning/ass-picker.jpg)
   
3. 点击Okay后完成导入，回到对齐操作界面。可以对结果进行调整。

   ![Read ass files](/album/ass-aligning/home.jpg)

4. 导出结果。通过菜单，把结果导出为翻译记忆文件供后续使用。

   ![Export](/album/ass-aligning/export.jpg)

   
   
