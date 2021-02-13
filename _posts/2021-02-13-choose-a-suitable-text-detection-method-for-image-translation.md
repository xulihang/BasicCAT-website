---
date: 2021-02-13 11:06:50+08:00
layout: post
title: Choose a Suitable Text Detection Method for Image Translation
categories: blog
tags: imagetrans
---

Text detection is a key step for text recognition and text typesetting. Thus, it is necessary to choose an appropriate detection method for the image to be translated.

ImageTrans provides four text detection methods: detection provided by OCR services, heuristic method, object detection method and natural scene text detection method.

1. OCR

   The third-party OCR services used by ImageTrans can provide text coordinate information.

   Tesseract and ABBYY are suitable for printing documents, while online OCR services such as Baidu and Google can detect text in various images. Now, these OCR services usually use natural scene text detection methods, such as CTPN, EAST, CRAFT and so on.

   Different OCR service providers may use different text detection methods. Here are the test results of some OCRs.

   Baidu Accurate:

   ![](/album/text-detection/baidu_tieji.jpg)

   ![](/album/text-detection/baidu_scrooge.jpg)

   Google:

   ![](/album/text-detection/google_tieji.jpg)

   ![](/album/text-detection/google_scrooge.jpg)

   Sogou:

   ![](/album/text-detection/sogou_tieji.jpg)

   ![](/album/text-detection/sogou_scrooge.jpg)

   We can see there are some shortcomings of general-purpose OCRs.

   1. Layout analysis is lacking for specific document types. For example, text in comics resides mainly in separate bubbles (or balloons), but text of different bubbles are merged in some results by Baidu and Google.
   2. Chinese, Japanese and Korean words can be arranged vertically. Errors may occur during detection of vertical or horizontal arrangement.

   We need to choose the appropriate OCR engine according to different languages and different layouts.

   Generally speaking, text detection of OCR services is relatively accurate. It can detect inclined text and text on complex background. It can also give the text recognition result at the same time. At present, I think the best OCR is Sogou OCR. It gives a fine-grained result, which is convenient to correctly merge text lines into paragraphs later. The text recognition result is also very accurate.

   ![](/album/text-detection/sogou_xu.jpg)


2. Heuristic

   The heuristic method is a detection method based on traditional image processing methods which can be adapted by observing of images' characteristics.

   It mainly uses binarization and connected-componet labeling. Here is a processing flow.

   Original image:

   ![](/album/text-detection/imagetrans.jpg)

   Convert to grayscale:

   ![](/album/text-detection/imagetrans_gray.jpg)

   Use the OTSU method to calculate the binarization threshold and binarize the picture:

   ![](/album/text-detection/imagetrans_thresh.jpg)

   Mark connected components. A separate letter is a connected component:

   ![](/album/text-detection/imagetrans_connected_component.jpg)

   Process these areas to get text lines:

   ![](/album/text-detection/imagetrans_text_line.jpg)

   If the content of the picture is complex, the merged areas need to be classified to remove non-text areas.

   This method has some drawbacks. For example, if the contrast between the text and the background is low, the text may not be separated from the background; If the text and the edge is connected, the text is not a separate connected component; Inclined text is difficult to deal with.

   ![](/album/text-detection/ImageTrans_low_contrast.jpg)

   ![](/album/text-detection/connected_to_edges.jpg)

   ![](/album/text-detection/slanted.jpg)

   For images such as comics, further optimization can be done. For instance, if there is a contour separating text in different bubbles, connected components will not be merged. 
   
   When the image has a unified text color and background color, the heuristic method can have a good result.

   This method is an unsupervised method, which does not need training data. But it requires users to set suitable parameters according to different pictures.

3. Object detection

   Object detection methods such as Mask-RCNN and YOLO can be used to detect text. Users can create their own data for training with the help of the heuristic method and OCR.

   Baidu's EasyDL and Microsoft's Azure Custom Vision simplify the technical requirements of the training. Users only have to provide the data.

   This method can be customized and is easy to use. The accuracy and speed are also good. But the result may not accurately fit the text, and the trained model may have problems such as weak adaptability.

   ![](/album/text-detection/baidu_easydl.jpg)


4. Natural scene text detection

   Online OCR services now adopt natural scene text detection methods to detect text. ImageTrans allows users to choose the appropriate natural scene text detection method by themselves. Such methods have similar results of online OCR services. So I will not describe it in detail here.



