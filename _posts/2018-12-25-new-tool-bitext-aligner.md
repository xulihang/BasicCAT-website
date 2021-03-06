---
date: 2018-12-25 15:53:17+08:00
layout: post
title: New Tool! Bitext Aligner
categories: releasenote
tags: 
---

As in most cases, translators only give the translated document to the client, the source text and the target text are not aligned in sentence level. So I made this aligner.

It is simple to use, just like BasicCAT. Use Enter to split segments and Delete to merge segments.

### How does it work

It first splits the text into paragraphs and users have to align in paragraph level first. Then, paragraphs can be broken into sentences. If the numbers of sentences of the source text and the target text differ, empty textarea will be created as a placeholder.

In addition, automatic alignment tools [LF Aligner](https://sourceforge.net/projects/aligner/) and [Bleualign](https://github.com/rsennrich/Bleualign/) are integrated.

More about text alignment: [Parallel Text Alignment](http://blog.xulihang.me/parallel-text-alignment/)


### Use cases

1. Build paralel corpus
2. Reimport sentence-level translation to CAT tools from translated files.
3. Create bilingual files from separate source files and target files.

### Getting started

<iframe src="//player.bilibili.com/player.html?aid=754731761&bvid=BV12k4y1k7QC&cid=239243954&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### Recommended aligning procedure

Import text -> align in paragraph level with LF Aligner and manually correct -> split paragraphs into sentences -> align in sentence level with LF Aligner or bleualign and manually correct

Note:

1. Text of files of different formats can be extracted using Apache Tika or BasicCAT (based on Okapi Tikal)
2. Segmentation rules can influence the results significantly. Make sure you have the right rules.

### Running environment

Java 8, Python 3 (needed by bleualign), LF Aligner

Environment Download For Windows (unzip to Aligner's root): [jre8u192.zip](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ#list/path=%2FBasicCAT%2Fjre&parentPath=%2F), [Python3.zip](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ#list/path=%2FBasicCAT%2FAligner)

Crossplatform LF Aligner (unzip to Aligner's root): [LFAligner.zip](https://github.com/xulihang/Aligner/releases/download/v1.5.6/LFAligner.zip)

### Releases

* v1.5.6

    Changes: Add support of Linux and macOS for LF Aligner

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.5.6/Aligner.zip)


* v1.5.5

    Changes:
    
	* Integrated [LF Aligner](https://sourceforge.net/projects/aligner/)
	* Check target for duplicates removing

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.5.5/Aligner.zip)


* v1.5.4

    Changes:
    
	* Separate BasicCAT workfile reading
	* Append blank cells context menu
	* Update segmentation rules after a new srx file is chosen
    * Other bugfixes

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.5.4/Aligner.zip)

* v1.5.3

    Changes:
    
	* Export to XLIFF
	* Bleualign results which deleted some segments will show with a red border
	* Inaccurate bleualign results (by comparing target word count and source word count ratios of the whole text and the segment) will show with a yellow border
    * Add keyboard shortcuts for "go to the next empty segment" and "go to the next segment with issues"
	* New segment operations via context menu (right click on the empty area of the editor to call the menu)
	
	![](/album/aligner_listview_context_menu.jpg)

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.5.3/Aligner.zip)


* v1.5.2

    Changes:
    
    * Word count
	* Segments Remover (remove segments based on range, whether is empty or duplicated and specific text list)
	* Go to the next empty segment
	* Clean tags menu
	* Export to XLSX
	* Other bugfixes

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.5.2/Aligner.zip)

* v1.5.1

    Changes:
    
    * Support reading TMX, XLIFF files and BasicCAT work files
	* Read from Clipboard
	* TMX export now supports tags

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.5.1/Aligner.zip)

* v1.5.0

    Changes:
    
    * New project format (not compatible with previous versions)
	* Bleualign can be used in paragraph level

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.5.0/Aligner.zip)

* v1.4.0

    Changes:
    
    * Updated text segmentation method
	* Automatic alignment with [Bleualign](https://github.com/rsennrich/Bleualign/)

	[Download](https://github.com/xulihang/Aligner/releases/download/v1.4.0/Aligner.zip)
	
	How to use Bleualign:
	
	1. Ensure that you have Python installed.
	2. Export the source text to txt and translate the txt file with machine translation.
	3. "Edit"->"Bleualign"->"Align". Align after choosing the translated txt file.

* v1.3.1

	Change: Strip empty lines.
	
	[Download](https://github.com/xulihang/Aligner/releases/download/v1.3.1/Aligner.zip)

* v1.3

    New Functions:
    
    * Read Bilingual ass subtitle files with timestamp and filename info
    * Faster TMX Exporting
	
    [Download](https://github.com/xulihang/Aligner/releases/download/v1.3/Aligner.zip)



* v1.2

    New Functions:
    
    * Read Bilingual files (one paragraph if source text and one paragraph of target text)
    * Support docx files
    * Allow text editing
    
    [Download](https://github.com/xulihang/Aligner/releases/download/v1.2/Aligner.zip)


* v1.1

    New Functions:
    
    * Move segment up or down 
    * Delete segment
    * Export to TMX
    * Drap and Drop to add text files
    
    [Download](https://github.com/xulihang/Aligner/releases/download/v1.1/Aligner.zip)

* v1.0

    First release.
    
    [Download](https://github.com/xulihang/Aligner/releases/download/v1.0/Aligner.zip)

