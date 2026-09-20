---
title: Silhouetteドキュメント
layout: page
description: Silhouetteドキュメント
lang: ja
---

## 対応オペレーティングシステム

* Windows 7+
* macOS 10.15+
* Linux

## インストール

Windowsの場合、ファイルを解凍して `Silhouette.exe` でプログラムを起動します。

macOSの場合、dmgファイル内のアプリを `Applications` フォルダにドラッグしてインストールします。「パッケージが壊れているため開けません」と表示された場合は、ターミナルを開いて以下のコマンドを実行してください：

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

Linuxの場合は、Windows版のzipパッケージ内のファイルを利用できます。プログラムの実行にはFFmpeg、Whisper.cpp、Java、JavaFXのインストールが必要です。これらの依存関係を含む[テンプレートファイル](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip)を利用できます。さらにONNXRuntimeをダウンロードし、soファイルをソフトのディレクトリに解凍してください：[linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip)。

## 設定

プログラムを開くと、購入の確認のために注文番号とメールアドレスの入力が必要です。7日間のトライアルまたは制限モードで先に試すこともできます。

そのほか、以下の設定も必要です。


1. Whisperモデル。音声認識用のWhisperモデルを1つ選択する必要があります。プログラム内にあるダウンロードリンク、または[こちら](https://github.com/xulihang/Silhouette_plugins/#whisper-models)からダウンロードできます。
2. APIキー。ChatGPT、Google、DeepLなどの翻訳サービスを利用する場合、環境設定でAPIキーを入力する必要があります。


## クイックスタート

Silhouetteのスクリーンショット：

![スクリーンショット](/album/silhouette/screenshot_zh.webp){: width="1500" height="1160"}

左上には、各種コントロールを備えた動画プレーヤーがあります。

左下には、既存の字幕行を表示する表があります。

右上では、現在の字幕行に対応する波形を確認し、そのタイムスタンプとテキストを編集できます。

右下では、複数の翻訳サービスの結果を確認できます。

以下はSilhouetteで動画・音声ファイルを翻訳する基本的な流れです：

1. メニューバーのファイルメニューでメディアファイルを開き、言語ペアを設定します。
2. 編集メニューで音声を認識し、音声区間を検出し、字幕行を編集します。
3. 書き起こしと翻訳の後、結果をSRTファイルまたはタブ区切りのtxtファイルにエクスポートできます。これらのファイルからデータをインポートすることもできます。
