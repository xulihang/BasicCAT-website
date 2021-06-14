---
title: ImageTrans - 计算机辅助图片翻译工具 
layout: page
permalink: /zh/imagetrans/
---

## 简介

ImageTrans是一款计算机辅助图片文字转录与翻译工具，能够使用OCR技术自动定位并识别文字，自动抹除原文并回填译文，并且拥有针对漫画设计的文字区域合并与检测算法。

![](/album/imagetrans_zh.jpg)

ImageTrans除了当作图片翻译器翻译海报、漫画，也可以用作图片阅读器、文字转录器和深度学习标注器使用。

ImageTrans是我硕士毕业论文的成果：[一个漫画翻译辅助工具的设计与实现](https://www.researchgate.net/publication/342623300_Design_and_Implementation_of_a_Computer-Aided_Comics_Translation_Tool)。

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

和BasicCAT一样，ImageTrans是跨平台的（Windows、macOS、Linux）。此外亦能以服务器的形式运行。

### 其它功能

* 全局字体样式
* 自动检测背景颜色和文字颜色
* 完善的批处理功能

## 漫画翻译结果示例

Come to me , Love —— 美国黄金时代漫画杂志《Boy Loves Girls》第41期

浏览页面：<http://comics.xulihang.me/viewer.html?project=come_to_me_love.itp>

文本检索页面：<http://comics.xulihang.me/search.html>

## 获取ImageTrans

1. 发送邮件至[admin@basiccat.org](mailto:admin@basiccat.org)申请购买。
2. 使用支付宝或者PayPal完成支付。
3. 得到下载链接和邮件。

或者前往FastSpring支付平台自主购买：[链接](https://basiccat.onfastspring.com/)。

定价：

* ImageTrans个人用途：￥75
* ImageTrans商业用途：￥1500

半年内免费更新。

请按照[安装说明](https://imagetrans.readthedocs.io/en/latest/gettingstarted.html#id2)进行操作。

来自高校的师生可以用教育网邮箱发送邮件至[admin@basiccat.org](mailto:admin@basiccat.org)，说明相关信息，打算用ImageTrans做什么任务，能够得到优惠。

## 更多内容

* [软件文档](https://imagetrans.readthedocs.io/zh_CN/latest/)
* [视频教程](/zh/imagetrans/video/)
* [常见问题](/zh/imagetrans/faq/)
* [技术支持](/zh/support/) 
* [技术博客](/zh/tagged/#imagetrans)
* [帮助完善软件](/zh/imagetrans/how-to-contribute/)

## 发布日志

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

### v1.0.0

软件发布。

## 相关工具

* [WebP-Converter](https://github.com/xulihang/WebP-Converter)，转换JPG/BMP/PNG格式的图片到WebP或者将WebP转换为JPG。
* [WebImageHelper](https://github.com/xulihang/WebImageHelper)，下载网页中所有图片或者根据屏幕坐标，下载位于鼠标下方的图片。该工具可以用于翻译网页中的图片，能将翻译好的图片替换网页中的图片。


{% include comments.html %}

