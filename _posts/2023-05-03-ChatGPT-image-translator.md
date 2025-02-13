---
date: 2023-05-03 10:14:50+08:00
layout: post
title: Use ChatGPT to Help Translate Images
categories: blog
tags: imagetrans
---

ChatGPT is a large language model-driven chat program that we can use to complete tasks such as language translation and proofreading.

ImageTrans provides a plugin for ChatGPT that allows us to call ChatGPT to help translate images.

## Requirements

Register an OpenAI account and generate an API key.

## Instructions

1. Fill in the API key in the preferences of ImageTrans.

   ![Preferences](/album/chatGPT/preferences.jpg)

2. Call ChatGPT to translate.

   ![ImageTrans](/album/chatGPT/imagetrans.jpg)

   It can be used as a reference during translation or for batch translation.


## Customize the Prompt

By default, the following English prompt is used to get the translation:

```
Translate the following into {langcode}: {source}
```

`{langcode}` is replaced with the target language's name, such as Chinese, and`{source}` is replaced with the text to be translated.

You can define your own prompt  in your preferences, such as the following Chinese version:

```
翻译下述内容至中文：{source}
```

## Batch Translation

The ChatGPT plugin will send all the sentences in one image to ChatGPT by defalut. You can customize the prompt in the Preferences as well. 

You can disable this behavior in Preferences.

In addition, you can export the source text, use a third-party tool to do the translation and then import the translation back.

## Use Terms to Improve the Translation

You can define terms in the project. If the sentences to translate contain term entries, ImageTrans will send the terms to ChatGPT to improve the translation. For example, we can define the translation of Jenny to "詹妮" instead of "珍妮". Check out [this issue](https://github.com/xulihang/ImageTrans-docs/issues/546#issuecomment-1873325038) for details.

## OCR

ChatGPT can also be used to recognize text.


## Limitation

The limitation of the plugin is that it does not allow for continuous conversations like the web version to improve the translation.

## Other Machine Translation Engines

In addition to ChatGPT, ImageTrans also supports other machine translation engines. Note, however, that most of the engines need you to provide an API key.

* Baidu (key built-in)
* Tencent (key built-in)
* Colurful Clouds (trial key built-in)
* DeepL (free version available)
* Cloud Translation (free)
* Niutrans
* Youdao
* Volcano
* MyMemory (free)
* Microsoft
* Google
* Yandex
* Papago
* Opus-CAT (offline, free)
* Sugoi Translator (offline, free)

## Use other LLMs

As long as the large language model provides an OpenAI compatible API, we can use it.

Some LLMs:

* [Ollama](https://ollama.com/)
* [SakuraLLM](https://github.com/SakuraLLM/SakuraLLM)
