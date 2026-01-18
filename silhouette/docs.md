---
title: Silhouette Documentation
layout: page
description: Silhouette documentation.
---

## Supported Systems

* Windows 7+
* macOS 10.15+
* Linux

## Installation

For Windows, unzip the file and use the `Silhouette.exe` to run the program.

For macOS, drag the application in the dmg file into the `Applications` folder to install it. If it says the package is damaged, please open terminal and run the following command:

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

For Linux, you can use the files in the Windows's zip file. You need to install FFmpeg, Whisper.cpp and Java with JavaFX to start it. You can use the [template file](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip), which has them included. You also need to unzip the ONNXRuntime so files in the app's folder: [linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip).

## Setup

Upon opening the program, you need to enter your order ID and your email to verify the purchase. You can use the 7-day trial or the limited mode instead to try the program first.


There are other things you need to setup.

1. Whisper model. You need to select a Whisper model for speech recognition. You can find the download link in the program or download them [here](https://github.com/xulihang/Silhouette_plugins/#whisper-models).
2. API keys. If you need to use translation services like ChatGPT, Google or DeepL. You need to fill in the API keys in Preferences


## Getting Started

A screenshot of Silhouette:

![screenshot](/album/silhouette/screenshot_en.webp)

On the top left, there is a video player with various controls. 

On the bottom left, there is a table showing the existing lines. 

On the top right, you can view the waveform around the current line and edit its timestamp and text.

On the bottom right, you can view the proposed translation by several services.

Here is a basic process using Silhouette to translate a video/audio file:

1. Use the file menu in the menu bar to open a media file and configure the language pair.
2. Use the edit menu to recognize the speech, detect the voice activity and edit the lines.
3. After the transcription and translation, you can export the result to an SRT file or a tab-delimited txt. You can also import from these files.





