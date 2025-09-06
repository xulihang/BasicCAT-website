---
date: 2025-09-06 16:03:50+08:00
layout: post
title: How to Translate Manga on DLsite
categories: blog
tags: imagetrans
---

DLsite is the largest doujin platform in Japan. We can purchase manga, games and ASMRs on it.

In this post, we are going to talk about how to purchase and translate raw manga on DLsite.

## Purchase

We need to have a credit card (MasterCard or Visa)

Pick a manga and click the purchase now button on the right,

![purchase](/album/dlsite/purchase.jpg)

After the purchase is done, we can download the manga. Normally, we can get a zip file containing the JPG and PDF files.

## Translation

Here, let's use [ImageTrans](/imagetrans/) for the translation.

1. Create a new project based on the Japanese to English manga template.

   ![new project](/album/dlsite/new_project_ja2en.jpg)
   
2. Open the custom workflow form through menu -> project -> batch -> custom workflow. Click "Okay" to start batch translation.

   ![custom workflow](/album/dlsite/custom_workflow_en.jpg)
   
3. After the workflow is done, use menu -> project -> batch -> generate translated images for all. Then, you can get the translated images in the out folder.

If the translation result is not satisfactory, you can modify the result.

Translated sample ([男子高生×新人OLの話](https://www.dlsite.com/girls/work/=/product_id/RJ276847.html)):

Source:

![source](/album/dlsite/006-ja.webp)

Target:

![target](/album/dlsite/006-en.webp)

## Related

[Offline AI Manga Translator](./2025-04-05-how-to-build-a-local-manga-translation-workshop.md)
