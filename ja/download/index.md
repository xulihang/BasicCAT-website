---
title: ダウンロード
layout: page
lang: ja
permalink: /ja/download/
---

お使いのオペレーティングシステムに合わせてインストーラーをお選びください。

### BasicCAT v1.11.0

* Windows: [32ビット](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64ビット](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Intel CPU版](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Apple CPU版](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux およびその他のシステム:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

百度網盤からもダウンロードできます：[リンク](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

過去のバージョン：[Releases](https://github.com/xulihang/BasicCAT/releases/)

macOSユーザーの方への注意：macOS Catalina以降、ファイルに `com.apple.quarantine` という新しい属性が付くようになりました。BasicCATを開くと「アプリが壊れているため開けません」と表示されます。以下のコマンドでこの属性を削除すると、正常に起動できます。

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### 翻訳メモリ・用語共有用のサーバープログラム

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### プラグイン

現在BasicCATには2種類のプラグインがあります：フィルタープラグインと機械翻訳プラグインです。

[こちら](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip)から全プラグインをダウンロードできます。BasicCATのインストーラーには最新のプラグインが含まれているため、通常は個別にダウンロードする必要はありません。

解凍して得られたjarファイルとxmlファイルをpluginsフォルダに入れてください。

現在提供しているプラグイン：

機械翻訳：

* ChatGPT
* Gemini
* DeepL
* テンセント
* 小牛
* Google
* IBM Watson
* 彩雲小訳
* Naver Papago
* 云訳（urlパラメータを設定するだけです。詳細は[公式説明](https://cloudtranslation.com/static/api_zh-cn.html)をご覧ください）
* Amazon（別途ダウンロードが必要：[リンク](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip)）
* OpusCAT（オフライン機械翻訳エンジン、[説明](/ja/offline-machine-translation)）
* Web機械翻訳（Webページから機械翻訳を抽出します。APIは不要です。[詳細](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/)）

フィルター：

* Gettext PO

### その他のツール

翻訳作業のために開発した小さなツール：[ツール](/ja/tools/)
