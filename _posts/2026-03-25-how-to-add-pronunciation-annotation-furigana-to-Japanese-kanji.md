---
date: 2026-03-25 14:25:50+08:00
layout: post
title: How to Add Pronunciation (Furigana) to Japanese Kanji
categories: blog
tags: imagetrans
---

Japanese kanji originated from China and are logographic characters. Their pronunciation can be annotated using romaji or kana. The kana used for this purpose are called furigana.

Below are some examples of text with pronunciation annotations (raw text and annotated):

Example 1:

一匹の子犬。

<ruby>一匹<rt>いっぴき</rt></ruby>の<ruby>子犬<rt>こいぬ</rt></ruby>。

Example 2:

もちろんです以下にランダムな日本語の文章を生成しました。

もちろんです<ruby>以下<rt>いか</rt></ruby>にランダムな<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>文章<rt>ぶんしょう</rt></ruby>を<ruby>生成<rt>せいせい</rt></ruby>しました。

Example 3:

王都が見えてきた。

<ruby>王都<rt>おうと</rt></ruby>が<ruby>見<rt>み</rt></ruby>えてきた。

Example 4:

でかいのは態度だけで後は何もかもが小さい。

でかいのは<ruby>態度<rt>たいど</rt></ruby>だけで<ruby>後<rt>あと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>もかもが<ruby>小<rt>ちい</rt></ruby>さい。

Adding pronunciation annotations to Japanese kanji is not a simple task. It requires correctly segmenting Japanese sentences into words and then obtaining the accurate pronunciation of the segmented results. Japanese kanji pronunciation is complex, with on'yomi (Chinese readings) and kun'yomi (Japanese readings), and phonetic changes often occur when multiple characters are combined.

Kuromoji is a specialized Japanese morphological analysis software that performs word segmentation, grammatical analysis, and pronunciation retrieval based on dictionaries such as ipadic and unidic. It can be used to annotate kanji with pronunciation.

However, it has some drawbacks.

The default ipadic dictionary has limited data, leading to inaccurate annotations. Unidic, on the other hand, segments too finely—for example, splitting “日本語” (Japanese) into “日本” and “語,” which results in annotation errors. Additionally, it handles counters like “一匹” (one small animal) poorly.

[ImageTrans](/imagetrans/) integrates Kuromoji and combines the results from ipadic and unidic to generate accurate annotations. It also automatically handles counters, achieving better annotation results. This can be used to assist with manga reading, Japanese language learning, and automatic text annotation. If higher accuracy is required, large language models such as GPT or DeepSeek can also be used for annotation.