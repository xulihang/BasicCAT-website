---
title: ImageTrans - Computer-aided Image and Comic Translation Tool
layout: page
---

## Intro

ImageTrans is a computer-aided image and comic translation tool. It can automatically locate text areas and perform OCR operations using state-of-art OCR technology and a homebrew text areas merging and detecting algorithm, which is specially designed for comics (also webtoon, manga, manhwa and manhua). The original text can be automatically erased and the translation be reinjected.

ImageTrans has a high interoperability that it can export text to Word and Excel files and use scripts to interact with image editors like Photoshop.

ImageTrans is also a computer-aided translation (CAT) tool, which supports corpus concordance, translation memory, terminology management and machine translation. It has a sound effects words search engine designed for comics. All of these are designed to help translators complete their jobs with quality and efficiency.

ImageTrans is cross-platform (Windows/Mac/Linux) as same as BasicCAT.

Documentation: <https://imagetrans.readthedocs.io/>

ImageTrans is the result of the thesis for my master's degree: [Design and Implementation of a Computer-Aided Comics Translation Tool](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool).

## Video Tutorials and Demos

### Getting Started

<iframe width="560" height="315" src="https://www.youtube.com/embed/DQarSxT9OPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Translation of Japanese Manga

<iframe width="560" height="315" src="https://www.youtube.com/embed/S_6FF-5zTns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The above operations can be done in a fully automated way: <https://www.youtube.com/watch?v=QVTjmW4B-LQ>. But the translation quality can only be guaranteed with human intervention. 

### Text Areas Detection

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### Translation Reinjection

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
	
### Corpus and Sound Effects Words Search

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### Chrome Image Translator Extension

<iframe width="560" height="315" src="https://www.youtube.com/embed/R7pv02jwL_k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Using ImageTrans's [Chrome Extension](https://github.com/xulihang/ImageTrans_chrome_extension), images in webpage can be translated directly.

### Automatic Translation Server

<video src="https://github.com/xulihang/BasicCAT-website/releases/download/attachments/imagetrans_server.mp4" controls="controls">
Your browser does not support video element.
</video>

For now, the online version does not support running multiple instances. The language parameters of machine translation and OCR need to be set manually. The default language pair is Chinese to English. 

Please note that the automatic translation result may not be satisfying which needs fine-tuning by human. Fine-tuning support is one of the characteristics of ImageTrans.

