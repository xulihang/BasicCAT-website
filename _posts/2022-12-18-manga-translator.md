---
date: 2022-12-18 18:45:50+08:00
layout: post
title: How to Translate manga with ImageTrans
categories: blog
tags: imagetrans
---

[ImageTrans](https://www.basiccat.org/imagetrans/) is an image translation software which supports all kinds of images. We can use it as a manga translator, as well. 

Here are the steps to translate manga images.

1. Put all the images in a folder.
2. Open Imagetrans and create a new project. You can configure the language pair of the project, like Japanese to English.
3. Import the images in the folder.
4. Use balloon detection or heuristic text detection to detect all the text areas.
5. Select a Japanese OCR, like mangaOCR, to extract the text of all the text areas.
6. Select a machine translation engine, like Baidu or Google, to translate all the text areas.
7. Check the "Translated" checkbox and you can see the translated image with the original text removed and the translation injected.
8. (Optional) Since the Japanese is in vertical layout, to improve the English typesetting, you can enable the option to convert vertically aligned text areas for horizontal text in the project.

## Example

Original:

![Japanese manga](/album/manga-translator/japanese.jpg){: width="830" height="1170"}

Translated:

![English translation](/album/manga-translator/english.jpg){: width="831" height="1170"}

Image source: <https://github.com/mantra-inc/open-mantra-dataset>

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/y7DyII0_zCk?si=QbFglebKXkB6od79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Related

* [How to Learn Japanese by Reading Manga](https://www.basiccat.org/how-to-learn-japanese-by-reading-manga/)
* [The Best Way to Translate manga at present](https://www.basiccat.org/best-practice-manga-ocr-and-translation/)

