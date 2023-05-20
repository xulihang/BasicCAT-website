---
date: 2020-09-13 10:49:17+08:00
layout: post
title: Offline Machine Translation
categories: releasenote
tags: 
---

I have been looking for offline machine translation services and one of them has stood out which is [fiskmo](https://github.com/Helsinki-NLP/fiskmo-trados).

Fiskmo is a windows client with marian nmt as its backend. The translation prediction speed and its quality is fairly good.

I have made a plugin for this.

How to use:

1. Follow the guide to install fiskmo: <https://github.com/Helsinki-NLP/fiskmo-trados>
2. Install fiskmo plugins for BasicCAT
3. Run FiskmoMTEngine.exe with administrator privileges
4. Setup its params and enable it. The url param should be <http://localhost:8500/MTRestService/Translate>

Note: Fiskmo has been renamed to OpusCAT

