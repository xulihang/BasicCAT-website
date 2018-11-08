---
date: 2018-10-23 09:37:50+08:00
layout: post
title: BasicCAT开发笔记（四）：翻译记忆
categories: blog
tags: CAT
---

翻译记忆是CAT软件的核心功能，而怎样快速地进行模糊匹配是需要解决的一大算法问题。

一般翻译记忆相似度的计算是根据[编辑距离算法](http://blog.xulihang.me/edit-distance-and-its-backtracking/)计算，我这里也采用的这一办法。我测试了自己完成的编辑距离算法与调用[fuzzywuzzy java库](https://github.com/xdrop/fuzzywuzzy)的运行效率，发现后者较高，我便采用了后者。相似度结果计算都是一样的。

影响模糊匹配速度的除了算法，还有存储。毕竟要进行迅速的读取操作。目前我使用的sqlite作为翻译记忆的数据库格式，并且开启wal模式。我测试下来，导入1000个翻译记忆，显示结果所需的时间是在毫秒级别的。

另外我还尝试了把模糊匹配做成后端，以REST API的形式进行调用，不过效率不高，于是放弃。我还研究了如何利用多线程进行计算，发现用b4j wait for语句的协程处理结果已经很不错了。

但是在预翻译时，还是显出了模糊匹配效率的问题，900多个片段的计算可能要花几分钟的时间。我把每对匹配的结果都存在了map里，下次就可以直接调取相似度，不过改善有限。模糊匹配的效率是目前有待完善的一点。

再有外部翻译记忆的处理。外部翻译记忆我认为不能导入项目的翻译记忆库里，而应该作为只读性质的存在。在显示匹配时还要显示这条匹配来自于哪个翻译记忆库。

翻译记忆导入导出的格式，一般使用tmx、tab分割的文本等格式。

对于匹配的翻译记忆，要设置一个最小相似度，一般在0.5以上。匹配的结果是一个列表，还要按照相似度进行排序。因为要对列表进行排序比较复杂，我使用了一个简单的冒泡排序算法实现。在显示匹配翻译记忆时，还要显示和当前原文有哪些区别。利用编辑距离回溯可以知道哪些字是需要进行删除、增加或替换操作的，不过不是很直观。可以参考一些diff软件的设计。

下面是模糊匹配结果的截图：

![](https://github.com/xulihang/xulihang.github.io/raw/master/album/basiccat/fuzzymatch.png)

下面是片段搜索功能的截图，在翻译记忆库中搜索匹配的内容，搜索内容用绿色加以高亮显示。

![](https://github.com/xulihang/xulihang.github.io/raw/master/album/basiccat/segment_search.png)

相关文件：

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/TM.bas>

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/TMX.bas>

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/TMEditor.bas>

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/TMManager.bas>


