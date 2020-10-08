---
title: ImageTrans - Computer-aided Image and Comic Translation Tool
layout: page
---

## Intro

ImageTrans is a computer-aided image and comic translation tool. It can automatically locate text areas and perform OCR operations using state-of-art OCR technology and a homebrew text areas merging and detecting algorithm, which is specially designed for comics, including manga and manhua. The original text can be automatically erased and the translation be reinjected.

ImageTrans has a high interoperability that it can export text to Word and Excel files and use scripts to interact with image editors like Photoshop.

ImageTrans is also a computer-aided translation (CAT) tool, which supports corpus concordance, translation memory, terminology management and machine translation. It has a sound effects words search engine designed for comics.

ImageTrans is cross-platform (Windows/Mac/Linux) as same as BasicCAT.

Documentation: <https://imagetrans.readthedocs.io/>

## Video Tutorials

### Getting Started

<iframe width="560" height="315" src="https://www.youtube.com/embed/DQarSxT9OPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Text Areas Detection

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### Translation Reinjection

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
	
### Corpus and Sound Effects Words Search

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	
	
## Examples of Translated Comics

Come to me , Love —— From issue 41, Boy Loves Girls (Golden age comics).

Browsing Page: <http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

Text Searching Page: <http://comics.xulihang.me/search.html>	

## Get a Copy	

Visit [here](https://basiccat.onfastspring.com/) to purchase ImageTrans. You will get a download link and an email.

There are three version:

* ImageTrans for personal use [(link)](https://basiccat.onfastspring.com/imagetrans)
* ImageTrans for commercial purpose [(link)](https://basiccat.onfastspring.com/imagetrans-commercial-purpose)
* ImageTrans 7 days trial [(link)](https://basiccat.onfastspring.com/imagetrans-trial)

Please follow the [installation instruction](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2).

If you are from academic institutions, you can email to [admin@basiccat.org](mailto:admin@basiccat.org) with your institution's email to get a discount. Please tell us who you are and what you are gonna do with ImageTrans.

## Releases Notes

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
* New ocr engine: ABBYY (use ABBYY FineReader's command line interface, windows only)
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


{% include comments.html %}