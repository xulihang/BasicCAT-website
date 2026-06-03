---
date: 2026-06-03 18:36:50+08:00
layout: post
title: "OCR for Republican-Era Chinese Periodicals: Text Extraction and Translation into Simplified Vernacular Chinese"
categories: blog
tags: imagetrans
---

Most Republican-era Chinese periodicals were printed in vertically arranged Traditional Chinese and written in Classical Chinese. This article demonstrates how to use ImageTrans to recognize the text and translate it into Simplified Chinese vernacular language.

For example, the article *"Women's Virtue"* from Volume 1, Issue 1 of *Chinese Women's World*:

![](/album/fude.jpg)

## Configure MinerU

To achieve better OCR accuracy, we use MinerU as the OCR engine.

Configuration steps:

1. Download the plugin from [mineruOCRPlugin.zip](/assets/mineruOCRPlugin.zip) and extract it into the `plugins` directory of ImageTrans.
2. Apply for an API Key and enter it in the MinerU section of ImageTrans's API preferences.

You can obtain an API Key from the official website:

<https://mineru.net/apiManage/token>

## OCR and Translation

1. Create a new project and import PDF files or images. ImageTrans can directly extract images from scanned PDFs and import hundreds of pages within seconds.
2. Select **MinerU** as the OCR engine, then click **Edit → Detect text areas and recognize text** to process the current image. The recognized text regions will be highlighted on the original image, and both the positions and text contents can be edited manually.
3. To process all images in the project, choose **Project → Batch → Detect text areas and recognize text for all pictures**.
4. After OCR is complete, proceed with translation. You can use the DeepSeek large language model to translate the text into Simplified Chinese vernacular language. In the preferences dialog, modify the DeepSeek prompt and replace the `{langcode}` parameter with `Simplified Chinese Vernacular`.

![](/album/Republican-era-Chinese-periodicals.jpg)

## Export as Markdown

Next, you can export the results as Markdown for reading, searching, or AI analysis.

The following is an example of the exported result, formatted with one line of original text followed by one line of translation:

婦德

妇德

汪長祿

汪长禄

問曰婦德何爲而作也昔者周公制禮以九嬤隸於天官實掌婦學之法其立敎之目有四曰婦德婦言婦容婦功德者何貞順之謂言者何辭令之謂容者何婉婉之謂功者何絲案之謂鄭玄既以此解周官其注禮記昏義亦循是說（二）然則當日后王君公卿士大夫之家女師所講閑門所習文質粲然斯已備矣載稽內則女子十年不出姆教婉婉聽從執麻東治絲繭紆組綱學女事以共衣服觀於祭祀納酒柴鑠豆茫蘸禮相助奠鄖云婉謂言語婉謂容貌與前說頗有異義孔類達釋之曰鄭意以此上下備其四德以婉爲婦言婉爲婦容聽從爲婦順執麻桌以下爲婦功從知德言容功四者析言之則有此別合言之可通名之曰德范史后紀九嬤掌敦四德（二）其說蓋有所受之矣班昭者生長名門博極羣書中更憂患以反說約所著女誠七篇務爲平易近人其言曰婦德不必才明絕異也婦言不必辯口利辭也婦容不必顏色美德也婦功不必技巧過人也幽閒貞靜守節整齊行己有風動靜有法是謂婦德擇辭而說不道憑語時然後言不厭於人是謂婦言盟浣塵穢服飾鮮潔沐浴以時身不垢辱是謂婦容專心紡績不好戲笑潔

问：为什么要写妇德呢？从前周公制定礼法，把九嫔归入天官管辖，实际掌管女子教育的法则。其中设立的教育条目有四项：妇德、妇言、妇容、妇功。什么是德？就是贞洁顺从的意思；什么是言？就是辞令应对的意思；什么是容？就是温婉柔和的意思；什么是功？就是丝麻纺织的意思。郑玄用这些来解释《周官》，他注解《礼记·昏义》时也沿用这个说法（二）。那么，当时王侯公卿士大夫家的女师所讲授、闺门所练习的内容，文采和实质都很完备了。考察《内则》记载：女子十岁以后不出门，由女师教导她们温婉、听从，学习处理麻葛、缫丝织茧、编织丝带、缝纫衣服，以供穿着，并观察祭祀礼节，送酒浆、摆放笾豆、调和肉酱，协助礼仪。郑玄解释说：婉是指言语，婉是指容貌，与之前的说法略有不同。孔颖达解释说：郑玄的意思是，上下文中已经包含了四种德行，用婉指代妇言，用婉指代妇容，用听从指代妇顺，用处理麻葛以下指代妇功。由此可知，德、言、容、功四者，分开说就有这些区别，合起来说都可以统称为德。《后汉书·后纪》说九嫔掌管教导四德（二），这种说法是有所传承的。班昭出身名门，博览群书，中年经历忧患后返璞归真，所著的《女诫》七篇，力求平易近人。她说：妇德不必才明绝世，妇言不必巧舌善辩，妇容不必容貌美丽，妇功不必技巧过人。幽静贞洁、守节整饬、行为有度、动静有法，这就是妇德；选择言辞说话，不传恶语，适时说话，不令人讨厌，这就是妇言；洗涤污秽、服饰整洁、按时沐浴、身体不脏不辱，这就是妇容；专心纺织、不好戏笑、洁净

期一第卷一第

期一 第卷一

As you can see, once the Classical Chinese text has been translated into punctuated Simplified Chinese vernacular language, it becomes much easier to read and understand.
