---
date: 2026-10-04 20:00:00+08:00
layout: post
title: 9款漫画翻译软件实测对比，AI翻译+人工编辑，哪款适合你
categories: blog
tags: imagetrans 计算机辅助翻译 译后编辑
---

近几年涌现了很多漫画翻译软件，不仅能全自动完成翻译、嵌字的工作，输出汉化好的漫画，还支持人工编辑，对AI翻译进行润色、微调。

本文会先介绍下漫画翻译软件的用途、评价指标、技术实现细节，然后对现有的支持后期编辑的9款漫画翻译软件做一个粗略的实测对比，以翻译《柯南》的一张漫画为例子，翻译到中文和英文。

## 漫画翻译软件的用途与评价指标

我们使用漫画翻译软件，可能用各种用途，例如：

* 快速翻译网页中的生肉漫画，供自己阅读
* 提取漫画中的文字，用于语言学习、搭建语料库、学术研究
* 产出高质量的翻译图片，供其它读者阅读

根据不同用途，评价哪款软件好用的指标也会不一样。如果是要快速阅读，就要求图片翻译应该在数秒内完成，不追求极致的质量，还要有对应的浏览器插件。如果是高质量翻译，需要提供各种参数配置、便捷的人机交互界面，必要时还能导出数据，在Photoshop等第三方软件中继续进行翻译。

另外，软件的易用性、支持的操作系统等各个维度也是评价指标。

## 漫画翻译软件实现技术细节

在评测前，我们需要先了解一些漫画翻译软件的实现细节。

漫画翻译软件，通常涉及以下四个步骤

* 文字识别
* 文字去除
* 文本翻译
* 嵌字

这些步骤通常都要分步进行。随着多模态和图像生成大语言模型的出现，还提供了一些端到端的方案，一个模型，解决以上所有问题。各个软件基本都提供了传统的分步模式，并且在不同程度上引入了大语言模型。

### 文字识别

文字识别（OCR），通常需要两步，文字定位和字符识别。

各个漫画翻译软件，都使用了各种文字检测定位模型和字符识别模型，很多还针对漫画进行了训练。例如下面是常见的一些模型：

定位模型：

* comic-text-detector：dmMaze训练的文字定位模型，可以准确生成文字的掩膜，可以用于后期的文字去除，也能用于判断文本的旋转
* YSGYolo：基于YOLO训练的检测模型，可以检测漫画气泡、文本行等等，并且不会去检测拟声词
* PaddleOCR：PaddleOCR提供了文字检测模型，一个模型支持各种语言的定位，并且提供了PPDocLayout这种布局检测模型，并且能同时确定文字的阅读顺序

识别模型：

* mitOCR 48px：来自manga-image-translator这个开源项目的字符识别模型，同时支持文字颜色检测，需要以行为单位进行识别
* manga-ocr：基于manga109日漫数据集训练的Transformer模型，支持多行文本图像的识别，自动忽略振假名
* PaddleOCR：PaddleOCR也提供了识别模型，有推理速度快的小模型，也有识别率很高、推理较慢的大语言模型PaddleOCR-VL

另外还有一些辅助模型，比如漫画分镜、文字方向检测、语种识别和字体识别模型。漫画分镜检测模型用处要大一点，可以用与纠正文字顺序。

### 文字去除

文字去除，也有很多方式。比如模糊文字、用纯色填充、使用图像修复，去除文字并重绘被文字遮盖的区域等等。

有很多图像修复方法，被这些软件所运用。

传统图像处理：

* OpenCV Telea
* PatchMatch

深度学习：

* AOT
* Lama

图像编辑大模型：

* Flux
* Gemini Nano Banano

使用图像修复，需要先确定文字的掩膜。上文提到的comic-text-detector支持生成较为精细的掩膜。一般的图，单纯的矩形配合较好的去除模型，效果已经不错了。如果文字和背景比较容易区分，一般直接二值化就够了，又快又准确。

![](/album/imagetrans-features/text-removal-and-reinjection.jpg)

### 文本翻译

传统点的神经网络机器翻译，一般都是逐句翻译，可以一次请求翻译多个句子。有的高级点的，支持自定义术语，像DeepL、彩云都是效果不错的。

现在大语言模型的效果基本远超传统的机器翻译了，支持超长上下文、视觉模型读图，可以用提示词约束生成的风格，也支持术语。

### 嵌字

将文字嵌入原图，看起来简单，其实也比较复杂。需要支持字间距、行间距、字号、字体、富文本（粗斜体）、颜色、旋转、描边、竖排汉字等各种参数的设置。然后要有一定的自动处理能力，比如自动调整字体大小、自动设置文字方向等等。

### 软件实现技术栈

