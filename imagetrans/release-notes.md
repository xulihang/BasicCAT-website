---
title: Release Notes of ImageTrans
layout: page
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>


## v5.6.1 (2025/12/16)

* Use OCR to help differentiate whether the image contains Chinese or Japanese
* Improve the zoom behavior with the mouse cursor as the center
* Improve the performance of zooming
* Add the missing Latin language in the default template to set OCR based on language


## v5.6.0 (2025/12/14)

* Add support for using ONNXRuntime as the engine for object detection
* New feature: Hot Folder
* Add the ability to detect languages in images and text
* RapidOCR now supports automatic detection of languages in images
* New workflow items: Export PDF, detect languages in images to set OCR, and detect text to set the project source language
* Add support for preset PDF import/export options and PSD export options
* Add support for processing PDF and other files via command-line
* New project settings: merge based on panels
* New project settings: multiply with alpha channel during image inpainting
* New project settings: mask generation methods and image inpainting methods for complex background areas
* Fix the issue where adding images in project folder via drag-and-drop would fail
* Fix the issue where copying text would fail when "Remove Line Breaks" is unchecked
* Fix issues related to the server, like custom workflow configs will be delated

## v5.5.1 (2025/12/07)

* Directly save raw image bytes in PDF when importing PDF with the image extraction mode
* Fix an issue where PDF importing is not aborted after the cancel button is clicked

## v5.5.0 (2025/12/06)

* Add new image inpainting plugins: OpenAI and Gemini; support using Gemini 3 Pro Image (Nano Banana) for image redraw
* Add new OCR plugin: DeepSeek-OCR
* Add new workflow item: Remove areas outside panels
* Do not merge areas of different panels
* Support using OCR plugins for layout analysis (via panel detection)
* PDF export supports image compression
* Support adding files to the project via drag-and-drop

## v5.4.0 (2025/11/29)

* New poject setting: do not check separation for text areas on complex background
* Add spell checking using the ChatGPT plugin
* New machine translation plugin: macOS's built-in translation
* LamaInpaint on macOS can now use the CoreML model
* mangaOCR uses balloon detection to locate the text by default
* Add word-level detection for RapidOCR
* Add mask-based mode for image cropping
* Add a context menu to clear settings in API perferences
* Fix merging of consecutive non-Arabic words in Arabic text
* Fix the issue where consecutive non-Arabic words were not reversed as a whole when exporting Arabic PDFs

## v5.3.0 (2025/11/20)


* Add crop and any angle rotation features to image editing
* Add French and Vietnamese to RapidOCR's language list
* Add a menu item for reversing text
* RapidOCR now uses the v5 Arabic model
* Add a menu item for filtering images in Find & Replace
* Translated Image Manager now supports inverting selection
* Direction control characters are now removed from text when generating PDFs
* Add "Remove Low-Confidence Areas" to the custom workflow
* Fix an issue where the current image in Find & Replace did not update after switching images
* Fix incorrect intermediate result directory parameter params when generating PSD files
* Fix an issue where text layers in exported PDFs might extend beyond the document boundaries
* Fix an issue where PDF generation did not report errors properly
* Fix an issue where non-Arabic characters are reversed when generating Arabic PDFs

## v5.2.0 (2025/11/15)

* Remove AutoitV3 version Photoshop scripts and switch to directly calling JavaScript files
* Use Shell+AppleScript to launch Photoshop on macOS
* Server now supports receiving workflow, API, project settings, and template names
* Default value for image inpainting expansion pixels changed from 20 to 5
* Remove mask content by a few pixels at edges when mask covers the entire image
* When server selects OCR based on language, it also determines whether to disable right-to-left reading order option according to language
* Add project settings: inpainting max width and sliding window overlap percent
* Do not feather mask by default
* Do not uncheck by text area when selecting a deep learning image inpainting method like MIGAN and Lama
* Use Krita to convert PSD to JPG
* Remove obsolete PSD operations
* Add support for generating editable PSDs for current image
* Fix path issue when adding text-removed images using Photoshop script

## v5.1.1 (2025/11/12)

* Text Remover's image can be dragged
* Backfill text-removed image content based on mask
* Add project setting for feathering the mask when backfilling text-removed images
* Mask generation now removes contours without external contours instead of only keeping the most numerous contours
* Other bug fixes

## v5.1.0 (2025/11/08)

