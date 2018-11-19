---
date: 2018-10-28 15:48:50+08:00
layout: post
title: BasicCAT开发笔记（五）：搜索与替换
categories: blog
tags: note
---

CAT软件也应该是一个好用的文本编辑器，搜索与替换功能必不可少。试用过的软件里，觉得OmegaT的搜索功能设计很符合我的要求，实现起来也不算困难。

![](https://blog.xulihang.me/album/basiccat/omegat_search_and_replace.jpg)

需要搜索的结果进行高亮显示，并显示替换后的结果（这个OmegaT没有），另外还要支持正则表达式。结果以列表的形式呈现，在项目上右键还可以调出右键菜单，选择跳转到该片段。

## UI：

建立两个TextField，findTextField和replaceTextField，用于填写搜索的内容和替换的内容。regexCheckBox和searchSourceCheckBox两个勾选框，用于是否开启正则和在原文中搜索。

结果是一个ListView。带格式的文本需要用到java的Text类，b4j中有对应的TextFlow库。

## 普通搜索

普通搜索需要遍历当前打开文件的片段，检测片段的原文、译文是否有对应的内容。使用String类的Contains方法即可。

然后生成对应的Textflow。这里比较麻烦的是，如果一句话里有多个匹配，需要将其都显示出来。

我们可以把文字根据匹配的内容分成片段。比如搜索school，那么"He is a high school student and his sister is a middle school student."片段是["He is a high ","school"," student and his sister is a middle ","school"," student."]。这样可以较为方便地高亮所有匹配的内容。

## 正则搜索

首先因为允许用户输入正则，要用try...catch...处理用户输入的正则表达式错误的情况。

其它地方其实和普通搜索类似，只不过改用`Regex.Matcher(pattern,source)`来构建Matcher以检测是否匹配。同样需要将文字进行分段。

## 替换

因为替换前和替换后的结果都直接保存在结果显示的列表里了，所以只需直接调取文字内容进行replace就可以了。可以选择替换一条或者全部条数，全部的话操作完成后显示替换了多少条内容。

最终的界面如下。

![](https://blog.xulihang.me/album/basiccat/search_and_replace.jpg)

相关文件：

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/searchAndReplaceDialog.bas>

