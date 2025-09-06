---
date: 2025-09-06 15:21:50+08:00
layout: post
title: 如何翻译DLsite上的漫画
categories: blog
tags: imagetrans
---

DLsite是日本最大的同人漫画平台，在这上面，我们可以购买各种漫画、游戏、音声ASMR作品。

下面我们讲下如何购买漫画并将日语生肉漫画翻译成中文。

## 购买

我们需要准备一张万事达卡或者Visa卡已进行支付。

选中一本漫画后，点击页面右方的Buy Now按钮，完成购买。

![购买](/album/dlsite/custom-workflow.jpg)

购买完成后，就可以下载漫画了。一般是PDF和JPG格式的图片内容。

## 翻译

这里，我们使用ImageTrans这一计算机辅助漫画翻译软件进行翻译。

1. 基于日译中日漫模板新建一个项目。

   ![new project](/album/local-manga-translator/new-project.jpg)
   
2. 菜单->项目->批处理->自定义工作流，打开自定义工作流页面。点确认开始批量翻译。

   ![custom workflow](/album/local-manga-translator/custom-workflow.jpg)
   
3. 翻译完成后，通过菜单->项目->批处理->生成所有图片的成品图，可以在out目录里找到翻译好的图片。

如果对翻译不满意，可以在软件中对结果进行调整。

翻译示例（[男子高生×新人OLの話](https://www.dlsite.com/girls/work/=/product_id/RJ276847.html)）：

原图：

![翻译的版本](/album/local-manga-translator/006-ja.webp)

使用DeepSeek翻译的版本：

![翻译的版本](/album/local-manga-translator/006-zh.webp)

## 相关链接

[本地漫画翻译软件](./2025-04-05-how-to-build-a-local-manga-translation-workshop.md)
