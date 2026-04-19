---
date: 2026-04-11 20:39:50+08:00
layout: post
title: Real-Time Screen Translator
categories: blog
tags: imagetrans
---

Recently, I want to play the raw Japanese GBA game *Ace Attorney*. I like the feeling of the original Japanese version and want to improve my Japanese skill. My Japanese level is limited so I still need a screen translator to help me.

[ImageTrans](/imagetrans/) is such a program. It integrates with various OCR and translation engines and can work as a real-time screen translator to play games like visual novel and read manga.


Here is its workflow:


1. The program detects whether the screen capture of the region specified by the user has changed and is now stable.
2. Use OCR to recognize the text in the region.
3. Use AI translation engines like ChatGPT and Deepseek to translate the text.
4. (Optional) Add [pronuciation annotation](/how-to-add-pronunciation-annotation-furigana-to-Japanese-kanji/) (Furigana for Japanese or Pinyin for Chinese) and use text-to-speech engine to read the text.
5. (Optional) Save the recognition results for [learning](/how-to-learn-japanese-by-reading-manga/) afterwards.

The whole process is automatic. You can also make the screen capture by yourself and ask the program to translate, since you may also need to read the text outside the region you specified.

The following is a demo video. Although it takes a while for the OCR and translation to complete and there are mistakes, it is playable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/B9xmNjmcb10?si=rod6GaSBPGQ0KBAX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


ImageTrans can also translate other medias, like books and manga. It is an integrated translation tool, like Photoshop for translation.

ImageTrans can run on desktop platforms like Windows, macOS and Linux. Mobile operating systems like Android and iOS are currently not supported.

## Optimizing Translation Speed and Quality

Real-time translation processes text only within the current input box, lacking contextual information, which leads to lower translation quality. Additionally, performing a translation operation each time results in slower speeds.

For many games, the text can be extracted, or transcriptions are already available. In such cases, we can pre-translate the text using a large language model. Later, during on-screen translation, the system can match the source text with OCR results and directly retrieve the pre-translated text, achieving both high speed and high quality. This feature is called **translation memory** in ImageTrans.

Below is a simple comparison using DeepSeek for translation. It shows that more context leads to higher translation quality.

| Original Text                                                | Full-Text Translation                                          | Sentence-by-Sentence Translation                               |
|--------------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------|
| （うう‥‥。 キンチョーするなあ‥‥）                               | (Ugh... I'm so nervous...)                                     | (Ugh... Don't be so nervous...)                                    |
| ‥‥なるほどくん！                                              | ...Naruhodo-kun!                                               | ...Mr. I See!                                                 |
| ふう。 なんとか、間にあったわね。                             | Phew. I managed to make it in time.                            | Phew. We made it just in time.                                 |
| どうかしら？　初めての法廷は。                                | How do you feel? Your first time in court.                     | How about it? Your first time in court?          |
| こ、こんなにドキドキするの、 小学校の学級裁判のとき以来です。 | Th-This is the first time my heart has raced like this since the class trial in elementary school. | My heart's pounding like this for the first time since the class trial back in elementary school. |
| ‥‥それはそれは。 ずいぶん、ごぶさたしてるのね。               | ...Well, well. It's been a long time, hasn't it?                | ...My, my. It's been quite a while, hasn't it?                |

Additionally, ImageTrans supports fuzzy matching between the source text and OCR results. Even if OCR makes errors, it can still find matches, preventing translation mistakes caused by faulty OCR.

For example, the sentence `借りがあるんですよ。 ヤツには。` might be misrecognized as `借りがあるんですよ。 ャツには。`, where the character "ヤ" becomes the small kana "ャ", potentially leading to translation errors. For instance, DeepSeek might mistakenly translate it as "I owe you a favor" instead of "I owe him a favor." Matching against pre-translated text extracted from the original avoids such issues.