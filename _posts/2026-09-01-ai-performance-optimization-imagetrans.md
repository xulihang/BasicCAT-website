---
date: 2026-09-01 20:08:50+08:00
layout: post
title: How ImageTrans Optimizes Processing Speed and AI Models
categories: blog
tags: imagetrans
---

ImageTrans is only 400 MB in size, yet it bundles PaddleOCR supporting over a hundred languages, a dedicated Japanese manga OCR, the mit48px_ctc OCR model with color recognition, YOLO text/bubble detection models, and the inpainting model Lama Inpaint. No GPU is required — it fully utilizes the CPU, and translating an image usually takes under 10 seconds.

Below are some of the optimization methods used.

## Model Quantization

Take the manga-ocr model: the original FP32 version is about 400 MB, while the int8-quantized version is only about 100 MB, with virtually no loss in recognition performance.

Lama inpaint and mit48px ctc both use quantized versions.

## Splitting the Transformer Model

manga-ocr is a Transformer model. It is split into encoder and decoder versions, allowing the encoder's output to be reused and improving processing performance.

## Multiprocessing

When processing many images, multiple processes can be used to fully utilize the CPU.

## GPU/NPU Acceleration

If the device has a GPU or NPU, it can also be used to accelerate computation.

On Apple devices, models can be converted to mlx or coreml versions, and processing is very fast. ImageTrans provides a coreml version of Lama Inpaint and an mlx version of PPDocLayout v3. It also supports using Pytorch with mps enabled to accelerate OCR with Metal.

On Windows, if you have an Nvidia graphics card, you can also use the Pytorch versions of OCR and Lama inpaint to offload computation.

## Performance Testing

Below are the results of translating various images on a MinisForum 760 Plus (AMD Ryzen 5 7640HS).

### Black and White Manga

Original:

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manga/capture002.jpg)

Translated:

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manga/en/capture002.jpg)

Processing time:

```json
{
    "workflows": [
        {

            "duration_ms": 4323,
            "start_time": "08\/31\/2026 20:58:58",
            "name": "default",
            "steps": [
                {
                    "duration_ms": 2344,
                    "action": "Text detection"
                },
                {
                    "duration_ms": 39,
                    "action": "Merge areas"
                },
                {
                    "duration_ms": 14,
                    "action": "Sort"
                },
                {
                    "duration_ms": 1437,
                    "action": "Translate"
                },
                {
                    "duration_ms": 489,
                    "action": "Generate translated images"
                }
            ]
        }
    ]
}
```

### Color CG

Original:

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/cg/003_0101.jpg)

Translated:

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/cg/en/003_0101.jpg)

Processing time:

```json
{
    "workflows": [
        {
            "duration_ms": 8703,
            "start_time": "08\/31\/2026 20:48:47",
            "name": "default",
            "steps": [
                {
                    "duration_ms": 236,
                    "action": "Text detection"
                },
                {
                    "duration_ms": 1575,
                    "action": "Generate masks and text-removed images for all images"
                },
                {
                    "duration_ms": 16,
                    "action": "Shrink areas"
                },
                {
                    "duration_ms": 3815,
                    "action": "Text recognition"
                },
                {
                    "duration_ms": 1,
                    "action": "Set stroke color based on text color depth"
                },
                {
                    "duration_ms": 72,
                    "action": "Match style based on stroke color"
                },
                {
                    "duration_ms": 55,
                    "action": "Merge areas"
                },
                {
                    "duration_ms": 22,
                    "action": "Sort"
                },
                {
                    "duration_ms": 1759,
                    "action": "Translate"
                },
                {
                    "duration_ms": 1152,
                    "action": "Generate translated images"
                }
            ]
        }
    ]
}
```

### Chinese Manhua

Original:

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manhua/capture001.jpg)

Translated:

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manhua/en/capture001.jpg)

Processing time:

```json
{
    "workflows": [
        {
            "duration_ms": 3298,
            "start_time": "08\/31\/2026 21:05:34",
            "name": "default",
            "steps": [
                {
                    "duration_ms": 1024,
                    "action": "Text detection"
                },
                {
                    "duration_ms": 0,
                    "action": "Remove areas without source text from all images"
                },
                {
                    "duration_ms": 55,
                    "action": "Merge areas"
                },
                {
                    "duration_ms": 14,
                    "action": "Sort"
                },
                {
                    "duration_ms": 1736,
                    "action": "Translate"
                },
                {
                    "duration_ms": 468,
                    "action": "Generate translated images"
                }
            ]
        }
    ]
}
```
