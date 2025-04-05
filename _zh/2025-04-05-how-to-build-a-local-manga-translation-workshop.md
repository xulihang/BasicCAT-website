---
date: 2025-04-05 14:14:50+08:00
layout: post
title: 本地漫画翻译软件
categories: blog
tags: imagetrans
---

随着深度学习等人工智能技术的发展，我们已经可以在个人电脑上本地运行漫画翻译软件了。本文会介绍如何配置计算机辅助图片翻译软件[ImageTrans](/zh/imagetrans/)在本地电脑上无限制地翻译日语漫画。

## 用到的软件

* [ImageTrans](/zh/imagetrans/)：一体化的图片翻译软件，支持OCR识别文字、调用AI翻译、抹除原文和回嵌译文。
* 本地大模型软件，例如LM Studio、Ollama，来调用Deepseek、qwen、sakuraLLM等模型。本文会用到Ollama。

## 启动本地服务

1. 启动本地mangaOCR服务，供ImageTrans调用以识别日语。[具体操作说明](https://github.com/xulihang/ImageTrans_plugins/tree/master/mangaOCR)。如果需要翻译其它语言，可以使用其它提供的本地服务。

   ![mangaocr](/album/local-manga-translator/manga-ocr.jpg)
   
2. 安装并运行Ollama，执行以下命令下载阿里的千问大语言模型：

   ```
   ollama run qwen2.5
   ```
   
## 使用ImageTrans翻译日漫

### 新建项目

基于日译中日漫模板新建一个项目。

![new project](/album/local-manga-translator/new-project.jpg)

使用模板的好处是，相关的配置，例如字体、项目语言、要使用的翻译和OCR等都已经配好了。如果需要的气泡模型没有下载，打开时还会提示进行下载。

### 软件配置

1. 配置Ollama

   在软件的偏好设置中，配置ChatGPT插件，让它可以调用本地的Ollama服务。

   ![api settings](/album/local-manga-translator/api-settings.jpg)

   需要修改两个地方：

   * host：改成`http://localhost:11434`
   * model：改成`qwen2.5`
   
2. 配置自定义工作流。

   通过菜单->项目->批处理->自定义工作流，打开自定义工作流页面。设置翻译引擎为ChatGPT，然后保存设置。

   ![custom workflow](/album/local-manga-translator/custom-workflow.jpg)


### 导入图片并翻译

导入图片后，在图片上右键，点当前图片->一键翻译（自定义工作流），就可以一键翻译图片了。要想翻译整个图片，也可以通过批处理中的自定义工作流进行操作。

演示视频：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114284013095465&bvid=BV1kqRRYBE89&cid=29245309296&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 本地翻译文字示例

| 原文                  | 译文                 |
|---------------------|--------------------|
| あの子ヒンメル様の仲間なんだって?   | 听说那孩子是辛美尔大人的同伴？    |
| 悲しい顔一つしないなんて、       | 连一个悲伤的表情都没有，       |
| 薄情だね.               | 真是薄情啊。             |
| おやおや、私達もしていませんよ.    | 哎呀哎呀，我们也没有啊。       |
| 司教はまじめにやれ!          | 主教认真点干！            |
| この薄情者!              | 这个薄情的人！            |
| ほっはっは.手痛いですな.       | 哈哈哈哈。真让人痛心啊。       |
| …だって私、この人の事何も知らないし… | …可是我，对这个人的事一无所知啊…  |
| たった１０年一緒に旅しただけだし…   | 只是一起旅行了仅仅十年而已…     |



其中，ヒンメル默认会被翻译成希梅尔。通过在软件中设置术语，可以对这类专有名词的翻译做规范。

![terms](/album/local-manga-translator/terms.jpg)