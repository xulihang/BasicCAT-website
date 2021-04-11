---
title: ImageTrans视频教程与演示
layout: page
permalink: /zh/imagetrans/video/
---

## 视频教程与演示

### 入门

<iframe src="//player.bilibili.com/player.html?aid=89725886&cid=153246062&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 处理日语漫画

<iframe src="//player.bilibili.com/player.html?aid=373454146&bvid=BV1Uo4y1Z7Wo&cid=283625204&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

除了手动分步翻译，亦能支持一键自动翻译，[演示地址](https://www.bilibili.com/video/BV1Uo4y1Z7Wo?p=4)。

### 文字区域检测

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### 译文回填

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 语料检索与拟声词检索

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Chrome图片翻译插件

<iframe src="//player.bilibili.com/player.html?aid=458404487&bvid=BV1E5411p73K&cid=276586632&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

支持利用[Chrome插件](https://github.com/xulihang/ImageTrans_chrome_extension)直接翻译网页中的图片。

### 自动翻译服务器

<video src="https://github.wuyanzheshui.workers.dev/xulihang/BasicCAT-website/releases/download/attachments/imagetrans_server_fastmode.mp4" controls="controls">
您的浏览器不支持 video 标签。
</video>

服务器允许用户通过网页在线调用ImageTrans，并能根据不同的图片调整处理参数。上述视频为快速翻译模式，翻译一张图所需时间不到10秒。

当前有两个服务器版本，版本1依赖于本地的ImageTrans，效果较好，每天只能翻译5次。版本2不依赖于本地的ImageTrans，功能有限，但可以使用自己的API密钥，没有请求次数的限制。

* [服务器链接（版本1）](http://www.xulihang.me:51045/imagetrans.html)
* [服务器链接（版本2）](http://www.xulihang.me:51045/index.html)

机器翻译和OCR的语言参数需要手动设置，默认方向为中到英。

注意自动翻译的效果并不一定让人满意，需要进行人工精调，支持精调是ImageTrans的一大特点。

{% include comments.html %}