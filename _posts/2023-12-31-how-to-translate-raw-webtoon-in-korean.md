---
date: 2023-12-31 16:36:50+08:00
layout: post
title: How to Translate Webtoon from Korean to English with ImageTrans
categories: blog
tags: imagetrans
---

ImageTrans is a general-purpose computer-aided image translation software, and has done a lot of functional design for comics. This article will use a picture from the *Princess Hours* as an example to show how to translate a Korean webtoon to English with ImageTrans.


PS: Since I don't know Korean, I use machine translation without further editing.


Original image:

![Original image](/album/webtoon/original.jpg)

Translated version:

![Translated version](/album/webtoon/english.jpg)


##  Detailed Procedures

1. Select an OCR engine, like Google. Click menu->edit->detect text areas and recognize text. The text will be detected. We can then merge text lines into paragraphs with the buttons for merging in the right.
2. Click menu->edit->translate all text areas. Select a machine translation like baidu to perform text translation.
3. Check "Translated" in the lower-left corner. You can see the image with the source text being replaced with the target text.
4. We can then set the font styles to make it look better.
5. Check "Type Settings" with "Translated" checked and we can modify the size and the position of a text area.
6. Generate the translated image after translation. If you need to use Photoshop to generate translated images, you can use scripts to generate PSD files.

Video tutorial: <https://www.bilibili.com/video/BV1Pe411S7sK/>


Related guides:

* [How to Use Google Cloud in ImageTrans](https://www.basiccat.org/how-to-use-google-cloud-in-imagetrans/)
* [Use ChatGPT to Help Translate Images](https://www.basiccat.org/ChatGPT-image-translator/)
* [pororo: a good Korean OCR](https://github.com/xulihang/ImageTrans_plugins/tree/master/pororoOCR)