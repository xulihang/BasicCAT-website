---
date: 2021-02-13 11:06:50+08:00
layout: post
title: 为图片翻译选择合适的文字检测方法
categories: blog
tags: imagetrans
---

文字检测是文字识别和文字排版的关键一步，需要针对需要翻译的图片选择合适的方法进行检测。

ImageTrans提供了四种文字区域检测方法：OCR服务提供的检测、启发式方法、目标检测法、自然场景文字检测法。

1. OCR

	ImageTrans使用的第三方OCR服务都能提供文字坐标信息。

	Tesseract、ABBYY适用于印刷文档，而百度、谷歌等在线OCR服务可以识别各种各样的图像中的文字。目前，这些OCR服务通常使用了自然场景文字检测方法，比如CTPN、EAST、CRAFT等。

	不同的OCR服务提供商会采用不同的文字检测方法，这里列出常见OCR的测试结果。

	百度精确版：

	![](/album/text-detection/baidu_tieji.jpg)

	![](/album/text-detection/baidu_scrooge.jpg)

	谷歌：

	![](/album/text-detection/google_tieji.jpg)

	![](/album/text-detection/google_scrooge.jpg)

	搜狗：

	![](/album/text-detection/sogou_tieji.jpg)

	![](/album/text-detection/sogou_scrooge.jpg)

	可以总结出上述例子中通用OCR存在的一些缺点：

	1. 没有针对特定类型的图片做版面分析，比如漫画的文字主要存在于气泡中，百度和谷歌均出现了将不同气泡的文字合并的问题
	2. 中日韩文字可以竖直排列，会存在竖排还是横排检测错误的问题

	我们通常需要根据不同的语言、不同的版面来选择适合的OCR引擎。

	总的来说，OCR服务的文字检测功能是较为准确的，能检测倾斜的文本、复杂背景上的文本，并且能同时给出文字识别的结果。目前效果最好的OCR是搜狗OCR，它给出的结果粒度较细，便于后期合并出正确的段落，文字识别结果也很准确。

	![](/album/text-detecion/sogou_xu.jpg)


2. 启发式

	启发式方式是通过观察图片的特点，总结出的以传统图像处理方法为主的一套检测方法。

	主要利用了二值化和连通区域标记方法。下面是一个处理流程。

	原图：

	![](/album/text-detection/imagetrans.jpg)

	转换为灰度图片：

	![](/album/text-detection/imagetrans_gray.jpg)

	使用OTSU方法计算二值化阈值，对图片进行二值化：

	![](/album/text-detection/imagetrans_thresh.jpg)

	标记连通区域，一个独立的英文字母就是一个连通区域：

	![](/album/text-detection/imagetrans_connected_component.jpg)

	对这些区域进行处理，得到文字行：

	![](/album/text-detection/imagetrans_text_line.jpg)

	如果图片内容较为复杂，需要对合并的结果进行分类，去除非文字区域。

	这一方法存在一些缺点，比如文字和背景的对比度不够高时可能无法分离出文字，文字与边缘粘连则不是一个独立的连通区域、倾斜的文本较难处理等。

	![](/album/text-detection/ImageTrans_low_contrast.jpg)

	![](/album/text-detection/connected_to_edges.jpg)

	![](/album/text-detection/slanted.jpg)

	对于漫画这样的图像，可以做进一步优化，比如不同气泡的文字存在分割轮廓，合并连通区域时就不进行合并。图像文字和背景的情况较为单一时，启发式可以有很好的结果。

	这一方法属于无监督的方法，不需要训练数据，但需要用户根据不同图片设置适合的参数。

3. 目标检测法

	使用Mask-RCNN、YOLO等目标检测模型训练的文字区域检测方法。用户可以在启发式方法、OCR的帮助下，自己标记数据进行训练。

	百度的easydl和微软的Azure Custom Vision简化了训练的技术要求，只需用户提供数据即可。

	这一方法的定制性强，操作简单，检测准确度和检测速度都不错，但常常不能准确贴合文字，训练的模型可能会存在适应性不强等问题。

	![](/album/text-detection/baidu_easydl.jpg)


4. 自然场景文字检测法

	目前的在线OCR服务采用的基本都是自然场景文字检测方法。ImageTrans允许用户自己选择适合的方法。这类方法和在线OCR服务的结果类似，这里就不详细介绍了。



