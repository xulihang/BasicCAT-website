---
title: ツール
layout: page
lang: ja
---

翻訳作業の中で私が開発したいくつかのツールです：


1. XLSX to TMX

	XLSXの最初のワークシートを読み取ります。ワークシートには見出し行が必要で、zh-CN, en-US のような言語コードを記述します。

	例：

	```

	zh-CN	en-US
	你好	Hello
	```
	
	[ダウンロード](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)
	
2. Aligner

	原文ファイルと訳文ファイル、または原文と訳文が交互に並んだ対訳ファイルからアラインメントを行えます。

	詳細：[新ツール！対訳アラインメントソフトAligner](/zh/new-tool-bitext-aligner/)
	
3. PSD Localization

	PSDファイルからテキストを抽出し、翻訳したテキストを書き戻すことができます。Photoshopのフルバージョンがインストールされたコンピュータが必要で、現在はWindowsのみに対応しています。

	[ダウンロード](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)
	
4. Image Transcriber

	画像OCRの補助ツールです。テキストレイヤーを含むPSDファイルをさらに生成できます（Photoshopのインストールが必要）。

	このツールはOCRにtesseractとBaidu APIを使用します。tesseractをルートディレクトリのtesseract-ocrフォルダに置き、Baidu APIのidとsecretを改行区切りでルートディレクトリのbaiduファイルとして保存する必要があります。
		
	開発は終了しました。[ImageTrans](https://www.basiccat.org/ja/imagetrans/)をご利用ください。

5. FileDiff

	このツールはファイルの新旧バージョンの差分を表示でき、さまざまなファイル形式に対応しています。翻訳済みの文書を修正し、CAT上で対応するテキストを変更したい場合に、このツールで差分を表示できます。
	
	[ソースコード](https://github.com/xulihang/FileDiff)	
	
注：これらのツールを実行するには、先にJava Runtime Environment 8をインストールしてください。
