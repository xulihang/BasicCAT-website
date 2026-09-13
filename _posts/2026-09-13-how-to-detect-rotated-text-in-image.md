---
date: 2026-09-13 11:38:50+08:00
layout: post
title: How to Detect Rotated Text in an Image
categories: blog
tags: imagetrans
---

Text in an image may be tilted. Sometimes this is a deliberate design choice, and sometimes it happens because a document was not placed straight when it was scanned.

Most OCR engines today can handle rotated text. PaddleOCR, for example, uses the DB algorithm to produce a binary image, and from that image we can get each line of text together with the coordinates of its four corner points and its rotation information.

The computer-aided image translation software [ImageTrans](/imagetrans/) supports all kinds of OCR that handle rotated text.

The interface:

![](/album/rotated-text/rotated-text-with-imagetrans-ui.jpg)

The binary image:

![](/album/rotated-text/db-thresh.png)

Image source: <https://ac.qq.com/ComicView/index/id/547921/cid/1>

Knowing the rotation angle is useful in more than one way: it can be used for document deskewing, and for restoring the rotation angle when translating an image.

The text in the example image, however, is distorted by a perspective transformation, so for real translation work it is still better to edit the original PSD file. ImageTrans can export the recognized text to PSD, or modify the text in a PSD directly.

OCR engines with rotation support in ImageTrans:

* WinRT (the OCR built into Windows 10 and later)
* rapid
* PaddleOCR
* mangaTranslator
* macOCR (the OCR built into macOS)
* oneocr (the OCR built into the Windows 11 Snipping Tool)
