---
date: 2023-08-27 15:35:50+08:00
layout: post
title: "How to Learn Japanese by Reading Manga"
categories: blog
tags: imagetrans
---

Comics is an art form combining graphics and text to tell attractive stories. Manga is the most influential type of comics in recent decades. Have you thought about learning Japanese by reading Manga?

It is recommended to start learning by following textbooks. After having a grasp of pronunciation, vocabulary and syntax, we can get on with Manga with the help of tools. After all, reading your favorite Manga is more fun than textbooks.

[ImageTrans](https://www.basiccat.org/imagetrans/) is a computer-aided comics translation tool. It can extract the text of Manga, analyse the syntax of the sentences and give the machine translation results. It also supports functions like TTS and term management. We can use it as a language learning tool to learn Japanese.

In the next part, we are going to illustrate how to use it to learn Japanese by reading a Manga image from Ranma 1/2.

Raw image:

![Raw image](/album/imagetrans-language-learning/Ranma1_012.jpg)

Translated:

![Translated](/album/imagetrans-language-learning/Ranma1_012_translated.jpg)

## OCR and Translation

Use OCR to extract the text and then translate the sentences by ourselves. This is a translation exercise to help us understand the source text and learn about the differences between English and Japanese.

Here is the table of the translation results.

| Source                                          | Target                                         |
|-------------------------------------------------|----------------------------------------------|
| 破っ!!                                          | Yack...                          |
| あー、                                          | Gasp...                          |
| 調子いい.                                       | Good.                            |
| まーた\nあかねはー.                             | Akane, you are training again... |
| んなことばっかやってるからまともにモテないのよ. | It won't help you with boys.     |
| よけーなお世話よ.                               | It is none of your business.     |
| あたしはおねーちゃんと違って男なんか、          | I am different from you...       |
| 大っ嫌いなの.                                   | I hate boys.                     |
| ふーん、                                        | If so...                         |
| じゃーこの話あんたにゃ関係ないか。              | it has nothing to do with you.   |


## Text-to-Speech

Since we may have watched a lot of animes, our listening skill is better trained. We can use the text-to-speech function to help us understand the sentence.

<video src="/album/imagetrans-language-learning/tts.mp4" controls="controls">
您的浏览器不支持 video 标签。
</video>

## Morphological Analysis and Marking of Pronunciation

ImageTrans can perform morphological analysis for the sentences to get the segmented words and their details like pronunciation. Although some Mangas have furiganas, they may not look clear on a screen. We can use this function to learn about the pronunciation.

![Analysis](/album/imagetrans-language-learning/zh/kuromoji.jpg)

## Online Dictionary

We can look up words we don't know in online dictionaries.

![Online dictionary](/album/imagetrans-language-learning/online-dictionary.jpg)

## Machine Translation and Term Management

ImageTrans can call several machine translation engines to help us understand the sentence.

We can also use it to set unfamiliar words as terms to manage them.

![Term](/album/imagetrans-language-learning/term.jpg)

Terms can be exported to a table. We can later import them into note-taking apps like Notion and Obsidian or flashcard apps like Anki.

Here is the table I created when translating the Manga.

| Source | Target  |
|------|-------|
| 調子 | condition  |
| モテない| unpopular|
|世話| care |


## Process Raw Manga Images

Raw Manga images may not be very clear. We can use tools like waifu2x to make them have a better resolution.

Links:

* [waifu2x-converter-cpp](https://github.com/DeadSix27/waifu2x-converter-cpp)
* [waifu2x-ncnn](https://github.com/nihui/waifu2x-ncnn-vulkan)

