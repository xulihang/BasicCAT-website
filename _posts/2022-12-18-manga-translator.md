---
date: 2022-12-18 18:45:50+08:00
layout: post
title: How to Translate manga with ImageTrans
categories: blog
tags: imagetrans
---

[ImageTrans](https://www.basiccat.org/imagetrans/) is an image translation software which supports all kinds of images. We can use it as a manga translator, as well. 

Here are the steps to translate manga images.

1. Put all the images in a folder.
2. Open Imagetrans and create a new project. You can configure the language pair of the project, like Japanese to English.
3. Import the images in the folder.
4. Use balloon detection or heuristic text detection to detect all the text areas.
5. Select a Japanese OCR, like mangaOCR, to extract the text of all the text areas.
6. Select a machine translation engine, like Baidu or Google, to translate all the text areas.
7. Check the "Translated" checkbox and you can see the translated image with the original text removed and the translation injected.
8. (Optional) Since the Japanese is in vertical layout, to improve the English typesetting, you can enable the option to convert vertically aligned text areas for horizontal text in the project.

## Example

Original:

![Japanese manga](/album/manga-translator/japanese.jpg)

Translated:

![English translation](/album/manga-translator/english.jpg)

Image source: <https://github.com/mantra-inc/open-mantra-dataset>

## Video Tutorial

* [Japanese to English](https://www.youtube.com/watch?v=S_6FF-5zTns)
* [Japanese to Chinese](https://www.bilibili.com/video/BV1Uo4y1Z7Wo/)
* [Automated](https://www.youtube.com/watch?v=gidM4F7pBgY)
* [Demo using balloon detection and mangaOCR](https://github.com/xulihang/ImageTrans-docs/issues/348#issuecomment-1383091204)

## Related

[The Best Way to Translate manga at present](https://www.basiccat.org/best-practice-manga-ocr-and-translation/)