* The mask editor now supports dilating or eroding selected areas and has changed the default method for selecting action modes.
* Add new output format: Rasterized PSD (requires Krita).
* Refactor the ORA format export.
* New projects now save masks and text-removed images to the `intermediateResults` directory by default.
* Change the output path to use the output directory as the root.
* Add SegmentAnything as a new mask generator, which is more suitable for text on complex backgrounds.
* Add custom workflow items for restoring UI state, generating mask images, and generating text-removed images.
* Add menu items for generating mask or text-removed images for the current image.
* Add support for lossless WebP output.
* Optimize memory usage for OCR and balloon detection on long images  
* Closing the progress dialog can stop the OCR and balloon detection operations for a single image  
* Determine whether to use JPG or PNG as the intermediate format for external image inpainting based on the file extension
* Uncheck by text area when selecting a deep learning image inpainting method like MIGAN and Lama
* Fix a mask generation issue for overlapped text areas
* Fix a problem for server that the translation mode is turned on before processing
* Fix the image size limit (65500 pixels) for panel detector
* Fix an issue that the text area coordinates are not updated for single-area mask and text-removed images modification after ROI expansion

## v5.0.0 (2025/11/01)

* Added balloon detection to mask generation method
* Balloon detection and OCR-based mask generation only process the entire image by default
* Mask and inpainting method settings now use name-based values
* Inpainting now only replaces the image within text areas
* Add MIGAN inpainting method
* Inpainting supports sliding window for large images or detail preservation
* Improve text removal effect for CG templates
* Expand pixels based on project settings for editing the text-removed image of an area
* Text remover supports undo, area-based operations, and inpainting based on the current image
* Percentage controls in text remover and mask editor now support scroll wheel adjustment
* Mask dilation now applies to the entire image instead of individual text areas
* Optimize text removal and mask generation speed
* Update Lama plugin to support dynamically sized input images and added max size setting
* Update Sakura prompts to avoid cross-line interference
* ChatGPT now uses the same batch translation prompts as Sakura
* Add preference to remember machine translation results
* Add menu items to delete masks and text-removed images for the current picture
* Default inpainting expansion pixels changed from 5 to 20
* Fix inaccurate geometry for inpainting after expansion
* Other bug fixes

## v4.7.0 (2025/10/26)

* Color detection is executed in a separate thread to prevent the program from becoming unresponsive
* Text color detection now supports OCR
* Add new templates for CG images
* Add the ONNX version of 48px CTC OCR from manga-image-translator
* Add project setting to remove background from both ends of text in images when using OCR for pure recognition
* When adjusting the selected areas by offset, if the target index exceeds the boundary, it will be adjusted by adding or subtracting the total number of areas
* Fix an issue where setting the color using toolbar did not take effect when the text area had a textColor attribute

## v4.6.0 (2025/10/24)

* When a text box is selected in typesetting mode, the font size updates after releasing the mouse  
* Setting the font name via the toolbar no longer adds the font size to the local style  
* Operations like auto font size now check whether the local style includes a font size, rather than checking for the existence of a local style  
* macOS OCR now supports word-level results  
* Update the ChatGPT plugin to support Siliconflow's thinking models  
* PDF export supports using text-removed images or omitting images entirely  
* PDF export supports vertical text, multi-line text, and Arabic script  
* The text layer in PDF exports can be set to visible  
* PDF import supports importing text at the word level  
* PDF import also supports text extraction when selecting image extraction  
* Added Lao, Khmer, and Thai to the list of languages without spaces

## v4.5.0 (2025/10/18)

* New sorting methods: counter clockwise, clockwise, text columns
* New panel detection method: text clustering
* Add batch adjustment of the order of selected areas or panels
* Panel detection now supports specifying the sorting method and the object detection model
* Merge operation in batch mode now uses threads to prevent software unresponsiveness
* Optimize plugin loading
* New PSD export option: calculate text offset
* New MT plugin: Sakura
* Fix vertical text engine rendering error when text contains only line breaks
* Fix incorrect order when double-clicking to set the index
* Fix incorrect alpha channel handling in Text Remover when processing images with transparency
* Fix failures to load WebP images for operations like OCR
* Fix software title not updating and recent records not being added after "Save As"
* Fix error when determining the style based on the direction if the style doesn't exist
* Other bug fixes

## v4.4.0 (2025/09/27)

* Add workflow toolbar
* Select OCR language based on project language when creating a new project
* Automatically save project files after creating a new project
* Load the pre-defined workflow when opening custom workflow configuration for the first time
* When using the toolbar to modify styles, only keep the modified styles in local styles
* Fix the command-line parameter passing issue for Windows's bat and exe files

## v4.3.0 (2025/09/24)

