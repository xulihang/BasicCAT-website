---
title: Release Notes of ImageTrans
layout: page
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v3.10.0 (2024/09/07)

* Add support for using horizontal text within vertical text [#issue507](https://github.com/xulihang/ImageTrans-docs/issues/507)
* Add new rich text format for horizontal text engine: underline and strikethrough
* Clear the guide lines after the mouse is released or the refresh operation is performed
* Allow setting offsets for vertical text engine
* Save the target geometry after restraining text boxes within the image

## v3.9.0 (2024/09/01)

* Allow using a dialog to select which balloon detection model to use
* New alignment: justify
* Add guides and auto snap for aligning the text boxes [#issue733](https://github.com/xulihang/ImageTrans-docs/issues/733)
* Allow calling the engine 2 of OCRSpace
* Allow case conversion for the source text before machine translation

## v3.8.0 (2024/08/25)

* Panel detection can now handle dark background images automatically [#issue741](https://github.com/xulihang/ImageTrans-docs/issues/741)
* It is now possible to set the background for the exported comics in webtoon format 
* Add a new operation to remove areas and add missing areas using balloon detection
* Fix the problem that if the inverted mode is enabled, the text merging operation is not using the inverted image
* For batch operations, we can now set whether to enable text areas filtering based on confidence
* We can put the balloon detection models under the `models` folder and select which model to use in the project settings
* Enable offline balloon detection by default
* Add a new context meun item to run one-click translation using custom workflow
* New templates: Chinese manhua, webtoon (korean) and comics.
* Templates can specify whether the user need to set the language pair and download the balloon detection model

## v3.7.0 (2024/08/18)

* Scene text detection can now handle oriented text
* InsetRect Mask Generator can now handle oriented text areas
* Text detection operations only check overlapping with existing text areas
* Use the bounding rectangles of oriented text areas for inpainting by box
* Fix the width and height of text areas imported from OBB-format annotations
* Fix the merging of text areas rotated by 90 degrees during object detection
* Fix the calling of non-ONNX models
* Fix the image shift in mask editor and text remover when the selection is out of the image

## v3.6.1 (2024/08/17)

* Add support of YOLO OBB to detect oriented text
* Server can use custom workflow
* Fix the problem that the rotated text areas are not rotated back after the rotation is canceled
* Fix the problem that the rotation is not applied to oriented text areas detected by OCR

## v3.6.0 (2024/08/10)

* Add a project settings: pixels to expand when inpainting by text areas
* Add a menu item to shrink the text areas
* Add an operation to resize the text areas according to the text mask
* Add Image Orientation Fixer. It can be used to fix the orientation of photos taken by an iPhone or a Samsung phone based on Exif
* Add a context menu item to merge with the next image
* Automatically fix the orientation of downloaded images
* Improve the image switching during batch operations
* Add "Append OCR results to text areas" into custom workflow
* Enable dragging and inpainting by text areas by default
* Fix the problem that baidu machine translation does not handle multi-line text

## v3.5.0 (2024/07/28)

* Allow dragging the four corners to adjust the size and position of text boxes
* Use double to store the target geometry
* Panels can be exported into one long image

## v3.4.0 (2024/07/21)

* Add support of importing files in the following formats: epub, mobi, zip and cbz
* Add Plugin Helper to manage plugins
* Add edit toolbar to rotate and flip the images
* Add Spread Manager. Images set as spread will be splitted into the left image and the right image for boxes sorting and panel detection
* It is now possible to set the params of inpainter and mask generation plugins in Preferences
* Fix the problem that the text-removed image is not loaded correctly in the Text Remover
* Store the machine translation results of multiple sentences

## v3.3.1 (2024/07/06)

* Fix the problem that the boxes are not redrawn during percentage switching
* Fix the problem that the balloon detection results lose the class names if they are merged

## v3.3.0 (2024/06/30)

* Add top padding to font style settings
* Add context menu items for text area operations in search and replace
* Add operations like removing outer areas and detecting text direction in custom workflow
* Prompt the user whether to import the images existing in the directory of the project file
* Improve the performence of switching the percentage
* Update PDFBox to fix the import of Japanese PDF

## v3.2.1 (2024/06/24)

* Add panel detection and sorting to batch translation
* Improve the behavior of horizontal text engine when the "do not break words" option is enabled

## v3.2.0 (2024/06/23)

* Add a menu item to start a new project based on template [#issue688](https://github.com/xulihang/ImageTrans-docs/issues/688)
* Allow displaying the font style name in text box
* Better support for classes for object detection
* Fix the problem that the shortcut defined by default may not work if it is set for another menu item [#issue630](https://github.com/xulihang/ImageTrans-docs/issues/630)
* Fix the problem that OpenCV fails to load models under paths containing Unicode characters

## v3.1.1 (2024/06/12)

* Add "Get text area confidence" to custom work flow
* Add the confidence threshold project setting
* Add a project setting to correct the order of text of the OCR result of one area
* Fix a problem that OCR plugins with combinations are not listed in preferences
* Fix a problem that the text using horizontal text engine becomes white under a dark theme
* Fix a problem that the text areas with text fail to merge if the reading order is set to right to left

## v3.1.0 (2024/06/10)

* Add a custom color picker in the image color picker
* Use the image color picker in the TypeSetting form
* Custom workflow can process the current image only
* New custom workflow items: use the detected text color as the stroke color, set the stroke color based on the depth of the text color, set the text color based on the depth of the stroke color, match font style based on stroke color
* Fix the encoding problem of the languages list for WinRT OCR

## v3.0.0 (2024/06/08)

* Update JRE to Java 23 to fix the text wrapping problem affected by leading and trailing spaces  [#issue482](https://github.com/xulihang/ImageTrans-docs/issues/482)
* The style of text boxes can be customized
* Mask editor can draw selection in any direction

## v2.12.4 (2024/06/02)

* Enable vertical center alignment by default
* If SHIFT is pressed, we can drag text areas without changing its horizontal position. If Z is pressed as well, the vertical position will be kept
* Fix a problem that the rich text BBCode markup is not effective when it encloses line breaks
* Fix a problem that the selection status is reset when switching translation mode

## v2.12.3 (2024/05/23)

Fix a problem for PS scripts that vertical center and horizontal center with rich text mode enabled is not effective

## v2.12.2 (2024/05/19)

* Allow using a bridge language for machine translation [#issue647](https://github.com/xulihang/ImageTrans-docs/issues/647)
* Fix a problem that the batch operation is interrupted if the mask generation during OCR is failed [#issue650](https://github.com/xulihang/ImageTrans-docs/issues/650)
* Fix the inconsistent resolution problem when the image is generated by server using a display percentage other than 100%

## v2.12.1 (2024/05/12)

Allow being called by the server for OCR and machine translation

## v2.12.0 (2024/05/11)

* New project setting: do not break words
* New preference: select the first text area after image switching [#issue642](https://github.com/xulihang/ImageTrans-docs/issues/642)
* Use pseudo classes to improve the CSS usage for text boxes [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* New export option: Panels. Panels can be exported as PDFs or images
* Add coordinates and text to the response of the server


## v2.11.2 (2024/05/02)

* Fix a problem that in the exported docx file, if the target text is empty, the width of the target text column is zero [#issue639](https://github.com/xulihang/ImageTrans-docs/issues/639)
* Allow styling the text box using CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Fix a text display problem using vertical center alignment or horizontal center alignment caused by using double for positioning

## v2.11.1 (2024/04/26)

* Fix a problem that the machine translation results of the previous text area are displayed after switching to another text area [#633](https://github.com/xulihang/ImageTrans-docs/issues/633)
* Fix a problem in find and replace searching repeated characters [#631](https://github.com/xulihang/ImageTrans-docs/issues/631)
* Quick box creation can be used in all directions [#629](https://github.com/xulihang/ImageTrans-docs/issues/629)
* Concurrently get the machine translation results in the translation assist tab [#628](https://github.com/xulihang/ImageTrans-docs/issues/628)
* Fix a problem that the font list is not updated promptly after font installation

## v2.11.0 (2024/04/21)

* New menu item to create text areas based on template [#issue626](https://github.com/xulihang/ImageTrans-docs/issues/626)
* The selection of text areas will not be reset after applying typesettings using the typesetting dialog  [#issue623](https://github.com/xulihang/ImageTrans-docs/issues/623)
* Add duplicate to the menu bar [#issue622](https://github.com/xulihang/ImageTrans-docs/issues/622)
* Machine translation plugins can return multiple candidates in the translation assist tab [#issue619](https://github.com/xulihang/ImageTrans-docs/issues/619)


## v2.10.3 (2024/04/15)

* Fix a problem that auto saving is not enabled if a project is opened as a recent project
* Fix a problem that the interval of auto saving is not effective immediately after the preference is applied
* Fix a problem that the saving status of a project is not reset when switching projects
* Backup files of the current project will be created upon application exit

## v2.10.2 (2024/04/13)

* Support setting the width and height of an ONNX balloon detection model
* Support setting the index of the panel through double clickng
* Add "Merge" to the context menu for text areas
* Add two new sorting criteria: first horizontal and then vertical, first vertical and then horizontal

## v2.10.1 (2024/04/04)

* Allow detecting balloons and exporting annotation data using sliding window
* Use the balloon detection model placed in the image folder of a project in priority

## v2.10.0 (2024/03/30)

* Update OpenCV to 4.9.0
* Add support for Yolo v8 object detection (put the onnx model named as `model.onnx` to the root of the program to use it)
* Add Object Detection Annotation Data Manager to export and import annotated data in Yolo's format

## v2.9.2 (2024/03/24)

* Add "Copy text" to context menu
* ScreenReader can now append OCR results with text location into the project
* Add Y diff and height diff parameters for Faux Italic in horizontal text engine
* Fix a bug introduced in 2.9.1 that wrong image files are used in batch processing [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)
* Fix a bug that appending a new text area will reset the text of the current selected text area with AutoSave enabled [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)

## v2.9.1 (2024/03/17)

* Add Transparency Remover. It can generate JPG files without the alpha channel, which can solve the problem that most OCR and image processing methods cannot handle transparent images correctly [#issue593](https://github.com/xulihang/ImageTrans-docs/issues/593)
* If pure-text images exist, use them first in all kinds of image processing. They were only used for OCRing text areas before this update
* New precise text removal mode: transparent text. It can restore the background based on nearby pixels and the text mask. It is mainly designed to remove text on transparent background  [#issue302](https://github.com/xulihang/ImageTrans-docs/issues/302)
* Fix a problem that the mouse events are not triggered above transparent image content

## v2.9.0 (2024/03/17)

* Enable AutoSave by default
* The default text alignment is set to left align
* Add a project setting to export translated images flipped horizontally [#discussion592](https://github.com/xulihang/ImageTrans-docs/discussions/592)
* The rich text function for vertical text engine now supports setting font sizes
* Vertical text engine can handle empty lines correctly
* Fix the line spacing for vertical text engine
* Fix a problem for rich text code editor that the font list is reset when the editor is toggled  [#issue587](https://github.com/xulihang/ImageTrans-docs/issues/587)

## v2.8.8 (2024/03/09)

* Merge text based on paragraph position [#issue586](https://github.com/xulihang/ImageTrans-docs/issues/586)
* Add interval for long-image OCR and ballon detection

## v2.8.7 (2024/03/04)

* Fix a text area merging problem due to incorrect sorting
* Fix the multi-line problem for baidu machine translation

## v2.8.6 (2024/03/01)

* Fix the problem that line breaks are removed when merging text areas with "Auto Remove Line Breaks" unchecked
* Set the horizontal span and vertical span for text merging in Screen Reader to width/2 or height/2

## v2.8.5 (2024/02/25)

* New PDF export options: "add searchable text overlay" and "use source images" [#issue580](https://github.com/xulihang/ImageTrans-docs/issues/580)
* New operation to generate text areas from mask images [#issue577](https://github.com/xulihang/ImageTrans-docs/issues/577)

## v2.8.4 (2024/02/15)

Optimize the text order when merging text areas [#issue576](https://github.com/xulihang/ImageTrans-docs/issues/576)

## v2.8.3 (2024/02/08)

* Font preview in the toolbar's font combox box [#issue567](https://github.com/xulihang/ImageTrans-docs/issues/567)
* Translated images will be skipped when exporting the final result and mask images [#issue548](https://github.com/xulihang/ImageTrans-docs/issues/548)
* Translated images manager can select exported images
* Fix a problem that Auto Font Size will reset the bold and italic settings of a global font style [#issue565](https://github.com/xulihang/ImageTrans-docs/issues/565)
* Other bugfixes

## v2.8.2 (2024/01/21)

* Add global shortcut support for Screen Reader [#issue237](https://github.com/xulihang/ImageTrans-docs/issues/237)
* Screen Reader's layout is now adjustable
* Add an option to import source text as well when importing translation [#issue557](https://github.com/xulihang/ImageTrans-docs/issues/557)
* New PDF import mode: extraction mode

## v2.8.1 (2024/01/15)

* Fix the incorrect text order using the toolbar to merge areas
* Fix the merging based on punctuations in right to left reading order
* Fix the problem that the window is not hidden when capturing a screenshot
* Decide whether to add spaces between two merged boxes based on whether the language has spaces

## v2.8.0 (2024/01/14)

* Add a "Correct text order" option for Screen Reader [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/553)
* Screen Reader can read a fixed area at intervals. It can also detect whether that area's content has changed. The alpha of the fixed area window can be adjusted [#issue521](https://github.com/xulihang/ImageTrans-docs/issues/521)
* New "Text merging" project settings. We can now merge text based on the end-of-sentence punctuations. Meanwhile, separation checking can be skipped if the text area has text [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/552)
* Display file name in the results of Find and Replace
* Fix a problem that extra settings of text areas are not kept using the toolbar to merge

## v2.7.1 (2024/01/01)

* LLM models like ChatGPT and Gemini can use terms to improve the translation results [#issue546](https://github.com/xulihang/ImageTrans-docs/issues/546)
* Search and replace: add a new option to search in the current file and enable double clicking to jump to the selected item
* Display the search results in the order of file names in search and replace [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)


## v2.7.0 (2023/12/24)

* Add text rotation detection [#issue543](https://github.com/xulihang/ImageTrans-docs/issues/543)
* Add Localization Manager to use your own translation for the program [#issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)
* Add a new preference to disable the behavior of using the source text when no target text exists viewing the translated result [#issue541](https://github.com/xulihang/ImageTrans-docs/issues/541)
* Fix a problem that text outside the image will cause a shifted image output
* Other UX improvements

## v2.6.0 (2023/12/17)

* Improve the classification of long text areas [#issue536](https://github.com/xulihang/ImageTrans-docs/issues/536)
* Add a welcome form
* Add a status bar to show the number of images and the current index [#issue535](https://github.com/xulihang/ImageTrans-docs/issues/535)
* Add an option to sort based on horizontal ordinate [#issue533](https://github.com/xulihang/ImageTrans-docs/issues/533)
* Add menu items to adjust the font size [#issue529](https://github.com/xulihang/ImageTrans-docs/issues/529)
* Remember the status of the UI like the display percentage [#issue528](https://github.com/xulihang/ImageTrans-docs/issues/528)
* Fix a problem that text areas aligned in vertical center might be shifted in large image output mode

## v2.5.7 (2023/12/03)

* Fix a problem that the text mask generated during OCR of large images is resized
* Mask Editor: add a button to remove text mask outside text areas
* New custom workflow items: remove text areas without source text for all pictures and remove text mask outside text areas for all pictures

## v2.5.6 (2023/12/02)

* Add Regular Expression support for AutoCorrect  [#issue520](https://github.com/xulihang/ImageTrans-docs/issues/520)
* Fix the lag of dragging text areas in high DPI scale levels [#issue524](https://github.com/xulihang/ImageTrans-docs/issues/524)
* Add a context menu item to clear the images of the project for the image combo box [#issue516](https://github.com/xulihang/ImageTrans-docs/issues/516)

## v2.5.5 (2023/11/25)

* Add menu items: "Sort" and "Fill in MT/TM"
* Text mask can be generated during OCR

## v2.5.4 (2023/11/12)

* Add a project setting to generate text mask during scene text detection
* Spellcheck supports checking the target text [#issue514](https://github.com/xulihang/ImageTrans-docs/issues/514)
* Add a project setting to preset the options for batch operations [#issue515](https://github.com/xulihang/ImageTrans-docs/issues/515)
* Use ellipsis for long project paths [#issue509](https://github.com/xulihang/ImageTrans-docs/issues/509)

## v2.5.3 (2023/10/09)

* Fix a position problem of the rotated text using large image output mode [#issue499](https://github.com/xulihang/ImageTrans-docs/issues/499)
* Enable multiple selection in Find and Replace [#issue498](https://github.com/xulihang/ImageTrans-docs/issues/498)
* The embedded web browser can use JavaScript interop to perform a lookup without refreshing the page [#issue500](https://github.com/xulihang/ImageTrans-docs/issues/500)

## v2.5.2 (2023/10/01)

* Improve the performance of the Mask Editor. It can now load very large images. [#issue494](https://github.com/xulihang/ImageTrans-docs/issues/494)
* Post-processing of text like space removing is applied for whole-image OCR

## v2.5.1 (2023/09/24)

* New settings for vertical text engine: first characters to move up [#issue490](https://github.com/xulihang/ImageTrans-docs/issues/490)
* In the manager of translated images, we can set it to hide translated images in the editing interface [#issue488](https://github.com/xulihang/ImageTrans-docs/issues/488)

## v2.5.0 (2023/09/16)

Center alignment support for vertical text engine

## v2.4.1 (2023/09/16)

* New project setting to specify the default output image format
* New menu item to clear the styles of text
* New preference to use the system's menu for macOS
* Add the ARM version for Mac
* Fix a ratio problem for the large image output mode
* Other bugfixes

## v2.4.0 (2023/08/26)

* Fix a problem that the text-removed image is generated twice when exporting
* Fix a problem that when switching an image, the vertical position of the scroll pane is changed before displaying the new image
* Apply stroke to the text instead of the parent pane of the text [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Add an option to apply the font style to all selected boxes in the font toolbar [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Changes made in the font settings window can be applied to all selected boxes [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1694525969)
* We can now zoom the image using the scroll wheel in drag mode with control pressed
* Add note field to term entries
* Add Term Manager

## v2.3.0 (2023/08/20)

* Fix a bug that vertical alignment is not effective with auto font size enabled
* Fix the events conflicts under drag mode
* New feature: embedded web browser [#issue483](https://github.com/xulihang/ImageTrans-docs/issues/483)

## v2.2.2 (2023/08/10)

* Fix a bug that the text is cut when the line space is over 1.0 using the horizontal text engine
* Add menu items to align text boxes [#issue479](https://github.com/xulihang/ImageTrans-docs/issues/479)

## v2.2.1 (2023/08/05)

* Mask Editor: display the mask translucently by default [#issue472](https://github.com/xulihang/ImageTrans-docs/issues/472)
* Vertical text engine: add zero-wordspace characters setting [#issue473](https://github.com/xulihang/ImageTrans-docs/issues/473)
* Bugfixes

## v2.2.0 (2023/07/30)

* New image translation plugin: Baidu Fanyi [#issue470](https://github.com/xulihang/ImageTrans-docs/issues/470)
* OCR plugins can set things like the target text and the text color of a text box
* Scale large images and divide long images before full-page OCR
* Mask editor: save the previously used color [#issue467](https://github.com/xulihang/ImageTrans-docs/issues/467)
* Fix a problem that disabling text wrapping is not effective

## v2.1.0 (2023/07/09)

* Add an option to jump to the selected text area in the image [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Add a case conversion option to Find and Replace
* Apply settings needed before exporting the target images [#issue461](https://github.com/xulihang/ImageTrans-docs/issues/461)
* If SHIFT is pressed when adjusting text areas, the aspect ratio is kept [#issue462](https://github.com/xulihang/ImageTrans-docs/issues/462)
* A new toolbar to adjust the opacity of the overlays and align the positions of the source and the target [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)
* Fix the PS script's handling of stroke [b079d40](https://github.com/xulihang/ImageTrans_PhotoshopScripts/commit/b079d40ffdf8188de0c05eeaa64f742b28e2eb00)
* Fix the problem of shifting of text areas when switching the display percentage or manually adjusting their size or position [#issue459](https://github.com/xulihang/ImageTrans-docs/issues/459)
* Fix a shortcut conflict for deleting [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Fix an invalid center align problem for vertical text engine when editing the target text [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)

## v2.0.0 (2023/07/02)

* Update the ChatGPT plugin to support specifying the model [#issue430](https://github.com/xulihang/ImageTrans-docs/issues/430)
* Add support of rotated text areas for text-removing by covering (imprecision mode)
* The unit of mask generation for rotated text areas is now the bounding box
* When the toolbar is switched to "sort", we can double-click a text area to set its order [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* New project setting: sort criteria. We can sort the text areas by the distance to the origin or the vertical coordinate [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* Whether the overlapped existing area has a smaller area is not considered when checking whether two areas overlap [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Translated images manager can perform a quick selection with conditions [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Automatically put text areas outside within the image [#issue452](https://github.com/xulihang/ImageTrans-docs/issues/452)
* Fix a bug that the text mask generated during scene text detection is scaled

## v1.9.8 (2023/05/21)

* Update the ChatGPT plugin to support batch translation by images [#issue404](https://github.com/xulihang/ImageTrans-docs/issues/404)
* The target text can be empty when importing from TXT files
* If an error occurs importing from TXT files, prompt which line is wrong [#issue412](https://github.com/xulihang/ImageTrans-docs/issues/412)
* New mask generator plugin: InsetRect [#issue413](https://github.com/xulihang/ImageTrans-docs/issues/413)

## v1.9.7 (2023/05/13)

* Fix a bug that the text is cleared after resetting the target position with the autosaving of source text and target text enabled [#issue408](https://github.com/xulihang/ImageTrans-docs/issues/408)
* Add a context menu item to delete terms

## v1.9.6 (2023/05/07)

* Fix a multi-line matching problem for Find and Replace's regular expression mode [#issue402](https://github.com/xulihang/ImageTrans-docs/issues/402)
* New export option: TMX (translation memory exchange file)
* Update the ChatGPT plugin to support third-party services [#issue401](https://github.com/xulihang/ImageTrans-docs/issues/401)

## v1.9.5 (2023/05/01)

* Update the Photoshop script in JavaScript to support rich text
* Pretranslation can use translation memory for exact matching
* New context menu item: Clear target position [#issue393](https://github.com/xulihang/ImageTrans-docs/issues/393)
* Apply the theme for all forms
* Usability optimization of font settings

## v1.9.4 (2023/04/05)

* Fix a problem that faux italic does not have a correct height for perspective transform when line space is bigger than 0
* It is now possible to adjust the stroke width for faux bold and the obliquity for faux italic

## v1.9.3 (2023/04/02)

* New export option: PDF [#issue366](https://github.com/xulihang/ImageTrans-docs/issues/366)
* New machine translation plugins: [ChatGPT](https://github.com/xulihang/ImageTrans-docs/issues/375), [Yandex](https://github.com/xulihang/ImageTrans-docs/issues/386)
* Add rich text editor [#issue390](https://github.com/xulihang/ImageTrans-docs/issues/390)
* Add support for faux bold, faux italic, font name and font size for rich text [#issue389](https://github.com/xulihang/ImageTrans-docs/issues/389)
* New setting for vertical text engine: characters replacing [#issue388](https://github.com/xulihang/ImageTrans-docs/issues/388)
* When multiple textareas are selected, some operations of one textarea are skipped.

## v1.9.2 (2023/03/05)

* Fix a problem that the target text is not joined after merging text areas
* Add a project setting to generate the text mask and text-removed images by text areas
* Save scene text detection's text mask if provided [#issue370](https://github.com/xulihang/ImageTrans-docs/issues/370)

## v1.9.1 (2023/02/19)

* Fix a bug that the BBCode is not ignored when measuring the height of the text
* Fix a bug that the BBCode is not effective when the text is set to capital
* Change the default JRE to Liberica JRE 11

## v1.9.0 (2023/02/12)

* Rich text support (based on BBCode) [#issue194](https://github.com/xulihang/ImageTrans-docs/issues/194#issuecomment-1426964710)
* Fix issues related to network requests, pressing Control to select multiple text boxes and text area's confidence

## v1.8.5 (2023/01/08)

* New OCR plugin: macOS's built-in OCR [#issue341](https://github.com/xulihang/ImageTrans-docs/issues/341)
* Support pasting an image with its path
* Use `file` to detect whether an image's format is WebP [#issue338](https://github.com/xulihang/ImageTrans-docs/issues/338)
* Fix a bug of pasting an image with data URL
* Fix a bug that the grayscale text mask is passed instead of the original text mask when using third-party inpainters as the default
* Add an option to disable AutoCorrect when inputting

## v1.8.4 (2022/11/26)

* The shortcut keys can be customized [#issue323](https://github.com/xulihang/ImageTrans-docs/issues/323)
* UI improvements

## v1.8.3 (2022/11/13)

* New feature: set the font style based on the text color detected [#issue322](https://github.com/xulihang/ImageTrans-docs/issues/322)
* ScreenReader: Display the screenshot in 100% ratio

## v1.8.2 (2022/10/29)

* In typesetting mode, hide the borders of text boxes when they are being moved (You can disable this feature in Preferences) [#issue314](https://github.com/xulihang/ImageTrans-docs/issues/314)
* New project setting: read subfolders (enabled by default) [#issue304](https://github.com/xulihang/ImageTrans-docs/issues/304)

## v1.8.1 (2022/10/05)

* Fix a problem that if the channel number of a png image is not 4, the inpainting will fail
* Fix the logic of the overlay mask checkbox

## v1.8.0 (2022/10/02)

* Add an option to export to PNG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* If the image's format is PNG, use PNG for the text-removed image and the output image. JPEG will be used for other formats [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Add a project setting to set the default text box size [#issue290](https://github.com/xulihang/ImageTrans-docs/issues/290)
* It is possible to adjust multiple textboxes' positions using shortcuts [#issue285](https://github.com/xulihang/ImageTrans-docs/issues/285)

## v1.7.11 (2022/09/18)

Fix a data exporting bug which was introduced in v1.7.8 [#issue279](https://github.com/xulihang/ImageTrans-docs/issues/279)

## v1.7.10 (2022/09/18)

* Shortcuts on macOS use the Command key instead of the Control key by default [#issue277](https://github.com/xulihang/ImageTrans-docs/issues/277)
* Improve the usablity of the mask editor [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Add vertical text engine customization settings in project settings [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271#issuecomment-1246208024)


## v1.7.9 (2022/09/12)

Improve the behavior of the vertical text engine using different fonts [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271)

## v1.7.8 (2022/09/11)

* Fix a problem that if the image's width is too large, the mask editor fails to save the mask image [#issue266](https://github.com/xulihang/ImageTrans-docs/issues/266)
* Improve the settings of font styles [#issue256](https://github.com/xulihang/ImageTrans-docs/issues/256)
* Improve the drawing mode of mask editor [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* New font style option: kerning (only valid for vertical text) [#issue224](https://github.com/xulihang/ImageTrans-docs/issues/224)

## v1.7.7 (2022/08/27)

* Use perspective transformation to get the corrected image of a rotated text area.
* Other bugfixes [#issue246](https://github.com/xulihang/ImageTrans-docs/issues/246) [#issue248](https://github.com/xulihang/ImageTrans-docs/issues/248)

## v1.7.6 (2022/08/20)

The OCR engine and language used last time will be set as the project's default. [#issue245](https://github.com/xulihang/ImageTrans-docs/issues/245)

## v1.7.5 (2022/08/13)

Line spacing setting is enabled for horizontal text [#issue244](https://github.com/xulihang/ImageTrans-docs/issues/244)

## v1.7.4 (2022/07/24)

* New text direction option: align text vertically from left to right [#issue242](https://github.com/xulihang/ImageTrans-docs/issues/242)
* New preference setting: save OCR results to clipboard [#issue169](https://github.com/xulihang/ImageTrans-docs/issues/169)

## v1.7.3 (2022/07/03)

* It is now possible to adjust the radius of the mask editor's pen mode
* Fix a bug that when there is no panels detected, exporting to a web page will fail
* Update the JS Photoshop script file to support PSB files

## v1.7.2 (2022/06/03)

New preferences setting: temp folder for HTTP. It is to solve the "Access is Denied" problem some users encountered [#issue218](https://github.com/xulihang/ImageTrans-docs/issues/218)

## v1.7.1 (2022/05/29)

* Font settings' UX optimization [#issue212](https://github.com/xulihang/ImageTrans-docs/issues/212)
* Shortcut's optimization [#issue205](https://github.com/xulihang/ImageTrans-docs/issues/205#issuecomment-1135449173)
* Add refresh to the context menu. It can help solve the problem caused by switching images too fast under translation mode [#issue211](https://github.com/xulihang/ImageTrans-docs/issues/211)
* New image inpainting plugin：Lama Inpainting [#issue216](https://github.com/xulihang/ImageTrans-docs/issues/216)

## v1.7.0 (2022/05/22)

* Add a manager for original images without text and pure-text images [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199)
* AutoCorrect can be enabled for OCR [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199#issuecomment-1126957556)
* Fix a problem of importing XLIFF [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Translation can be imported from a tab-delimitted txt file [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* The background of a font style can be set to transparent [#issue208](https://github.com/xulihang/ImageTrans-docs/issues/208)
* Other bugfixes and improvements [#issue203](https://github.com/xulihang/ImageTrans-docs/issues/203)

## v1.6.5 (2022/05/01)

* For cases like translating Japanese manga to English, where the original text is vertically arranged while the target text is horizontal, add an option to adjust the text area's position and size to fit horizontal display [#issue190](https://github.com/xulihang/ImageTrans-docs/issues/190#issuecomment-1107365256)
* Add Speak buttons under text editing areas (can be hidden) [#issue191](https://github.com/xulihang/ImageTrans-docs/issues/191)
* Add options to set the default mask generator and image inpainter [#issue192](https://github.com/xulihang/ImageTrans-docs/issues/192#issuecomment-1114153046)
* Call mask generator and image inpainter to process text areas instead of the whole image to improve speed
* Other minor improvements

## v1.6.4 (2022/04/17)

* Fix the "open project folder" action and the excessively large rotation mouse cursor for macOS
* Font style selection can be applied to multiple selected text areas and make effect immediately [#issue185](https://github.com/xulihang/ImageTrans-docs/issues/185)
* Optimize the display of characters and punctuations for the vertical text engine [#issue186](https://github.com/xulihang/ImageTrans-docs/issues/186)
* Fix a vertical text engine's problem that the text is cut if the font size is large

## v1.6.3 (2022/04/04)

* Add a new payment platform: Mianbaoduo
* Add free DeepL ([https://github.com/xulihang/ImageTrans_plugins/tree/master/deeplfreeMT](learn more))

## v1.6.2 (2022/03/27)

* Webpage export. The webpage supports panel mode and text to speech
* Server can now be used as an HTTP server to host the exported webpage in a LAN
* Vertical text engine: supports line space setting, improves the speed and display of punctuations
* Add full-page text boxes creation
* The output folder's name can be now customized [#issue170](https://github.com/xulihang/ImageTrans-docs/issues/170#issuecomment-1058741066)
* A completion sound effect can be played after the custom workflow is done [#issue171](https://github.com/xulihang/ImageTrans-docs/issues/171)
* The font size in the tool bar can be input directly  [#issue176](https://github.com/xulihang/ImageTrans-docs/issues/176)

## v1.6.1 (2022/02/26)

* Text areas can now be rotated by dragging the mouse. The image of the text area will be rotated before OCR to improve the recognition rate [#issue157](https://github.com/xulihang/ImageTrans-docs/issues/157)
* Add progress info to batch panel detection and color detection [#issue153](https://github.com/xulihang/ImageTrans-docs/issues/153)
* Add the rate setting to TTS. It can read both source text and target text [#issue152](https://github.com/xulihang/ImageTrans-docs/issues/152)
* Fix a text index problem for the AU3 Photoshop script [#issue160](https://github.com/xulihang/ImageTrans-docs/issues/160)

## v1.6.0 (2022/02/06)

* Add panel detection for comics. It can be used for sorting text areas and reading on a mobile device by panels [#issue147](https://github.com/xulihang/ImageTrans-docs/issues/147)
* Add a context menu item to show the machine translation of the combined text of selected text areas. It is mainly designed to translate sentences splitted into different text areas [#issue118](https://github.com/xulihang/ImageTrans-docs/issues/118)
* Other performance improvements and bug fixes

## v1.5.5 (2022/01/31)

* Balloon detection supports comics which has a high height/width ratio (e.g. webtoon) [#issue138](https://github.com/xulihang/ImageTrans-docs/issues/138)
* Auto Font Size supports setting a maximum size [#issue146](https://github.com/xulihang/ImageTrans-docs/issues/146)
* ScreenReader can now monitor the clipboard [#issue145](https://github.com/xulihang/ImageTrans-docs/issues/145)
* Silent translator: the file path of the source image file will be saved [#issue144](https://github.com/xulihang/ImageTrans-docs/issues/144)
* New machine translation plugin: DeepL [#issue15](https://github.com/xulihang/ImageTrans-docs/issues/15)
* The expanding operation will check the image size to avoid expanding too much
* Move the scroll position to top after switching image

## v1.5.4 (2022/01/22)

* Fix a localization problem of the Preferences form [#issue141](https://github.com/xulihang/ImageTrans-docs/issues/141)
* Add an option to resize image before balloon detection (scaled to 1024px by default) [#issue137](https://github.com/xulihang/ImageTrans-docs/issues/137)

## v1.5.3 (2022/01/16)

* Update OpenCV to 4.5.5 to support Scaled-Yolo V4 [#issue129](https://github.com/xulihang/ImageTrans-docs/issues/129)
* Support export text areas to images and import their OCR results [#issue124](https://github.com/xulihang/ImageTrans-docs/issues/124)
* The pure color background used in the non-precise text removing mode can be set as rounded [#issue123](https://github.com/xulihang/ImageTrans-docs/issues/123)
* Fix an inconsistency problem of vertical alignment [#issue122](https://github.com/xulihang/ImageTrans-docs/issues/122)
* AutoCorrect can be used for machine translation [#issue133](https://github.com/xulihang/ImageTrans-docs/issues/133)
* Other improvements on UI and performance

## v1.5.2 (2021/12/26)

* Add Text to speech (TTS)
* Delete key can now be used to delete text areas
* Timeout setting for heuristic text detection
* Other bug fixes

## v1.5.1 (2021/12/05)

* Improve the ScreenReader's behavior [issue 110](https://github.com/xulihang/ImageTrans-docs/issues/110)
* Improve the bahavior of textboxes under type setting mode

## v1.5.0 (2021/11/14)

* Support manual fonts installing [issue 100](https://github.com/xulihang/ImageTrans-docs/issues/100)
* Add a compatibility input helper based on Swing JTextArea to serve as a workaround for inputting Tibetan in JavaFX's TextArea [issue 99](https://github.com/xulihang/ImageTrans-docs/issues/99)
* New project setting: Text Editor's font
* Other bug fixes

## v1.4.8 (2021/10/30)

* Unify the behavior of the text box in 100% and other display percentages [issue 94](https://github.com/xulihang/ImageTrans-docs/issues/94)
* New OCR plugin: Google Drive OCR [issue 91](https://github.com/xulihang/ImageTrans-docs/issues/91)
* Fix a Google OCR not getting text problem

## v1.4.7 (2021/10/17)

* Use thread to avoid the program not responding problem during heuristic text area detection
* Unify the OCR behavior of the screen reader with the main program
* The default display percentage is changed to 100% 

## v1.4.6 (2021/10/06)

* New Tesseract line mode. ImageTrans will extract text lines and use Tesseract to recognize them directly, which can greatly improve the accuracy. ([issue87](https://github.com/xulihang/ImageTrans-docs/issues/87))
* Add an auto capital option
* Add an auto machine translate options to the screen reader
* Other bug fixes

## v1.4.5 (2021/09/25)

* Add a silent translation helper
* Add a new furigana stripping method based on projection
* Update OpenCV to 4.5.3. The built-in high-level text detection and recognition are supported with the [plugin](https://github.com/xulihang/ImageTrans-docs/issues/85).
* Add a new Japanese OCR plugin：[読取革命(Yomikaku)](https://github.com/xulihang/ImageTrans-docs/issues/83).
* Other bug fixes

## v1.4.4 (2021/08/07)

* Fix a high resolution target image export problem that the width and height of rotated text areas are not correct
* Fix a vertical text's problem that after a text area too small is expanded, the position of the inner text is not adjusted
* New menu item: open project folder

## v1.4.3 (2021/08/05)

* Fix a problem that when the toolbar is switched to font settings, it does not load the font settings of the current text area
* Fix a problem that the vertical center button is not updated when a new text area is selected
* Improve the vertical center effect
* Other improvements

## v1.4.2 (2021/07/25)

* Fix a problem that the program fails to export a target image which has a high resolution (width or height > 8000 pixels)
* AutoFontSize is available for vertically arranged text areas
* Change the text areas adjusting behavior of vertically arranged text areas to meet the change made in 1.4.1 which aligns the text to the right: move the mouse to the left of the text area to resize and the right to adjust positions
* Other improvements

## v1.4.1 (2021/07/18)

* Add a vertical align option [#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72)
* Add a shortcut to remove selected areas [#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71)
* If the text mask is not saved as a file and there is no new, deleted or adjusted text areas, the program will not regenerate text-removed images
* Add Hindi, Vietnamese and Indonesian to the default languages list (In the previous versions, we have to input the language codes manually) [#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61)
* Vertically arranged text will start from the right by default
* Other improvements

## v1.4.0 (2021/06/14)

* Add "Save as" menu item
* Add "Navigation" menu
* Add Translated Images Manager. Images marked as translated will be skipped during batch operation ([#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59))
* The Text Editor is dockable
* Use Spinner to adjust the display percentage
* Close the current project automatically when opening a new project ([#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39))

## v1.3.7 (2021/05/04)

* Save the previous state of ToolBar [#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47)
* Fix an exported data containing no translation problem [#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45)

## v1.3.6 (2021/05/02)

* The two context menu items: Delete and invert confidence, now support handling multiple text areas
* When the Control key is pressed, it is possible to select multiple text areas by clicking them
* Add `Clear text` menu item (clear source, target or source+target)
* Other improvements

## v1.3.5 Update2 (2021/04/26)

* Display a warning when users import pictures without opening a project
* Add JPEG extension

## v1.3.5 Update (2021/04/06)

* Language Pair Selector will not appear opening a previous project
* Use the current image's name as the Image Combobox's tooltip

## v1.3.5 (2021/03/30)

* Improve the batch machine translation function. Baidu now supports batch translation.
* Add an Auto Params option to heuristic text localization (experimental).
* Improve global font styles manipulation. It is possible to move them up and down and import styles from other projects.
* Users will be asked to select language upon project creation
* Unify the font color picker
* Improve the undo manager

## v1.3.4 (2021/03/27)

* Resolved issues on GitHub: [#16](https://github.com/xulihang/ImageTrans-docs/issues/16), [#19](https://github.com/xulihang/ImageTrans-docs/issues/19), [#22](https://github.com/xulihang/ImageTrans-docs/issues/22), [#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

## v1.3.3 (2021/03/23)

* Update [ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR). Added [ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite). It now supports a free combination of different text detection and text recognition methods. The plugin is updated as well.
* Fix an index over items size problem during bulk OCR. [Related issue](https://github.com/xulihang/ImageTrans-docs/issues/6)
* Add OCR interval setting

## v1.3.2 (2021/03/07)

* Scale images too small before OCR
* Localize missed layouts
* New OCR plugin: CRAFT+CRNN. This is based on the new [ImageTrans_OCR project](https://github.com/xulihang/ImageTrans_OCR). It is planned to be a hub of offline OCR engines which have good customizability, accuracy and speed.


## v1.3.1 (2021/02/28)

* New OCR plugin: Naver's Clova OCR.
* Support merging and deleting areas with box selection
* Add an option to auto OCR after box creation
* Add shortcuts to manipulate text areas (move and OCR)
* Offline balloon (bubble) detection which is based on OpenCV's Dnn. Models trained with [DarkNet](https://zhuanlan.zhihu.com/p/346021510) or [TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API) are supported. Model weights and model config files need to be put under the root of ImageTrans along with a model.json file ([example](/assets/model.json)) 
* The text editor can display source text and target text in a vertical mode.

## v1.3.0 (2021/02/10)

* Custom workflow. Batch operations can be customized
* Support importing PDF. PDF files will be rendered to images. Text will be extracted if possible

## v1.2.11

* Fix a target geometry not being correctly saved problem
* Fix a file path problem of Photoshop scripts
* MaskEditor can generate textmask using selected color. Mask can now be set to translucent.
* Support batch machine translation with ColorfulClouds which will significant improve machine translation speed
* It is now possible to set machine translation interval to avoid failed requests due to too many requests in a short period of time (QPS set by MT services) 

## v1.2.10

* New OCR plugin: ABBYY Cloud
* Support spellchecking of OCR results using LanguageTool 

## v1.2.9

* Flip boxes before sorting them if the reading order is right to left
* Add inpaint radius setting in TextRemover
* Add Theme. Currently, there are dark and green themes available.
* Use my personal keys by default for machine translation services like Baidu, Niutrans and Tencent and OCR services like OCRSPACE, Azure and Baidu.

## v1.2.8

* Add Undo Manager
* Use TextFlow as the default Text Renderer. Text will no longer be truncated
* Text size and layout will be the same after percent switching
* Other improvements

## v1.2.7

* Supports running multiple tesseract instances to increase OCR speed
* Save verification for 7 days
* Sogou OCR supports right-to-left text order
* Add Baidu OCR accurate
* Fix Find and Replace problems caused by incorrect box jumping behavior and UI localization

## v1.2.6

* Convert WebP format images to JPG ones for images downloaded with links (using OpenCV) 
* Support stripping furigana in Japanese manga for better ocr results
* Better conversion of vertically displayed Japanese textareas to horizontally displayed ones (rotation and center placement of characters like —)
* Fontstyle Unifying operation
* Textareas generated by OCR will also be expanded

## v1.2.5

* Fix a target geometry setting problem
* Mask Editor can use the cursor to draw a circle or clear a circle
* Add Capital Letter font setting
* Add minimum width/height overlapped percent setting for text localization
* Fix an overlapped box not being added problem
* The Photoshop script supports styles like bold, italic, capitalization and rotation.

## v1.2.4

* Add Chrome Extension support. Visit [here](https://github.com/xulihang/ImageTrans_chrome_extension) to see detailed instructions.
* Mask, text-removed and exported images will no longer be imported
* Fix the incorrect behavior of creating new projects which was caused by the recent projects feature introduced in v1.2.2
* Other improvements

## v1.2.3

* Add Translate after OCR option
* When viewing translated version in non-precise text-removal mode, the text box will be transparent to reveal the source text
* Batch Translation can call balloon detection and scene text detection
* Silent Translator supports font setting
* Add a context menu item to download images from links and add them to the project

## v1.2.2

* Add Silent Translator to support bulk translation, which can be called through command line or run as a [server](https://github.com/xulihang/ImageTrans_Server)
* New OCR plugin: sogou deep intelligence ocr
* Save recent projects path
* Ask if merge boxes if OCR is chosen for Batch translation

## v1.2.1

* Multiple-box dragging 
* Multiple-box alignment
* Add background color, stroke and rotation to global font style
* Add paste image context menu item

## v1.2.0

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

## v1.1.11

* New OCR plugin: [easyOCR](https://www.jaided.ai/easyocr), tencent
* OCR languages list only shows languages OCR engines support
* Save the geometry to target geometry before expanding
* Fix the localization of TabPane

## v1.1.10

* Add machine translation for screen reader
* Remove some third-party libraries

## v1.1.9

* Update OpenCV to 4.5.0
* Support getting text area confidence in offline mode and show progress
* New OCR plugin: WinRT OCR. It uses the built-in OCR API of Windows Runtime on Windows 10. It requires installation of relevant languages on the system
* Some machine translation plugins of BasicCAT are packaged
* UI improvements

## v1.1.8

* Generate mask and text-removed images according to order and show progress
* Inpainting is now asynchronous
* Validate geometry before generating text mask
* Fix a resized mask not matching with the resized image problem
* Add text area action menu to imagescrollpane

## v1.1.7

* Maskeditor can now regenerate mask of selected area and scale images
* Text Remover can remove text in the selected area
* The default text mask color is reset to red
* Add text-removed image editor
* Bugfixes

## v1.1.6

* Save text mask in png format, making cover text mode supports areas which have a black ground
* New action: Duplicate text area

## v1.1.5

* Vertical text engine for CJK (Chinese, Japanese and Korean)
* AutoCorrect (useful for solving the full-width punctuations input problem on macOS)
* Bugfixes

## v1.1.4

* Toolbar has a new tool: Font
* New project and import pictures actions now share the same saved path.
* Better color picking


## v1.1.3

* New plugin: OCR plugin. Code is open source: [github](https://github.com/xulihang/ImageTrans_plugins). PaddleOCR is supported.
* New ocr engine: ABBYY (use ABBYY FineReader's [command line interface](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms), windows only)
* New tool: Screen Reader. It can be used as a screenshot tool and screen captures can get OCRed immediately. Captures can also be appended to ImageTrans's projects.
* A Toolbar is added to provide more operations like text box splitting, merging and selecting.
* MouseCursors are set correctly for different scenarios.

## v1.1.2

New option to convert vertically aligned Japanese text to horizontally aligned for better OCR results.

## v1.1.1

* Add Batch Translation
* Add text areas detection based on scene text detection
* Save paths for choosing files and folders

## v1.1.0

* Add external inpainter (experimental)
* Add localization support. ImageTrans can now be displayed in two languages: English and Chinese.

## v1.0.1

* More settings
* RichText support
* XLIFF import and export

## v1.0.0 (2020/03/13)

Released.
