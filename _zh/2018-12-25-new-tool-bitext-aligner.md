---
date: 2018-12-25 15:53:17+08:00
layout: post
title: 新工具！双语句对齐软件Aligner
categories: releasenote
tags: 
---

鉴于一般译者提交的都是成品文档，花了半天时间写了个双语段落和句对齐工具Aligner，原理是先把双语文本按段落分割并人工对齐，然后利用SRX分割规则对每个段落进行句段分割。如果段落的原文和译文句子数量有差异，就补充上空白片段，供后期人工调整。只需使用DELETE键和ENTER键，即可进行切分与合并操作。

此外，软件也集成了[LF Aligner](https://sourceforge.net/projects/aligner/)和[Bleualign](https://github.com/rsennrich/Bleualign/)等自动对齐工具。

关于对齐原理的介绍：[平行文本对齐](http://blog.xulihang.me/parallel-text-alignment/)

### 具体用途

1. 构建句对齐平行语料
2. 从翻译好的文件导回文本到CAT软件中
3. 从分离的源文件和目标文件建立双语对照文件

### 视频演示

<iframe src="//player.bilibili.com/player.html?aid=754731761&bvid=BV12k4y1k7QC&cid=239243954&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### 推荐的对齐操作步骤

导入文本 -> 用LF Aligner进行段落对齐后手动修正 -> 将段落切分为句子 -> 用LF Aligner或者bleualign自动对齐句子后手动修正

注意：

1. 不同格式的文件转换为纯文本可以使用Apache Tika或者BasicCAT（基于Okapi Tikal）。
2. 句子分割规则会对结果有较大的影响，请确保你使用了合适的句子分割规则。


### 运行所需环境

Java 8，Python 3 （Bleualign功能需要），LF Aligner

Windows版运行环境下载（解压到Aligner的根目录）：[jre8u192.zip](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ#list/path=%2FBasicCAT%2Fjre&parentPath=%2F)，[Python3.zip](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ#list/path=%2FBasicCAT%2FAligner)

### 版本记录

* v1.5.5

    更新：
    
	* 集成[LF Aligner](https://sourceforge.net/projects/aligner/)
	* 删除重复片段操作同时检查原文和译文

	[下载](https://github.com/xulihang/Aligner/releases/download/v1.5.5/Aligner.zip)


* v1.5.4

    更新：
    
	* 支持从BasicCAT工作文件分别读取原文和译文
	* 右键菜单添加空白片段功能
	* 选择一个SRX文件后更新已读取的规则
    * 其它Bug修复

	[下载](https://github.com/xulihang/Aligner/releases/download/v1.5.4/Aligner.zip)

* v1.5.3

    更新：
    
	* 导出为XLIFF
	* Bleualign结果如果删除了部分片段，会用红色边框表示出来
	* Bleualign结果如果不准确（通过计算单个片段的译文字数和原文字数之比与全篇的译文字数和原文字数之比得出），会用黄色边框表示出来
    * 给跳转到空白片段与问题片段的操作添加快捷键
	* 新的片段操作，通过右键菜单调出（在编辑器的空白部分右键）
	
	![](/album/aligner_listview_context_menu.jpg)

	[下载](https://github.com/xulihang/Aligner/releases/download/v1.5.3/Aligner.zip)

* v1.5.2

    更新：
    
    * 字数统计功能
	* 删除特定片段功能（片段范围、重复片段、空白片段、指定文本）
	* 前往下一个空白片段功能
	* 清洗标签功能
	* 导出XLSX功能
	* 其它Bug修复

	[下载](https://github.com/xulihang/Aligner/releases/download/v1.5.2/Aligner.zip)

* v1.5.1

    更新：
    
    * 支持读取TMX、XLIFF文件以及BasicCAT的工作文件
	* 支持从剪贴板粘入内容
	* TMX导出支持处理标签

	[下载](https://github.com/xulihang/Aligner/releases/download/v1.5.1/Aligner.zip)

* v1.5.0

    更新：
    
    * 新的项目文件格式（和以往版本不兼容）
	* Bleualign能够在段落级别进行

	[下载](https://github.com/xulihang/Aligner/releases/download/v1.5.0/Aligner.zip)

* v1.4.0

    更新：
    
    * 更新文本分割算法
	* 使用[Bleualign](https://github.com/rsennrich/Bleualign/)进行自动对齐，可以较好地对齐语料

	[下载](https://github.com/xulihang/Aligner/releases/download/v1.4.0/Aligner.zip)
	
	如何使用Bleualign:
	
	1. 确保Python已经安装
	2. 将源文本导出到txt文件并使用机器翻译翻译它
	3. 菜单栏“Edit”->“Bleualign”->“Align”，选择翻译好的文件后执行对齐操作

* v1.3.1

	变更: 去除空行。
	
	[下载](https://github.com/xulihang/Aligner/releases/download/v1.3.1/Aligner.zip)

* v1.3

    新功能：
    
    * 读取ass双语字幕文件
    * 更快的TMX导出速度
    
    [下载](https://github.com/xulihang/Aligner/releases/download/v1.3/Aligner.zip)



* v1.2

    新功能：
    
    * 读取双语文件 （一行原文，一行译文）
    * 支持docx文件
    * 允许编辑文本
    
    [下载](https://github.com/xulihang/Aligner/releases/download/v1.2/Aligner.zip)

* v1.1

    新功能：
    
    * 往上或往下移动片段 
    * 删除片段
    * 导出TMX
    * 拖拽方式添加文本文件
    
    [下载](https://github.com/xulihang/Aligner/releases/download/v1.1/Aligner.zip)

* v1.0
    
    第一次发布。
    
    [下载](https://github.com/xulihang/Aligner/releases/download/v1.0/Aligner.zip)
	