* Expand small images to 1024x1024 before balloon detection
* When merging areas, add spaces and new lines based on the merging direction and if the area is a character
* Add `isChar` property for RapidOCR's character-level result
* Add Arabic OCR model for RapidOCR
* Do not expand areas after balloon detection
* Add a custom workflow item to recognize long text areas and remove the project setting: use recognition-only OCR only for long text areas
* Add a custom workflow item to recognize textless areas mergable with areas with text
* New long text ratio project setting
* Update manga templates
* Fix the issue of possible float geometry values of balloons detected
* Fix the issue where text with only a spaces is trimmed if auto remove line breaks is checked
*Fix a localization problem of custom workflow items which will add an extra space after the item's name

## v4.2.0 (2025/09/21)

* The auto font size feature of the vertical text engine is more accurate.
* Text direction detection now defaults to using image proportions.
* Add a new menu item to open the application folder.  
* For batch translation, balloon detection is followed by text area merging.  
* Recognition-only OCR can now be used specifically for long strip text.  
* RapidOCR now supports returning character-level results.  
* The ONNX version of mangaOCR is now included by default.  
* Optimize templates based on the new built-in OCR.  
* Timely release OpenCV's Mat to optimize memory usage.  
* Batch text area merging is now a UI-independent operation.  
* Dynamic libraries of ONNXRuntime are now loaded by default.  
* Added "Remove Non-Text Areas (OCR)" to the custom workflow.  
* When OCR processes a single area, cropping is based on the stored location rather than the view's position.  
* RapidOCR now corrects the order by default when recognizing a single area.  
* The reordering option for single-area OCR is ineffective for recognition-only engines like mangaOCR.  
* Fix the text order issue with Baidu OCR Accurate Edition.  
* Fix the localization issue for parameterized items in custom workflow.  
* Fix the text area selection error when enabling typesetting mode without checking "Translated".  
* Fix the issue of being unable to add general items when enabling parameter addition in custom workflow.

## v4.1.0 (2025/09/13)

