---
date: 2018-12-25 15:53:17+08:00
layout: post
title: 新工具！双语句对齐软件Aligner
categories: releasenote
tags: 
---

鉴于一般译者提交的都是成品文档，花了半天时间写了个双语段落和句对齐工具Aligner，原理是先把双语文本按段落分割并人工对齐，然后利用SRX分割规则对每个段落进行句段分割。如果段落的原文和译文句子数量有差异，就补充上空白片段，供后期人工调整。只需使用DELETE键和ENTER键，即可进行切分与合并操作。

[下载地址](https://github.com/xulihang/Aligner/releases/download/v1.0/Aligner.zip)