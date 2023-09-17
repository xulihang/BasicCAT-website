---
date: 2023-05-03 10:14:50+08:00
layout: post
title: 在ImageTrans中用ChatGPT来辅助翻译
categories: blog
tags: imagetrans
---

ChatGPT是一个大型语言模型驱动的聊天程序，我们可以使用它来完成语言翻译、校对等任务。

ImageTrans提供了ChatGPT的插件，让我们可以调用ChatGPT来帮助翻译图片。

## 使用需求

注册OpenAI的账号并生成一个API密钥（或者使用第三方服务，比如国内的[API2D](https://api2d.com/)）。

另外国内使用OpenAI的API服务需要科学上网。

## 使用方法

1. 在ImageTrans的偏好设置里填入API密钥。

   ![偏好设置](/album/chatGPT/preferences.jpg)

2. 调用ChatGPT进行翻译。

   ![ImageTrans](/album/chatGPT/imagetrans.jpg)
   
   可以在翻译时显示结果供参考或者用于批量翻译。
   
   
## 自定义诱导内容

默认使用下面的英文用于诱导翻译：

```
Translate the following into {langcode}: {source}
```

其中`{langcode}`会被替换为目标语言，比如Chinese，而`{source}`会被替换为要翻译的文本。

你可以在偏好设置里自己定义诱导内容，比如改用中文进行诱导：

```
翻译下述内容至中文：{source}
```

## 多句翻译

ChatGPT插件默认会将一张图的所有句子一次性给ChatGPT翻译。对应的诱导内容也可以在偏好设置里设置。

如果不想启用多句翻译，可以在偏好设置里关闭在一个请求翻译多个句子的选项。

此外，也可以将原文导出为供翻译的文档，用第三方工具翻译后再导回软件。

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
