---
date: 2024-08-21 21:11:50+08:00
layout: post
title: 如何本地化B4J桌面程序
categories: blog
tags: imagetrans basiccat
---

ImageTrans是使用B4J编写的桌面程序，支持多种界面语言。

在其背后使用了[Localizator](https://www.b4x.com/android/forum/threads/b4x-localizator-localize-your-b4x-applications.68751/#content)这一本地化库。

它需要将键、语言以下面这样的Excel表格进行存储。

| key       | zh        | en        |
|-----------|-----------|-----------|
| Hello {1} | 你好 {1}  | Hello {1} |



之后在代码中调用，根据键找到对应的语言的版本：

```vb
lblHello.Text = loc.LocalizeParams("Hello {1}!", Array(edtName.Text))
```

要新增一个语言也很容易，直接新建一列，用ISO-639-1标准的语言代码作为表头。比如下面的表格，新增了法语一列。

| key       | zh        | en        | fr          |
|-----------|-----------|-----------|-------------|
| Hello {1} | 你好 {1}  | Hello {1} | Bonjour {1} |


ImageTrans集成了本地化功能，可以导出上述表格，并从上述这样的表格导回翻译。详见这一issue：[issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)

## 使用BasicCAT本地化ImageTrans

下面讲解下如何用BasicCAT翻译导出的xlsx文件用于本地化ImageTrans。

1. 隐藏不需要翻译的列。

   假设我们目前有下面这样的一张表，法语是待翻译的列：


   | key       | zh        | en        | fr          |
   |-----------|-----------|-----------|-------------|
   | Hello {1} | 你好 {1}  | Hello {1} | Hello {1}   |
   
   
   我们需要将其它列隐藏：
   
   | fr          |
   |-------------|
   | Hello {1}   |
   
   之后再导入BasicCAT，BasicCAT就只会处理需要翻译的列。
   
   
2. 使用BasicCAT翻译并生成翻译好的xlsx导回ImageTrans软件即可。我们可以使用BasicCAT的预翻译功能自动调用机器翻译进行翻译。


3. 处理新增的待翻译文本。

   软件每次版本更新，都有可能增加新的需要翻译的文本。
   
   我们可以按照步骤一准备好xlsx文件，之后利用BasicCAT的重新导入功能，基于新的文件和已有的翻译重新生成项目文件。


   ![重新导入](/album/localization/reimport.jpg)
   
   之后使用搜索与替换，查找译文为空的片段，点左下方的"Filter Segments"，在编辑器中只显示这些片段，方便我们翻译新的文本。
   
   ![片段过滤](/album/localization/filter-segments.jpg)






