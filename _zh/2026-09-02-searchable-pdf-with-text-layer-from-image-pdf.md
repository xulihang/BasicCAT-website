---
date: 2026-09-02 21:19:50+08:00
layout: post
title: 扫描件变可搜索PDF：双层PDF生成
categories: blog
tags: imagetrans
---


扫描文档通常为单层纯图像的PDF，里面的文字不能被选择、复制和搜索。这时可以创建一个双层PDF，即在图像上盖了一个隐藏的文字层，使得用PDF阅读器打开时，里面的文字可以被搜索、复制。


例如下面是日语轻小说《无职转生》的一段内容的PDF（[来源](https://www.kadokawa.co.jp/product/301312000360/)）。里面的文字是竖排的，阅读顺序是从右到左，已经被提取出来，做成了双层PDF。

<iframe src="/assets/mushoku_tensei.pdf" width="240px" height="320px"></iframe>

下面讲下具体是怎么做的。需要用到[ImageTrans](/zh/imagetrans/)这个OCR软件。

1. 打开ImageTrans，新建一个项目，导入PDF或者图片。
2. 选择一个OCR引擎，比如PaddleOCR，去识别文字。如果识别得不准，也可以先用PaddleOCR或者其它方法，定位文字，再用PaddleOCR-VL、minerU等大模型或者其它比如mit48px ctc这样的竖排日语专用模型去识别文字。
3. 按阅读顺序进行排序。这里只要在项目设置中启用从右到左，按横坐标排序即可。如果版面复杂，比如有多栏，可以使用mineru、PPDocLayout等软件进行版面分析后进行排序。
4. 检测哪些文字是横向、哪些文字是竖向。需要在项目设置中定义两个字体样式，一个是横排，一个是竖排。然后执行自定义工作流中的“检测方向并设置对应的样式”。
5. 通过菜单栏点击导出->图像PDF。使用原图图像，添加原文文本层，然后选择一个包含日语字符的字体，比如Windows上`C:\Windows\Fonts\arial unicode ms.ttf`这个全语言通用的字体。

保存后即可得到上面这样的PDF。软件会自动计算合适的字体大小，尽量让文字层的文字贴合图像中的文字。

打开Edge，可以看到文字能正确选择、复制和搜索。

![](/album/edge-pdf-reading.jpg)

ImageTrans界面：

![](/album/vertical-japanese-pdf-imagetrans-ui.jpg)

ImageTrans还支持进一步对图片进行翻译，得到以下中文版的可搜索的双层PDF。

<iframe src="/assets/mushoku_tensei_zh.pdf" width="240px" height="320px"></iframe>

## 关于竖排文字层的添加

PDF原生对竖排文本的支持不加。创建文字层时，需要一个一个文字，按阅读顺序添加上去。我试了下，常见的PDF阅读器都能支持这样添加的竖排文字。