[Link to the server](http://www.xulihang.me:51045/upload.html)
	
## Examples of Translated Comics

Come to me , Love —— From issue 41, Boy Loves Girls (Golden age comics).

Browsing Page: <http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

Text Searching Page: <http://comics.xulihang.me/search.html>	

## Get a Copy	

1. Mail to [admin@basiccat.org](mailto:admin@basiccat.org) to apply for purchasing ImageTrans.
2. Complete the payment with Paypal or Alipay.
3. You will get a download link and an email.

Or self purchase on FastSpring: [link](https://basiccat.onfastspring.com/).

Pricing:

* ImageTrans for personal use: $10
* ImageTrans for commercial purpose: $200

Free update within half a year.

Please follow the [installation instruction](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2).

If you are from academic institutions, you can email to [admin@basiccat.org](mailto:admin@basiccat.org) with your institution's email to get a discount. Please tell us who you are and what you are gonna do with ImageTrans.

## Support

See [support](/support/).

## Relevant Posts

[Design a good raw Japanese manga reader](http://blog.xulihang.me/design-a-good-raw-Japanese-manga-reader/)

## Releases Notes

### v1.2.10

* New OCR plugin: ABBYY Cloud
* Support spellchecking of OCR results using LanguageTool 

### v1.2.9

* Flip boxes before sorting them if the reading order is right to left
* Add inpaint radius setting in TextRemover
* Add Theme. Currently, there are dark and green themes available.
* Use my personal keys by default for machine translation services like Baidu, Niutrans and Tencent and OCR services like OCRSPACE, Azure and Baidu.

### v1.2.8

* Add Undo Manager
* Use TextFlow as the default Text Renderer. Text will not no longer be truncated
* Text size and layout will be the same after percent switching
* Other improvements

### v1.2.7

* Supports running multiple tesseract instances to increase OCR speed
* Save verification for 7 days
* Sogou OCR supports right to left text order
* Add Baidu OCR accurate
* Fix Find and Replace problems caused by incorrect box jumping behavior and UI localization

### v1.2.6

* Convert WebP format images to JPG ones for images downloaded with links (using OpenCV) 
* Support stripping furigana in Japanese manga for better ocr results
* Better conversion of vertically displayed Japanese textareas to horizontally displayed ones (rotation and center placement of characters like —)
* Fontstyle Unifying operation
* Textareas generated by OCR will also be expanded

### v1.2.5

* Fix a target geometry setting problem
* Mask Editor can use cursor to draw circle or clear circle
* Add Capital Letter font setting
* Add minimum width/height overlapped percent setting for text localization
* Fix a overlapped box not added problem
* The Photoshop script supports styles like bold, italic, capitalization and rotation.

### v1.2.4

* Add Chrome Extension support. Visit [here](https://github.com/xulihang/ImageTrans_chrome_extension) to see detailed instruction.
* Mask, text-removed and exported images will not no longer be imported
* Fix the incorrect behavior of creating new projects which was caused by the recent projects feature introduced in v1.2.2
* Other improvements

### v1.2.3

* Add Translate after OCR option
* When viewing transated version in non-precise text-removal mode, the text box will be transparent to to reveal the source text
* Batch Translation can call balloon detection and scene text detection
* Silent Translator supports font setting
* Add a context menu item to download images from links and add them to the project

### v1.2.2

* Add Silent Translator to support bulk transaltion, which can be called through command line or run as a [server](https://github.com/xulihang/ImageTrans_Server)
* New OCR plugin: sogou deep intelligence ocr
* Save recent projects path
* Ask if merge boxes if OCR is chosen for Batch translation

### v1.2.1

* Multiple-box dragging 
* Multiple-box alignment
* Add background color, stroke and rotation to global font style
* Add paste image context menu item

### v1.2.0

* If right2left, append text of the latter one first
* Add mask generator and inpaint plugins support. The first plugin of this kind is [Sickzil-Machine](https://github.com/xulihang/SickZil-Machine)
* Add Tesseract's text lines detection
* Add operations like single-image pretranslation and one-click translation (see the imageviewer's contextmenu)
* Replace scene text detection with OCR for Batch Translation (or one-click translation)
* Add mininum font size setting
* Add automatic textarea resize option
* Use checkbox instead of button to view translated pictures
* Search and Replace supports replacing source text
* Other minor improvements

### v1.1.11

* New OCR plugin: [easyOCR](https://www.jaided.ai/easyocr), tencent
* OCR languages list only shows languages OCR engines support
* Save the geometry to target geometry before expanding
* Fix the localization of TabPane

### v1.1.10

* Add machine translation for screen reader
* Remove some third-party libraries

### v1.1.9

* Update OpenCV to 4.5.0
* Support getting text area confidence in offline mode and show progress
* New OCR plugin: WinRT OCR. It uses the built-in OCR API of Windows Runtime on Windows 10. It requires installation of relevant languages on the system
* Some machine translaiton plugins of BasicCAT are packaged
* UI improvements

### v1.1.8

* Generate mask and text-removed images accroding to order and show progress
* Inpainting is now asynchorous
* Validate geometry before generating text mask
* Fix a resized mask not matching with resized image problem
* Add text area action menu to imagescrollpane

### v1.1.7

* Maskeditor can now regenerate mask of selected area and scale images
* Text Remover can remove text in selected area
* The default text mask color is reset to red
* Add text-removed image editor
* Bugfixes

### v1.1.6

* Save text mask in png format, making cover text mode supports areas which have a black ground
* New action: Duplicate text area

### v1.1.5

* Vertical text engine for CJK (Chinese, Japanese and Korean)
* AutoCorrect (useful for solving the full-width punctuations input problem on macOS)
* Bugfixes

### v1.1.4

* Toolbar has a new tool: Font
* New project and import pictures actions now share a same saved path.
* Better color picking


### v1.1.3

* New plugin: OCR plugin. Code is open source: [github](https://github.com/xulihang/ImageTrans_plugins). PaddleOCR is supported.
* New ocr engine: ABBYY (use ABBYY FineReader's [command line interface](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms), windows only)
* New tool: Screen Reader. It can be used as a screenshot tool and screen captures can get OCRed immediately. Captures can also be appended to ImageTrans's projects.
* A Toolbar is added to provide more operations like text box splitting, merging and selecting.
* MouseCursors are set correctly for different scenarios.

### v1.1.2

New option to convert vertically aligned Japanese text to horizontally aligned for better OCR results.

### v1.1.1

* Add Batch Translation
* Add text areas detection based on scene text detection
* Save paths for choosing files and folders

### v1.1.0

* Add external inpainter (experimental)
* Add localization support. ImageTrans can now be displayed in two languages: English and Chinese.

### v1.0.1

* More settings
* RichText support
* XLIFF import and export

### v1.0.0

Released.

## Relevant tools

* [WebP-Converter](https://github.com/xulihang/WebP-Converter). Convert JPG/BMP/PNG to WebP and vice versa.
* [WebImageHelper](https://github.com/xulihang/WebImageHelper). Download all the images from websites or download the image under the mouse cursor based on screen positions. This can be used to translate images in web. Images can be replaced with their target version.

{% include comments.html %}