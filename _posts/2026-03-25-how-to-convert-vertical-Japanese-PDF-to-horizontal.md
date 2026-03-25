---
date: 2026-03-25 14:25:50+08:00
layout: post
title: How to Convert Vertical Japanese PDFs to Horizontal Layout
categories: blog
tags: imagetrans
---

Japanese is typically written in vertical, which may be difficult for people accustomed to horizontal text. We can convert it to a horizontal layout.

PDFs can be divided into two types: those with selectable text and those that cannot be copied. For the selectable type, since the PDF simply renders text at fixed positions, the text often cannot be copied in reading order and requires layout analysis. For non-selectable versions, such as scanned PDFs, OCR software is needed to recognize the text, followed by layout analysis to determine the correct text order.

The computer-aided image translation software [ImageTrans](/imagetrans/) supports processing both types of PDFs, exporting vertically oriented text into a horizontal format.

Example:

Original PDF File:

<iframe src="/assets/japanese.pdf" width="240px" height="320px"></iframe>

Converted horizontal text:

もちろんです以下にランダムな日本語の文章を生成しました。

一匹の子犬。王都が見えてきた。
でかいのは態度だけで後は何もかもが小さい。

It also supports adding furigana annotations:

<p>もちろんです<ruby>以下<rt>いか</rt></ruby>にランダムな<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>文章<rt>ぶんしょう</rt></ruby>を<ruby>生成<rt>せいせい</rt></ruby>しました。</p><p><ruby>一匹<rt>いっぴき</rt></ruby>の<ruby>子犬<rt>こいぬ</rt></ruby>。<ruby>王都<rt>おうと</rt></ruby>が<ruby>見<rt>み</rt></ruby>えてきた。</p><p>でかいのは<ruby>態度<rt>たいど</rt></ruby>だけで<ruby>後<rt>あと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>もかもが<ruby>小<rt>ちい</rt></ruby>さい。</p>
