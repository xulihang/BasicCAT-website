---
date: 2026-05-11 19:21:50+08:00
layout: post
title: 漫画嵌字中的网点修复
categories: blog
tags: imagetrans
---

漫画翻译中的嵌字步骤，需要把原图中的文字抹除，替换上译文。

其中比较繁琐的一步是修复网点。大多数[教程](https://post.smzdm.com/p/ar085mx7/)都是使用Photoshop的仿制图章，需要仔细对齐网点，而且这种方法较难处理复杂的网点，比如渐变的网点。Photoshop自带的内容识别则不太可控，可能会把图像内容也填充进去。

还有方法是使用自定义图案，叠加到一个单独的图层，比如[Krita文档](https://docs.krita.org/zh_CN/reference_manual/layers_and_masks/fill_layer_generators/screentone.html#term-Macrocell)里讲的，但支持的样式也比较有限。更专业的软件则有CLIP STUDIO PAINT、ComicWorks，但也需要不少人工操作。


随着图像处理和AI技术的发展，已经有不少修复网点效果不错的软件。

计算机辅助漫画翻译软件ImageTrans提供了一站式的漫画翻译平台，包含了扫描、文字识别、翻译到嵌字各个流程的处理。

它集成了若干文字掩膜和文字去除的方法。下面是其支持的一些处理网点较好的方法的效果对比。

原图：

![原图](/album/screentones/capture001.jpg)

文字掩膜：

![掩膜](/album/screentones/capture001.jpg-mask.png)

PatchMatch（传统图像处理）：

![PatchMatch](/album/screentones/patchmatch.jpg)

Lama Inpaint（原版）：

![原版lama](/album/screentones/original.jpg)

Lama Inpaint（日漫微调版）：

![微调lama](/album/screentones/fine-tuned.jpg)

Gemini 3.0 （Nano Banana）：

![Gemini](/album/screentones/nano-banana-2.jpg)

可以看到效果还是不错的，即使有点瑕疵，需要的修改也不多了。

这些生成式人工智能模型有非常强大的重绘能力，除了修复网点，还可以还原文字覆盖的各种背景，比如人体、风景等各种内容。

![示例2](/album/imagetrans-features/text-removal-and-reinjection.jpg)



