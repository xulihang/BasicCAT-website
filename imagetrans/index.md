---
title: ImageTrans - Computer-Aided Image and Comic Translation Tool
layout: page
---

## Introduction

ImageTrans is a computer-aided image and comic translation tool. It can automatically locate text areas and perform OCR operations using state-of-art OCR technology and a homebrew text areas merging and detecting algorithm, which is specially designed for comics (also webtoon, manga, manhwa and manhua). The original text can be automatically erased and the translation be reinjected.

![](/album/imagetrans.jpg)

ImageTrans can be used not only as an image translator, but also an image reader, an image transcriber and a deep learning annotator.

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

It can call a variety of machine translation engines. It also supports translation memory, corpus concordance, term management and other common functions of computer-aided translation software. It has a sound effects words search engine designed for translating comics.

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

ImageTrans is available for purchase on FastSpring: [link](https://basiccat.onfastspring.com/).

Pricing:

* ImageTrans for personal use: $10.99
* ImageTrans for commercial purpose: $200

Free update within half a year.

Please follow the [installation instruction](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2).

If you are from academic institutions, you can email to [admin@basiccat.org](mailto:admin@basiccat.org) with your institution's email to get a discount. Please tell us who you are and what you are gonna do with ImageTrans.

If you cannot complete the payment, please [contact me](mailto:admin@basiccat.org).

## More

* [Documentation](https://imagetrans.readthedocs.io/en/latest/)
* [Video Tutorials and Demos](/imagetrans/video/)
* [Frequently Asked Questions](/imagetrans/faq/)
* [Technical Support](/support/)
* [Blog](/tagged/#imagetrans)

## Release Notes

### v1.4.3 (2021/08/05)

* Fix a problem that when the toolbar is switched to font settings, it does not load the font settings of the current text area
* Fix a problem that the vertical center button is not updated when a new text area is selected
* Improve the vertical center effect
* Other improvements

### v1.4.2 (2021/07/25)

* Fix a problem that the program fails to export a target image which has a high resolution (width or height > 8000 pixels
* AutoFontSize is available for vertically arranged text areas
* Change the text areas adjusting behavior of vertically arranged text areas to meet the change made in 1.4.1 which aligns the text to the right: move the mouse to the left of the text area to resize and the right to adjust positions
* Other improvements

### v1.4.1 (2021/07/18)

* Add a vertical align option [#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72)
* Add a shortcut to remove selected areas [#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71)
* If the text mask is not saved as a file and there is no new, deleted or adjusted text areas, the program will not regenerate text-removed images
* Add Hindi, Vietnamese and Indonesian to the default languages list (In the previous versions, we have to input the language codes manually) [#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61)
* Vertically arranged text will start from the right by default
* Other improvements

### v1.4.0 (2021/06/14)

* Add "Save as" menu item
* Add "Navigation" menu
* Add Translated Images Manager. Images marked as translated will be skipped during batch operation ([#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59))
* The Text Editor is dockable
* Use Spinner to adjust the display percentage
* Close the current project automatically when opening a new project ([#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39))

### v1.3.7 (2021/05/04)

* Save the previous state of ToolBar [#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47)
* Fix an exported data containing no translation problem [#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45)

### v1.3.6 (2021/05/02)

* The two context menu items: Delete and invert confidence, now support handling multiple text areas
* When the Control key is pressed, it is possible to select multiple text areas by clicking them
* Add `Clear text` menu item (clear source, target or source+target)
* Other improvements

### v1.3.5 Update2 (2021/04/26)

* Display a warning when users import pictures without opening a project
* Add JPEG extension

### v1.3.5 Update (2021/04/06)

* Language Pair Selector will not appear opening a previous project
* Use the current image's name as the Image Combobox's tooltip

### v1.3.5 (2021/03/30)

* Improve the batch machine translation function. Baidu now supports batch translation.
* Add an Auto Params option to heuristic text localization (experimental).
* Improve global font styles manipulation. It is possible to move them up and down and import styles from other projects.
* Users will be asked to select language upon project creation
* Unify the font color picker
* Improve the undo manager

### v1.3.4 (2021/03/27)

* Resolved issues on GitHub: [#16](https://github.com/xulihang/ImageTrans-docs/issues/16), [#19](https://github.com/xulihang/ImageTrans-docs/issues/19), [#22](https://github.com/xulihang/ImageTrans-docs/issues/22), [#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

### v1.3.3 (2021/03/23)

* Update [ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR). Added [ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite). It now supports a free combination of different text detection and text recognition methods. The plugin is updated as well.
* Fix an index over items size problem during bulk OCR. [Related issue](https://github.com/xulihang/ImageTrans-docs/issues/6)
* Add OCR interval setting

### v1.3.2 (2021/03/07)

* Scale images too small before OCR
* Localize missed layouts
* New OCR plugin: CRAFT+CRNN. This is based on the new [ImageTrans_OCR project](https://github.com/xulihang/ImageTrans_OCR). It is planned to be a hub of offline OCR engines which have good customizability, accuracy and speed.


### v1.3.1 (2021/02/28)

* New OCR plugin: Naver's Clova OCR.
* Support merging and deleting areas with box selection
* Add an option to auto OCR after box creation
* Add shortcuts to manipulate text areas (move and OCR)
* Offline balloon (bubble) detection which is based on OpenCV's Dnn. Models trained with [DarkNet](https://zhuanlan.zhihu.com/p/346021510) or [TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API) are supported. Model weights and model config files need to be put under the root of ImageTrans along with a model.json file ([example](/assets/model.json)) 
* The text editor can display source text and target text in a vertical mode.

### v1.3.0 (2021/02/10)

* Custom workflow. Batch operations can be customized
* Support importing PDF. PDF files will be rendered to images. Text will be extracted if possible

### v1.2.11

* Fix a target geometry not being correctly saved problem
* Fix a file path problem of Photoshop scripts
* MaskEditor can generate textmask using selected color. Mask can now be set to translucent.
* Support batch machine translation with ColorfulClouds which will significant improve machine translation speed
* It is now possible to set machine translation interval to avoid failed requests due to too many requests in a short period of time (QPS set by MT services) 

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
* Use TextFlow as the default Text Renderer. Text will no longer be truncated
* Text size and layout will be the same after percent switching
* Other improvements

### v1.2.7

* Supports running multiple tesseract instances to increase OCR speed
* Save verification for 7 days
* Sogou OCR supports right-to-left text order
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
* Mask Editor can use the cursor to draw a circle or clear a circle
* Add Capital Letter font setting
* Add minimum width/height overlapped percent setting for text localization
* Fix an overlapped box not being added problem
* The Photoshop script supports styles like bold, italic, capitalization and rotation.

### v1.2.4

* Add Chrome Extension support. Visit [here](https://github.com/xulihang/ImageTrans_chrome_extension) to see detailed instructions.
* Mask, text-removed and exported images will no longer be imported
* Fix the incorrect behavior of creating new projects which was caused by the recent projects feature introduced in v1.2.2
* Other improvements

### v1.2.3

* Add Translate after OCR option
* When viewing translated version in non-precise text-removal mode, the text box will be transparent to reveal the source text
* Batch Translation can call balloon detection and scene text detection
* Silent Translator supports font setting
* Add a context menu item to download images from links and add them to the project

### v1.2.2

* Add Silent Translator to support bulk translation, which can be called through command line or run as a [server](https://github.com/xulihang/ImageTrans_Server)
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
* Add minimum font size setting
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
* Some machine translation plugins of BasicCAT are packaged
* UI improvements

### v1.1.8

* Generate mask and text-removed images according to order and show progress
* Inpainting is now asynchronous
* Validate geometry before generating text mask
* Fix a resized mask not matching with the resized image problem
* Add text area action menu to imagescrollpane

### v1.1.7

* Maskeditor can now regenerate mask of selected area and scale images
* Text Remover can remove text in the selected area
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
* New project and import pictures actions now share the same saved path.
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

## Related tools

* [WebP-Converter](https://github.com/xulihang/WebP-Converter). Convert JPG/BMP/PNG to WebP and vice versa.
* [WebImageHelper](https://github.com/xulihang/WebImageHelper). Download all the images from websites or download the image under the mouse cursor based on screen positions. This can be used to translate images in web. Images can be replaced with their target version.

{% include comments.html %}

