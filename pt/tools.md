---
title: Ferramentas
layout: page
lang: pt
---

Algumas ferramentas que desenvolvi no meu trabalho de tradução:


1. XLSX to TMX

	Lê a primeira planilha do arquivo XLSX. A planilha precisa ter um cabeçalho, com códigos de idioma como zh-CN, en-US.

	Exemplo:

	```

	zh-CN	en-US
	你好	Hello
	```
	
	[Download](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)
	
2. Aligner

	Permite alinhar o arquivo de origem e o arquivo de destino, ou um arquivo bilíngue com trechos alternados de original e tradução.

	Saiba mais: [Nova ferramenta! Aligner, software de alinhamento de bitextos](/zh/new-tool-bitext-aligner/)
	
3. PSD Localization

	Permite extrair os textos de um arquivo PSD e reinserir os textos traduzidos. É necessário ter o Photoshop completo instalado no computador; no momento, só há suporte para o Windows.

	[Download](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)
	
4. Image Transcriber

	Ferramenta auxiliar de OCR de imagens. Também pode gerar arquivos PSD com camadas de texto (é necessário ter o Photoshop instalado no computador).
	
	A ferramenta usa o tesseract e a API do Baidu para fazer OCR. É preciso colocar o tesseract na pasta tesseract-ocr do diretório raiz e salvar o id e o secret da API do Baidu em um arquivo chamado baidu no diretório raiz, separados por quebra de linha.
		
	O desenvolvimento foi encerrado. Use o [ImageTrans](https://www.basiccat.org/pt/imagetrans/).

5. FileDiff

	Esta ferramenta mostra as diferenças entre as versões antiga e nova de um arquivo e oferece suporte a vários formatos. Se você alterou um documento já traduzido e quer alterar o texto correspondente no CAT, pode usar esta ferramenta para visualizar as diferenças.
	
	[Código-fonte](https://github.com/xulihang/FileDiff)	
	
Observação: para executar estas ferramentas, instale primeiro o Java Runtime Environment 8.