---
date: 2026-05-16 20:22:50+08:00
layout: post
title: Browser Extension for Manga Translation
categories: blog
tags: imagetrans
---

There are many manga that never get translated. When we browse manga websites through a browser, we wish to see translated versions of manga images directly, but browsers don’t have this feature built in. That’s where browser extensions (add-ons) come in.

The computer‑aided image translation software [ImageTrans](/imagetrans/) provides such a browser extension, supporting Chrome, Edge, Firefox, and other browsers.

Manga translation typically involves the following steps:

* OCR text recognition
* Layout analysis – merging text based on semantics and adjusting text order
* Translation (using large language models such as ChatGPT, Deepseek, etc.)
* Text removal (inpainting)
* Back‑filling the translated text (lettering)

Depending on the language and purpose, we can use different software combinations and translation strategies.

For example, the text removal step can be time‑consuming if processed with AI. If our goal is merely to understand the meaning, we can use a white background fill instead. The same applies to OCR and translation.

For OCR, if the language is a mainstream one like Chinese or English, local OCR such as PaddleOCR works quickly with good recognition accuracy. For vertical Japanese, traditional Chinese, etc., higher‑accuracy models are usually needed – for instance, mangaOCR for Japanese.

For translation, ordinary machine translation often performs well for languages with strong logical structures like English. For high‑context languages like Japanese, especially when OCR may contain errors, a high‑quality large language model is required – sometimes even feeding the image to the model for better semantic understanding.

The browser extension of ImageTrans supports freely combining various OCR and translation technologies to meet the translation needs of various manga images. The entire process can run on your local computer, free to use, no subscription required, no pay‑per‑page fees, with faster response times and better controllability. This is the method I recommend for translating images in web pages.

Below is a demo video:

The video demonstrates how to use ImageTrans’s browser extension to translate manga images from Pixiv, from Japanese to English. It shows purely browser‑based local processing methods – region‑based screenshot translation, full‑image translation – as well as using the ImageTrans desktop edition for higher‑quality translation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kRN4o2UWkSQ?si=voLKSRTQJlJUByMT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
