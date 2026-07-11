---
date: 2026-07-11 19:08:50+08:00
layout: post
title: 自托管漫画翻译API服务器
categories: blog
tags: imagetrans
---

AI漫画翻译通常需要多种不同的技术协同工作：

* OCR用于从漫画页面中提取文字
* 大语言模型用于翻译
* 图像处理用于擦除原文和回嵌译文
* 排版用于保持原始漫画风格

计算机辅助图像翻译软件[ImageTrans](/zh/imagetrans/)集成了上述所有功能。

然而，对于希望将漫画翻译集成到自己应用中的用户来说，单纯的桌面翻译工具是不够的。

自托管的API层使得漫画翻译能力可以与浏览器、脚本、移动应用和自动化工作流相连接。

借助[ImageTrans API Server](https://github.com/xulihang/ImageTrans_wsServer)，你可以将现有的[ImageTrans](/zh/imagetrans/)安装部署为一个私有的漫画翻译服务。

## 用法

### 翻译整张图片

#### 请求

将base64编码的图片发送到`/translate`端点：

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,iVBORw0KGgo..." \
  -d "sourceLang=ja" \
  -d "targetLang=en"
```

#### 响应

成功时，端点返回JSON：

```json
{
  "success": true,
  "img": "base64-encoded-translated-image...",
  "imgMap": {
    "boxes": [
      {
        "text": "こんにちは",
        "target": "Hello",
        "geometry": { "X": 100, "Y": 50, "width": 200, "height": 40 }
      }
    ]
  }
}
```

- `img`：翻译后的图片，base64 WebP格式。
- `imgMap.boxes`：检测到的文本框，包含原文、译文和几何信息。


#### 纯文本模式

设置`withoutImage=true`可不返回图片内容，仅获取检测到的文本框：

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,..." \
  -d "withoutImage=true"
```

### 翻译文字区域

使用`/translateRegion`对单个文字区域进行OCR和翻译：

```bash
curl -X POST http://localhost:51042/translateRegion \
  -d "base64=data:image/png;base64,..." \
  -d "sourceLang=ja" \
  -d "targetLang=en"
```

响应包含检测到的原文以及来自多个翻译引擎的结果：

```json
{
  "success": true,
  "regionMap": {
    "source": "こんにちは",
    "target": [
      { "engine": "mymemory", "text": "Hello" },
      { "engine": "google", "text": "Hi" }
    ]
  }
}
```


### 管理实例

列出所有已连接的ImageTrans桌面实例：

```bash
curl http://localhost:51042/list
```

响应：

```json
[
  {
    "name": "1710000000000",
    "displayName": "default",
    "running": false
  }
]
```

### 指定实例

如果你连接了多个ImageTrans实例，可以通过`displayName`指定目标，支持设置密码：

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,..." \
  -d "displayName=my-instance" \
  -d "password=my-password"
```

## 部署


有两个服务端项目，它们的部署方式有所不同：

* [ImageTrans_wsServer](https://github.com/xulihang/ImageTrans_wsServer)：服务端默认运行在`http://IP:51042`/`https://IP:51043`。所有翻译请求通过WebSocket转发到已连接的ImageTrans桌面实例，并将结果作为HTTP响应返回。你可以将服务端部署在云服务器或家中的NAS上，然后将本地AI电脑连接到服务端。该服务端使用B4J编写。
* [image-translation-server](https://github.com/xulihang/image-translation-server)：服务端通过命令行直接启动本地ImageTrans实例。可以部署到性能强劲的云服务器或本地AI电脑上。该服务端使用Python编写，支持Docker部署。

## AI智能体集成

如果你更倾向于用自然语言交互而非直接使用HTTP端点，[ImageTrans-skills](https://github.com/xulihang/ImageTrans-skills)为Claude Code及其他智能体提供了AI技能，让你可以通过简单的提示词在命令行中操作ImageTrans：

```bash
npx skills add https://github.com/xulihang/ImageTrans-skills
```

示例：一句话翻译漫画图片：

> 将目录中的日文漫画图片翻译成中文，使用Deepseek进行翻译。

该技能涵盖了OCR、翻译、文字去除和导出——无需编写任何代码即可完成整个流程。

## 结语

有了自托管的API服务器，漫画翻译就变成了一项可以集成到任何工作流中的服务——无论是浏览器扩展、批处理脚本，还是移动阅读应用。如果你需要一个在远程服务器和本地ImageTrans桌面端之间的轻量级中继，可以选择`ImageTrans_wsServer`；如果你需要支持Docker的独立部署方案，则可以选择`image-translation-server`。两个项目都是开源的，你可以根据自己的需求进行定制。