* New built-in OCR：rapid
* Add an offline balloon detection [model](https://github.com/xulihang/ImageTrans-docs/issues/860) for Japanese lines
* New OCR plugin: DocTR

## v4.0.2 (2025/09/10)

* Correct the text order by mergin text areas for operations like merge text areas within panels and append text to exising text areas with OCR
* Add an option to remove image content outside text areas when appending text with OCR to existing areas
* Restore the ROI expanding behavior for horizontal text areas merging when there is text
* Improve the speed of panel detection
* Improve the display of order numbers
* Fix the ineffective panel detection method setting in custom workflow
* Fix the index problem when selecting a text area to jump to the image content and adjusting the order of the text areas

## v4.0.1 (2025/08/29)

Improve the fidelity of rotated text [#950](https://github.com/xulihang/ImageTrans-docs/issues/950)

## v4.0.0 (2025/08/23)

* New mask generation method: OCR
* Keep alpha channel for WebP
* The ROI for checking separation of areas with text will use the center as the beginning
* Use the current project path as the title [#946](https://github.com/xulihang/ImageTrans-docs/issues/946)
* Fix an issue that if the font style name does not exist, the default font style is not applied
* Fix an issue that class names by local balloon detetion server will be used as font style names even if this option is off
* Fix the ineffective Command-key-related actions like multiple selection for macOS
* Fix PatchMatch by rebuilding it for macOS and using PNG to fix the JPEG issue on Windows

## v3.19.1 (2025/08/17)

* Use integer for the pixel size used in the rendering of text
* Add support for importing WebP files directly

## v3.19.0 (2025/08/16)

* Allow using OCR to detect rotation and add related project settings [#934](https://github.com/xulihang/ImageTrans-docs/issues/934)
* Update OCR plugins to support rotation detection
* New project setting: area overlapping percent
* Other bugfixes

## v3.18.2 (2025/08/10)

* Add shortcut for mask editor's erase mode [#issue924](https://github.com/xulihang/ImageTrans-docs/issues/924)
* New boxes shifting menu item
* Fix the font resize problem after clicking a text area because of the triggering of the text changed event
* Fix the potential blurriness of text because of using double to set the location of text areas [issue928](https://github.com/xulihang/ImageTrans-docs/issues/928)

## v3.18.1 (2025/07/26)

* New text area context menu item: paste translation
* New translation plugin: Ollama
* Display the main form after all the plugins are loaded
* Disable auto clean by default for server
* Fix the disappered labels of selected text areas when unifying fonts
* Fix the problem that unselecting a text area after multiple selection does not trigger the selected index changed event

## v3.18.0 (2025/07/19)

* Add support for saving params for text detection and recognition flow items in custom workflow [#issue914](https://github.com/xulihang/ImageTrans-docs/issues/914)
* Add log viewer
* Add bookmark manager
* Fix a problem that the balloon detection model selection is not effective after the first selection
* Fix a problem that the current project is not closed when opening a new project through drag and drop

## v3.17.5 (2025/07/05)

* Use right align for text in TextArea for bi-directional languages like Arabic
* Double click on text areas to request focus for editing
* AutoCorrect rules can be exported as CSV or imported from CSV
* Add support for text area filtering using custom rules
* Add a menu item to open the text-removed image with an external program
* Add Text Splitter

## v3.17.4 (2025/06/20)

* Add menu items for the current image: refresh and open with an external program
* Add menu items to expand and shrink selected areas
* Add preferences for the border color of low-confidence areas
* Use natural sorting for file names
* Use the main view's image percentage for the mask editor and text remover


## v3.17.3 (2025/06/10)

* Add menu items to set font style [#888](https://github.com/xulihang/ImageTrans-docs/issues/888)
* Add menu items to filter areas [#887](https://github.com/xulihang/ImageTrans-docs/issues/887)
* Optimize the logic of setting local font style
* Fix an error opening local font style setting caused by the newly added help link [#889](https://github.com/xulihang/ImageTrans-docs/issues/889)
* Video Subtitle Remover processes images in batches of 30 using STTN to process all the images


## v3.17.2 (2025/06/04)

* Improve the logic of image switching
* Add text-removed property to images that have text-removed images generated using Video Subtitle Remover
* Video Subtitle Remover can generate text areas for all images
* Fix a bug that SRT has to be imported to open Video Subtitle Remover

## v3.17.1 (2025/06/02)

* Allow using CSS to style text [#883](https://github.com/xulihang/ImageTrans-docs/issues/883)
* New inpainter: STTN
* Video Subtitle Remover can use STTN, a video-specific text-removal method, to remove text

## v3.17.0 (2025/05/18)

* Add Video Subtitle Remover
* New text removing method: gaussian blur
* Add invert selection, select areas with the same style and send to back to menu items
* Add a text area filtering option: non-transparent-background areas
* Add support for using mask to remove unwanted areas in the image for OCR [#881](https://github.com/xulihang/ImageTrans-docs/issues/881)
* Keep the properties of the cut boxes 
* Source Image Viewer can toggle whether to sync zoom ratio [#879](https://github.com/xulihang/ImageTrans-docs/issues/879)
* Fix the width and height set for the expanded roi

## v3.16.2 (2025/05/10)

* Disable the "process the current image" button in custom workflow when the processing has not completed 
* "Append text to existing text areas with OCR" will add extra info like text color and rotation if it exists
* Add an option to change the text opacity as well when changing the overlay's opacity
* Add delete mask images and delete text-removed images to custom workflow

## v3.16.1 (2025/05/02)

* Balloon detector can filter results based on the class ID
* Add support for merging text based on text color
* Add support for horizontal text merging based on paragraph position info
* Add clear source, clear target, clear styles and clear target position to custom workflow
* Add clear button to custom workflow form

## v3.16.0 (2025/04/26)

* Add an option to make border for area OCR [#issue866](https://github.com/xulihang/ImageTrans-docs/issues/866)
* Add maximum X offset and maximum Y offset settings for text localization
* Remove non-text image content for "Append text to existing areas using OCR"
* Fix the ineffective dragging when the mouse is above the text in translation mode

## v3.15.4 (2025/04/18)

* Search and replace can select empty segments using regular expression
* Add support for zoom with the mouse position as the origin
* Add shortcut for "Jump to"

## v3.15.3 (2025/03/29)

* Add menu items to fill in the source in the target or fill in the target in the source
* Add magic buttons to trigger customized actions to edit the text [#858](https://github.com/xulihang/ImageTrans-docs/issues/858)
* Add Deepseek plugin

## v3.15.2 (2025/03/13)

* Add help links
* Add free height characters setting for vertical text engine [#841](https://github.com/xulihang/ImageTrans-docs/issues/841)

## v3.15.1 (2025/03/08)

* Improved Video Sub Extractor
* Add "Jump to..." menu item

## v3.15.0 (2025/03/02)

* Add Video Sub Extractor
* Add initial support for multithreaded OCR
* Add replace mode for Search and Replace
* Improve the sorting logic of image names based on numbers
* Fix the escaping problem of the target text in exported tab-delimited txt files

## v3.14.4 (2025/02/19)

* Add support of opening the project via system
* Add a context menu item to open the current image with an external program 
* Fix the coordinates of fixed-area screenshot on macOS using HiDPI
* Fix the occasional exception using Google to translate multiple sentences [#issue835](https://github.com/xulihang/ImageTrans-docs/issues/835)

## v3.14.3 (2025/01/08)

* Fix the position shifting problem of text areas which are not left-aligned
* New OCR plugin: ChatGPT

## v3.14.2 (2025/01/07)

* Fix the perspective transformation failure problem of rotated text areas in a large image [#issue813](https://github.com/xulihang/ImageTrans-docs/issues/813)
* Detect whether the project file was modified by another process when saving
* New custom workflow item: merge text areas within a panel

## v3.14.1 (2024/12/28)

* Set the default mask radius to 10 for the imprecision mode
* Increase the responsive area for adjusting the size of textboxes under typesetting mode
* Fix the problem that the mask is blurry with a radius over 0 in imprecision mode
* Fix the problem that the server fails to switch to a downloaded image

## v3.14.0 (2024/12/14)

* Add grid
* Add menu items to check the spellings
* Use TextArea to input the settings to allow multiple-line text
* Clicking under box drawing selection mode will not deselect text boxes with the control key pressed
* Box drawing selection will deselect text boxes with the control key pressed
* Server will send heartbeat at a 30s interval
* Server can change the OCR engine based on the source lang
* Fix the problem that the image generated using Server does not have the original resolution

## v3.13.2 (2024/12/10)

* Fix the problem that the menu item names are not localized after resetting shortcuts
* Fix the problem that the shortcuts are not adapted for macOS after resetting
* Fix the problem that the program does not jump to the last copied image correctly
* Add WebP as an output format
* Decrease the interval for reconnecting the server from 30s to 5s
* Server can now convert local WebP files

## v3.13.1 (2024/12/08)

* Fix the Y position problem for vertical text engine after applying a top padding
* Fix the parsing of JSON-format OCR results
* Use the bundled JDK to lauch jars on macOS
* Server can upload the text data only without the image
* Server will send images in WebP format to save bandwidth

## v3.13.0 (2024/12/07)

* Improve the zero-wordspace characters' display results using vertical text engine
* Improve the OCR result of a single area using mangaTranslator
* Server can now connect to a remote server

## v3.12.0 (2024/11/24)

* When using the select toolbar, display the coordinates of the selected text box after it is pressed or dragged in the UI
* Add "Unify width" and "Unify height" operations
* Add color picker in the font toolbar
* Add sentence case and title case conversion in Find and Replace
* Add a menu item to calculate the suitable font size
* The mask in non-precise mode will only be generated using the source geometry
* Fix the incorrect selected area problem for TextRemover
* Fix the parsing of workflow config for Server
* Fix the display and saving problem of custom workflow
* Fix the panel sorting for spread images
* Fix the problem that the mask in non-precise mode is not responsive to rotation

## v3.11.2 (2024/11/16)

* Add Ali machine translation
* Add "Show original text boxes" checkbox in source image toolbar
* Add menu items to adjust the position of textboxes

## v3.11.1 (2024/11/03)

* Support PDF images in JBIG format
* Support calling custom workflow via the command line [#issue785](https://github.com/xulihang/ImageTrans-docs/issues/785)
* Custom workflow's existing settings can be modified
* Add an option to use the background color of font styles as the text boxes' border color [#issue775](https://github.com/xulihang/ImageTrans-docs/issues/775)
* Add "Shrink areas" and "Sort panels" to custom workflow [#issue774](https://github.com/xulihang/ImageTrans-docs/issues/774) [#issue776](https://github.com/xulihang/ImageTrans-docs/issues/776)

## v3.11.0 (2024/10/25)

* Stay in the current image after importing new images
* Balloon detection using a local server [#issue771](https://github.com/xulihang/ImageTrans-docs/issues/771)
* Add object detection as panel detection method [#issue772](https://github.com/xulihang/ImageTrans-docs/issues/772)
* Allow saving multiple workflow settings

## v3.10.3 (2024/10/07)

* New way to open a project: command line and drag and drop 
* Add source image viewer [#issue763](https://github.com/xulihang/ImageTrans-docs/issues/763)
* Fix the problem that empty machine translation results are stored

## v3.10.2 (2024/09/22)

* Add an option to extract text for PDF import
* Auto restore the screen reader's window after calling it through the shortcut
* Update the ChatGPT plugin to allow setting the host with version
* Fix the problem that mask generation will fail if there is a text area whose width or height is 0
* Fix the blurry screen capture problem under high DPI
* Check whether the mask is correct based on the center for fitting the text areas with mask

## v3.10.1 (2024/09/15)

* Go to the previous image by default when opening a project
* Fix a panel export problem that happens for images without panels or with wrong sized panels

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
* Translation can be imported from a tab-delimited txt file [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
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
