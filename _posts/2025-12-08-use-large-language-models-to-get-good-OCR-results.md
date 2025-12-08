---
date: 2025-12-08 20:26:50+08:00
layout: post
title: Use Large Language Models to Get Good OCR Results
categories: blog
tags: imagetrans
---

Large language models can accurately understand and process text, and some multimodal vision models can directly process images. Below are several methods for using them to achieve good OCR results.

## Direct OCR

Use a large model directly, for example qwen-vl, to process images and extract the text. The results can be very precise.

However, large models currently cannot reliably return text coordinates. You usually need to first use a specialized text-localization method to locate text regions, and then use the large model to recognize the text.

## Correcting Recognition Results

Use a large model to directly proofread or correct OCR outputs. This approach has lower computational requirements than processing images directly. But you'd better use a model with enough number of parameters. Smaller models (for example, 7B) tend to perform poorly at correction.

## Layout Analysis

Large models can also perform layout analysis. This can be used to determine which paragraph each piece of text in an image belongs to and to output text in the correct reading order.