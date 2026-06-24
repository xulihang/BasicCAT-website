---
date: 2026-06-24 19:54:50+08:00
layout: post
title: "使用上下文提高漫画、游戏截图等图片翻译的质量"
categories: blog
tags: imagetrans
---

之前文章介绍了ImageTrans[翻译浏览器中图片](./2026-05-16-manga-image-translation-browser-extension.md)、[实时屏幕截图翻译游戏](./2026-04-11-real-time-screen-translator.md)的功能。

这种即时翻译有个问题，就是只翻译一张图，它的上下文有限，很难保证翻译质量。不像翻译一整本书、一整本漫画，可以有很长的上下文。而我们知道大模型的上下文越多，给出的翻译结果往往越好。

ImageTrans v5.22.1增加了两个翻译相关功能，可以提供更多的上下文来提高翻译质量。

1. 使用多模态模型，结合图片进行翻译。
2. 每次翻译时，使用前几张图片的文本提供更多上下文。

下面是《一条狗》漫画中两张图片的一个中译英测试结果。

![示例1](/album/context-llm/1.jpg)

![示例2](/album/context-llm/2.jpg)

## 使用图片进行多模态翻译

| 原文         | 译文（不使用图片提供上下文） | 译文（使用图片提供上下文）       |
|--------------|------------------------------|----------------------------------|
| 我不做人了!! | I'm no longer human!!        | I'm not gonna be human anymore!! |
| 未完待续     | To be continued              | To be continued                  |

模型使用的GLM 5V turbo。

## 使用前几页提供更多上下文

| 原文                                                                                           | 译文（不使用前几张提供上下文）                                                                                                                                                            | 译文（使用前几张提供上下文）                                                                                                                                                        |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 车祸后我一直很害怕,那么大的火,我还以为自己死定了,想不到你不止是陪着我还是我的救命恩人!太谢谢了 | After the car accident, I was very scared. Such a huge fire, I thought I was going to die. I never expected that you not only stayed with me but also became my savior! Thank you so much | After the car accident, I was very scared. Such a big fire, I thought I was going to die. I didn't expect you to not only be with me, but also become my savior! Thank you so much. |
| 这忽如其来的温柔,让单身二十六年的我没一点防备……                                                | This sudden tenderness made me, who has been single for twenty-six years, completely unprepared...                                                                                        | This sudden kindness caught me completely off guard after being single for twenty-six years...                                                                                      |
| 我不做人了!!                                                                                   | I won’t be a human anymore!!                                                                                                                                                              | I don't want to be a person anymore!!                                                                                                                                               |
| 未完待续                                                                                       | To be continued                                                                                                                                                                           | To be continued                                                                                                                                                                     |


模型使用的Tencent-HY-MT1.5-1.8B模型。这里用离线模型，是担心deepseek等在线模型的缓存机制干扰结果。

## 结论

可以看到翻译结果符合预期。不过结合图片翻译的效果可能不如提供更多上下文那么有用。
