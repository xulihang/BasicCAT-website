---
date: 2023-05-03 08:37:50+08:00
layout: post
title: "How to Translate Comics with ImageTrans"
categories: blog
tags: imagetrans
---

ImageTrans is a general-purpose computer-aided image translation software, and has done a lot of functional design for comics. This article will use a picture from the Avengers comic as an example to show how to translate a comic with ImageTrans.

The selected image is from the Avengers Disassembled series, where the story begins with a relaxed and enjoyable scene.

Original image:

![Original image](/album/us-comics/avengers.jpg)

Translated version:

![Chinese version](/album/us-comics/avengers-translated.jpg)


## Detailed Procedures:

1. Detect all text areas using the heuristic text area detection method. If there is a misidentified area, remove it manually.
2. Generate the text mask and remove text. There are two ways to remove text: one is to cover it with the background color, and the other is to use an image inpainting method to restore the background. Here, because the text is mostly in the bubbles and the edges of the text and the bubble are relatively close, we can choose the covering method. Generate a mask like the following one, and then we can get an image with text removed.

   Mask:

   ![Mask:](/album/us-comics/avengers-mask.jpg)

   Text-removed image:

   ![Text-removed image:](/album/us-comics/avengers-text-removed.jpg)

3. Select an OCR engine, such as Baidu, to recognize the text of text areas.
4. Set the text style. Disable auto text size in the settings, and create a new default text style.
5. Manually translate each area. We can compare the results of multiple machine translation engines, or use the machine translation result directly.

   Hint:

   We will encounter a lot of names in American comic translation, such as Janet, whose machine translation in Chinese is “珍妮特”. If we want to translate to “詹尼特”, we can add an auto-correct rule that replaces “珍妮” with “詹尼”.


6. Complete the lettering during the translation process, and adjust the content and line breaks of the translation according to the bubble size.

   Hint:

   American comics often use bold and italic for emphasis. In ImageTrans, we can use BBCode to add rich text effects to text. Because Chinese fonts usually do not support italic, we use faux italic here to achieve the effect. Following is an example:

   Source:

   ![Source](/album/us-comics/bold-italic-example.jpg)

   Target:

   ![Target](/album/us-comics/bold-italic-transaltion-example.jpg)


7. Generate the translated image after translation. If you need to use Photoshop to generate translated images, you can use scripts to generate PSD files.

Video Tutorials: <https://www.bilibili.com/video/BV18L411a749/>
