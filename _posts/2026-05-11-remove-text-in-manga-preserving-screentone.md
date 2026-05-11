---
date: 2026-05-11 19:21:50+08:00
layout: post
title: Remove Text in Manga and Preserve Screentone
categories: blog
tags: imagetrans
---

In the lettering step of manga translation, the original text needs to be erased and replaced with the translated text.

One of its tedious tasks is restoring screentones. Most [tutorials](https://post.smzdm.com/p/ar085mx7/) use Photoshop's clone stamp tool, which requires careful alignment with the screentone and struggles with complex patterns like gradients. Photoshop's built-in content-aware fill is also unpredictable and may fill in irrelevant image content.

Another method involves using custom patterns and overlaying them on a separate layer, as explained in the [Krita documentation](https://docs.krita.org/en/reference_manual/layers_and_masks/fill_layer_generators/screentone.html#term-Macrocell), but the supported patterns are limited. More professional software like CLIP STUDIO PAINT and ComicWorks also require significant manual effort.

With advances in image processing and AI technology, several software tools now offer effective screentone restoration.

The computer-assisted manga translation software ImageTrans provides an all-in-one manga translation platform, covering processes from scanning, text recognition, translation to typesetting.

It integrates several methods for text masking and text removal. Below is a comparison of the results produced by some of its methods that handle screentones well.

Original image:

![Original](/album/screentones/capture001.jpg)

Text mask:

![Mask](/album/screentones/capture001.jpg-mask.png)

PatchMatch (traditional image processing):

![PatchMatch](/album/screentones/patchmatch.jpg)

Flux Klein 9B：

![Flux](/album/screentones/flux.jpg)

Lama Inpaint (original):

![Original Lama](/album/screentones/original.jpg)

Lama Inpaint (fine-tuned for Japanese manga):

![Fine-tuned Lama](/album/screentones/fine-tuned.jpg)

Gemini 3.0 (Nano Banana):

![Gemini](/album/screentones/nano-banana-2.jpg)

As you can see, the results are quite good, and even when there are minor flaws, only a small amount of correction is needed.

These generative AI models have powerful repainting capabilities. Besides restoring screentones, they can also reconstruct various backgrounds covered by text, such as human figures, landscapes, and other content.

![Example 2](/album/imagetrans-features/text-removal-and-reinjection.jpg)