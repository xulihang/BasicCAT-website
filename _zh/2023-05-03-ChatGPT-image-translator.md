---
date: 2023-05-03 10:14:50+08:00
layout: post
title: 在ImageTrans中用ChatGPT来辅助翻译
categories: blog
tags: imagetrans
---

ChatGPT是一个大型语言模型驱动的聊天程序，我们可以使用它来完成语言翻译、校对、汉字标音等任务。

ImageTrans提供了ChatGPT的插件，让我们可以调用ChatGPT来帮助翻译图片。

## 使用需求

注册OpenAI的账号并生成一个API密钥（或者使用第三方服务，比如国内的[API2D](https://api2d.com/)、字节跳动的火山引擎、DeepSeek，只要兼容OpenAI接口就行）。

另外国内使用OpenAI的API服务需要科学上网。

## 使用方法

1. 在ImageTrans的偏好设置里填入API密钥。

   ![偏好设置](/album/chatGPT/preferences.jpg){: width="615" height="260"}

2. 调用ChatGPT进行翻译。

   ![ImageTrans](/album/chatGPT/imagetrans.jpg){: width="1024" height="728"}
   
   可以在翻译时显示结果供参考或者用于批量翻译。
   
   
## 自定义提示词

默认使用下面的英文提示词：

```
Translate the following into {langcode}: {source}
```

其中`{langcode}`会被替换为目标语言，比如Chinese，而`{source}`会被替换为要翻译的文本。

你可以在偏好设置里自己定义提示词，比如改用中文进行诱导：

```
翻译下述内容至中文：{source}
```

总共有以下提示词可以定义：

* `prompt`: 单句翻译提示词
* `batch_prompt`: 多句翻译提示词
* `vision_batch_prompt`：视觉翻译提示词
* `prompt_with_term`: 单句翻译提示词（使用术语）
* `batch_prompt_with_term`：多句翻译提示词（使用术语）
* `vision_batch_prompt_with_term`：视觉翻译提示词（使用术语）
* `spell_checking_prompt`：拼写检查
* `transliteration_prompt`：注音

## 多句翻译

ChatGPT插件默认会将一张图的所有句子一次性给ChatGPT翻译。对应的提示词也可以在偏好设置里设置。

如果不想启用多句翻译，可以在偏好设置里关闭在一个请求翻译多个句子的选项。

此外，也可以将原文导出为供翻译的文档，用第三方工具翻译后再导回软件。

## 多页翻译

1. 偏好设置里启用跨页翻译，然后用批处理-预翻译时，会合并多页文本去翻译，提供更多上下文。
2. 偏好设置里启用使用前几页作为上下文，翻译单张图片时，会使用前几页的原文提供更多上下文。

## 视觉翻译

偏好设置里启用图片来辅助翻译，可以给视觉大模型传送图片，改善翻译质量。

## 使用术语改善翻译

在项目中定义术语后，如果翻译的句子包含术语条目，ImageTrans也会发送给ChatGPT以改善翻译。例如定义Jenny的翻译为詹妮而不是珍妮。详见[这条issue](https://github.com/xulihang/ImageTrans-docs/issues/546#issuecomment-1873325038)。

## 文字识别

ChatGPT也可以用于识别文字（需要使用ChatGPT OCR插件）。

或者和通用的OCR软件配合，校对OCR结果。

## 文字去除

使用图生图模型，可以端到端直接得到翻译好的图片。但目前效果不佳，且不能整合进传统翻译流程。用来去除文字效果则较好（需要使用OpenAI Inpaint插件）。这方面Gemini做得不错。

## 局限

该插件的局限性在于不像网页版那样可以进行连续对话，以完善翻译。

## 其它机器翻译

除了ChatGPT，ImageTrans也支持其它机器翻译引擎。但要注意，多数引擎均需要自己提供API密钥。

* 百度（密钥内置）
* 腾讯（密钥内置）
* 彩云小译（内置试用版密钥）
* DeepL（有无需密钥版）
* 云译（免费）
* 小牛翻译
* 有道翻译
* 火山翻译
* MyMemory（免费）
* Microsoft
* Google
* Yandex
* Papago
* Opus-CAT（离线，免费）
* Sugoi Translator（离线，免费）

## 相关issue

[ChatGPT用Clash代理访问](https://github.com/xulihang/ImageTrans-docs/issues/421)
