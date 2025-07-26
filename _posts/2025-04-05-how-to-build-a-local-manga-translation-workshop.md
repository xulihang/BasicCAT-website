---
date: 2025-04-05 14:14:50+08:00
layout: post
title: Offline AI Manga Translator
categories: blog
tags: imagetrans
---

Thanks to the current AI technologies, we can now run our offline AI manga translator on personal computers. In this article, we are going to talk about how to use [ImageTrans](/imagetrans/), a computer-aided image translation tool, to translate Japanese manga. Since the entire process is done locally, it has no extra cost, no usage limits and no privacy problems.

## Software Used

* [ImageTrans](/imagetrans/): an integrated workshop for image translation. It can extract the text with OCR, call AI translation, remove the text and reinject the translation.
* A large language model tool, like LM Studio and Ollama, to call models like Deepseek, qwen and sakuraLLM. We are going to use Ollama in this article.

## Start Local Services

1. Start a local manga OCR servce which ImageTrans uses for Japanese recognition ([guide](https://github.com/xulihang/ImageTrans_plugins/tree/master/mangaOCR)). If you need to translation images in other languages, you can choose other services.

   ![mangaocr](/album/local-manga-translator/manga-ocr.jpg)
   
2. Install and run Ollama. Execute the following command to download the qwen model.

   ```
   ollama run qwen2.5
   ```
   
## Use ImageTrans to Translate Manga

### New Project

Create a new project based on the Japanese -> Chinese manga template.

![new project](/album/local-manga-translator/new-project.jpg)

Using a template has many benefits. The text styles, the language pair, workflows, OCR and translation engines to use are all configured. If it requires a specific balloon detection model, it will also prompt you to download it.

PS: if you failed to download the balloon detection model, you can download it directly via [this link](https://github.com/xulihang/balloon-dataset/releases/download/models/japanese-manga.zip) and unzip the files to `models\japanese-manga`.

### Configuration

1. Configure Ollama.

   In ImageTrans's preferences, configure the ChatGPT plugin to let it call the local Ollama server.

   ![api settings](/album/local-manga-translator/api-settings.jpg)

   We need to modify two params:

   * host: change to `http://localhost:11434/v1`
   * model: change to `qwen2.5`
   
2. Configure custom workflow.

   Through menu->project->batch->custom worflow to open the custom worflow form. Set the translation engine to ChatGPT and save the settings.

   ![custom workflow](/album/local-manga-translator/custom-workflow.jpg)

PS: for new versions of ImageTrans, you can also directly use the Ollama plugin.

### Import Images and Start Translation

Import the images and right click on the image. Through current image -> one-click translation (custom workflow), we can translate the current image. We can translate all the images through batch operations.

![one-click-translation](/album/local-manga-translator/one-click-translation.jpg)

Demo video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/DOS0Kh4Y1g4?si=LCz6oAObFRBKxlVt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Sample Translation Result

| Source                  | Target                 |
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



ヒンメル will be translated as 希梅尔 by default. Here, we can specify it as a term with the right translation (辛美尔) to regulate the translation of proper nouns.

![terms](/album/local-manga-translator/terms.jpg)