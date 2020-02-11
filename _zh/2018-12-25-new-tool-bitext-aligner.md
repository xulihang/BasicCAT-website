---
date: 2018-12-25 15:53:17+08:00
layout: post
title: 新工具！双语句对齐软件Aligner
categories: releasenote
tags: 
---

鉴于一般译者提交的都是成品文档，花了半天时间写了个双语段落和句对齐工具Aligner，原理是先把双语文本按段落分割并人工对齐，然后利用SRX分割规则对每个段落进行句段分割。如果段落的原文和译文句子数量有差异，就补充上空白片段，供后期人工调整。只需使用DELETE键和ENTER键，即可进行切分与合并操作。

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