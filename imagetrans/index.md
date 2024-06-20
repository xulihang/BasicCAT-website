---
title: ImageTrans - Computer-Aided Image and Comic Translation Tool
layout: page
---

## Introduction

ImageTrans is a computer-aided image and comic translation tool. It can automatically locate text areas and perform OCR operations using state-of-art OCR technology and a homebrew text areas merging and detecting algorithm, which is specially designed for comics (also webtoon, manga, manhwa and manhua). The original text can be automatically erased and the translation be reinjected.

![](/album/imagetrans.jpg)

ImageTrans can be used not only as an AI image translator, but also an image reader, an image transcriber, a screenshot OCR and translator, and a deep learning annotator.

ImageTrans is the result of the thesis for my master's degree: [Design and Implementation of a Computer-Aided Comics Translation Tool](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool).[](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)

[Get a copy](#get-a-copy)

## Features

### Accurate text area detection

![](/album/imagetrans-features/localization.jpg)

It can use natural scene text detection, object detection and a heuristic method to detect text.
   
### Accurate text recognition

* Support multiple OCR engines with [custom plugins](https://github.com/xulihang/ImageTrans_plugins) support
* Support major languages in the world
* Employ image preprocessing, text replacing and spell checking to improve the results

Examples:

|  Image   | OCR Result  | Engine and Language |
|  ----  | ----  | ---- |
| ![Japanese image](/album/imagetrans-ocr/japanese.jpg)  | ようこそ<br/>亡霊<br/>葬儀屋さん | OCRSpace<br/>Japanese |
| ![Korean image](/album/imagetrans-ocr/korean.jpg)  | 이야.<br/>오랜만이다. | Baidu<br/>Korean |
| ![English image](/album/imagetrans-ocr/english-calvin-and-hobbes.jpg)  | I RIGGED A TUNA FISH SANDWICH YESTERDAY, SO I'M SURE TO HAVE A TIGER BY NOW! | Google<br/>English |

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
* The projects of ImageTrans can be converted to projects of other tools like [LabelPlus](https://github.com/xulihang/ImageTrans-docs/issues/439) and vice versa
* With the Chrome Extension, it is possible to translate pictures on web pages directly

### Cross-platform

ImageTrans is cross-platform, supporting the following operating systems:

* Windows 7+
* macOS 10.11+
* Linux

It can also run as a server for online usage. Mobile devices can use it to scan and translate images like raw manga.

### Low requirements

ImageTrans has low requirements of the hardware and its size is only about 150MB including a Java runtime. Your old or low-end devices can run it without a problem. But for things involving deep learning, like ballon detection, you'd better run it on a device with at least an Intel Core CPU.

### Others

* Can work offline on a local device
* Global font style
* Automatic detection of background color and text color
* Sort text areas based on the distance to the original, horizontal ordinate, vertical ordinate and panels
* Batch processing

## Examples of Translated Images

ImageTrans can use different combinations of text detection, text recognition and machine translation to work with all kinds of images.

Visit [Gallery](/gallery/) to check out images translated using ImageTrans.

## Get a Copy

ImageTrans is available for purchase on FastSpring: [link](https://basiccat.onfastspring.com/).

Pricing:

* ImageTrans for personal use: $18.9
* ImageTrans for commercial purpose: $299

One-time purchase. Free upgrades within half a year.

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

