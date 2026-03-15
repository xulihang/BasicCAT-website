---
date: 2026-03-15 16:28:50+08:00
layout: post
title: How to Detect Text Colors in Images
categories: blog
tags: imagetrans
---

Detecting text colors in images, including background colors and stroke colors, can be used for layout restoration, translation, and other operations.

Original image:

![Original image](/album/text-color-detection/source.jpg)

Translated image:

![Translated image](/album/text-color-detection/translated.jpg)

## Implementation Principle

For background colors, KMeans can be used to cluster colors and identify the dominant colors in the image.

For text colors, contour detection can be performed to calculate the average pixel value of the text contour and exclude pixels that are similar to the background color.

![Plain color background](/album/text-color-detection/plain-color.jpg)

However, if the background is complex and stroke colors or the color of each character need to be extracted, traditional image processing methods may not perform well. In such cases, convolutional neural networks can be used for extraction.

The computer-assisted image translation software [ImageTrans](/imagetrans/) integrates the algorithms mentioned above.

## Examples

Below are some operational examples.

### Example 1

In many CG images, different colors are often used to distinguish dialogues between different characters.

![Example](/album/text-color-detection/example.jpg)

ImageTrans can detect stroke colors and text colors. Below are the raw recognition results.

![Detection results](/album/text-color-detection/detected.jpg)

As can be seen, the text colors and stroke colors have been detected, but they are not very accurate.

In the project settings, we can predefine several styles and specify the colors used for each style.

![Project settings](/album/text-color-detection/project-settings.jpg)

Afterward, perform a color matching operation to match the styles based on the text colors.

![Workflow](/album/text-color-detection/workflow.jpg)

This resolves the issue of inaccuracies in the detected colors.

![Adjusted results](/album/text-color-detection/adjusted.jpg)

### Example 2

Some texts use rich text formatting, where a single line of text may contain multiple colors. ImageTrans supports recognizing the style of each character and outputting results with rich text tags.

![Inline styles](/album/text-color-detection/inline-text.jpg)
