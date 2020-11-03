---
date: 2020-11-03 09:47:17+08:00
layout: post
title: New Machine Translation Plugin via Web
categories: releasenote
tags: 
---

Users suggested providing a machine translation plugin which uses the online webpage interface of Google Translate.

So I decided to make a machine translation plugin which get translation from webpages.

Normally, text and language codes of source and target can be specified with URL params as in Google's URL: <https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&text=Hello!>. This makes it easy to integrate online machine translation services. Also, the translation can be extracted based on class name, so this plugin can work as other machine translation plugins using API.

Download: <https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip>

Screenshot:

![](/album/basiccat_mtweb.png)

Usage:

1. Install and enable the plugin.
2. When you change segment, a simple web browser will appear and load Google Translate web page with the source text of the current entry.
3. If you want to change languages, you need to manually edit the language codes in the params text area.
4. The default MT service is Google Translate. You can change it to other services by editing the template url and params. 

The URL template uses `{sourceLang}`, `{targetLang}` and `{text}` as placeholders.

The params follows this format:

```
souceLang,targetLang,translation class name
text
```

Below are some examples.

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

