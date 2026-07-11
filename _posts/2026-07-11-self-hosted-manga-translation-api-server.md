---
date: 2026-07-11 19:08:50+08:00
layout: post
title: "Self-hosted Manga Translation API Server"
categories: blog
tags: imagetrans
---

AI manga translation usually requires several different technologies working together:

* OCR for extracting text from manga pages
* Large language models for translation
* Image processing for removing and replacing text
* Typesetting for keeping the original manga style

For users who want to integrate manga translation into their own applications, a desktop translation tool alone is not enough.

A self-hosted API layer makes it possible to connect manga translation capabilities with browsers, scripts, mobile applications, and automation workflows.

With the [ImageTrans API Server](https://github.com/xulihang/ImageTrans_wsServer), you can expose your existing [ImageTrans](/imagetrans/) installation as a private manga translation service.

## Usage

### Translate a Whole Image

#### Request

Send a base64-encoded image to the `/translate` endpoint:

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,iVBORw0KGgo...rest of base64 data" \
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

- `img`: The translated image as a base64 JPEG.
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

If you have multiple ImageTrans instances connected, specify the target with `displayName`:

```bash
curl -X POST http://localhost:51042/translate \
  -d "src=data:image/png;base64,..." \
  -d "displayName=my-instance" \
  -d "password=my-password"
```

## Deployment


There are two server projects, which have different deployment:

* [ImageTrans_wsServer](https://github.com/xulihang/ImageTrans_wsServer): The server runs on `http://localhost:51042` by default. All translation requests are forwarded to a connected ImageTrans desktop instance via WebSocket, and the result is returned as an HTTP response. You can deploy the server on a public VPS or NAS at home and then connect your local AI computer to the server. The server is written in B4J.
* [image-translation-server](https://github.com/xulihang/image-translation-server): The server directly lanuches local ImageTrans instances via command line. It can be deployed to a powerful VPS or your local AI computer. The server is written in Python. Docker deployment is supported.

