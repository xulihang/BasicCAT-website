---
date: 2024-11-18 20:01:50+08:00
layout: post
title: E-Commerce Image Translation
categories: blog
tags: imagetrans e-commerce
---

ImageTrans is a computer-aided image translation tool. We can use it to translate e-commerce images.

There are a wide variety of images for cross-border e-commerce. Some images are used as the main image for search results and some are used in the details. It poses a number of challenges for translators:

1. Some text has to be translated, while some does not need translation or has to be removed.
2. Text may have complex backgrounds such as patterns and gradients. We need to remove the text and restore the background.
3. The target text might be longer and occupy a larger area than the source text (e.g. English to Chinese).
4. Text has to be aligned precisely in the image.


ImageTrans provides the following functions to handle the translation of cross-border e-commerce images.

1. It can use OCR technology to automatically generate text boxes and remove text, eliminating manual selection and erasure of text. Adding, deleting, and editing text boxes manually is also supported.

   Original image:

   ![Complex background source image](/gallery/projects/e-commerce/complex-background.webp)

   Text mask:

   ![Complex background text mask](/album/e-commerce/complex-background.jpg-mask.png)

   Text-removed image:

   ![Complex background text-removed image](/album/e-commerce/complex-background.jpg-text-removed.jpg)
2. It can pretranslate the text with machine translation. Multiple machine translation engines (Ali e-commerce, ChatGPT, DeepL, Baidu, etc.) can be used to provide references for translation. Although e-commerce translation is a creative translation, machine translation can still provide some help.

   ![Machine translation](/album/e-commerce/machine-translation.jpg)

3. It can unify the text styles of multiple selected text boxes.

   ![Multiple selection](/album/e-commerce/multiple-selection.jpg)


4. It can align multiple selected text boxes. They can also be aligned with the source text boxes.

   ![Alignment](/album/e-commerce/alignment.jpg)

5. It supports displaying alignment lines when moving a text box.

   ![Alignment line](/album/e-commerce/alignment-line.jpg)
   
6. It can export the results as Photoshop images, or directly process existing PSD files for images that require complex modifications.
7. It has built-in search and replace, which can be used to unify text case and perform other operations.

Here are some examples of translated images. Lato is used here as the font for English. This font has a variety of font weights and small spacing, which can meet the needs of Chinese-English translation of complex pictures. In order to ensure readable text, all the text boxes' font size is set larger than 15px.

Example #1:

![Manual](/gallery/projects/e-commerce/manual.webp)

![Manual](/gallery/projects/e-commerce/out/manual.webp)

Example #2:

![Complex background](/gallery/projects/e-commerce/complex-background.webp)

![Complex background](/gallery/projects/e-commerce/out/complex-background.webp)


Example #3:

![Table](/gallery/projects/e-commerce/table.webp)

![Table](/gallery/projects/e-commerce/out/table.webp)


Example #4:

![Header picture](/gallery/projects/e-commerce/overview.webp)

![Header picture](/gallery/projects/e-commerce/out/overview.webp)


[Click here](https://www.basiccat.org/gallery/) for more image translation examples
