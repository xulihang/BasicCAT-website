---
layout: default
title: "ホーム"
description: BasicCATはオープンソースのコンピュータ支援翻訳ソフトです
lang: ja
---



<div class="home">
	<section class="site-header">
		<h1 class="smallcap"><a class="site-title" href="{{ '/' | prepend: site.baseurl | prepend: site.url }}">BasicCAT</a></h1>
		{% include nav.html %}
		{% include intro.html %}
	</section>
</div>


BasicCATは、翻訳者にシンプルで実用的な翻訳ツールを提供することを目的とした、オープンソースで無料のコンピュータ支援翻訳ソフトです。BasicCATという名前には2つの由来があります。1つはシンプルで使いやすいこと、もう1つはBasic言語で書かれているため、普通の人でもしばらく学習すれば習得でき、BasicCATのソースコードを元に自分に必要なソフトに改造できることです。

BasicCATの設計方針は、訳者の視線の移動をできるだけ減らし、訳文の編集に集中できるようにすることです。機械翻訳、選択範囲の用語検索、スペルミスなどは、いずれも入力欄の下にドロップダウンリストとして表示されます。

![デモ](/album/demo.gif)

BasicCATには以下の機能があり、訳者が翻訳作業をスムーズに進められるよう支援します：

* 翻訳メモリ
* 用語管理
* 言語チェック
* 選択範囲からの用語検索
* クイック入力
* 自動修正
* 対話型機械翻訳
* 外部校閲用のWordエクスポート
* 対訳段落の対照ファイルのエクスポート
* セグメントの分割と結合
* 各種オンライン辞書の呼び出し
* 一般的な機械翻訳サービスのAPI呼び出し
* 翻訳メモリと機械翻訳を利用した全文の事前翻訳
* 一般的なソースファイル形式のサポート：txt, idml, xliff, gettext po
* 翻訳メモリ標準TMX、用語管理標準TBX、セグメント分割標準SRXのサポート
* Gitによるバージョン管理

リンク：

* [ダウンロード](https://www.basiccat.org/ja/download)
* [リリースノート](https://www.basiccat.org/ja/releasenote)
* [ドキュメント](https://docs.basiccat.org/en/latest/)

漫画や画像を翻訳する場合は[ImageTrans](/ja/imagetrans/)をご利用ください。

音声・動画を翻訳する場合は[Silhouette](/ja/silhouette/)をご利用ください。

その他の製品は[製品一覧](/ja/products/)をご覧ください。

![スクリーンショット](/album/main.png)