技术栈，就是软件实现用了哪些技术。因为Python是人工智能领域的主要语言，而且易于学习，大多数漫画翻译软件都用它进行编写，使用QT作为UI库，PyTorch和ONNXRuntime作为推理库。

但也有很多软件使用了不一样的技术，比如Java、Rust、JavaScript、Flutter、Go等等。这些技术各有千秋，有的易于分发、有的支持跨平台、有的性能好，可以说目前漫画翻译软件也是有百家争鸣的现况的。


## 九款漫画翻译软件基础信息对比

下表汇总了这9款软件的基础信息。需要说明的是，软件大小这里给出的是Windows版的安装包或压缩包体积，如果模型是单独下载或附带的，也会一并标注。此处的“是否收费”仅指软件本身，“是否自带模型”指的是安装包中是否已经包含了OCR和文字去除（图像修复）所需的模型。

| 软件 | 发布时间 | 技术栈 | 软件大小 | 是否收费 | 是否开源 | OCR与修复模型是否自带 |
| --- | --- | --- | --- | --- | --- | --- |
| ImageTrans | 2020年 | Java + JavaFX | 约400MB（含模型） | 收费（个人版¥75起） | 否 | ✅ 自带（含OCR、Lama修复模型，可离线运行） |
| BallonsTranslator | 2022年4月 | Python + PyTorch | 约32MB（模型约1.7GB需下载） | 免费 | ✅ GPL-3.0 | ❌ 首次运行联网下载 |
| Comic-Translate | 2024年1月 | Python + ONNXRuntime | 约95MB | 免费 | ✅ Apache-2.0 | ❌ 从Hugging Face下载 |
| Koharu | 2025年4月 | Rust + Tauri | 约166MB | 免费 | ✅ Apache-2.0 | ❌ 首次运行联网下载 |
| Manga-Image-Translator-UI | 2025年8月 | Python | 约1.3GB（含模型） | 免费 | ✅ GPL-3.0 | ✅ 自带（集成manga-image-translator模型） |
| Saber Translator | 2025年2月 | Python + TypeScript/Vue | 约3.5GB（另需约1.3GB模型） | 免费 | ✅ GPL-3.0 | ⚠️ 模型单独打包下载 |
| 猫译员 | 2026年7月 | Flutter | 约66MB | 免费（需自备翻译API） | 否 | ❌ 需联网下载 |
| ComiTrans | 2025年12月 | Python + ONNXRuntime | 约442MB（另需约463MB模型） | 免费 | ⚠️ 无开源许可证 | ⚠️ 模型单独打包下载 |
| 团子翻译器 | 2020年2月 | Go | 约833MB | 漫画翻译服务收费 | 否 | ❌ 完全依赖云端，无本地模型 |

可以看出，绝大多数漫画翻译软件都选择了Python搭配PyTorch或ONNXRuntime的技术栈，走开源免费路线，并采用“程序与模型分离”的分发方式，首次运行时再下载模型。ImageTrans默认包含模型以提供开箱即用的体验，但也只有400MB。

## 不同的漫画翻译软件

下面是不同漫画翻译软件的简评、截图与结果图对比。

示例漫画原图：

![](/album/manga-sound-effect/18_094.jpg)

示例漫画官方中文版：

![](/album/manga-sound-effect/target-zh.jpg)

示例漫画官方英文版：

![](/album/manga-sound-effect/target-en.jpg)

### ImageTrans

ImageTrans是使用JavaFX编写的一款跨平台计算机辅助图片翻译软件，作为付费软件，的确提供了很好的易用性，功能丰富、可定制性强。400MB左右，就包含了运行文件和所有基础的OCR和文字去除模型，不管是全自动翻译还是人工编辑，都很好用，执行速度也很快。支持浏览器插件和PSD导出，还有许多其它功能，比如可搜索PDF生成、格漫转条漫、文档扫描等。

![](/album/imagetrans-comparison/imagetrans/ui.jpg)

自动翻译的中文版本：

![](/album/imagetrans-comparison/imagetrans/translated.jpg)

人工编辑后的中文版本：

![](/album/imagetrans-comparison/imagetrans/modified-zh.jpg)

自动翻译的英文版本：

![](/album/imagetrans-comparison/imagetrans/translated-en.jpg)

人工编辑后的英文版本：

![](/album/manga-sound-effect/target-en.jpg)

### BallonsTranslator

BallonsTranslator是最早的开源的计算机辅助漫画翻译软件，使用Python编写，主要的模型都用PyTorch进行推理，支持各种GPU的加速。但国内使用有一定的难度，很多时候模型下不下来，然后默认输出的结果和可操作性差了点。不过可以调整的参数已经算是非常多了，而且开源嘛，每个人都可以自己随心所欲地定制自己想要的功能。

