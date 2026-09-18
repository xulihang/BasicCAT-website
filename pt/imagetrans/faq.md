---
title: FAQ - ImageTrans
layout: page
lang: pt
---

Perguntas frequentes sobre o ImageTrans. Para buscar mais questões, use [este link](https://github.com/xulihang/ImageTrans-docs/issues).

1. Quais idiomas o software suporta?

    O software em si suporta todos os idiomas. As principais limitações estão no OCR e na tradução automática.

    A seguir estão as páginas que descrevem os idiomas suportados por alguns dos serviços de OCR e de tradução automática usados pelo ImageTrans:

    * <https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html>
    * <https://cloud.google.com/vision/docs/languages>
    * <https://cloud.google.com/translate/docs/languages>

2. Há suporte a japonês escrito na vertical?

    Youdao, Baidu, Google, mangaOCR, tesseract e o OCR nativo do Windows 10 conseguem reconhecer japonês escrito na vertical. O ImageTrans também oferece o recurso de converter imagens com texto na vertical em texto na horizontal, para que mecanismos de OCR que só reconhecem japonês na horizontal também consigam reconhecer japonês na vertical.

3. Qual é a diferença entre a versão para uso pessoal e a versão para uso comercial?

    No momento, não há diferença de funcionalidades entre as duas. A versão para uso comercial é voltada principalmente para empresas que a usam em trabalhos de tradução comercial e, depois da compra, pode ser usada em 5 dispositivos.

4. Esse preço é uma mensalidade ou um pagamento único?

    A versão adquirida pode ser usada por toda a vida e inclui atualizações gratuitas por seis meses.

5. Em quais plataformas o software funciona? Há suporte a Linux?

    O ImageTrans é um aplicativo multiplataforma desenvolvido com JavaFX e pode rodar no Windows, no macOS e no Linux. O software depende do OpenCV e, por isso, há bibliotecas específicas para Windows, macOS e Linux.

6. Por que o resultado da tradução automática é igual ao texto original?

    É preciso especificar antes o par de idiomas da tradução nas configurações do projeto.

7. O que são APIs de OCR e de tradução automática? Como solicitá-las?

    API é a abreviação de interface de programação de aplicações. Empresas como Google e Microsoft disponibilizam seus serviços de OCR e de tradução automática na forma de APIs, para que softwares de terceiros possam chamá-los. O ImageTrans integra as APIs de OCR e de tradução automática mais comuns. Normalmente é preciso solicitar uma chave de API para usá-las. Os passos detalhados estão na documentação de cada plataforma.

    A seguir está um tutorial que encontrei na internet sobre como solicitar a chave de API do OCR do Google Vision:

    <https://easyscreenocr.com/how-to-load-google-api-in-easyscreenocr-for-mac-lifetime-version/>

8. Quais serviços de OCR e de tradução automática o software suporta?

    A seguir está a lista dos serviços online suportados atualmente

    OCR: Baidu, Youdao, Tencent, Google, Microsoft Azure, OCRSPACE, ABBYY Cloud, Clova

    Tradução automática: Baidu, Youdao, Tencent, Niutrans, Google, Microsoft, Colorful Clouds, Cloudtranslation, Papago

    Por padrão, o ImageTrans inclui as chaves de serviços de OCR como Baidu, Azure e OCRSPACE, além das chaves de serviços de tradução automática como Baidu, Tencent e Niutrans.

    Também há suporte a OCR e tradução automática offline. Veja a próxima pergunta.

9. O software pode ser usado offline?

    O software pode ser usado offline. Porém, na primeira execução é preciso estar conectado à internet para verificar se a compra foi feita; o registro é mantido por 7 dias.
    
    O software pode traduzir imagens offline e oferece suporte a OCR e tradução automática offline.

    OCR offline: tesseract, mangaOCR, OCR nativo do Windows 10, PaddleOCR, EasyOCR

    Tradução automática offline: OPUS-CAT, eztrans, Sugoi
    
    O OCR e a tradução automática online, especialmente a tradução automática, costumam ter resultados melhores e cobrir mais idiomas, mas também apresentam problemas, como a necessidade de conexão à internet e limites no número de requisições.

10. Por que alguns quadros ficam sem resultado ao executar OCR e tradução automática em lote?

    Os serviços de OCR e de tradução automática online têm limites de requisições, por exemplo, apenas 5 por segundo. O ImageTrans permite definir o intervalo de tempo entre as requisições de OCR e de tradução automática para evitar esse problema.

    Se for o OCR que não retornou resultado, pode ser que o mecanismo de OCR não tenha reconhecido o texto.

11. Por que o texto não foi totalmente apagado?

    A caixa de texto precisa cobrir completamente o texto e ficar a uma certa distância das bordas do texto. Se o fundo do texto for complexo, muitas vezes ainda é preciso fazer o ajuste manualmente.

12. O software tem interface em inglês?

    No momento, o software oferece a interface em dois idiomas: inglês e chinês.
	
13. Por que as linhas de texto não foram mescladas?

	Há vários motivos.

	1. A altura ou a largura de crescimento padrão é pequena demais; é preciso aumentar um pouco o valor (geralmente a altura da linha de texto).
	2. Existe um espaçamento entre as áreas de texto, o que afeta a mesclagem. Há várias formas de resolver isso:

		* Reduzir o valor de expansão em pixels
		* Mesclar manualmente
		* Desmarcar a opção de inferir se há espaçamento
		
    Imagem de exemplo:
	
	![](/album/unmerged.jpg)
	
	Depois da mesclagem:
	
    ![](/album/merged.jpg)



{% include comments.html %}