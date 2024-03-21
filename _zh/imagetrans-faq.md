---
title: FAQ - ImageTrans
layout: page
permalink: /zh/imagetrans/faq/
---

ImageTrans 常见问题整理，更多问题可在[这里](https://github.com/xulihang/ImageTrans-docs/issues)搜索。

1. 软件支持哪些语言？

    软件本身支持所有语言。限制主要在于OCR和机器翻译。

    下面是ImageTrans所用部分OCR和机器翻译服务支持语言的说明页面:

    * <https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html>
    * <https://cloud.google.com/vision/docs/languages>
    * <https://cloud.google.com/translate/docs/languages>

2. 是否支持竖排日语？

    有道、百度、谷歌、mangaOCR、tesseract和Windows 10自带OCR都能识别竖排日语。ImageTrans还提供竖排图像转横排的功能，让只支持识别横排日语的OCR引擎也能识别竖排日语。

3. 个人用途版和商业用途版有什么区别？

    目前两者在功能上并没有区别。商业用途版主要针对用于商业翻译工作的公司，购买后可以用于5台设备。

4. 这个价格是每个月的费用还是一次性买断的费用？

    购买的版本可以终身使用，并支持半年内免费更新。

5. 软件支持在哪些平台运行，支持Linux吗？

    ImageTrans是基于JavaFX开发的跨平台应用，可以在Windows、macOS和Linux上运行。软件依赖于OpenCV，为此专门有提供Windows、macOS、Linux的运行库。

6. 为什么机器翻译的结果和原文一样？

    需要在项目设置里先指定翻译的语言对。

7. 什么是OCR和机器翻译 API？要怎么申请？

    API是应用程序接口的缩写。谷歌、微软等公司将其研发的OCR、机器翻译以API的形式开放出来，供第三方软件进行调用。ImageTrans集成了常见的OCR和机器翻译API。这些API通常需要申请API密钥进行调用。具体操作方法见各大平台的文档。

    下面是我网上搜到的申请Google Vision的OCR API密钥的教程：

    <https://easyscreenocr.com/how-to-load-google-api-in-easyscreenocr-for-mac-lifetime-version/>

8. 软件支持哪些OCR和机器翻译服务？

    下面是目前支持的在线服务的列表

    OCR：百度、有道、腾讯、谷歌、微软Azure、OCRSPACE、ABBYY Cloud、Clova

    机器翻译：百度、有道、腾讯、小牛、谷歌、微软、彩云小译、云译、Papago

    ImageTrans默认包含了百度、Azure、OCRSPACE等OCR服务的密钥，以及百度、腾讯、小牛等机器翻译服务的密钥。

    另外也支持离线的OCR和机器翻译，见下一个问题。

9. 软件可以离线使用吗？

    软件可以离线使用。但首次运行需要联网以验证是否购买，记录保存7天。
    
    软件可以离线翻译图片，并支持离线版OCR和机器翻译。

    离线版OCR：tesseract、mangaOCR、Windows 10自带OCR、PaddleOCR、EasyOCR

    离线版机器翻译：OPUS-CAT、eztrans、Sugoi
    
    在线的OCR和机器翻译，尤其是机器翻译，往往效果更好，支持的语种也更全面，但也存在需要联网、对请求有限制等问题。

10. 为什么进行批量OCR和机器翻译操作时，有些框没有结果？

    在线OCR和机器翻译服务对请求有限制，比如每秒只能请求5次。ImageTrans允许设置OCR和机器翻译请求的时间间隔以避免这一问题。

    如果是OCR没有结果，也可能是OCR引擎没有识别出文字。

11. 为什么文字没有完全抹除？

    文本框需要完全覆盖文字，并且离文字边缘存在一定间距。如果文字背景复杂，往往还需要手动处理。

12. 软件有英文界面吗？

    软件目前支持英文和中文两种界面语言。
	
13. 为什么文字行没有被合并？

	有多种原因。

	1. 默认的增长高度或者宽度过小，需要把数值调大一点（一般是文字行的高度）。
	2. 文字区域间存在间隔，影响了合并。有多种处理方法：

		* 缩小拓展像素值
		* 手动合并
		* 取消判断是否存在间隔
		
    示例图片：
	
	![](/album/unmerged.jpg)
	
	合并后：
	
    ![](/album/merged.jpg)



{% include comments.html %}