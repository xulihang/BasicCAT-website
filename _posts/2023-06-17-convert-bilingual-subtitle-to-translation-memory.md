---
date: 2023-06-17 11:25:17+08:00
layout: post
title: Convert Bilingual Subtitles to Translation Memory
categories: blog
tags: Aligner
---

Many subtitles are bilingual. We can extract the source text and the target text from the subtitle files into a translation memory file. A translation memory file can be imported into a computer-aided translation software or be used as a corpus for concordance.

The [Aligner](https://www.basiccat.org/zh/new-tool-bitext-aligner/) in the BasicCAT toolset can convert bilingual subtitle files in ASS format to translation memory files in TMX format.

For example, here is a list of subtitle files of Friends we downloaded from the Internet. The files are stored by seasons in ten folders with the episode info in the file names:

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

The contents of a timeline in the ASS subtitle file are as follows:

```ass
Dialogue: 0,0:00:51.17,0:00:53.04,*Default,NTP,0000,0000,0000,,他不过是我的同事\N{\fn微软雅黑}{\fs14}{\b0}{\c&HFFFFFF&&}{\3c&000000&}{\4c&H000000&}He's just some guy I work with!
```

We can extract the source text and target text from it, make the file name and timeline as notes and save as the following translation memory entry:

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

Detailed steps in Aligner:

1. Create a new English-to-Chinese alignment project.

   ![New project](/album/ass-aligning/new_project.jpg)

   ![Language pair](/album/ass-aligning/language_pair.jpg)

2. Read the bilingual ASS files. Use the menu to call the ASS file picker and select the directory where the subtitle files are located. All ASS files in the directory and subdirectories can be listed.

   ![Read ass files](/album/ass-aligning/read_ass_files.jpg)

   ![Ass picker](/album/ass-aligning/ass-picker.jpg)

3. Click Okay to complete the import and return to the alignment operation interface to adjust the results.

   ![Read ass files](/album/ass-aligning/home.jpg)

4. Export results. Through the menu, export the results as a translation memory file for further use.

   ![Export](/album/ass-aligning/export.jpg)



