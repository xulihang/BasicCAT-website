---
title: ImageTransの動画チュートリアルとデモ
layout: page
lang: ja
---

## 動画チュートリアルとデモ

### はじめに

<iframe src="//player.bilibili.com/player.html?aid=89725886&cid=153246062&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 日本語漫画の処理

<iframe src="//player.bilibili.com/player.html?aid=373454146&bvid=BV1Uo4y1Z7Wo&cid=283625204&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

手動での段階的な翻訳に加えて、ワンクリックの自動翻訳にも対応しています。[デモ](https://www.bilibili.com/video/BV1Uo4y1Z7Wo?p=4)。

### テキスト領域の検出

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### 訳文の書き戻し

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### コーパス検索とオノマトペ検索

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Chrome画像翻訳拡張機能

<iframe src="//player.bilibili.com/player.html?aid=458404487&bvid=BV1E5411p73K&cid=276586632&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

[Chrome拡張機能](https://github.com/xulihang/ImageTrans_chrome_extension)を使って、Webページ内の画像を直接翻訳できます。

### 自動翻訳サーバー

<video src="https://github.wuyanzheshui.workers.dev/xulihang/BasicCAT-website/releases/download/attachments/imagetrans_server_fastmode.mp4" controls="controls">
お使いのブラウザは video タグに対応していません。
</video>

このサーバーを使うと、WebページからオンラインでImageTransを呼び出せ、画像ごとに処理パラメータを調整できます。上記の動画は高速翻訳モードで、1枚の画像の翻訳にかかる時間は10秒未満です。

現在2つのサーバーバージョンがあります。バージョン1はローカルのImageTransに依存し、結果は良好ですが1日5回までしか翻訳できません。バージョン2はローカルのImageTransに依存せず、機能は限られますが、自分のAPIキーを使用でき、リクエスト回数の制限はありません。

機械翻訳とOCRの言語パラメータは手動で設定する必要があり、既定の方向は中国語から英語です。

なお、自動翻訳の結果が必ずしも満足のいくものとは限らず、人手による細かい調整が必要です。この調整に対応していることがImageTransの大きな特長です。

{% include comments.html %}
