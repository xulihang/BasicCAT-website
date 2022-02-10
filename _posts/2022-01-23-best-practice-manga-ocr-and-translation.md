---
date: 2022-01-23 15:47:50+08:00
layout: post
title: The Best Way to Translate manga at present
categories: blog
tags: imagetrans
---

Comics translation has many difficult issues, like text localization, OCR, machine translation, text erasure and typesetting.

Comics in different languages often need different processing methods. Let's take manga for example. Its text is often vertically aligned, but some explanatory text is horizontally aligned. There will also be Furiganas next to the text to mark the pronunciation. Sometimes, the text is not on a solid color background, but on a background full of screen tones and the text is stroked. Sometimes, the content of a sentence will be split into different balloons (or bubbles).

At present, the best way to deal with manga translation is to use a custom-trained balloon detection model to locate the text area, then use a custom-trained OCR model to accurately recognize the text. After the text is extracted, use a machine translation engine trained on manga translation corpus to translate the text, and finally, do the typesetting.

ImageTrans can use the following models and methods to complete Japanese manga translation, which can handle the problems mentioned above quite well:

1. Scaled Yolo V4 manga balloon detection model, [link](https://github.com/xulihang/ImageTrans-docs/issues/135)
2. manga OCR based on transformer, [link](https://github.com/xulihang/ImageTrans-docs/issues/140)
3. manga machine translation based on transformer, [link](https://github.com/xulihang/ImageTrans-docs/issues/108) (only Japanese to English translation is supported. Use other online machine translation services for other languages)
4. Sort text areas based on detected panels so that machine translation can have a better context, [link](https://github.com/xulihang/ImageTrans-docs/issues/147)

You can learn about how to use them in ImageTrans by checking out the links above.









