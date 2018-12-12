---
date: 2018-12-12 15:56:17+08:00
layout: post
title: 1.2 beta has multilanguage support
categories: releasenote
tags: 
---

The major update for 1.2 is the support for multiple languages.

Currently, it supports the following languages:

1. English
2. Swedish
3. Japanese
4. Korean
5. Germany
6. French
7. Finnish
8. Danish
9. Greek
10. Czech
11. Russian
12. Spanish
13. Polish
14. Dutch
15. Catalan
16. Italian
17. Portuguese
18. Simplified Chinese
19. Traditional Chinese

To support more languages, basiccaly is to add segmentation rules and to identify whether the language has spaces between words or not.

You can make BasicCAT support other languages by doing as follows:

1. Input the language code based on ISO639 standard to create projects and add neccessary rules to segmentation.conf in "project path/config".
2. Modify lancodes.txt so that Machine Translation Engines will recognize the code (normally no need to this). For windows, lancodes.txt exists in "users' folder/AppData/Roaming/BasicCAT" and for other operating system, it lies in BasicCAT's installation folder.

Multilanguage support is still in a beta state, please give me feedbacks if you encounter some problems.

Changelog:

* Multilanguage support
* Term history recording
* Move configuration files to projects' config folder


