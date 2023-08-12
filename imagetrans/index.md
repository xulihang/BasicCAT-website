---
title: ImageTrans - Computer-Aided Image and Comic Translation Tool
layout: page
---

## Introduction

ImageTrans is a computer-aided image and comic translation tool. It can automatically locate text areas and perform OCR operations using state-of-art OCR technology and a homebrew text areas merging and detecting algorithm, which is specially designed for comics (also webtoon, manga, manhwa and manhua). The original text can be automatically erased and the translation be reinjected.

![](/album/imagetrans.jpg)

ImageTrans can be used not only as an image translator, but also an image reader, an image transcriber, a screenshot OCR and translator, and a deep learning annotator.

ImageTrans is the result of the thesis for my master's degree: [Design and Implementation of a Computer-Aided Comics Translation Tool](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool).[](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)

[Get a copy](#get-a-copy)

## Features

### Accurate text area detection

![](/album/imagetrans-features/localization.jpg)

It can use natural scene text detection, object detection and a heuristic method to detect text.
   
### Accurate text recognition

* Support multiple OCR engines with custom plugins support
* Support major languages in the world
* Employ image preprocessing, text replacing and spell checking to improve the results

Examples:

|  Image   | OCR Result  | Engine |
|  ----  | ----  | ---- |
| ![Japanese image](/album/imagetrans-ocr/japanese.jpg)  | ようこそ<br/>亡霊<br/>葬儀屋さん | OCRSpace |
| ![English image](/album/imagetrans-ocr/english-calvin-and-hobbes.jpg)  | I RIGGED A TUNA FISH SANDWICH YESTERDAY, SO I'M SURE TO HAVE A TIGER BY NOW! | Google |

### Translation assist

It can call a variety of machine translation engines. Here is a screenshot showing the results of different machine translation engines of a Japanese sentence. We can compare the results and choose the best one. ChatGPT provides the best translation for this sentence.

![Japanese machine translation](/album/imagetrans-machine-translation/ja2en.jpg)

It also supports translation memory, corpus concordance, term management and other common functions of computer-aided translation software. It has a sound effects words search engine designed for translating comics.

### Precise text removal and reinjection

The software can use tools and algorithms like Sickzil-Machine, binarization, PatchMatch to generate text mask and remove text. It can refill the translation and automatically adjust the font size according to the position and area of text regions. All the above operations support manual adjustment.

![](/album/imagetrans-features/text-removal-and-reinjection.jpg)

### Interoperability

* It can use scripts to save the results as Photoshop's PSD files.
* It can export the data to Excel, Word, XLIFF files, or import data from these files
* With the Chrome Extension, it is possible to translate pictures on web pages directly

### Cross-platform

Like BasicCAT, ImageTrans is cross-platform (Windows, MacOS, Linux). It can also run as a server for online usage.

### Others

* Global font style
* Automatic detection of background color and text color
* Batch processing

## Examples of Translated Comics

Example 1:

Silver polish: <https://blog.xulihang.me/Comics-Viewer/viewer.html?uniquename=silverpolish>

Example 2 (old):

Come to me, Love —— From issue 41, Boy Loves Girls (Golden age comics).

Browsing Page: <http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

Text Searching Page: <http://comics.xulihang.me/search.html>

## Get a Copy

ImageTrans is available for purchase on FastSpring: [link](https://basiccat.onfastspring.com/).

Pricing:

* ImageTrans for personal use: $10.99
* ImageTrans for commercial purpose: $250

Free update within half a year.

Please follow the [installation instruction](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2).

If you are from academic institutions, you can email to [admin@basiccat.org](mailto:admin@basiccat.org) with your institution's email to get a discount. Please tell us who you are and what you are gonna do with ImageTrans.

If you cannot complete the payment, please [contact me](mailto:admin@basiccat.org).

## More

* [Documentation](https://imagetrans.readthedocs.io/en/latest/)
* [Release Notes](/imagetrans/release-notes/)
* [Video Tutorials and Demos](/imagetrans/video/)
* [Frequently Asked Questions](/imagetrans/faq/)
* [Technical Support](/support/)
* [Blog](/tagged/#imagetrans)

{% include comments.html %}

