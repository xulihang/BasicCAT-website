---
date: 2026-07-11 19:08:50+08:00
layout: post
title: "Self-Hosted Manga Translation API Server"
categories: blog
tags: imagetrans
---

AI manga translation usually requires several different technologies working together:

* OCR for extracting text from manga pages
* Large language models for translation
* Image processing for removing and replacing text
* Typesetting for keeping the original manga style

Computer-aided image translation tool [ImageTrans](/imagetrans/) is a program combining all the parts mentioned above.

However, for users who want to integrate manga translation into their own applications, a desktop translation tool alone is not enough.

A self-hosted API layer makes it possible to connect manga translation capabilities with browsers, scripts, mobile applications, and automation workflows.

With the [ImageTrans API Server](https://github.com/xulihang/ImageTrans_wsServer), you can expose your existing [ImageTrans](/imagetrans/) installation as a private manga translation service.

## Fully Local Processing

All processing — OCR, translation, text removal, and typesetting — can run entirely on your local machine. Unlike cloud-based translation services, a local setup gives you:

- **No extra cost**: Use open-source models without paying per-character API fees.
- **No usage limits**: Translate as many pages as you want, no rate limiting or quotas.
- **No privacy concerns**: Your manga images never leave your computer.

For a step-by-step guide on setting up a complete local manga translation workshop (ImageTrans + Ollama + custom workflows), see the previous article: [Offline AI Manga Translator](./2025-04-05-how-to-build-a-local-manga-translation-workshop.md).

## Usage

### Translate a Whole Image

#### Request

Send a base64-encoded image to the `/translate` endpoint:

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,iVBORw0KGgo..." \
  -d "sourceLang=ja" \
  -d "targetLang=en"
```

#### Response

On success, the endpoint returns JSON:

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

- `img`: The translated image as a base64 WebP.
- `imgMap.boxes`: Detected text boxes with source text, translated text, and geometry.


#### Text-Only Mode

Set `withoutImage=true` to skip the image and only receive detected text boxes:

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,..." \
  -d "withoutImage=true"
```

### Translate a Text Region

Use `/translateRegion` to OCR and translate a single text region:

```bash
curl -X POST http://localhost:51042/translateRegion \
  -d "base64=data:image/png;base64,..." \
  -d "sourceLang=ja" \
  -d "targetLang=en"
```

The response includes the detected source text and translations from multiple engines:

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


### Manage Instances

List all connected ImageTrans desktop instances:

```bash
curl http://localhost:51042/list
```

Response:

```json
[
  {
    "name": "1710000000000",
    "displayName": "default",
    "running": false
  }
]
```

### Targeting a Specific Instance

If you have multiple ImageTrans instances connected, specify the target with `displayName` (optional password is supported):

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,..." \
  -d "displayName=my-instance" \
  -d "password=my-password"
```

## Deployment


There are two server projects, which differ in their deployment approaches:

* [ImageTrans_wsServer](https://github.com/xulihang/ImageTrans_wsServer): The server runs on `http://IP:51042`/`https://IP:51043` by default. All translation requests are forwarded to a connected ImageTrans desktop instance via WebSocket, and the result is returned as an HTTP response. You can deploy the server on a public VPS or NAS at home and then connect your local AI computer to the server. The server is written in B4J.
* [image-translation-server](https://github.com/xulihang/image-translation-server): The server directly launches local ImageTrans instances via command line. It can be deployed to a powerful VPS or your local AI computer. The server is written in Python. Docker deployment is supported.

## AI Agent Integration

If you prefer natural language interaction over raw HTTP endpoints, [ImageTrans-skills](https://github.com/xulihang/ImageTrans-skills) provides an AI agent skill for Claude Code and other agents, allowing you to operate ImageTrans via command line with simple prompts:

```bash
npx skills add https://github.com/xulihang/ImageTrans-skills
```

Example: translate manga images with a single sentence:

> Translate Japanese manga images in the directory to Chinese. Use Deepseek for translation.

The skill handles OCR, translation, text removal, and export — covering the full pipeline without writing any code.

## Conclusion

With a self-hosted API server, manga translation becomes a service you can integrate into any workflow — whether it's a browser extension, a batch processing script, or a mobile reading app. Choose `ImageTrans_wsServer` if you want a lightweight relay between a remote server and your local ImageTrans desktop, or `image-translation-server` for a standalone deployment with Docker support. Both projects are open source, so you can customize them to fit your specific needs.
