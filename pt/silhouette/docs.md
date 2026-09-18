---
title: Documentação do Silhouette
layout: page
description: Documentação do Silhouette.
lang: pt
---

## Sistemas suportados

* Windows 7+
* macOS 10.15+
* Linux

## Instalação

Para Windows, descompacte o arquivo e use o `Silhouette.exe` para executar o programa.

Para macOS, arraste o aplicativo do arquivo dmg para a pasta `Applications` para instalá-lo. Se aparecer que o pacote está corrompido, abra o terminal e execute o seguinte comando:

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

Para Linux, você pode usar os arquivos do pacote zip do Windows. É necessário instalar FFmpeg, Whisper.cpp, Java e JavaFX para executar o programa. Você pode usar o [arquivo de modelo](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip), que já inclui essas dependências. Depois, também é preciso baixar o ONNXRuntime e descompactar os arquivos so na pasta do programa: [linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip).

## Configuração

Ao abrir o programa, é preciso informar o número do pedido e o e-mail para validar a compra. Você pode usar o teste de 7 dias ou o modo limitado para experimentar o programa primeiro.

Além disso, há outras configurações a fazer.


1. Modelo Whisper. Você precisa escolher um modelo Whisper para o reconhecimento de fala. O link para download pode ser encontrado no programa ou [aqui](https://github.com/xulihang/Silhouette_plugins/#whisper-models).
2. Chaves de API. Caso você precise usar serviços de tradução como ChatGPT, Google ou DeepL, é necessário preencher as chaves de API nas Preferências.


## Primeiros passos

Uma captura de tela do Silhouette:

![captura de tela](/album/silhouette/screenshot_zh.webp)

No canto superior esquerdo, há um player de vídeo com vários controles.

No canto inferior esquerdo, há uma tabela que mostra as linhas existentes.

No canto superior direito, você pode ver a forma de onda em torno da linha atual e editar seu carimbo de data/hora e seu texto.

No canto inferior direito, você pode ver os resultados propostos por vários serviços de tradução.

Veja a seguir o processo básico para traduzir um arquivo de vídeo/áudio com o Silhouette:

1. Use o menu Arquivo, na barra de menus, para abrir um arquivo de mídia e configurar o par de idiomas.
2. Use o menu Editar para reconhecer a fala, detectar a atividade de voz e editar as linhas.
3. Depois da transcrição e da tradução, você pode exportar o resultado para um arquivo SRT ou um txt separado por tabulações. Também é possível importar dados desses arquivos.





