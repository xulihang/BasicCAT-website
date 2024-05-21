---
date: 2024-05-21 20:18:50+08:00
layout: post
title: Lettering Guide for Japanese to English Manga Translation
categories: blog
tags: imagetrans
---

This article will introduce some lettering tips when translating Japanese manga to English using ImageTrans.

We will use the following bubble for demonstration. The box around the text represents the text area detected by the software.

![Bubbles](/album/ja2en-lettering/boxed.jpg)

The translated result with auto font size based on the size of the text area:

![Default Translation Result](/album/ja2en-lettering/en-default.jpg)

We can set whether to enable auto font size and the range of font size in the project settings:

![Text size adjustment](/album/ja2en-lettering/auto-font-size-settings.jpg)


We can see that because the Japanese text is arranged vertically, the bubble is a rectangular with a large height and a small width. When lettering English, the font size is made too big to meet the height and some words are broken.

In this case, we can enable the "Avoid breaking words when rendering" option in the project settings (enabled by default after version 2.12.0). It will automatically calculate the required minimum width and adjust the font size, width and horizontal coordinates of the text area.

![Avoid breaking words settings](/album/ja2en-lettering/avoid-breaking-setting.jpg)

Now, the translated result becomes the following one:

![Translated result when words are not cut](/album/ja2en-lettering/en-nonbreaking.jpg)


We can see that the text is in the top of the bubble, not in the center. We can add a default font style that enables vertical center alignment. Also, we can set the font, the stroke and horizontal alignment.

![Font style settings](/album/ja2en-lettering/font-style-settings.jpg)


After the above adjustments, we can get a good translated result:

![result after applying a basic style](/album/ja2en-lettering/en-basic-font-style.jpg)

The source text has a heart, and we can add it in the target text as well. After typing ♥, use the rich text function to set its color and size.

![Rich Text](/album/ja2en-lettering/rich-text.jpg)


Here is the final translated image.

Original image:

![Original image](/album/ja2en-lettering/source.jpg)

Translated image:

![Translated image](/album/ja2en-lettering/target.jpg)


