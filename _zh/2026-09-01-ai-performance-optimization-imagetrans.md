---
date: 2026-09-01 20:08:50+08:00
layout: post
title: ImageTrans是如何优化处理速度与AI模型的
categories: blog
tags: imagetrans
---

ImageTrans的体积仅仅为400MB，里面包含了支持上百种语言的PaddleOCR、专门的日语漫画OCR、支持颜色识别的mit48px_ctc OCR模型、YOLO文字/气泡检测模型，还有图像修复模型Lama Inpaint。无需GPU，支持充分利用CPU进行处理，翻译一张图通常在10秒以内。

下面是一些优化方法。

## 模型量化

像manga-ocr模型，原版的FP32版有400MB，量化为int8版，就只需100MB左右，而且识别性能基本没有损失。

Lama inpaint和mit48px ctc都是用了量化的版本。

## 分拆Transformer模型

manga-ocr为Transformer模型，拆分为encoder和decoder版，可以重复利用encoder输出的结果，提升处理性能。

## 多进程

处理很多图片时，可以使用多个进程，充分利用CPU。

## GPU/NPU加速

如果设备有GPU和NPU，也可以用来加速计算。

苹果设备上转换模型为mlx或者coreml版本，处理速度非常快。ImageTrans提供了Lama Inpaint的coreml版本和PPDocLayout v3的mlx版本。也支持是用Pytorch，开启mps，使用metal去加速OCR。

Windows设备上，如果有Nvidia的显卡，也可以使用Pytorch版本的OCR和Lama inpaint去调用。



## 性能测试

下面在铭凡760plus （AMD r5 7640hs）上翻译各种图片的测试结果。

### 黑白日漫

原图：


![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manga/capture002.jpg)

译图：


![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manga/zh/capture002.jpg)

处理时间：

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
                    "action": "文字检测"
                },
                {
                    "duration_ms": 39,
                    "action": "合并区域"
                },
                {
                    "duration_ms": 14,
                    "action": "排序"
                },
                {
                    "duration_ms": 1437,
                    "action": "翻译"
                },
                {
                    "duration_ms": 489,
                    "action": "生成成品图"
                }
            ]
        }
    ]
}
```

### 彩色CG

原图：

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/cg/003_0101.jpg)

译图：

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/cg/zh/003_0101.jpg)

处理时间：

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
                    "action": "文字检测"
                },
                {
                    "duration_ms": 1575,
                    "action": "生成所有图片的掩膜和去文字图片"
                },
                {
                    "duration_ms": 16,
                    "action": "缩小区域"
                },
                {
                    "duration_ms": 3815,
                    "action": "文字识别"
                },
                {
                    "duration_ms": 1,
                    "action": "根据文字颜色深浅设置描边颜色"
                },
                {
                    "duration_ms": 72,
                    "action": "根据描边颜色匹配样式"
                },
                {
                    "duration_ms": 55,
                    "action": "合并区域"
                },
                {
                    "duration_ms": 22,
                    "action": "排序"
                },
                {
                    "duration_ms": 1759,
                    "action": "翻译"
                },
                {
                    "duration_ms": 1152,
                    "action": "生成成品图"
                }
            ]
        }
    ]
}
```

### 中文漫画

原图：

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manhua/capture001.jpg)

译图：

![](https://cdn.jsdmirror.com/gh/xulihang/ImageTrans-Benchmark@master/manhua/en/capture001.jpg)

处理时间：

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
                    "action": "文字检测"
                },
                {
                    "duration_ms": 0,
                    "action": "去除所有图片的无原文区域"
                },
                {
                    "duration_ms": 55,
                    "action": "合并区域"
                },
                {
                    "duration_ms": 14,
                    "action": "排序"
                },
                {
                    "duration_ms": 1736,
                    "action": "翻译"
                },
                {
                    "duration_ms": 468,
                    "action": "生成成品图"
                }
            ]
        }
    ]
}
```



