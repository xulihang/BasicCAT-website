---
date: 2018-12-25 15:53:17+08:00
layout: post
title: New Tool! Bitext Aligner
categories: releasenote
tags: 
---

As in most cases, translators only give the translated document to the client, the source text and the target text are not aligned in sentence level. So I made this aligner.

It is simple to use, just like BasicCAT. Use Enter to split segments and Delete to merge segments.

How does it work:

It first splits the text into paragraphs and users have to align in paragraph level first. Then, paragraphs can be broken into sentences. If the numbers of sentences of the source text and the target text differ, empty textarea will be created as a placeholder.

[Aligner Download](https://github.com/xulihang/Aligner/releases/download/v1.0/Aligner.zip)

