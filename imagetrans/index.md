---
title: ImageTrans - Computer-Aided Image and Comic Translation Tool
layout: page
---

## Introduction

ImageTrans is a computer-aided image and comic translation tool. It can automatically locate text areas and perform OCR operations using state-of-art OCR technology and a homebrew text areas merging and detecting algorithm, which is specially designed for comics (also webtoon, manga, manhwa and manhua). The original text can be automatically erased and the translation be reinjected.

![](/album/imagetrans.jpg)

ImageTrans can be used not only as an image translator, but also an image reader, a image transcriber and a deep learning annotator.

ImageTrans is the result of the thesis for my master's degree: [Design and Implementation of a Computer-Aided Comics Translation Tool](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool).[](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)

## Features

### Accurate text area detection

![](/album/imagetrans-features/localization.jpg)

It can use natural scene text detection, object detection and a heuristic method to detect text.
	
### Accurate text recognition

* Support multiple OCRs

   It supports online OCR services such as Google, Baidu, Sogou and Youdao, and offline OCR engines such as Tesseract, PaddleOCR and Windows 10's built-in OCR engine. See [FAQ](/imagetrans/faq/) for the usage and the list of supported OCRs.

   In addition, you can also call other OCR services by writing plug-ins.

* Support major languages

   The OCRs used support all the major languages in the world.

* Employ a variety of image processing methods to improve the results

   * Remove background

      ![](/album/imagetrans-features/image.jpg)

      ↓

      ![](/album/imagetrans-features/pure_text.jpg)

   * Strip Japanese furigana

      Before:

      ```
      Sogou OCR: えーっとはいばん灰原さんのせき席は…
	  ```

      After:

      ![](/album/imagetrans-features/no_furigana.jpg)

      ```
      Sogou OCR: えーっと灰原さんの席は…
	  ```

   * Convert vertically aligned images to horizontally aligned

      Most of the OCR models based on CRNN can only recognize text horizontally aligned, so it is necessary to convert vertical images to horizontal images when using these OCR models

      ![](/album/imagetrans-features/vertical.jpg)

      ```
      Baidu OCR: 強んな勉とら!文事なかす原るん日で灰すみ今
	  ```

      ↓

      ![](/album/imagetrans-features/horizontal.jpg)

      ```
      Baidu OCR: 今日からみんなと勉強する事になった灰原哀さんです!
	  ```

* Post-processing of the text: remove line breaks, spaces
* Use spellcheck to improve the result

   ![](/album/imagetrans-features/spell_check.jpg)

### Translation assist

It can call a variety of machine translation engines. It also supports translation memory and term management and other common functions of computer-aided translation software

### Precise text removal and reinjection

The software can use tools and algorithms like Sickzil-Machine, binarization, PatchMatch to generate text mask and remove text. It can refill the translation and automatically adjust the font size according to the position and area of text regions. All the above operations support manual adjustment.

![](/album/imagetrans-features/text-removal-and-reinjection.jpg)

### Interoperability

* It can use scripts to save the results as Photoshop's PSD files.
* It can export the data to Excel, Word, XLIFF files, or import data from these files
* With the Chrome Extension, it is possible to translate pictures on web pages directly

### Cross-platform

Like BasicCAT, ImageTrans is cross-platform (Windows, MacOS, Linux). It can also run as a server.

### Others

* Global font style
* Automatic detection of background color and text color
* Batch processing

## Examples of Translated Comics

Come to me, Love —— From issue 41, Boy Loves Girls (Golden age comics).

Browsing Page: <http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

Text Searching Page: <http://comics.xulihang.me/search.html>

## Get a Copy

1. Mail to [admin@basiccat.org](mailto:admin@basiccat.org) to apply for purchasing ImageTrans.
2. Complete the payment with Paypal or Alipay.
3. You will get a download link and an email.

Or self purchase on FastSpring: [link](https://basiccat.onfastspring.com/).

Pricing:

* ImageTrans for personal use: $10.99
* ImageTrans for commercial purpose: $200

Free update within half a year.

Please follow the [installation instruction](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2).

If you are from academic institutions, you can email to [admin@basiccat.org](mailto:admin@basiccat.org) with your institution's email to get a discount. Please tell us who you are and what you are gonna do with ImageTrans.

## More

* [Documentation](https://imagetrans.readthedocs.io/en/latest/)
* [Release Notes](/imagetrans/release-notes/)
* [Video Tutorials and Demos](/imagetrans/video/)
* [Frequently Asked Questions](/imagetrans/faq/)
* [Technical Support](/support/)
* [Blog](/tagged/#imagetrans)

## Related tools

* [WebP-Converter](https://github.com/xulihang/WebP-Converter). Convert JPG/BMP/PNG to WebP and vice versa.
* [WebImageHelper](https://github.com/xulihang/WebImageHelper). Download all the images from websites or download the image under the mouse cursor based on screen positions. This can be used to translate images in web. Images can be replaced with their target version.

{% include comments.html %}