![](/album/imagetrans-comparison/ballonstranslator/ui.jpg)

自动翻译的中文版本：

![](/album/imagetrans-comparison/ballonstranslator/translated.jpg)

自动翻译的英文版本：

![](/album/imagetrans-comparison/ballonstranslator/translated-en.jpg)

### Comic-Translate

专注漫画翻译的另一款开源软件，也是Python编写，但大多数模型都是用ONNXRuntime进行推理。默认的翻译需要买积分付费使用，但提供自定义接口，可以用自己的API。这款的编辑界面比较简单。

![](/album/imagetrans-comparison/comic-translate/ui.jpg)

自动翻译的中文版本：

![](/album/imagetrans-comparison/comic-translate/translated.jpg)

自动翻译的英文版本：

![](/album/imagetrans-comparison/comic-translate/translated-en.jpg)

### Koharu

Koharu是使用Rust+Tauri编写的开源漫画翻译软件，作者在开发过程中为Rust生态也做了很多贡献，也专门训练和转换了不少模型。但国内用户需要梯子才能下载运行文件，相对不太友好。这个项目技术能力还是很好的，但我使用起来还是不太顺手。就比如文字是根据气泡居中的，但其实很多情况，气泡是不规则的，居中的效果不好。

![](/album/imagetrans-comparison/koharu/ui.jpg)

自动翻译的中文版本：

![](/album/imagetrans-comparison/koharu/translated.jpg)

自动翻译的英文版本：

![](/album/imagetrans-comparison/koharu/translated-en.jpg)

### Manga-Image-Translator-UI

使用manga-image-translator的主要模型和设计，开发的开源图形化程序。这个开发者的技术表达能力和理念还是很好的，开发也很勤快，有不少特色功能。但我不太喜欢它的换行，一定要手动加入换行符进行换行，不能自动换行，嵌字算是一般吧。它提供两种界面，一种是web界面，一种是Python的桌面界面。这里演示的默认的桌面界面。

![](/album/imagetrans-comparison/manga-image-translator-ui/ui.jpg)

自动翻译的中文版本：

![](/album/imagetrans-comparison/manga-image-translator-ui/translated.jpg)

自动翻译的英文版本：

![](/album/imagetrans-comparison/manga-image-translator-ui/translated-en.jpg)


### Saber Translator

这个开源项目是一个前后端分离的架构，可以提供一个在线版，用户不需要下载，直接浏览器里运行。它也有一些独创概念，比如它支持书籍管理，生成简介后辅助翻译。目前主要用于翻译为中文，对其他语言支持一般。

基于web技术渲染出来的图还是不错的，但我实在不喜欢这个web界面，比较粗糙，我的小屏幕上显示效果也不太好。

主界面：

![](/album/imagetrans-comparison/saber-translator/ui.jpg)


编辑界面：

![](/album/imagetrans-comparison/saber-translator/ui-editor.jpg)


自动翻译的中文版本：

![](/album/imagetrans-comparison/saber-translator/translated.jpg)

### 猫译员

LabelPlus这个汉化协作软件的作者新出的一款漫画翻译软件。用Flutter编写，是唯一支持桌面和安卓、iOS的软件。

操作流程挺新奇的，不过我还是习惯类似Photoshop这样的界面。然后目前还比较粗糙。

![](/album/imagetrans-comparison/nekotranslator/ui.jpg)

自动翻译的中文版本：

![](/album/imagetrans-comparison/nekotranslator/translated.jpg)

自动翻译的英文版本：

![](/album/imagetrans-comparison/nekotranslator/translated-en.jpg)


### ComiTrans

近期新出的一款开源软件。使用比较简洁，安装方便，主程序400MB，模型400MB。但可配置项目还是很少，界面语言和翻译到其它语言都还不支持设置。它和ImageTrans一样，支持根据背景是否复杂，使用合适的图像修复方法。

![](/album/imagetrans-comparison/comitrans/ui.jpg)

自动翻译的中文版本：

![](/album/imagetrans-comparison/comitrans/translated.jpg)


### 团子翻译器

团子翻译器2020年就推出了，主要用于屏幕截图OCR的方式翻译游戏，现在也支持了漫画翻译，用Go编写的。但可惜漫画翻译完全依赖云端的服务进行OCR和文字去除，需要订阅使用。我试了下，云服务挂了，没有成功翻译。它也支持一定的编辑功能，就是在小屏幕上显示有点问题。

![](/album/imagetrans-comparison/dangatranslator/ui.jpg)

## 总结

虽然都是漫画翻译软件，但不同软件有不同的功能和界面设计，有开源的也有付费的，可以参照本文。选择合适的翻译软件。