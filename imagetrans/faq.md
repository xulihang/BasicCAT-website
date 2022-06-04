---
title: FAQ - ImageTrans
layout: page
---


ImageTrans FAQ. Search more issues [here](https://github.com/xulihang/ImageTrans-docs/issues).

1. What languages does ImageTrans support?

    ImageTrans itself supports all natural languages. The major limitations lie on OCR and machine translation.

    I've collected some language support pages of some OCR and machine translation services.

    * <https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html>
    * <https://cloud.google.com/vision/docs/languages>
    * <https://cloud.google.com/translate/docs/languages>

2. Is vertical Japanese supported?

    Youdao, Baidu, Google, mmangaOCR, Tesseract and the built-in OCR of windows 10 can recognize vertical Japanese. ImageTrans can also convert vertically-aligned text to horizontally-aligned so that OCR engines which can only recognize horizontal Japanese can also recognize vertical Japanese.

3. What's the difference between the personal purpose and commercial purpose versions?

    At present, there is no functional difference between the two. The commercial version is set for companies that use it for commercial translation, which can be used on 50 devices.

4. Is the price for a monthly fee or a life-time fee?

    The purchased version can be used for life and can be updated for free within half a year.

5. Which platforms does the software support? Can it run on Linux?

    ImageTrans is a cross-platform application based on JavaFX. It can run on Windows, macOS and Linux. It also relies OpenCV. Pre-built libraries for Windows, macOS and Linux are provided.

6. Why is the result of machine translation the same as the source text?

    You need to specify the language pair in the project settings.

7. What is OCR and machine translation API? How to apply?

    API is an abbreviation of application program interface. Companies like Google and Microsoft will open their OCR and machine translation in the form of API for third-party software to use. ImageTrans has integrated common OCR and machine translation APIs. Usually, you need to apply for their API keys to call them. The detailed operation steps can be found in the documents of these platforms.

    The following is a tutorial about applying for the OCR API key of Google vision that I found on the Internet:

    <https://easyscreenocr.com/how-to-load-google-api-in-easyscreenocr-for-mac-lifetime-version/>

8. What OCR and MT services does the software support?

    The following is a list of currently supported online services

    OCR: Baidu, Youdao, Tencent, Google, Microsoft Azure, OCRSPACE, ABBYY Cloud, Clova

    Machine translation: Baidu, Youdao, Tencent, Niutrans, Google, Microsoft, Colorful Clouds, Cloud Translation, Papago:

    By default, ImageTrans contains the keys of OCR services like Baidu, Azure and OCRSPACE and machine translation services such as Baidu, Tencent and Niutrans.

    In addition, offline OCR and machine translation are also supported. See the next question.

9. Can the software be used offline?

    The software can be used offline. However, it requires networking to verify whether the purchase is made when it is first run. The record will be kept for 7 days.

    The software can translate pictures offline, and support offline OCR and machine translation.

    Offline OCR: Tesseract, mangaOCR, Windows 10's built-in OCR, PaddleOCR, EasyOCR

    Offline machine translation: OPUS-CAT, eztrans, Sugoi

    Online OCR and machine translation, especially machine translation, ofter produce better results and support more languages, but there are also problems such as the need for networking and restrictions on requests.

10. Why do some boxes have no results when batch OCR and MT operations are performed?

    Online OCR and machine translation services have restrictions on requests, such as five requests per second. ImageTrans allows you to set the time interval between OCR and MT requests to avoid this problem.

    If OCR has no result, the OCR engine may not be able to recognize the text.

11. Why the text not completely erased?

    The text box needs to completely cover the text. There should be a certain distance between the box and the edge of the text. If the text background is complex, it often needs to be processed manually.

12. Does the software have an English interface?

    At present, ImageTrans can be displayed in English or Chinese.

13. Why are text lines not merged?

    The reasons are manifold.

    1. The default growth height or width is too small. You need to increase the value (generally the height of the text line).
    2. There is a separation line between text areas, which affects the merging. There are many ways to deal with it:

        * Reduce the pixel to expand
        * Merge manually
        * Uncheck Infer Separation

    Example:

    ![](/album/unmerged.jpg)

    Merged:

    ![](/album/merged.jpg)

{% include comments.html %}
