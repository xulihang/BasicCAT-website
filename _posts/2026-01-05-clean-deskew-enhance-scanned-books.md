---
date: 2026-01-05 18:36:50+08:00
layout: post
title: Clean, Deskew and Enhance Scanned Books
categories: blog
tags: imagetrans
---

I downloaded several e-books from the Superstar e-library and planned to convert them to PDF to read on Dasung e-ink tablets. However, I found that the scanned books had low clarity, low contrast and other problems like deskew and text on the other side that can be seen. The readability on e-book readers is low.


![Uncleaned on electronic ink screen](/album/clean-scanned-document/uncleaned-on-eink-tablet.jpg)


After some processing, I finally got a clear version of the PDF, and was able to read it on the e-ink device.

![Cleaned on electronic ink screen](/album/clean-scanned-document/cleaned-on-eink-tablet.jpg)

Here are the processing steps that went through.

Original image:

![Original](/album/clean-scanned-document/original.jpg)

Super-resolution operation on the image to improve clarity:

![](/album/clean-scanned-document/superresolution.jpg)

Recognize the rotation of the text in the image and deskew the image accordingly:

![deskewed](/album/clean-scanned-document/deskewed.jpg)

Recognize the text in the image and binarize the image by text area to get a version that is only black and white:

![black and white](/album/clean-scanned-document/black-white.png)

The final PDF of this 203-page book is only 8MB in size, and it supports searching for the text in the PDF.


The above operations are done in one place using [ImageTrans](/imagetrans/).

