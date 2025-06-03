---
date: 2025-05-18 17:50:50+08:00
layout: post
title: How to Remove Subtitles from a Video
categories: blog
tags: silhouette imagetrans
---

When we can't find the original video without subtitles but want to do some secondary creations, such as making commentary videos, editing, and translating, we have to process the subtitled videos by removing or covering the subtitles.

Here is an example of processing video frames from the video clip of Soldier Sortie. Click on the picture to watch the video.

Video frame with subtitles:

[![frame](/album/subtitle-removal/frame52.jpg)](https://github.com/xulihang/BasicCAT-website/releases/download/attachments/Subtitle-Removal-Sample.mp4)

Video frame with subtitles removed with AI:

[![frame ai](/album/subtitle-removal/frame52-ai.jpg)](https://github.com/xulihang/BasicCAT-website/releases/download/attachments/Subtitle-Removal-Sample-AI.mp4)

Video frame with subtitles blurred:

[![frame blur](/album/subtitle-removal/frame52-blur.jpg)](https://github.com/xulihang/BasicCAT-website/releases/download/attachments/Subtitle-Removal-Sample-Blur.mp4)

We can see that the effect of AI algorithms on background restoration is fairly good. However, although the effect of a single image is OK, you can still see obvious traces of changes and fluctuations in the generated video. After all, normal videos have 25 frames per second, and the results of AI processing vary from frame to frame. At present, there is no particularly good solution. If we simply use blurring, there will be no obvious fluctuations.

**Update: ** The new ImageTrans version has added the STTN network model, it can remove text based on multiple frames, which can have a better result.

Here's how to remove subtitles from a video using [ImageTrans](/imagetrans/) and [Silhouette](/silhouette/).


1. Open the video with Silhouette and export the video frames as images. Save in PNG format to maintain picture quality.

   ![Extract Frame](/album/subtitle-removal/extract-frames.jpg)

2. Use Silhouette to generate subtitles based on sound (another approach is to [detect hard subtitles](/how-to-extract-hardcoded-subtitle/)). This allows us to know which images contain captions, reducing the amount of data that needs to be processed.

   ![Detect voice activity](/album/subtitle-removal/detect-voice-activity.jpg)

3. Open the exported images using ImageTrans. Open the video subtitle remover, import subtitles in SRT format, select the subtitle position, and generate text-removed images. If there are missing subtitled images (generally at the beginning and end of a speech line), you can use OCR and other technologies to detect the text and adjust the range of the images with text.

   ![Subtitle Remover](/album/subtitle-removal/subtitle-remover.jpg)

   The text removing method can be set in the project settings.

   ![Text Removal Settings](/album/subtitle-removal/text-removal-settings.jpg)

4. Use Silhouette to generate the final video based on the text-removed images.





