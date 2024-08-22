---
date: 2024-08-21 21:11:50+08:00
layout: post
title: How to Localize a Desktop Application written in B4J
categories: blog
tags: imagetrans basiccat
---

ImageTrans is a desktop program written in B4J which can be displayed in multiple languages.

The [Localizator](https://www.b4x.com/android/forum/threads/b4x-localizator-localize-your-b4x-applications.68751/#content) localization library is used behind it.

It needs to store keys and text in different languages in an Excel spreadsheet like the following.

| key | zh | en |
|-----------|-----------|-----------|
| Hello {1} | 你好 {1} | Hello {1} |



Then in the code, find the corresponding language version according to the key:

```vb
lblHello.Text = loc.LocalizeParams("Hello {1}!", Array(edtName.Text))
```

It's easy to add a new language by simply creating a new column and using the ISO-639-1 standard language code as the header. For example, the table below has added a column for French.

| key | zh | en | fr |
|-----------|-----------|-----------|-------------|
| Hello {1} | 你好 {1} | Hello {1} | Bonjour {1} |


ImageTrans has an integrated localization feature that allows you to export the above table and import back translations from the table. See this issue for details: [issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)

## Localize ImageTrans with BasicCAT

Next, let's talk about how to use BasicCAT to translate the exported xlsx file for localizing ImageTrans.

1. Hide columns that do not require translation.

   Suppose we currently have a table like the one below, with French as the column to be translated:


   | key | zh | en | fr |
   |-----------|-----------|-----------|-------------|
   | Hello {1} | 你好 {1} | Hello {1} | Hello {1} |


   We need to hide other columns to get the following table:

   | fr |
   |-------------|
   | Hello {1} |

   After that, BasicCAT will only process the column that needs to be translated.


2. Use BasicCAT to translate and generate the translated xlsx to be imported back to the ImageTrans software. We can use BasicCAT's pre-translation function to automatically invoke machine translation to translate.


3. Process newly added text to be translated.

   Each version update of the software may add new text that needs to be translated.

   We can prepare the xlsx file according to step 1, and later use BasicCAT's reimport feature to regenerate the project file based on the new file and the existing translations.


   ![Reimport](/album/localization/reimport.jpg)

   Afterwards, use search and replace to find segments with empty translations. Click "Filter Segments" in the bottom left corner to display only these fragments in the editor, making it easier for us to translate new text.

   ![Segments filtering](/album/localization/filter-segments.jpg)






