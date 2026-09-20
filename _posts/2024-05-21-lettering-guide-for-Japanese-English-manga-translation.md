---
date: 2024-05-21 20:18:50+08:00
layout: post
title: Lettering Guide for Japanese to English Manga Translation
categories: blog
tags: imagetrans
---

This article will introduce some lettering tips when translating Japanese manga to English using ImageTrans.

We will use the following bubble for demonstration. The box around the text represents the text area detected by the software.

![Bubbles](/album/ja2en-lettering/boxed.jpg){: width="192" height="378"}

The translated result with auto font size based on the size of the text area:

![Default Translation Result](/album/ja2en-lettering/en-default.jpg){: width="175" height="377"}

We can set whether to enable auto font size and the range of font size in the project settings:

![Text size adjustment](/album/ja2en-lettering/auto-font-size-settings.jpg){: width="302" height="355"}


We can see that because the Japanese text is arranged vertically, the bubble is a rectangular with a large height and a small width. When lettering English, the font size is made too big to meet the height and some words are broken.

In this case, we can enable the "Avoid breaking words when rendering" option in the project settings (enabled by default after version 2.12.0). It will automatically calculate the required minimum width and adjust the font size, width and horizontal coordinates of the text area.

![Avoid breaking words settings](/album/ja2en-lettering/avoid-breaking-setting.jpg){: width="405" height="122"}

Now, the translated result becomes the following one:

![Translated result when words are not cut](/album/ja2en-lettering/en-nonbreaking.jpg){: width="182" height="381"}


We can see that the text is in the top of the bubble, not in the center. We can add a default font style that enables vertical center alignment. Also, we can set the font, the stroke and horizontal alignment.

![Font style settings](/album/ja2en-lettering/font-style-settings.jpg){: width="590" height="740"}


After the above adjustments, we can get a good translated result:

![result after applying a basic style](/album/ja2en-lettering/en-basic-font-style.jpg){: width="173" height="372"}

The source text has a heart, and we can add it in the target text as well. After typing ♥, use the rich text function to set its color and size.

![Rich Text](/album/ja2en-lettering/rich-text.jpg){: width="1064" height="553"}


Here is the final translated image.

Original image:

![Original image](/album/ja2en-lettering/source.jpg){: width="177" height="371"}

Translated image:

![Translated image](/album/ja2en-lettering/target.jpg){: width="192" height="384"}


## More Advanced Rearrangement

For high-quality Japanese to English translation, the bubbles are usually redrawn so that the English can be lettered in a way that suits horizontal typesetting.

Below is an example of the official translation of a Korean comic on Lezhin.

![](/album/ja2en-lettering/brawling_go_jp.jpg){: width="300" height="373"}

![](/album/ja2en-lettering/brawling_go_en.jpg){: width="300" height="341"}


