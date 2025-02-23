---
date: 2025-02-23 10:01:50+08:00
layout: post
title: How to Align Text with Audio
categories: blog
tags: silhouette
---


You've got an audio or a video and the script of the speech. Now, you would like to align the text with the speech. Instead of manually creating the timelines, we can use a computer-aided approach:

* First, recognize the speech to get the timelines with the recognized words. 
* Then, align the recognized text with the existing text.


The computer-aided video/audio translation tool [Silhouette](/silhouette/) is made for such a purpose.


Recognized result:

![recognized-result](/album/silhouette/recognized-result.jpg)


Aligner:

![aligner](/album/silhouette/aligner.jpg)

Aligned result:

![aligned](/album/silhouette/aligned.jpg)

PS: if the recognized speech is accurate, we do not have to do this. This is for cases where the audio quality is not good, which leads to bad recognition results.



## Further Reading

Forced alignment is the process of determining, for each fragment of the transcript, the time interval (in the audio file) containing the spoken text of the fragment.

A text fragment can have arbitrary granularity:

* a paragraph,
* a sentence,
* a word

Generally, it is an automatic approach. But in order to get an accurate result, human intervention is needed. This is what Silhouette is used for.

