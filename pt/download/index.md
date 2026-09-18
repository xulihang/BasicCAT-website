---
title: Download
layout: page
permalink: /pt/download/
lang: pt
---

Escolha o instalador de acordo com o seu sistema operacional.

### BasicCAT v1.11.0

* Windows: [32 bits](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 bits](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Versão para CPU Intel](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Versão para CPU Apple](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux e outros sistemas:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

Também é possível baixar pelo Baidu NetDisk: [Link](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

Versões anteriores: [Releases](https://github.com/xulihang/BasicCAT/releases/)

Atenção, usuários de macOS: a partir do macOS Catalina, os arquivos passam a ter um novo atributo chamado `com.apple.quarantine`. Ao abrir o BasicCAT, será exibida a mensagem de que o aplicativo está danificado. É preciso remover esse atributo com o comando abaixo para que o programa funcione normalmente.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### Servidor para compartilhamento de memória de tradução e terminologia

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### Plugins

Atualmente, o BasicCAT tem dois tipos de plugins: plugins de filtro e plugins de tradução automática.

Você pode baixar todos os plugins [aqui](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip). O pacote de instalação do BasicCAT já inclui os plugins mais recentes, então normalmente não é preciso baixá-los separadamente.

Lembre-se de colocar os arquivos jar e xml extraídos na pasta plugins.

Plugins disponíveis no momento:

Tradução automática:

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Colorful Clouds
* Naver Papago
* Cloudtranslation (basta configurar o parâmetro url; veja a [documentação oficial](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (requer download separado: [link](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (mecanismo de tradução automática offline, [documentação](/zh/offline-machine-translation))
* Tradução automática via web (extrai a tradução automática de páginas web, sem necessidade de API, [saiba mais](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

Filtro:

* Gettext PO

### Outras ferramentas

Algumas ferramentas pequenas desenvolvidas para resolver tarefas de tradução: [Ferramentas](/pt/tools/)

