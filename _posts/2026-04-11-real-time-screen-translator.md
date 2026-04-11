---
date: 2026-04-11 20:39:50+08:00
layout: post
title: Real-Time Screen Translator
categories: blog
tags: imagetrans
---

Recently, I want to play the raw Japanese GBA game *Ace Attorney*. I like the feeling of the original Japanese version and want to improve my Japanese skill. My Japanese level is limited so I still need a screen translator to help me.

[ImageTrans](/imagetrans/) is such a program. It integrates with various OCR and translation engines and can work as a real-time screen translator to play visual novel, games and read manga.


Here is its workflow:


1. The program detects whether the screen capture of the region specified by the user has changed and is now stable.
2. Use OCR to recognize the text in the region.
3. Use AI translation engines like ChatGPT and Deepseek to translate the text.
4. (Optional) Add [pronuciation annotation](/how-to-add-pronunciation-annotation-furigana-to-Japanese-kanji/) (Furigana for Japanese or Pinyin for Chinese) and use text-to-speech engine to read the text.
5. (Optional) Save the recognition results for [learning](/how-to-learn-japanese-by-reading-manga/) afterwards.

The whole process is automatic. You can also make the screen capture by yourself and ask the program to translate, since you may also need to read the text outside the region you specified.

The following is a demo video. Although it takes a while for the OCR and translation to complete, it is playable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/B9xmNjmcb10?si=rod6GaSBPGQ0KBAX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


ImageTrans can also translate other medias, like books and manga. It is an integrated translation tool, like Photoshop for translation.