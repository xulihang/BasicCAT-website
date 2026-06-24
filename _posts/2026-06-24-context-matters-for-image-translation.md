---
date: 2026-06-24 19:54:50+08:00
layout: post
title: "Use Context to Improve Translation Quality for Comics, Game Screenshots, and Other Images"
categories: blog
tags: imagetrans
---

Previous articles introduced ImageTrans' features for [translating images in the browser](./2026-05-16-manga-image-translation-browser-extension.md) and [real-time screen translation for games](./2026-04-11-real-time-screen-translator.md).

The issue with this kind of on-the-fly translation is that it only translates one image at a time, which provides limited context and makes it difficult to ensure translation quality. This is unlike translating an entire book or a full comic, where there is ample context available. As we know, the more context a large model has, the better its translation output tends to be.

ImageTrans v5.22.1 introduces two new translation-related features that provide additional context to improve translation quality:

1. Use of multimodal models that incorporate the image itself during translation.
2. Inclusion of text from previous images to provide more context for each translation.

Below are test results for Chinese-to-English translation of two images from the comic *A Dog*.

![Example 1](/album/context-llm/1.jpg)

![Example 2](/album/context-llm/2.jpg)

## Multimodal Translation Using Images

| Original Text        | Translation (without image context) | Translation (with image context)     |
|----------------------|--------------------------------------|--------------------------------------|
| 我不做人了!!          | I'm no longer human!!               | I'm not gonna be human anymore!!     |
| 未完待续              | To be continued                     | To be continued                      |


The model used is GLM 5V turbo.


## Using Previous Pages for More Context

| Original Text                                                                                   | Translation (without previous context)                                                                                                                                                        | Translation (with previous context)                                                                                                                                                |
|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 车祸后我一直很害怕,那么大的火,我还以为自己死定了,想不到你不止是陪着我还是我的救命恩人!太谢谢了 | After the car accident, I was very scared. Such a huge fire, I thought I was going to die. I never expected that you not only stayed with me but also became my savior! Thank you so much.   | After the car accident, I was very scared. Such a big fire, I thought I was going to die. I didn't expect you to not only be with me, but also become my savior! Thank you so much. |
| 这忽如其来的温柔,让单身二十六年的我没一点防备……                                                | This sudden tenderness made me, who has been single for twenty-six years, completely unprepared...                                                                                           | This sudden kindness caught me completely off guard after being single for twenty-six years...                                                                                     |
| 我不做人了!!                                                                                    | I won’t be a human anymore!!                                                                                                                                                                 | I don't want to be a person anymore!!                                                                                                                                              |
| 未完待续                                                                                        | To be continued                                                                                                                                                                              | To be continued                                                                                                                                                                    |

The model used is Tencent-HY-MT1.5-1.8B. An offline model was used here due to concerns that the caching mechanisms of online services like Deepseek might interfere with the results.

## Conclusion

The translation results are in line with expectations. However, incorporating the image itself into the translation may not be as consistently useful as providing additional textual context.