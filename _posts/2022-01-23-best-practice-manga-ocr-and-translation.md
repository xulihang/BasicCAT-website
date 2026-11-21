---
date: 2022-01-23 15:47:50+08:00
layout: post
title: The Best Way to Translate manga at present
categories: blog
tags: imagetrans
---

Comics translation has many difficult issues, like text localization, OCR, machine translation, text erasure and typesetting.

Comics in different languages often need different processing methods. Let's take manga for example. Its text is often vertically aligned, but some explanatory text is horizontally aligned. There will also be Furiganas next to the text to mark the pronunciation. Sometimes, the text is not on a solid color background, but on a background full of screen tones and the text is stroked. Sometimes, the content of a sentence will be split into different balloons (or bubbles).

At present, the best way to deal with manga translation is to use a custom-trained manga text detection model to locate the text area, then use a custom-trained OCR model to accurately recognize the text. After the text is extracted, use a large language model to translate the text with long context and terms defined, and finally, do the typesetting.

ImageTrans can use the following models and methods to complete Japanese manga translation, which can handle the problems mentioned above quite well:

1. Manga text detection model. It can also detect speech balloons, panels and sound effects: [link](https://github.com/xulihang/balloon-dataset)
2. Manga OCR based on transformer: [link](https://github.com/xulihang/ImageTrans-docs/issues/140)
3. Machine translation using large language models like [ChatGPT](https://www.basiccat.org/ChatGPT-image-translator/) and Gemini.
4. Sort text areas based on detected panels so that machine translation can have a better context: [link](https://github.com/xulihang/ImageTrans-docs/issues/147)
5. Use the text detection model used above to generate balloon and text mask. For balloons, fill with solid color. For text on image content, use Lama Inpaint to remove the text and redraw the art work and screentones.

You can find instructions in ImageTrans' [docs](https://imagetrans.readthedocs.io/en/latest/) and its [plugins repo](https://github.com/xulihang/ImageTrans_plugins).

Video tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y7DyII0_zCk?si=uTvZJzCE2ubOTsSl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>





