---
date: 2025-11-24 20:00:50+08:00
layout: post
title: 使用Nano Banana翻译日语漫画
categories: blog
tags: imagetrans
---

这周谷歌发布了基于Gemini 3的Nano Banana Pro，可以输入一张图片，直接给出它的翻译版本。

原图（[男子高生×新人OLの話](https://www.dlsite.com/girls/work/=/product_id/RJ276847.html)）：

![原图](/album/dlsite/006-ja.webp)


翻译好的漫画图：

![nano翻译图](/album/nano-banana/nano.webp)


可以看到，它可以比较准确地去除原文，回填译文，并且翻译质量不错。

但它也存在一些问题：

1. 文字显示奇怪。
2. 输出的图像质量会有损失。
3. 输出的图像内容和原图有差别，比例也不对。


改成让它只输出去文字的版本，可以看到日漫的网点还原得不错，但还是对图像内容和比例做了改变。

![nano去文字图](/album/nano-banana/text-removed-nano.webp)

很多时候，它还会自己想出一些图片内容。即使通过以下API基于掩膜编辑也无法避免。

```bash
export OPENAI_BASE_URL="https://api.qnaigc.com/v1"
export OPENAI_API_KEY=""

curl "$OPENAI_BASE_URL/images/edits" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gemini-3.0-pro-image-preview",
        "image": "https://www.basiccat.org/album/dlsite/006-ja.webp",
        "mask": "https://www.basiccat.org/album/nano-banana/mask.png",
        "prompt": "将文字翻译成英文"
    }'
```

这样看来，想用它来辅助快速翻译图片是可行的，但要人工漫画翻译，融合它到传统人工翻译流程，输出高质量的翻译结果还是存在一些问题。

下面是使用计算机辅助图片翻译软件[ImageTrans](/zh/imagetrans/)走人工翻译流程的结果。

文字掩膜：

![文字掩膜](/album/nano-banana/mask.png)

去文字图：

![去文字图](/album/nano-banana/text-removed.webp)

翻译的版本：

![翻译的版本](/album/nano-banana/translated.webp)


## 附件

保存了原图、nano生成的去文字图、翻译图的PSD文件：[nano-banana-modified.psd](https://github.com/xulihang/BasicCAT-website/releases/download/attachments/nano-banana-modified.psd)