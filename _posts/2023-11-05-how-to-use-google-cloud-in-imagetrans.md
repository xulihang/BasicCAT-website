---
date: 2023-11-05 15:11:50+08:00
layout: post
title: How to Use Google Cloud in ImageTrans
categories: blog
tags: imagetrans
---

Google offers API services like text recognition and translation on its Google Cloud Platform. They can be used in ImageTrans to translate images. In this article, we are going to talk about how to set it up to use Google's OCR and machine translation services in ImageTrans.

## Prerequisite

You need to create a Google Cloud Platform account first. You can get a $300 credits for the first year. With this amount, you can make OCR requests for 212,000 times.

## New Project

Create a new project first.

![New project](/album/googlecloud/new_project.jpg)

## Enable Cloud Vision OCR

Go to API&Services, search "OCR" and enable it.

![api services sidemenu](/album/googlecloud/api_services_sidemenu.jpg)

![cloud vision search](/album/googlecloud/cloud_vision_search.jpg)


## New API Key

Create a new API key.

![new api key](/album/googlecloud/cloud_vision_new_api_key.jpg)

Fill it in ImageTrans's preferences.

![api preferences](/album/googlecloud/google_api_preferences.jpg)

Then we can select Google as the OCR engine to use it.

![ocr combobox](/album/googlecloud/ocr_combobox.jpg)

## Enable Cloud Translation

Similarly, we can enable cloud translation.

![cloud translate search](/album/googlecloud/cloud_translate_search.jpg)

OCR and machine translation can share the same API key. After enabling it, we can use Google to translate texts.

![cloud translate](/album/googlecloud/google_translate.jpg)

## Enable OCR via Google Drive

We can upload an image file to Google Drive and get its text. Compared to the Vision OCR API, this is completely free.

### Enable the Drive API

Go to API&Services, search "Drive" and enable it.

![Google Drive Search](/album/googlecloud/drive_search.jpg)

### Enable OAuth

Enable OAuth so that we can login our gmail account.

1. New OAuth screen. Choose External.
    
   ![oauth](/album/googlecloud/oauth.jpg)
   
2. Fill in required info and add your gmail account as the test account.

   ![add test user](/album/googlecloud/test_user.jpg)

3. Create a new OAuth client id. Select desktop application.

   ![new credentials](/album/googlecloud/cloud_vision_new_api_key.jpg)
   
   ![new oauth client](/album/googlecloud/new_oauth_client.jpg)

4. Download the JSON file, renamed it as `credentials.json` and put it under ImageTrans's foler.

### Install the Plugin for ImageTrans

1. Download the jar file and put it in ImageTrans's folder: [google_drive_ocr_commandline.jar](https://github.com/xulihang/Google-Drive-OCR-Java/releases/download/builds/google_drive_ocr_commandline.jar). Rename it as `google_drive_ocr.jar`.
2. Download the plugin zip and unzip it in the plugins folder: [commandline_plugin.zip](https://github.com/xulihang/Google-Drive-OCR-Java/releases/download/builds/commandline_plugin.zip) (Remember to restart ImageTrans after this step)
3. Select Google Drive as the OCR engine.

   ![ocr combobox google drive](/album/googlecloud/ocr_combobox_google_drive.jpg)

You can learn more about Google Drive OCR [here](https://github.com/xulihang/ImageTrans_plugins/tree/master/googledriveOCR).


## Gemini

The latest AI LLM model by Google, Gemini, can also be used for machine translation and OCR.

Check out the following links to learn about how to use it.

* [GeminiMT](https://github.com/xulihang/ImageTrans_plugins/tree/master/geminiMT)
* [GeminiOCR](https://github.com/xulihang/ImageTrans_plugins/tree/master/geminiOCR)

