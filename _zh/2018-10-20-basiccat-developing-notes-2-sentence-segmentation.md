---
date: 2018-10-20 11:05:50+08:00
layout: post
title: BasicCAT开发笔记（二）：句段分割
categories: blog
tags: CAT
---

句段分割是要把成段的原文以句为单位进行分割。

一个基本的想法就是以句号、感叹号和问号等句子结尾用的标点为依据进行分割。

可以写出这样的一个正则操作：`Regex.Split(".|!|?",text)`。然后，你可以得到一个句子的列表了：

```
[sentence1,sentence2,sentence3]
```

但是采用分割的方式会删去这些句号和叹号，更合适的方式是进行替换。

我们常常会见到这样的内容：

```
---------华丽的分割线-----------
```

这可以用来作为分割符。然后我们的正则操作是这样的：`Regex.replace(".|!|?",text,"$0"&CRLF&"-------------"&CRLF)`

得到的结果类似这样：

```
sentence1.
-------------
sentence2!
-------------
sentence3?
```

然后，要使用时，就可以再根据分割符把分好的句子导入。

接下来，我们要考虑特殊的情况了。比如英文中的缩写"Mr.","Prof."，还有很多句尾的省略号"……"，会影响分割的正确性。

错误分割的结果类似这样：

```
Mr.
-------------
Tang is a prestigious professor.
-------------
See you soon!
-------------
!
-------------
!
-------------
```

首先，我们可以添加一个例外列表，保存Mr.等信息。

```
Mr.
Mrs.
Ms.
Dr.
Prof.
```

在句段分割结束后，再删去Mr.这样例外情况后面的分割符。

结果就变成这样了：


```
Mr. Tang is a prestigious professor.
-------------
See you soon!
-------------
!
-------------
!
-------------
```

然后针对重复的叹号导致的多次分句的问题，可以修改正则，匹配1到多个感叹号。表达式如下：`Regex.replace("!{1,}",text,"$0"&CRLF&"-------------"&CRLF)`

```
Mr. Tang is a prestigious professor.
-------------
See you soon!!!
-------------
```

另外还有一个问题就是引号。引号通常位于句号的后面，这样进行分句时结果会是这样：

```
"I love you!
-------------
", he said.
```

解决办法是先分割.",!",?"这样的内容，然后才轮到.!?，而且.!?前面不能是引号。

最终的正则表达式规则是这样的，程序按行读取表达式对原文进行分割。

```
[\.\?\!]"\s
\.{1,}(?!")
\?{1,}(?!")
\!{1,}(?!")
```

当然，还会有很多复杂的情况，需要修改规则。

相关源文件：

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/segmentation.bas>

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/Files/segmentation_en.conf>

更新：这样的方法还是显得比较粗糙，句段分割还是应该使用srx格式文件存储规则，并用它提供的算法。使用SRX进行分割的方法[见此](/zh/basiccat-developing-notes-6-srx-implementation/)。



