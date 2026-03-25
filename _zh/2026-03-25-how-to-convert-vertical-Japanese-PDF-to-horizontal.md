---
date: 2026-03-25 14:25:50+08:00
layout: post
title: 如何转换日语竖排PDF为横排
categories: blog
tags: imagetrans
---

日语通常采用垂直竖排，对于习惯横排的人来说，可能看起来比较吃力。我们可以将其转换为横版。

PDF可以分为两类，一种是文字可以直接复制的，一种是不能复制的。对于可以复制版，因为PDF只是单纯在固定位置绘制文字，文字通常不能按阅读顺序复制，需要进行一定的版面分析。对于不能直接复制的版本，比如扫描版PDF，则需要用OCR软件识别文字，然后同样做版面分析，确定文字顺序。

计算机辅助图片翻译软件[ImageTrans](/zh/imagetans/)支持处理这两种PDF，将竖排的文字导出为横排的。

示例：

原PDF文件：

<iframe src="/assets/japanese.pdf" width="240px" height="320px"></iframe>


转换好的横版的文字：

もちろんです以下にランダムな日本語の文章を生成しました。

一匹の子犬。王都が見えてきた。
でかいのは態度だけで後は何もかもが小さい。

另外也支持标注发音：

<p>もちろんです<ruby>以下<rt>いか</rt></ruby>にランダムな<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>文章<rt>ぶんしょう</rt></ruby>を<ruby>生成<rt>せいせい</rt></ruby>しました。</p><p><ruby>一匹<rt>いっぴき</rt></ruby>の<ruby>子犬<rt>こいぬ</rt></ruby>。<ruby>王都<rt>おうと</rt></ruby>が<ruby>見<rt>み</rt></ruby>えてきた。</p><p>でかいのは<ruby>態度<rt>たいど</rt></ruby>だけで<ruby>後<rt>あと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>もかもが<ruby>小<rt>ちい</rt></ruby>さい。</p>







