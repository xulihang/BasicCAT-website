---
date: 2025-03-29 14:18:50+08:00
layout: post
title: Vertical Japanese and Chinese Text Recognition
categories: blog
tags: imagetrans
---

Unlike other languages, Japanese and Chinese can be arranged both vertically and horizontally. Most Japanese books and manga still use vertical text while Chinese is used horizontally now. You can only see vertical Chinese in ancient books and comics.

Japanese arranged both vertically and horizontally:

![Vertical and Horizontal](/album/vertical-text/japanese-sample.jpg)

Vertical Traditional Chinese:

![Vertical Traditional Chinese](/album/vertical-text/chinese-sample.jpg)

Here are several ways to recognize vertical text.

## Word Detection

A straightforward way to recognize vertical text is to detect the position of each word, recognize them, and then merge them into a line or a paragraph.

There are many OCRs that return single-word coordinates, such as [RapidOCR](https://github.com/xulihang/ImageTrans_plugins/tree/master/PyRapidOCR).

Recognition results:

![Word Detection - Traditional Chinese](/album/vertical-text/chinese-sample-detected.jpg)

## Text Line Detection

Most popular deep learning-based OCRs can only detect text lines. Special training is required to give the OCR the ability to distinguish between horizontal and vertical.

Currently, [manga-image-translator](https://github.com/xulihang/ImageTrans_plugins/tree/master/mangaTranslatorOCR) is the best open-source OCR in this area.

Recognition results:

![Text Line Detection - Japanese](/album/vertical-text/japanese-sample-detected.jpg)

If the OCR only recognizes horizontal text, we can first do a processing on the image to convert the vertical text into horizontal text.

![Vertical to Horizontal](/album/vertical-text/converted.jpg)

## Recognize Entire Image

With Transformer OCR, you can directly input images to get text results.

manga-OCR and Large models such as [ChatGPT](https://github.com/xulihang/ImageTrans_plugins/tree/master/mangaOCR) have the vertical text recognition capability. But they often need to be used in conjunction with other text detection methods.


All of the above features are integrated into [ImageTrans](/imagetrans/) and can be used after purchase.
