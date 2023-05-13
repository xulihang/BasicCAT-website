---
title: ImageTrans - 计算机辅助图片翻译工具 
layout: page
permalink: /zh/imagetrans/
---

## 简介

ImageTrans是一款计算机辅助图片文字转录与翻译工具，能够使用OCR技术自动定位并识别文字，自动抹除原文并回填译文，并且拥有针对漫画设计的文字区域合并与检测算法。

![](/album/imagetrans_zh.jpg)

ImageTrans除了当作图片翻译器翻译海报、漫画，也可以用作图片阅读器、文字转录器、截图OCR翻译器和深度学习标注器使用。

ImageTrans是我硕士毕业论文的成果：[一个漫画翻译辅助工具的设计与实现](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)。

[获取ImageTrans](#获取imagetrans)

## 软件特色

### 准确定位文字区域

![](/album/imagetrans-features/localization.jpg)

支持使用自然场景文字检测法、目标检测法和启发式等多种定位方法。


### 准确识别文字

* 支持调用多种OCR

    支持谷歌、百度、搜狗、有道等在线OCR服务与Tesseract、PaddleOCR、Windows 10自带OCR等离线OCR引擎。具体的支持情况和使用方法见[FAQ](https://www.basiccat.org/zh/imagetrans/faq/)。
	
	此外也可以通过编写插件来调用其它OCR服务。

* 支持主要语言

	使用的OCR支持世界上所有主要语言。

* 支持使用多种图像处理方法来改善结果

	* 去除背景
	
	    ![](/album/imagetrans-features/image.jpg)
	
		↓
	
	    ![](/album/imagetrans-features/pure_text.jpg)
	 
	* 去除日语振假名
	
	    去除前：
		
		```		
		搜狗OCR：えーっとはいばん灰原さんのせき席は…
		```
		
		去除后：
		
		![](/album/imagetrans-features/no_furigana.jpg)
		
		```
		搜狗OCR：えーっと灰原さんの席は…
		```
	
	* 日语竖排转横排
	
	    基于CRNN训练的OCR多数只能识别横排文字，使用这些OCR模型时需要将竖排图像转横排
		
		![](/album/imagetrans-features/vertical.jpg)
		
		```
		百度OCR：強んな勉とら!文事なかす原るん日で灰すみ今
		```
	
		↓
	
	    ![](/album/imagetrans-features/horizontal.jpg)
		
		```
		百度OCR：今日からみんなと勉強する事になった灰原哀さんです!
		```

* 支持去除换行、空格等文本后处理
* 支持使用拼写检查完善结果

	![](/album/imagetrans-features/spell_check.jpg)

### 辅助翻译功能

支持调用多种机器翻译引擎，支持翻译记忆、语料检索、术语管理等常见的计算机辅助翻译软件的功能，并针对漫画设计了拟声词检索系统。
	
### 准确抹除文字并回填译文

软件能调用Sickzil-Machine、二值化、PatchMatch等工具和算法生成文字掩膜、去除文字，并根据文字区域的位置和面积回填译文，自动调整译文字体大小。以上操作均支持手动调整。

![](/album/imagetrans-features/text-removal-and-reinjection.jpg)

### 互操作性

* 支持利用脚本将结果保存为Photoshop的PSD格式文件
* 支持将数据导出到Excel、Word、XLIFF等文件或者从这些文件导回翻译
* 支持使用Chrome插件翻译网页中的图片

### 跨平台

和BasicCAT一样，ImageTrans是跨平台的（Windows、macOS、Linux）。此外亦能以服务器的形式在线运行。

### 其它功能

* 全局字体样式
* 自动检测背景颜色和文字颜色
* 完善的批处理功能

## 漫画翻译结果示例

示例1：

银器抛光剂：<https://blog.xulihang.me/Comics-Viewer/viewer.html?uniquename=silverpolish>

示例2（旧版）：

Come to me , Love —— 美国黄金时代漫画杂志《Boy Loves Girls》第41期

浏览页面：<http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

文本检索页面：<http://comics.xulihang.me/search.html>

## 获取ImageTrans

请前往FastSpring平台自主购买：[链接](https://basiccat.onfastspring.com/)。

或者使用面包多：[链接](https://mbd.pub/o/bread/YpmUmJhs)。

定价：

* ImageTrans个人用途：￥75
* ImageTrans商业用途：￥1500

半年内免费更新。

请按照[安装说明](https://imagetrans.readthedocs.io/zh_CN/latest/gettingstarted.html)进行操作。

来自高校的师生可以用教育网邮箱发送邮件至[admin@basiccat.org](mailto:admin@basiccat.org)，说明相关信息，打算用ImageTrans做什么任务，能够得到优惠。

如果无法购买，也请[邮件联系我](mailto:admin@basiccat.org)。

## 更多内容

* [软件文档](https://imagetrans.readthedocs.io/zh_CN/latest/)
* [视频教程](/zh/imagetrans/video/)
* [常见问题](/zh/imagetrans/faq/)
* [技术支持](/zh/support/) 
* [技术博客](/zh/tagged/#imagetrans)
* [帮助完善软件](/zh/imagetrans/how-to-contribute/)

## 发布日志

### v1.9.7 (2023/05/13)

* 修复开启自动保存原文译文时清除译文位置会清空文本的问题 [#issue408](https://github.com/xulihang/ImageTrans-docs/issues/408)
* 术语列表添加右键删除功能

### v1.9.6 (2023/05/07)

* 修复查找与替换多行文本的正则匹配问题 [#issue402](https://github.com/xulihang/ImageTrans-docs/issues/402)
* 支持导出TMX翻译记忆文件
* 更新ChatGPT插件以支持设置第三方服务 [#issue401](https://github.com/xulihang/ImageTrans-docs/issues/401)

### v1.9.5 (2023/05/01)

* 更新JavaScript版Photoshop脚本以支持富文本
* 预翻译支持调用翻译记忆进行完全匹配
* 新的右键菜单项目：清除译文位置 [#issue393](https://github.com/xulihang/ImageTrans-docs/issues/393)
* 将主题设置应用于所有窗口
* 字体样式设置的可用性优化

### v1.9.4 (2023/04/05)

* 修复了仿斜体在设置了行距时透视变换高度不对的问题
* 仿粗体和仿斜体可以设置加粗和倾斜的程度

### v1.9.3 (2023/04/02)

* 支持导出为PDF [#issue366](https://github.com/xulihang/ImageTrans-docs/issues/366)
* 新的机器翻译插件：[ChatGPT](https://github.com/xulihang/ImageTrans-docs/issues/375)、[Yandex](https://github.com/xulihang/ImageTrans-docs/issues/386)
* 新增富文本代码编辑器 [#issue390](https://github.com/xulihang/ImageTrans-docs/issues/390)
* 富文本支持仿粗体、仿斜体、字体名称和字体大小的设置 [#issue389](https://github.com/xulihang/ImageTrans-docs/issues/389)
* 新的竖排文字引擎设置：字符替换 [#issue388](https://github.com/xulihang/ImageTrans-docs/issues/388)
* 选中多个文本框时不执行单个文本框的相关操作

### v1.9.2 (2023/03/05)

* 修复合并区域时译文没有被合并的问题
* 添加按文字区域执行文字掩膜和去文字图生成操作的项目设置
* 支持保存自然场景文字检测的文字掩膜结果 [#issue370](https://github.com/xulihang/ImageTrans-docs/issues/370)

### v1.9.1 (2023/02/19)

* 修复计算横排文字高度时没有忽略BBCode的问题
* 修复文字样式设置为大写时BBCode失效的问题
* 默认的JRE改用Liberica JRE 11

### v1.9.0 (2023/02/12)

* 支持富文本（基于BBCode） [#issue194](https://github.com/xulihang/ImageTrans-docs/issues/194#issuecomment-1426964710)
* 修复网络请求、Ctrl多选和文字区域置信度的相关问题

### v1.8.5 (2023/01/08)

* 新的OCR插件：macOS自带的OCR [#issue341](https://github.com/xulihang/ImageTrans-docs/issues/341)
* 支持从文件路径粘贴图片
* 通过file命令检测图片是否为WebP格式 [#issue338](https://github.com/xulihang/ImageTrans-docs/issues/338)
* 修复data URL链接图片加载失败的问题
* 修复第三方图像修复方法设置为默认方法时传了文字掩膜的灰度图而不是原图的问题
* 添加是否在键入时自动更正的选项


### v1.8.4 (2022/11/26)

* 支持自定义快捷键 [#issue323](https://github.com/xulihang/ImageTrans-docs/issues/323)
* 界面优化

### v1.8.3 (2022/11/13)

* 新功能：根据检测到的文字颜色自动匹配预设的文字样式  [#issue322](https://github.com/xulihang/ImageTrans-docs/issues/322)
* 100%比例显示屏幕阅读器的截图

### v1.8.2 (2022/10/29)

* 排版模式下，拖拽文本框时隐藏文本框的边框（可以在偏好设置里取消隐藏） [#issue314](https://github.com/xulihang/ImageTrans-docs/issues/314)
* 新的项目设置选项：读取子文件夹（默认开启） [#issue304](https://github.com/xulihang/ImageTrans-docs/issues/304)


### v1.8.1 (2022/10/05)

* 修复通道数不为4的png图像去除文字失败的问题
* 修复“添加覆盖图层”多选框的逻辑

### v1.8.0 (2022/10/02)

* 支持导出图片为PNG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* 如果图片格式为PNG，去除文字图和成品图的格式也使用PNG。其它格式则默认使用JPG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* 项目设置里新增默认文本框大小的设置 [#issue290](https://github.com/xulihang/ImageTrans-docs/issues/290)
* 支持用快捷键调整多个文字区域的位置 [#issue285](https://github.com/xulihang/ImageTrans-docs/issues/285)


### v1.7.11 (2022/09/18)

修复了一个v1.7.8引入的数据导出的bug [#issue279](https://github.com/xulihang/ImageTrans-docs/issues/279)

### v1.7.10 (2022/09/18)

* macOS上的快捷键优先使用Command键 [#issue277](https://github.com/xulihang/ImageTrans-docs/issues/277)
* 优化掩膜编辑器的可用性 [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* 项目设置中添加竖排文字引擎的自定义设置 [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271#issuecomment-1246208024)

### v1.7.9 (2022/09/12)

改善竖排引擎在不同字体下的表现 [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271)

### v1.7.8 (2022/09/11)

* 修复图片宽度过大时文字掩膜编辑器保存失败的问题 [#issue266](https://github.com/xulihang/ImageTrans-docs/issues/266)
* 完善字体样式的设置 [#issue256](https://github.com/xulihang/ImageTrans-docs/issues/256)
* 完善文字掩膜编辑器画笔的行为 [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* 新的字体样式设置选项：字间距（仅适用于竖排文字） [#issue224](https://github.com/xulihang/ImageTrans-docs/issues/224)

### v1.7.7 (2022/08/27)

* 使用透视变换更准确地获取旋转区域图像
* 其它bug修复 [#issue246](https://github.com/xulihang/ImageTrans-docs/issues/246) [#issue248](https://github.com/xulihang/ImageTrans-docs/issues/248)

### v1.7.6 (2022/08/20)

自动沿用项目之前使用的OCR引擎和语言 [#issue245](https://github.com/xulihang/ImageTrans-docs/issues/245)

### v1.7.5 (2022/08/13)

横排文本支持设置行距 [#issue244](https://github.com/xulihang/ImageTrans-docs/issues/244)

### v1.7.4 (2022/07/24)

* 竖排引擎支持从左到右排列文字 [#issue242](https://github.com/xulihang/ImageTrans-docs/issues/242)
* 新的偏好设置：是否自动保存OCR结果到剪贴板 [#issue169](https://github.com/xulihang/ImageTrans-docs/issues/169)

### v1.7.3 (2022/07/03)

* 掩膜画笔编辑模式支持调整半径
* 修复没有检测分镜时导出网页失败的问题
* 更新JS版Photoshop脚本以支持PSB格式文件

### v1.7.2 (2022/06/03)

新的偏好设置：临时网络请求文件夹，用于解决部分用户遇到的“拒绝访问”问题 [#issue218](https://github.com/xulihang/ImageTrans-docs/issues/218)

### v1.7.1 (2022/05/29)

* 字体修改UX优化 [#issue212](https://github.com/xulihang/ImageTrans-docs/issues/212)
* 快捷键优化 [#issue205](https://github.com/xulihang/ImageTrans-docs/issues/205#issuecomment-1135449173)
* 新增右键刷新功能，可以用于查看翻译模式下过快切换图片报错的问题 [#issue211](https://github.com/xulihang/ImageTrans-docs/issues/211)
* 新的图像修复插件：Lama Inpainting [#issue216](https://github.com/xulihang/ImageTrans-docs/issues/216)


### v1.7.0 (2022/05/22)

* 新增无文字原图和纯文字图管理器 [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199)
* 自动更正可用于OCR [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199#issuecomment-1126957556)
* 修复XLIFF导入失败的问题 [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* 支持从Tab分隔的TXT文件导回翻译 [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* 字体样式的背景可以设置为透明 [#issue208](https://github.com/xulihang/ImageTrans-docs/issues/208)
* 其它Bug修复与优化 [#issue203](https://github.com/xulihang/ImageTrans-docs/issues/203)


### v1.6.5 (2022/05/01)

* 针对日译英这样原文竖排译文横排的情况，新增自动调整文字区域位置和大小已适合横排显示的功能 [#issue190](https://github.com/xulihang/ImageTrans-docs/issues/190#issuecomment-1107365256)
* 文字编辑区下方新增语音朗读按钮（可设置隐藏） [#issue191](https://github.com/xulihang/ImageTrans-docs/issues/191)
* 可以设置默认的文字掩膜和图像修复方法 [#issue192](https://github.com/xulihang/ImageTrans-docs/issues/192#issuecomment-1114153046)
* 按文字区域调用文字掩膜生成和图像修复操作以提高处理速度
* 其它小的优化

### v1.6.4 (2022/04/17)

* 修复macOS下打开项目文件夹操作无效和旋转鼠标手势过大的问题
* 字体样式设置操作支持多选，并能立即生效 [#issue185](https://github.com/xulihang/ImageTrans-docs/issues/185)
* 优化竖排文字引擎的字母和标点显示 [#issue186](https://github.com/xulihang/ImageTrans-docs/issues/186)
* 修复竖排文字引擎字号过大时文字被裁剪的问题

### v1.6.3 (2022/04/04)

* 添加对面包多支付方式的支持
* 新增免费版DeepL（[说明](https://github.com/xulihang/ImageTrans_plugins/tree/master/deeplfreeMT)）

### v1.6.2 (2022/03/27)

* 添加导出为网页的功能（支持按分镜阅读、语音朗读）
* 服务器现可用作HTTP服务器以在局域网内浏览导出的网页
* 竖排文字引擎：支持行距设置，优化速度和标点的显示
* 新增添加全图文本框操作
* 输出文件夹名可设置 [#issue170](https://github.com/xulihang/ImageTrans-docs/issues/170#issuecomment-1058741066)
* 自定义工作流操作完成后可以播放提示音 [#issue171](https://github.com/xulihang/ImageTrans-docs/issues/171)
* 字体工具栏的字号现可直接输入 [#issue176](https://github.com/xulihang/ImageTrans-docs/issues/176)

### v1.6.1 (2022/02/26)

* 支持使用鼠标拖动旋转文本框。旋转角度可以用于矫正文字图像，从而提高识别率 [#issue157](https://github.com/xulihang/ImageTrans-docs/issues/157)
* 补充分镜和颜色检测的批处理进度条 [#issue153](https://github.com/xulihang/ImageTrans-docs/issues/153)
* TTS语音转文字添加语速设置，并支持同时朗读原文和译文 [#issue152](https://github.com/xulihang/ImageTrans-docs/issues/152)
* 修复了AU3 Photoshop脚本的文字索引问题 [#issue160](https://github.com/xulihang/ImageTrans-docs/issues/160)

### v1.6.0 (2022/02/06)

* 新增漫画分镜检测功能，可以用于文字区域排序和移动端按分镜阅读 [#issue147](https://github.com/xulihang/ImageTrans-docs/issues/147)
* 新增查看机器翻译的右键菜单，可以查看多个文字区域的文本拼接后的翻译结果，主要用于一句话被拆分到不同气泡的情况 [#issue118](https://github.com/xulihang/ImageTrans-docs/issues/118)
* 其它性能优化与Bug修复

### v1.5.5 (2022/01/31)

* 气泡检测支持长幅条漫 [#issue138](https://github.com/xulihang/ImageTrans-docs/issues/138)
* 自动字体大小调整支持设置最大字体大小 [#issue146](https://github.com/xulihang/ImageTrans-docs/issues/146)
* 屏幕阅读器新增监听剪贴板功能 [#issue145](https://github.com/xulihang/ImageTrans-docs/issues/145)
* 静默翻译器的翻译结果会保存原文件路径信息 [#issue144](https://github.com/xulihang/ImageTrans-docs/issues/144)
* 新的机器翻译插件：DeepL [#issue15](https://github.com/xulihang/ImageTrans-docs/issues/15)
* 拓展区域操作会检测图片尺寸，避免超出图片范围
* 切换图片时移动滚动条至上方

### v1.5.4 (2022/01/22)

* 修复了一个偏好设置页面的本地化问题 [#issue141](https://github.com/xulihang/ImageTrans-docs/issues/141)
* 添加了一个气泡检测前缩放图片的选项（默认缩放至1024像素） [#issue137](https://github.com/xulihang/ImageTrans-docs/issues/137)

### v1.5.3 (2022/01/16)

* 更新OpenCV至4.5.5以支持Scaled-Yolo V4 [#issue129](https://github.com/xulihang/ImageTrans-docs/issues/129)
* 支持导出文字区域并导回每张图片的OCR结果 [#issue124](https://github.com/xulihang/ImageTrans-docs/issues/124)
* 纯色覆盖的文字抹除模式可以设置背景为圆角矩形 [#issue123](https://github.com/xulihang/ImageTrans-docs/issues/123)
* 修复了垂直居中文字在不同比例下的行为不一致问题 [#issue122](https://github.com/xulihang/ImageTrans-docs/issues/122)
* 自动更正功能也能用于机器翻译 [#issue133](https://github.com/xulihang/ImageTrans-docs/issues/133)
* 其它界面和性能优化

### v1.5.2 (2021/12/26)

* 添加文字转语音（TTS）功能
* 可以直接用删除键删除文字区域
* 启发式文字检测支持设置超时时间
* 其它Bug修复

### v1.5.1 (2021/12/05)

* 完善屏幕阅读器的行为 [issue 110](https://github.com/xulihang/ImageTrans-docs/issues/110)
* 完善文字右对齐时排版模式的行为

### v1.5.0 (2021/11/14)

* 支持手动加载字体文件 [issue 100](https://github.com/xulihang/ImageTrans-docs/issues/100)
* 新增基于Swing JTextArea的兼容输入助手，用于暂时解决JavaFX的藏语输入问题 [issue 99](https://github.com/xulihang/ImageTrans-docs/issues/99)
* 新增项目设置：编辑区域字体
* 其它Bug修复

### v1.4.8 (2021/10/30)

* 统一文本框在100%与其它显示比例下的表现 [issue 94](https://github.com/xulihang/ImageTrans-docs/issues/94)
* 新的OCR插件：Google Drive OCR [issue 91](https://github.com/xulihang/ImageTrans-docs/issues/91)
* 修正了一个谷歌OCR没有正确获取文字的问题

### v1.4.7 (2021/10/17)

* 使用线程运行启发式文字检测以避免程序不响应的问题
* 统一屏幕阅读器与主程序的OCR操作行为
* 默认显示比例调整为100%

### v1.4.6 (2021/10/06)

* 新增Tesseract文字行识别模式。由ImageTrans定位文字行后再用Tesseract识别每个文字行，可以大大提高准确率 （[issue87](https://github.com/xulihang/ImageTrans-docs/issues/87)）
* 新增自动大写选项
* 屏幕阅读器新增自动机器翻译选项
* 其它Bug修复

### v1.4.5 (2021/09/25)

* 新增静默翻译助手
* 新增基于投影的振假名去除方法
* 更新OpenCV至4.5.3，支持OpenCV自带的文字检测与识别功能（[插件地址](https://github.com/xulihang/ImageTrans-docs/issues/85)）。
* 新增日文OCR插件：[读取革命](https://github.com/xulihang/ImageTrans-docs/issues/83)。
* 其它Bug修复

### v1.4.4 (2021/08/07)

* 修复生成高分辨率译文图片时旋转的文字宽高不正确的问题
* 修复竖直文字排版时自动调整过小区域后没有调整文字位置的问题
* 新的菜单项：打开项目文件夹

### v1.4.3 (2021/08/05)

* 修复切换工具栏到字体工具栏时没有更新当前文字区域字体设置的问题
* 修复切换文字区域时字体工具栏的垂直居中按钮没有更新状态的问题
* 完善垂直居中的效果
* 其它优化

### v1.4.2 (2021/07/25)

* 修复分辨率较大（宽度或者高度>8000）的图片导出失败的问题
* 竖直排列的文字支持自动调整字体大小
* 更新竖直排列文字区域的调整操作以适应1.4.1版文字靠右排列这一变动：鼠标点击区域左侧为调整大小，右侧为调整位置
* 其它优化


### v1.4.1 (2021/07/18)

* 添加垂直居中文字的选项（[#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72)）
* 添加删除文字区域的快捷键（[#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71)）
* 没有保存文字掩膜时，如果没有增删或者调整文字区域，则不重新生成去文字的图像
* 默认的语言列表添加了越南语、印地语和印度尼西亚语（之前版本需要手动输入语言代码）（ [#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61)）
* 竖版文本默认从右侧开始排列
* 其它优化

### v1.4.0 (2021/06/14)

* 添加另存为操作
* 添加导航菜单
* 添加已翻译图片管理器，标记为已翻译的图片在批处理操作时会被跳过（[#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59)）
* 原文译文编辑器可以变成活动窗口
* 使用Spinner作为调整图片显示比例的控件
* 打开项目时会自动关闭已打开项目（[#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39)）


### v1.3.7 (2021/05/04)

* 工具栏切换时保留状态（[#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47)）
* 修复一个导出数据时没有包含译文的问题（[#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45)）

### v1.3.6 (2021/05/02)

* 右键删除和反转置信度支持操作所有选中的文字区域
* 按下Control键时能以单击方式进行选择多个文字区域
* 文字区域右键添加去除原文和译文的功能
* 其它优化

### v1.3.5 Update2 (2021/04/26)

* 没有打开项目就执行导入图片操作时会给出温馨提示
* 添加JPEG扩展名的支持

### v1.3.5 Update (2021/04/06)

* 打开过去的项目时语言选择器不会再跳出来
* 设置图片选择器的鼠标悬浮文本为当前文件名

### v1.3.5 (2021/03/30)

* 完善单次机器翻译请求翻译多个句子的功能，百度现在也支持批量翻译了
* 启发式定位方法添加自动调参功能（试验性）
* 完善字体样式的操作，支持移动以及从其它项目导入
* 新建项目时会要求设置语言对
* 统一字体颜色选择器
* 改善撤销功能

### v1.3.4 (2021/03/27)

解决GitHub上提出的问题：[#16](https://github.com/xulihang/ImageTrans-docs/issues/16)、[#19](https://github.com/xulihang/ImageTrans-docs/issues/19)、[#22](https://github.com/xulihang/ImageTrans-docs/issues/22)、[#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

### v1.3.3 (2021/03/23)

* 更新[ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR)，添加了[ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite)，支持组合不同的文字检测与文字识别方法，并更新了对应的插件
* 修复批量OCR时Index超出文本框数量的问题。[对应的issue](https://github.com/xulihang/ImageTrans-docs/issues/6)
* 添加OCR间隔设置

### v1.3.2 (2021/03/07)

* OCR某个文字区域时，如果图像过小，则进行放大
* 本地化之前遗漏的布局
* 新的OCR插件：CRAFT+CRNN。它基于新的[ImageTrans_OCR项目](https://github.com/xulihang/ImageTrans_OCR)。这个项目计划是做成一个聚合目前具有可定制性、识别速度和准确率都不错的离线OCR的服务。

### v1.3.1 (2021/02/28)

* 新的OCR插件：Naver的Clova OCR。
* 支持以框选模式快速合并或者删除区域
* 添加框选后OCR的选项
* 添加操作文字区域的快捷键（移动和OCR）
* 离线气泡检测，基于OpenCV的Dnn模块，可以调用[DarkNet](https://zhuanlan.zhihu.com/p/346021510)或者[TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API)生成的模型。需要在软件根目录放置模型文件、模型配置文件和model.json（[示例](/assets/model.json)）。
* 文字编辑器支持上下显示原文和译文


### v1.3.0 (2021/02/10)

* 添加自定义工作流功能，可以自己定义批处理流程
* 支持导入PDF。PDF会被导出成图片。如果PDF的文字可以复制，文字也会被导入

### v1.2.11

* 修复译文区域位置没有正确保存的问题
* 修复Photoshop脚本文件保存路径的问题
* 掩膜编辑器支持用指定颜色生成掩膜，并能半透明显示掩膜
* 支持调用彩云小译同时请求多个句子的翻译，可以大大提高机器翻译速度
* 机器翻译预翻译支持设置请求间隔以避免单位时间内请求次数过多导致无法获取翻译（机器翻译服务提供商通常会设置QPS）

### v1.2.10

* 新的OCR插件：ABBYY Cloud
* 支持使用LanguageTool对OCR识别结果进行拼写检查


### v1.2.9

* 如果阅读顺序为从右往左，排序前先对文本框进行翻转
* 文字去除器添加图像修复半径选项
* 添加主题。当前提供暗色主题和绿色主题。
* 部分OCR和机器翻译默认使用我个人的API密钥，机器翻译包含百度、小牛和腾讯，OCR包含OCRSPACE、Azure和百度。

### v1.2.8

* 添加撤回功能
* 使用TextFlow作为默认的文字渲染器。文本不会出现省略号了。
* 切换显示比例不会改变字体和布局
* 其它优化

### v1.2.7

* 支持同时运行多个tesseract实例以加快OCR速度
* 保留验证记录7天
* 搜狗OCR支持从右至左阅读的顺序
* 添加精确版百度OCR
* 修复搜索与替换存在的问题（错误的片段跳转行为和本地化导致的失败替换）

### v1.2.6

* 从链接下载的WebP格式图片会被转换为JPG格式（使用OpenCV） 
* 支持去除日语漫画中的振假名以得到更好的OCR结果
* 更好地转换竖直排列的日语为横向排列图像（旋转和居中放置如“—”这样的内容）
* 支持统一字体样式操作
* OCR得到的文字区域也会被拓展

### v1.2.5

* 修复一个译文文字区域位置被原文区域位置覆盖的问题
* 掩膜编辑器支持画笔模式
* 字体设置支持设置字母大写
* 文字检测新增最小宽度/高度重叠百分比设置
* 修复了一个文字区域有重叠时不被添加的问题
* Photoshop脚本支持设置粗体、斜体、大写和旋转等样式

### v1.2.4

* 添加对ImageTrans Chrome扩展程序（插件）的支持。访问[此处](https://github.com/xulihang/ImageTrans_chrome_extension)了解使用说明。
* 导入图片时不导入文字掩模、去文字图和导出的成品图
* 修复v1.2.2的最近项目记录功能导致无法正常新建项目的问题
* 其它优化

### v1.2.3

* 添加OCR后翻译的选项
* 非精确模式查看翻译时，如果原文和译文为空，文本框的背景变为透明，便于查看原文
* 批量翻译的文字区域检测操作添加自然场景文字和气泡检测
* 静默翻译器支持设置字体
* 添加右键菜单，支持根据图片链接下载图片到项目

### v1.2.2

* 添加静默翻译器，可以批量翻译图片，支持从命令行调用或者以[服务器](https://github.com/xulihang/ImageTrans_Server)形式运行
* 新的OCR插件：搜狗深智OCR
* 保存最近打开的项目路径
* 一键翻译功能如果使用OCR，会提示是否进行区域合并


### v1.2.1

* 支持同时拖拽多个文本框
* 支持对齐多个文本框
* 全局字体样式支持设置背景、描边和旋转
* 添加右键粘贴图片操作

### v1.2.0

* 如果阅读顺序设为由右向左，按坐标顺序的倒序进行文字合并
* 添加掩膜生成器和图像修复的插件。首先添加的是插件是[Sickzil-Machine](https://github.com/xulihang/SickZil-Machine)
* Tesseract支持检测整张图片的文字区域
* 单图片的预翻译和一键翻译支持（图像上右键进行调用）
* 一键翻译中的自然场景文字检测方法替换为OCR
* 添加最小字体大小设置
* 添加自动调整文字区域大小的选项
* 使用勾选框而不是按钮来查看翻译版图片
* 搜索与替换支持处理原文
* 其它小的改进

### v1.1.11

* 新的OCR插件：[easyOCR](https://www.jaided.ai/easyocr)，腾讯文字识别
* OCR语言列表仅显示所选引擎支持的语言
* 拓展区域时将原区域保存为目标文本区域
* 修正TabPane的本地化方法

### v1.1.10

* 屏幕阅读器添加机器翻译
* 去除一些第三方的类库

### v1.1.9

* 更新OpenCV至4.5.0
* 文字区域置信度支持离线获取，并显示操作进度
* 新的OCR插件：WinRT OCR，支持调用Windows10自带的OCR功能，需要系统安装对应的语言包
* 打包了部分BasicCAT的机器翻译插件
* 界面优化


### v1.1.8

* 根据顺序生成文字掩膜和去文字图像并显示批处理进度
* 图像修复操作改用不同线程避免程序不响应的问题
* 在生成掩膜时检查文字区域的位置是否正确
* 修复处理过大的图片时，文字掩膜和图像错位的问题
* 图像的右键菜单里添加文字区域相关操作

### v1.1.7

* 掩膜编辑器支持缩放和在所选区域生成掩膜
* 文字去除器能去除选定区域的文字
* 掩膜的默认颜色重新改为红色
* 添加去除文字图片编辑功能
* Bug修复

### v1.1.6

* 使用PNG保存文字掩膜，以让覆盖方式去除文字模式支持背景颜色为黑色的情况
* 支持创建文本框副本


### v1.1.5

* 新增CJK竖直文字排版引擎
* 添加自动更正功能（可用于解决macOS上全角标点的输入问题）
* Bug修复

### v1.1.4

* 工具栏新工具：字体设置
* 对于新建项目和导入图片操作，曾经选择的路径会得到共享
* 更好的颜色选择

### v1.1.3

* 新的插件类型：OCR插件。代码开源：[github](https://github.com/xulihang/ImageTrans_plugins)。支持调用PaddleOCR离线OCR。
* 新的OCR引擎：ABBYY（使用ABBYY FineReader的[命令行接口](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms)，只支持Windows）
* 新工具：屏幕阅读器。它能用作一个截图工具，截图能调用ImageTrans的OCR引擎进行文字识别，也能直接添加进ImageTrans的项目里。
* 添加工具栏，能提供更多操作，例如文字区域的分割、合并和选择。
* 鼠标的形状会根据提供的操作做出正确的改变。

### v1.1.2

新OCR选项：将文字竖直排列的图片改成横向排列，适用于竖排的日语，可以改善OCR结果

### v1.1.1

* 添加一键翻译功能
* 新增基于自然场景文字检测的文字区域检测功能
* 记住之前选择文件的路径

### v1.1.0

* 添加外部的文字去除器（试验性）
* 添加本地化支持。软件现在能用中文和英文显示。

### v1.0.1

* 更多设置
* 支持富文本
* XLIFF的导入与导出

### v1.0.0 (2020/03/13)

软件发布。

## 相关工具

* [WebP-Converter](https://github.com/xulihang/WebP-Converter)，转换JPG/BMP/PNG格式的图片到WebP或者将WebP转换为JPG。
* [WebImageHelper](https://github.com/xulihang/WebImageHelper)，下载网页中所有图片或者根据屏幕坐标，下载位于鼠标下方的图片。该工具可以用于翻译网页中的图片，能将翻译好的图片替换网页中的图片。


{% include comments.html %}

