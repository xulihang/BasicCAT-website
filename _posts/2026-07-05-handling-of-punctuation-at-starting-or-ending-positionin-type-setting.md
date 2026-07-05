---
date: 2026-07-05 19:21:50+08:00
layout: post
title: "Handling Punctuation at Line Start and End in Typesetting"
categories: blog
tags: imagetrans
---

In typesetting, punctuation needs to avoid appearing at the start or end of a line. This means certain punctuation marks should not be placed at the beginning or end of a line.

For example, a left quotation mark should not appear at the end of a line, and a period should not appear at the beginning.

There are many ways to handle punctuation at line boundaries, such as borrowing a character from the previous line, hanging punctuation, compressing spacing, and so on. When I was a child writing essays on grid paper, if a punctuation mark was about to land at the start of the next line, I would always squeeze it into the last cell alongside the final character.

## Example

Original text:

```
在学术工作中，我们可以会遇到一些外语论文
。英语可能还好，但读起来不如中文母语效率
高。
```

Hanging punctuation:

```
在学术工作中，我们可以会遇到一些外语论文。
英语可能还好，但读起来不如中文母语效率高。
```

Borrowing a character from the previous line:

```
在学术工作中，我们可以会遇到一些外语论
文。英语可能还好，但读起来不如中文母语
效率高。
```

Word processors like Word, image editing software like Photoshop, and browsers all support this kind of handling. Graphics libraries like JavaFX support it as well.

The manga translation software [ImageTrans](/imagetrans/) uses JavaFX for text layout, but the vertical text engine is implemented by myself. Currently, it has preliminary support for preventing periods from appearing at the start of a line.

## References

<https://www.thetype.com/2018/05/14501/>
