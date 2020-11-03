---
date: 2020-11-02 09:47:17+08:00
layout: post
title: "新插件：网页版机器翻译"
categories: releasenote
tags:
---

有用户建议提供一个基于网页版谷歌翻译的机器翻译插件。

于是我做了一个能从网页版机器翻译获取翻译结果的插件。

通常，文本和语言代码可以用URL参数指定，比如谷歌的URL：<https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&text=Hello!>。这样集成在线机器翻译服务就比较容易了。此外，翻译可以根据类名提取，所以这个插件可以像其他使用API的机器翻译插件一样工作。

下载: <https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip>

截图:

![](/album/basiccat_mtweb.png)

用法:

1. 安装并启用插件。
2. 切换片段时，会出现一个简单的网页浏览器，它会加载谷歌翻译网页，并自动设置待翻译的文本为当前条目的源文本。
3. 如果要更改语言，需要在参数编辑区域里手动编辑语言代码。
4. 默认的机器翻译是谷歌。可以通过编辑URL模板和参数使用其他机器翻译。

URL模板使用`{sourceLang}`，`{targetLang}`和`{text}`作为占位符。

参数遵循以下格式:

```
源语言代码,目标语言代码,翻译的class名
文本
```

以下是一些例子。

### Google

URL Template:

```
https://translate.google.cn/#view=home&op=translate&sl={sourceLang}&tl={targetLang}&text={text}
```

Params:

```
auto,zh-CN,translation
Hello World!
```

### Baidu

URL Template:

```
https://fanyi.baidu.com/#{sourceLang}/{targetLang}/{text}
```

Params:

```
en,zh,trans-content
Hello World!
```


### Sogou

URL Template:

```
https://fanyi.sogou.com/?keyword={text}&transfrom={sourceLang}&transto={targetLang}&model=general
```

Params:

```
auto,zh-CHS,trans-to
Hello World!
```

