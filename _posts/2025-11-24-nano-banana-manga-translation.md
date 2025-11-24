---
date: 2025-11-24 20:00:50+08:00
layout: post
title: Nano Banana for Manga Translation
categories: blog
tags: imagetrans
---

This week, Google released the Gemini 3-based Nano Banana Pro, which allows you to input an image and get the translated version directly.

Original Manga ([男子高生×新人OLの話](https://www.dlsite.com/girls/work/=/product_id/RJ276847.html):

![Original](/album/dlsite/006-ja.webp)


Translated Manga:

![nano translated image](/album/nano-banana/nano.webp)


We can see that it can remove the original text and reinject the translated text accurately. The translation quality is also good.

But it also has some issues:

1. The text looks weird.
2. The output image will lose some quality.
3. The output image's content is different from the original image, and the proportions are not the same.


Let it output only the text-removed version, we can see that the screentones are restored well, but the image content and proportion have been changed.

![nano text-removed](/album/nano-banana/text-removed-nano.webp)

If we only need to translate the image to get the basic idea, it works great. But if we need to manually adjust the result and embed it into a traditional translation workflow to get a high-quality output, there are still some problems.

Here are the results of using ImageTrans, a computer-aided image translation[ software](/imagetrans/), to go through the human translation process.

Text mask:

![Text mask](/album/nano-banana/mask.png)

Text-removed:

![text-removed](/album/nano-banana/text-removed.webp)

Translated:

![Translated](/album/nano-banana/translated.webp)


