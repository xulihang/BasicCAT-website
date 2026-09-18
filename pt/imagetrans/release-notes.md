---
title: Notas de versão do ImageTrans
layout: page
lang: pt
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v6.5.0 (2026/09/11)

* Atualizado o JRE para [JRE26](https://download.bell-sw.com/java/26.0.2.1+1/bellsoft-jre26.0.2.1+1-windows-amd64-full.zip)
* Adicionada configuração de exportação de JPEG em alta fidelidade
* Adicionado fluxo de trabalho personalizado para detectar a direção do texto e definir o ângulo de rotação
* Rotacionar os nós das regiões de texto em vez da imagem
* No modo de tradução, alinhar as regiões selecionadas ajusta apenas a posição da região de tradução
* Para controles em idiomas RTL, definir NodeOrientation como RIGHT_TO_LEFT em vez de apenas definir o alinhamento à direita
* Adicionadas mais opções de download no servidor
* Corrigido o problema de o arquivo com falha não ser excluído a tempo ao cancelar o download quando a rede está lenta
* Corrigido o problema de esquecer de atualizar o estilo do TextArea ao criar um novo projeto
* Corrigida a ordem ao mesclar palavras que misturam árabe e não árabe
* Corrigido o problema de o RTL não ser habilitado ao compor texto em árabe
* Corrigido o problema de o texto em PDFs exportados não aceitar rotação
* Corrigido o problema de o texto de regiões rotacionadas não girar de forma centralizada
* Corrigido o redimensionamento de regiões rotacionadas
* Corrigido o erro ao desabilitar a composição vertical CJK
* Corrigido o tratamento de números puramente arábicos pelo rapidOCR
* Corrigido o tratamento de números puramente arábicos na geração de PDF em árabe

## v6.4.0 (2026/09/03)

* Otimizada a seleção da fonte padrão nas opções de exportação de PDF
* A busca automática de fontes na exportação de PDF agora também procura fontes na pasta de fontes do diretório do usuário do Windows
* Otimizado o espaçamento do texto em PDFs exportados com texto vertical
* Ao exportar PDFs em chinês e japonês quando as configurações do projeto não têm estilo de fonte, detectar automaticamente a direção do texto
* Os fluxos de trabalho personalizados agora suportam a contagem do tempo de processamento
* Alteradas todas as traduções padrão para o Baidu
* Corrigido o problema de altura incorreta do texto em PDFs verticais de tradução em chinês
* Corrigido o problema de o RapidOCR inverter incorretamente números arábicos
* Corrigido o problema de inverter incorretamente números arábicos na geração de PDF em árabe

## v6.3.3 (2026/08/28)

* Adicionado fluxo de trabalho personalizado para mesclar regiões sobrepostas
* Adicionada a opção de idioma português (Brasil)
* A detecção de quadros baseada em detecção de objetos agora permite definir no `model.json` os nomes de classe usados (`class_names_to_use_for_panel`)
* Corrigido o erro ao criar um novo projeto sem selecionar o idioma
* Corrigido o erro ao exportar PDF com texto vertical

## v6.3.2 (2026/08/21)

* Abrir o removedor de texto carrega o método de remoção definido nas configurações do projeto
* Se o método de geração de máscara de fundo complexo ou de restauração de imagem estiver definido, o método de seleção por região será usado ao abrir o editor de máscara ou o removedor de texto
* A definição do estilo de texto pela detecção da direção do texto só é executada quando o idioma de destino oferece suporte a texto vertical
* O gerador de certificados obtém o IP antecipadamente e usa o diretório cert do software como diretório padrão
* Corrigido o problema de o gerador de certificados não usar corretamente o IP definido

## v6.3.1 (2026/08/13)

Corrigido o problema de a linha de comando abrir um projeto e executar as operações seguintes sem esperar que a interface termine de se ajustar e que a seleção do idioma de OCR seja concluída

## v6.3.0 (2026/08/06)

* O pacote de instalação agora inclui por padrão o modelo ONNX Lama Inpaint quantizado em int8 com tamanho fixo de 512x512
* Removido o MIGAN Inpaint do pacote de instalação
* Removido o modelo de classificação de idioma de imagem do pacote de instalação
* Otimizado o uso do Lama Inpaint no template de CG
* Adicionado suporte ao modelo RF-DETR
* Adicionado fluxo de trabalho personalizado para remover regiões não rotacionadas
* Adicionada configuração de projeto para dividir palavras maiores que determinado comprimento
* O download remoto de modelos agora suporta a verificação SHA256
* O RapidOCR baixa os modelos automaticamente da rede e não exibe o aviso de modelo não instalado ao trocar de idioma
* O pacote de instalação agora inclui por padrão os dicionários de tailandês e árabe do RapidOCR
* Ao remover texto por região, se as regiões se sobrepuserem, elas são mescladas antes da remoção por região, melhorando o efeito ruim de remoção causado pela sobreposição
* Ao usar o mangaOCR para reconhecer a imagem inteira, se o modelo OCR mit48px não existir, usar o rapid para reconhecer textos em faixas
* Corrigido o problema de ROI inconsistente ao verificar se a imagem é complexa na geração de máscara e na remoção de texto
* Corrigido o bug de a pré-tradução pular imagens sem texto

## v6.2.2 (2026/08/01)

* O PPDocLayout v3 agora suporta a versão mac mlx
* Uso de variáveis globais para armazenar a detecção de quadros, evitando carregamentos frequentes do modelo
* Removidos espaços extras na tradução para inglês da detecção de objetos
* A pré-tradução pula imagens sem texto


## v6.2.1 (2026/07/28)

* Removido `Character.UnicodeBlock.GENERAL_PUNCTUATION` (por exemplo …) das condições de identificação de caracteres han
* Atualizada a diferença máxima de coordenada vertical nos templates para 2000
* Corrigido o problema de a mensagem de erro de upload do servidor não transmitir o nome
* Corrigido o problema de o servidor poder definir o status de execução como false antes de enviar as imagens traduzidas

## v6.2.0 (2026/07/26)

* Adicionado template de servidor genérico
* Ao criar um projeto com base no template de par de idiomas genérico, selecionar automaticamente o OCR adequado
* Adicionado fluxo de trabalho personalizado para detectar as células na classificação de tabelas
* Reescrita toda a lógica de determinação de a qual quadro uma região de texto pertence
* Uso de máscara de texto para otimizar a determinação de imagens com fundo complexo
* O nome do modelo padrão do Deepseek foi alterado para deepseek-v4-flash
* A detecção de quadros e os fluxos de trabalho de tradução agora suportam a definição de parâmetros para cada item
* Otimizada a determinação das regiões de inversão de cores na geração de máscara
* O servidor agora suporta a definição de uma senha de servidor remoto (ws_secret)
* O servidor agora suporta o carregamento de configurações de projeto específicas de idioma (src.json)
* A limpeza automática de imagens do servidor agora também limpa as miniaturas
* Corrigido o conflito de versão do onnxruntime do oneocr

## v6.1.0 (2026/07/24)

* Adicionada função de leitura de código de barras baseada em ZXingCPP
* Adicionado modo de execução em segundo plano, que permite executar o servidor em segundo plano sem exibir janelas durante a tradução
* O tempo limite para executar fluxos de trabalho no modo em lote foi definido como 10 minutos
* O servidor agora suporta o carregamento de templates de fluxo de trabalho personalizado específicos de idioma (custom_workflow_src-tgt.json)
* Corrigido o problema de o fluxo de trabalho personalizado do servidor usar diretamente imagens de mesmo nome exportadas anteriormente
* Corrigido o problema de as imagens carregadas pelo servidor poderem ser inválidas

## v6.0.3 (2026/07/16)

* Adicionada função de reconhecimento de tabelas
* A operação de mesclar regiões dentro de um quadro não mescla regiões dentro de tabelas

## v6.0.2 (2026/07/11)

* Adicionado menu de contexto para editar a categoria na lista de quadros
* Mais opções de exportação em markdown
* Adicionada a exportação de markdown aos fluxos de trabalho personalizados
* Suporte à predefinição das configurações de exportação em markdown nas configurações do projeto
* Ao abrir um projeto pela linha de comando e executar fluxos de trabalho personalizados, ler o preferences.conf, o settings.json e o setOCRBasedOnLang do projeto, mantendo consistência com o modo de criação de projeto por template
* No mac, remover o sufixo .itp do nome de arquivo inicial para evitar duplicação
* Atualizada a pasta de resultados intermediários dos templates para `intermediateResults`
* Suporte ao uso do [ImageTrans-skills](https://github.com/xulihang/ImageTrans-skills), chamado por agentes como 小龙虾 e Claude
* Corrigido o problema de exibir a caixa de conclusão ao chamar a exportação de PDF pela linha de comando

## v6.0.1 (2026/07/07)

* Otimizado o tratamento de pontuação no início e no fim da linha no mecanismo de texto vertical
* A verificação do parâmetro server nas chamadas de servidor pela linha de comando mudou de "contém" para "igual a"
* Ao extrair imagens de PDF, converter TIFF em JPG
* Adicionada configuração de projeto de detecção de balões para mesclar regiões sobrepostas
* A mesclagem de regiões de balões sobrepostos agora verifica se pertencem à mesma categoria
* Adicionado suporte ao PPDocLayout v3
* Corrigido o problema de reinicializar uma instância do mesmo modelo após selecionar um modelo de detecção de balões
* Corrigido o vazamento de memória do PPDocLayout
* Corrigido o problema de o cálculo de largura do mecanismo vertical não considerar o contorno
* Corrigido o problema de o raio do contorno de regiões de texto vertical rotacionadas estar incorreto
* Corrigido o problema de o intervalo do progresso estar incorreto ao importar um intervalo especificado de PDF

## v6.0.0 (2026/07/03)

* O texto horizontal agora usa o cálculo preciso do tamanho da fonte
* As preferências de API agora podem ser personalizadas nas configurações do projeto
* Corrigido o bug do tamanho de fonte automático em regiões de texto vertical rotacionadas

## v5.24.0 (2026/06/30)

* Não armazenar ângulos de rotação menores que 0,01
* Adicionada configuração de projeto para manter a pontuação fora do início da linha no mecanismo vertical
* Adicionada a configuração de projeto de fluxo de trabalho personalizado para expandir e reduzir a região de tradução
* No modo de composição, as operações de expandir e reduzir regiões alteram a posição da tradução
* Otimizada a eficiência do cálculo automático do tamanho do texto no mecanismo vertical
* Corrigido o problema de oscilação no cálculo automático do tamanho do texto do mecanismo vertical
* Corrigido o tratamento de várias linhas de texto pelo tamanho automático do mecanismo vertical quando a quebra automática de linha não está habilitada

## v5.23.0 (2026/06/29)

* Novo plugin de OCR: oneocr (OCR de captura de tela do Windows 11)
* O OCR agora executa primeiro o fatiamento da imagem e depois o redimensionamento
* Corrigido o problema de o alinhamento vertical não ter efeito no mecanismo de texto vertical
* Corrigido o problema de coordenadas incorretas no reconhecimento de tiras cômicas de largura pequena

## v5.22.1 (2026/06/23)

* Suporte ao uso das informações de conta já preenchidas para autenticação ao chamar pela linha de comando
* Suporte ao uso de imagens para fornecer contexto à tradução (requer o uso de grandes modelos de visão)
* Suporte ao uso do texto das páginas anteriores para fornecer contexto à tradução

## v5.22.0 (2026/06/18)

* Adicionada configuração de projeto de largura mínima de OCR; se a imagem for menor que essa largura, ela é ampliada até essa largura
* Corrigido o problema de o servidor não excluir o arquivo de download com falha após uma falha no download
* Corrigido o problema de o servidor ainda indicar inicialização bem-sucedida quando a inicialização falha

## v5.21.3 (2026/06/16)

Atualizado o Rapid OCR para PPOCRv6

## v5.21.2 (2026/06/10)

* Otimizado o efeito de exibição do pinyin do chinês no HTML exportado
* O servidor agora suporta o uso de certificados autoassinados

## v5.21.1 (2026/06/04)

* Suporte à definição do tamanho da borda da caixa de texto ativa
* Suporte à importação de TIFF
* Os quadros agora suportam o salvamento de texto
* Adicionado fluxo de trabalho personalizado para criar regiões usando quadros
* Otimizada a uniformidade do efeito de correção automática de inclinação do mecanismo de texto vertical em diferentes tamanhos de fonte
* Corrigido um possível problema de codificação na leitura do dicionário pelo OCR mit48px

## v5.21.0 (2026/05/30)

* Adicionada preferência para lembrar a janela de edição de máscara
* Otimizada a uniformidade do efeito de correção automática de inclinação do mecanismo de texto vertical em diferentes tamanhos de fonte
* Os modelos de detecção de balões agora podem especificar uma classe específica para quadros
* Corrigido o problema de não ser possível iniciar um processo independente para processamento após iniciar o servidor pela linha de comando

## v5.20.0 (2026/05/23)

* Mecanismo de texto vertical:
   * Corrigido o alinhamento centralizado dos caracteres
   * Adicionado o sokuon do japonês aos caracteres com alinhamento à direita
* Servidor:
   * Não limpar imagens durante a tradução
   * Adicionadas preferências de reinício agendado e de uso de processo independente
   * Salvar as configurações do servidor
   * Suporte a abrir o ImageTrans diretamente pela linha de comando e conectar-se ao servidor
* Editor de máscara e removedor de texto:
   * Ao selecionar o método, verificar se o plugin está instalado ou em execução
   * Adicionada a seleção por região à lista de métodos de processamento, que por padrão não é escolhida automaticamente com base no fundo complexo
* Os fluxos de trabalho personalizados agora suportam execução simultânea com vários processos para otimizar a velocidade de processamento
* Corrigido o problema de o processamento de arquivos por template pela linha de comando não aceitar uma única imagem
* Corrigido o problema de falha na inicialização automática no macOS


## v5.19.1 (2026/05/16)

* Atualizados os plugins do DeepSeek e do ChatGPT para suportar a definição de campos extras
* O DeepSeek não habilita o raciocínio por padrão
* Adicionada preferência para exibir o número de sequência do estilo de fonte [#issue1066](https://github.com/xulihang/ImageTrans-docs/issues/1066)

## v5.19.0 (2026/05/09)

* Suporte à definição de deslocamentos horizontal e vertical para os caracteres do mecanismo de texto vertical [#issue1063](https://github.com/xulihang/ImageTrans-docs/issues/1063)
* O modo de template chamado pela linha de comando agora suporta a passagem de configurações de projeto e preferências extras
* Otimizada a chamada pela linha de comando
* Corrigido o problema de a criação de cópias não usar cópia profunda
* Corrigido o problema de falha na extração de imagens PNG de PDF no modo de extração de imagens
* Corrigido o problema de as coordenadas das regiões de texto poderem ser alteradas ao exportar o resultado da tradução com o modo de composição habilitado [#issue839](https://github.com/xulihang/ImageTrans-docs/issues/839)

## v5.18.0 (2026/04/19)

* Memória de tradução:
   * Adicionada configuração de projeto de memória de tradução
   * Suporte a definir se deve usar o texto do projeto
   * Suporte a importar e usar memória de tradução externa (baseada em SQLite)
* Leitor de tela:
   * Suporte ao uso de memória de tradução
   * Corrigido o problema de chamar a anotação fonética mesmo quando ela não está habilitada
* Adicionado suporte à chamada de plugins de OCR para executar reconhecimento simultâneo
* Extrator de legendas embutidas:
   * Suporte ao uso de detecção de balões
   * Otimizada a operação de reconhecimento simultâneo com plugins de OCR
   * Adicionado offset à esquerda nas condições de reconhecimento de quadros-chave
   * Adicionada a operação de unificar as regiões de texto de imagens com textos semelhantes reconhecidos em quadros-chave
* Nova configuração de projeto de detecção de balões: expandir a imagem
* Outras otimizações

## v5.17.0 (2026/04/11)

* Leitor de tela:
   * Ajuste do layout
   * Suporte à exibição de anotação fonética
   * Suporte à leitura em voz alta
   * Suporte ao uso de fluxos de trabalho personalizados
   * O reconhecimento automático espera a imagem estabilizar antes de capturar a tela
   * Se apenas uma tradução automática estiver habilitada, o nome do mecanismo não é exibido
   * Corrigidos vários problemas ao salvar resultados no projeto
* As configurações anteriores são carregadas ao abrir o leitor em voz alta
* A tradução automática agora suporta tradução entre páginas [#issue1055](https://github.com/xulihang/ImageTrans-docs/issues/1055)
* Ajuste das preferências de tradução automática

## v5.16.0 (2026/03/22)

* Adicionada a função de anotar o pinyin do chinês e o kana do japonês
* Novo formato de exportação: HTML único
* Adicionada a operação de gerar PDF sem texto
* Adicionada preferência para definir qual texto exibir na lista de caixas de texto [#1052](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* O gerenciador de imagens agora suporta adicionar as imagens recém-inseridas na pasta [#1053](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* Adicionado o OCR mit48px_ctc com versão com localização
* O mangaOCR processa imagens em escala de cinza por padrão, para melhorar a taxa de reconhecimento de texto colorido
* Corrigido o problema de falha ao regenerar quadros por agrupamento de texto quando existem quadros



## v5.15.1 (2026/03/17)

* Otimizado o suporte a espaçamento negativo entre caracteres no mecanismo de texto vertical
* Adicionado suporte à detecção da cor do contorno
* O controle de ajuste de tamanho de uso geral do editor de rich text agora aceita números negativos
* Corrigido o problema de deslocamento da caixa de texto de tradução ao aplicar zoom
* Corrigido o problema de o resultado na imagem não ser atualizado em tempo real ao preencher a tradução automática com tradução rápida e tradução assistida no modo de composição

## v5.15.0 (2026/03/14)

* Adicionado visualizador de miniaturas
* Adicionado navegador de imagens
* Adicionado gerenciador de imagens (chamado pelo menu de contexto na lista de imagens)
* Suporte ao ajuste da ordem das imagens
* Os nomes das imagens importadas de PDF não incluem mais a vírgula do número de sequência
* Otimizada a velocidade de troca de imagens
* Pular imagens sem texto na tradução de várias frases
* Corrigido o problema de falha no filtro de imagens já exportadas no gerenciador de imagens traduzidas [#issue1044](https://github.com/xulihang/ImageTrans-docs/issues/1044)

## v5.14.0 (2026/03/06)

* Importação de PDF:
   * Suporte à seleção do intervalo de páginas
   * Ao importar PDF no modo de extração de imagens, se houver páginas sem imagens, usar o modo de renderização
* Exportação de PDF:
   * Suporte a encontrar o arquivo de fonte correspondente pelo nome da fonte
   * Suporte à seleção de fontes TTC
   * No mac, usar Arial Unicode como fonte padrão
   * Se houver texto vertical, substituir caracteres de pontuação como parênteses pelos caracteres próprios para texto vertical e substituir caracteres de meia largura por caracteres de largura total
   * Otimizado o efeito de exibição do texto vertical
* Aumentado o tempo limite do plugin ChatGPTOCR
* Adicionado o plugin OllamaOCR
* Adicionado o sufixo eSCL ao nome dos scanners eSCL
* Corrigido o efeito ruim do ajuste automático de tamanho do texto vertical quando a quebra automática de linha não está habilitada

## v5.13.0 (2026/02/23)

* Digitalização de documentos:
   * Suporte à chamada do TWAIN no Windows
   * Suporte à digitalização de filmes, slides e outros documentos com scanner de transparência
   * Exibir erro ao usar o WIA quando o .NET 8 não está instalado localmente
* Liberar as imagens já abertas ao fechar o projeto
* A operação de recorte agora suporta salvar a imagem como uma nova imagem
* Novas operações de edição de imagem: inversão de cores e remoção da máscara de cor do filme

## v5.12.0 (2026/02/14)

* Digitalização de documentos:
   * WIA, ICA e SANE agora suportam alimentador de folhas, digitalização de várias páginas e digitalização frente e verso
   * WIA, ICA e SANE agora suportam o cancelamento de tarefas de digitalização
   * O SANE agora suporta a pré-visualização em tempo real do resultado da digitalização de uma única imagem
   * Suporte à chamada do SANE para digitalização no macOS
   * Suporte à definição da área de digitalização
   * Uso da API moderna Windows Runtime para chamar o WIA
   * Imagens em preto e branco são salvas em PNG de 1 bit para economizar espaço
   * Limpar automaticamente os arquivos temporários de digitalização ao fechar a janela de digitalização de documentos
   * Adicionado botão para excluir imagens
   * Corrigido o problema de salvamento incorreto de arquivos na digitalização contínua de várias páginas via eSCL
* Adicionada função de medição de distância
* Adicionado menu de contexto de edição de imagem
* Suporte à definição de tamanhos de fonte com casas decimais; o passo padrão de ajuste de fonte foi alterado para 0,5 [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* O tamanho da fonte na barra de ferramentas agora pode ser ajustado com a roda do mouse [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* Os nomes das imagens coladas não incluem mais a vírgula dos milhares
* Suporte a escolher PNG ou JPG com base no caminho da imagem colada
* Corrigido o problema de URL incorreta ao enviar mensagens de erro quando se usa um servidor remoto


## v5.11.1 (2026/02/07)

* A digitalização de documentos agora suporta a digitalização de várias páginas
* A digitalização de documentos agora suporta o uso de alimentador de folhas (apenas eSCL)
* Corrigido o problema de o modo de cor não ter efeito nas configurações de digitalização do eSCL
* O itálico simulado agora usa transformação afim em vez de transformação de perspectiva, resolvendo o problema de largura e altura incorretas ao usá-lo junto com o negrito simulado
* Suporte a evitar o erro em janela pop-up ao usar o servidor, colocando um arquivo server-mode no diretório raiz

## v5.11.0 (2026/01/31)

* A digitalização de documentos agora suporta a chamada das interfaces de digitalização do sistema (WIA, ICA, SANE)
* A digitalização de documentos salva a lista de scanners encontrados anteriormente
* O PDF agora suporta exibição em alta definição
* O template de documento desativa a remoção de texto por região e a detecção de cores na detecção de quadros
* O carregamento de imagens em blocos (tiles) ao aplicar zoom agora usa debounce
* A exportação para TXT agora permite escolher entre exportar apenas o texto original ou o texto original com a tradução
* A importação de TXT agora suporta importar apenas a tradução
* Corrigido o problema de a imagem não ser atualizada corretamente após rotacioná-la


## v5.10.1 (2026/01/25)

* Adicionada função de digitalização de documentos (baseada em eSCL)
* Adicionada função de visualização das informações da imagem
* Atualizado o plugin de tradução Papago
* Corrigido o problema de o modo de edição vertical não exibir a opção de configuração de tamanho de rich text [#issue1032](https://github.com/xulihang/ImageTrans-docs/issues/1032)

## v5.10.0 (2026/01/17)

* Adicionado suporte ao YOLO 26 [#issue1026](https://github.com/xulihang/ImageTrans-docs/issues/1026)
* Adicionado suporte ao ajuste de deslocamento horizontal e vertical para texto horizontal [#issue826](https://github.com/xulihang/ImageTrans-docs/issues/826)
* Adicionado suporte ao ajuste de espaçamento entre caracteres para texto horizontal
* Adicionado suporte ao ajuste de espaçamento entre caracteres para rich text
* O espaçamento entre caracteres padrão foi alterado para 0 e passou a ser armazenado com o nome tracking
* O editor de rich text agora suporta definir espaçamento entre caracteres, deslocamento horizontal e deslocamento vertical
* Corrigido o problema de o resultado renderizado não ser atualizado após definir a formatação no editor de rich text
* Corrigido o problema de travamento ao executar a mesclagem de regiões em fluxos de trabalho personalizados [#issue1029](https://github.com/xulihang/ImageTrans-docs/issues/1029)
* Corrigido o problema de o zoom não funcionar com atalhos de teclado

## v5.9.0 (2026/01/13)

* O mecanismo vertical agora suporta alinhamento centralizado e alinhamento inferior
* Adicionada detecção de cor em nível de caractere
* Suporte à definição de estilo de rich text para o texto original
* Adicionada configuração de estilo de centralização horizontal
* A diferença máxima de coordenada vertical padrão foi alterada para 2000

## v5.8.3 (2026/01/05)

* Otimizado o tratamento de ângulos detectados incorretamente na rotação de imagens com base nas informações de rotação das regiões de texto
* Otimizado o suporte ao canal alpha na rotação de imagens com base nas informações de rotação das regiões de texto
* Otimizado o tratamento de regiões sobrepostas e de regiões fora da imagem na detecção de balões
* Aumentada a tolerância na aplicação de máscaras de OCR
* Suporte à importação de favoritos do leitor Chaoxing
* Corrigido o erro ao limpar imagens

## v5.8.2 (2026/01/03)

* As informações de rotação das regiões de texto agora são salvas com precisão dupla
* Adicionadas operações relacionadas à rotação de imagens com base nas informações de rotação das regiões de texto
* Adicionadas operações relacionadas a super-resolução
* A precisão de ajuste da rotação de imagens em qualquer ângulo foi alterada para 0,1
* Suporte à chamada do leitor Chaoxing para importar arquivos no formato PDZ
* A exportação de PDF agora suporta mais configurações de parâmetros de processamento de imagem
* Adicionados ponto e vírgula e dois-pontos à lista de caracteres a converter em pontuação chinesa
* Corrigido o problema de continuar usando a imagem anterior para OCR e outras operações após editar a imagem


## v5.8.1 (2025/12/30)

* Liberar as imagens exibidas como blocos (tiles) quando elas não estiverem sendo exibidas
* Adicionado suporte a bmp no carregamento de imagens por blocos

## v5.8.0 (2025/12/28)

* Uso de blocos (tiles) para otimizar a navegação em imagens muito grandes [#issue739](https://github.com/xulihang/ImageTrans-docs/issues/739)
* Geração de miniaturas para imagens muito grandes a fim de acelerar o carregamento
* O editor de máscara agora suporta alternar o modo de edição com o botão do meio do mouse [#issue1022](https://github.com/xulihang/ImageTrans-docs/issues/1022)
* Corrigido o problema de as caixas de texto continuarem ocultas após usar o conta-gotas na imagem

## v5.7.0 (2025/12/21)

* Novo modelo de detecção de objetos: o modelo de análise de layout [DocLayout](https://github.com/xulihang/PP_DocLayout_ONNX) do Paddle
* Novo algoritmo de ordenação: XYCut
* Os quadros agora suportam o armazenamento de classificações
* Adicionadas configurações e fluxos de trabalho relacionados a quadros do tipo gráfico
* Novo formato de exportação: markdown
* Novo template: documento
* Atualizado o plugin do DeepSeek-OCR para suportar o salvamento de classificações
* Suporte à geração de imagens sem texto no modo impreciso
* A detecção de objetos agora suporta filtrar os resultados diretamente pelo nome da classe
* Otimizado o tratamento de quebra de linha da tradução horizontal na exportação de PDF

## v5.6.1 (2025/12/16)

* Uso do OCR para ajudar a distinguir se o idioma da imagem é chinês ou japonês
* Otimizado o efeito do zoom centralizado no mouse
* Otimizado o desempenho do zoom
* Corrigido o problema de o template padrão de configuração de OCR por idioma não tratar idiomas latinos


## v5.6.0 (2025/12/14)

* Suporte ao uso do ONNXRuntime como mecanismo de detecção de objetos
* Adicionada a função Hot Folder
* Adicionadas as funções de detectar o idioma em imagens e o idioma em textos
* O RapidOCR agora suporta a detecção automática do idioma na imagem
* Novos fluxos de trabalho: exportar PDF, detectar o idioma na imagem para configurar o OCR e detectar pelo texto para definir o idioma de origem do projeto
* Suporte à predefinição das configurações de importação e exportação de PDF e das configurações de exportação de PSD
* Suporte ao processamento de PDFs e outros arquivos pela linha de comando
* Adicionada configuração de projeto para mesclar com base nos quadros
* Adicionada configuração de projeto para incorporar informações do canal Alpha na restauração de imagem
* Adicionadas configurações de projeto para o método de geração de máscara e o método de restauração de imagem de imagens com fundo complexo
* Corrigido o problema de falha ao adicionar imagens de pastas de projeto por arrastar e soltar
* Corrigido o problema de falha ao copiar texto quando a remoção de quebras de linha não está marcada
* Corrigido o problema de o servidor excluir configurações de fluxos de trabalho personalizados



## v5.5.1 (2025/12/07)

* Ao importar PDF no modo de extração de imagens, salvar diretamente os dados originais do PDF
* Corrigido o problema de a operação não ser encerrada ao clicar em cancelar na importação de PDF


## v5.5.0 (2025/12/06)

* Novos plugins de restauração de imagem: OpenAI e Gemini, com suporte à chamada do Gemini 3 Pro Image (Nano Banana) para redesenhar imagens
* Novo plugin de OCR: DeepSeek-OCR
* Novo fluxo de trabalho: remover regiões fora dos quadros
* Não mesclar regiões que não estão no mesmo quadro
* Suporte à chamada de plugins de OCR para fazer análise de layout (por meio da detecção de quadros)
* A exportação de PDF agora suporta a compactação de imagens
* Suporte à adição de arquivos ao projeto por arrastar e soltar

## v5.4.0 (2025/11/29)

* Adicionada configuração de projeto para não detectar separação em regiões de fundo complexo
* Adicionadas operações relacionadas à verificação ortográfica com o plugin de grandes modelos ChatGPT
* Novo plugin de tradução automática: a tradução nativa do macOS
* O LamaInpaint no macOS agora suporta a chamada de modelos CoreML
* O mangaOCR usa a detecção de balões por padrão para fornecer informações de posicionamento
* O RapidOCR agora suporta reconhecimento em nível de palavra
* O recorte de imagem agora suporta transformação de perspectiva com base na máscara
* As configurações de API agora suportam limpar os ajustes pelo menu de contexto
* Corrigida a mesclagem de palavras não árabes consecutivas em texto árabe
* Corrigido o problema de palavras não árabes consecutivas não serem invertidas como um todo ao exportar PDF em árabe


## v5.3.0 (2025/11/20)

* A edição de imagem agora inclui recorte e rotação em qualquer ângulo
* Adicionados francês e vietnamita à lista de idiomas do RapidOCR
* Adicionado item de menu para inverter o texto
* O RapidOCR agora usa o modelo de árabe versão v5
* Adicionado item de menu para filtrar imagens em Buscar e substituir
* O gerenciador de imagens traduzidas agora suporta a inversão da seleção
* Remover caracteres de controle de direção do texto ao gerar PDF
* Adicionada a remoção de regiões com baixa confiança aos fluxos de trabalho personalizados
* Corrigido o problema de a imagem atual em Buscar e substituir não mudar após trocar de imagem
* Corrigido o problema de configuração incorreta do parâmetro do diretório de resultados intermediários ao gerar PSD
* Corrigido o problema de a camada de texto do PDF exportado poder ultrapassar os limites do documento
* Corrigido o problema de a operação de geração de PDF não reportar erros
* Corrigido o problema de caracteres não árabes serem invertidos ao gerar PDF em árabe

## v5.2.0 (2025/11/15)

* Removido o script de Photoshop na versão AutoitV3, passando a chamar diretamente arquivos JavaScript
* No macOS, usar Shell + AppleScript para habilitar o Photoshop
* O servidor agora suporta receber fluxos de trabalho, APIs, configurações de projeto e nomes de template
* O valor padrão de expansão de pixels da restauração de imagem foi alterado de 20 para 5
* Se a máscara cobrir a imagem inteira, remover alguns pixels de máscara nas bordas
* Quando o servidor seleciona o OCR pelo idioma, também escolhe pelo idioma se deve desativar a opção de ordem de leitura da direita para a esquerda
* Adicionadas as configurações de largura máxima da restauração de imagem e de proporção de sobreposição da janela deslizante da restauração de imagem
* Por padrão, não suavizar as bordas da máscara
* Selecionar métodos de restauração de imagem por aprendizado profundo como MIGAN e Lama nas configurações do projeto não desmarca mais a opção de operar por região de texto
* Usar o Krita para converter PSD em JPG
* Removidas operações obsoletas de PSD
* A geração de PSD editável agora suporta operar apenas na imagem atual
* Corrigido o problema de caminho ao adicionar imagens sem texto pelo script de PS

## v5.1.1 (2025/11/12)

* A imagem no removedor de texto agora pode ser arrastada
* Preenchimento de imagens sem texto com base na máscara
* Adicionada configuração de projeto para suavizar a máscara ao preencher a imagem sem texto
* A geração de máscara agora remove apenas os contornos sem contorno externo, em vez de manter apenas os contornos em maior número
* Outras correções de bugs

## v5.1.0 (2025/11/08)

* O editor de máscara agora tem opções para dilatar ou erodir a máscara na região selecionada, e a forma de seleção do modo de operação padrão foi alterada
* Novo formato de saída: PSD rasterizado (depende do Krita)
* Refatorada a exportação no formato ORA
* Em projetos novos, as máscaras e as imagens sem texto são salvas por padrão no diretório `intermediateResults`
* O caminho de saída foi alterado para ter o diretório de saída como raiz
* Adicionado o gerador de máscara SegmentAnything, mais adequado para texto sobre fundo complexo
* Adicionados fluxos de trabalho personalizados para restaurar o estado da interface, gerar imagens de máscara e gerar imagens sem texto
* Adicionado item de menu para gerar a máscara ou a imagem sem texto da imagem atual
* Suporte à saída de WebP sem perdas
* Otimizado o consumo de memória do OCR e da detecção de balões em imagens longas
* Fechar a caixa de progresso agora interrompe as operações de OCR e de detecção de balões de uma única imagem
* Escolher se o formato intermediário da restauração de imagem por método externo usa JPG ou PNG com base na extensão
* Selecionar métodos de restauração de imagem por aprendizado profundo como MIGAN e Lama nas configurações do projeto desmarca a opção de operar por região de texto
* Corrigido o problema de cancelamento na geração de máscara em partes sobrepostas de caixas de texto
* Corrigido o problema de o modo de tradução ser aberto antecipadamente durante a tradução no servidor
* Corrigido o problema de a detecção de quadros não suportar imagens grandes com mais de 65500 pixels
* Corrigido o problema de as coordenadas das regiões de texto não serem atualizadas após expandir a região ao modificar a máscara de uma única região

## v5.0.0 (2025/11/01)

* A detecção de balões foi adicionada aos modos de geração de máscara
* A geração de máscara com detecção de balões e OCR agora processa por padrão apenas a imagem inteira
* As configurações de máscara e de método de restauração de imagem agora são armazenadas por nome
* A restauração de imagem agora substitui apenas a imagem na posição da caixa de texto
* Adicionado o método de restauração de imagem MIGAN
* A restauração de imagem agora suporta janela deslizante para lidar com imagens grandes ou preservar detalhes
* Otimizado o efeito de remoção de texto do template de CG
* Ao editar a imagem sem texto de uma região, expandir os pixels conforme as configurações do projeto
* O removedor de texto agora suporta desfazer, operação por região e restauração com base na imagem atual
* Os controles de porcentagem do removedor de texto e do editor de máscara agora suportam controle pela roda do mouse
* A operação de dilatação da máscara agora é aplicada à imagem inteira, em vez de a uma única região de texto
* Otimizada a velocidade de remoção de texto e de geração de máscara
* Atualizado o plugin do Lama para suportar imagens de entrada com dimensões dinâmicas e adicionada a configuração de dimensão máxima
* Atualizados os prompts do Sakura para evitar execução em série
* O ChatGPT agora usa prompts simplificados de tradução em lote
* Adicionada preferência para definir se os resultados de tradução automática devem ser lembrados
* Adicionado item de menu para excluir a máscara e a imagem sem texto da imagem atual
* O valor padrão de expansão de pixels da restauração de imagem foi alterado de 5 para 20
* Corrigido o problema de coordenadas incorretas após expandir pixels na restauração de imagem
* Outras correções de bugs

## v4.7.0 (2025/10/26)

* A detecção de cores agora é executada em uma thread separada para evitar que o programa pare de responder
* A detecção da cor do texto agora suporta o uso de OCR
* Adicionado template para imagens de CG
* Adicionado o OCR 48px CTC do manga-image-translator na versão ONNX
* Adicionada configuração de projeto para remover o fundo nas extremidades do texto da imagem ao executar OCR de reconhecimento puro
* Ao ajustar as regiões selecionadas por deslocamento, se o número de sequência de destino ultrapassar os limites, somar ou subtrair o número total de regiões ao número de destino
* Corrigido o problema de a alteração de cor na barra de ferramentas não ter efeito quando a região de texto tem o atributo textColor


## v4.6.0 (2025/10/24)

* No modo de composição, ao selecionar uma caixa de texto, o tamanho da fonte é atualizado ao soltar o mouse
* Definir o nome da fonte pela barra de ferramentas não adiciona mais o tamanho da fonte ao estilo local
* Operações como o tamanho automático de texto agora verificam se o estilo local tem tamanho de fonte, em vez de verificar se existe um estilo local
* O OCR do macOS agora tem resultados em nível de palavra
* Atualizado o plugin do ChatGPT para suportar os modelos de raciocínio da SiliconFlow
* A exportação de PDF agora suporta usar imagens sem texto ou não adicionar imagem
* A exportação de PDF agora suporta texto vertical, texto com várias linhas e árabe
* A camada de texto da exportação de PDF agora pode ser definida como visível
* A importação de PDF agora suporta importar texto em nível de palavra
* A importação de PDF agora também suporta importar texto ao escolher a extração de imagens
* Adicionados lao, tailandês e khmer à lista de idiomas sem espaços

## v4.5.0 (2025/10/18)

* Novas formas de ordenação: anti-horária, horária e por colunas de texto
* Nova forma de detecção de quadros: agrupamento de texto
* Adicionada função para ajustar em lote a ordem das regiões ou dos quadros selecionados
* A detecção de quadros agora permite especificar a forma de ordenação e o modelo de detecção de objetos
* A operação de mesclagem de regiões em lote agora é executada em thread para evitar que o software pare de responder
* Otimizado o carregamento de plugins
* A exportação de PSD agora tem a opção de calcular as margens do texto
* Adicionado o plugin de tradução Sakura
* Corrigido o erro de renderização do mecanismo de texto vertical quando o texto contém apenas quebras de linha
* Corrigido o problema de a ordem dos resultados ficar incorreta ao definir o número de sequência com duplo clique
* Corrigido o problema de o removedor de texto não tratar corretamente o valor alpha ao processar imagens com informações de transparência
* Corrigido o problema de falha em operações como o OCR de imagens WebP
* Corrigido o problema de o título do software não ser atualizado e o registro recente não ser adicionado após Salvar como
* Corrigido o erro quando um determinado estilo não existe ao determinar o estilo com base na direção do texto
* Outras correções de bugs

## v4.4.0 (2025/09/27)

* Adicionada barra de ferramentas de fluxos de trabalho
* Após criar um novo projeto, selecionar o idioma do OCR com base no idioma do projeto
* Após criar um novo projeto, salvar automaticamente o arquivo do projeto
* Carregar os fluxos de trabalho predefinidos ao abrir as configurações de fluxo de trabalho personalizado pela primeira vez
* Ao modificar estilos pela barra de ferramentas, manter apenas o estilo modificado no estilo local
* Corrigido o problema de passagem de parâmetros pela linha de comando dos arquivos bat e exe do Windows

## v4.3.0 (2025/09/24)

* Ao usar detecção de balões em imagens pequenas, ampliar a largura e a altura da imagem para 1024
* Determinar se devem ser adicionados espaços e quebras de linha com base na direção da mesclagem e em se é um caractere
* Os resultados de reconhecimento do RapidOCR por caractere agora incluem o atributo `isChar` ao serem salvos
* Adicionado modelo de árabe ao RapidOCR
* Após a detecção de balões, as regiões não são expandidas por padrão
* Adicionado item de operação de fluxo de trabalho personalizado para reconhecer regiões longas e, para OCR de reconhecimento puro, adicionada configuração de projeto para poder usá-lo apenas em textos em faixas
* Adicionado item de operação de fluxo de trabalho personalizado para reconhecer regiões sem texto que podem ser mescladas com regiões com texto
* Adicionada configuração de projeto de proporção de região longa
* Atualizado o template de mangá japonês
* Corrigido o problema de as coordenadas da detecção de balões poderem conter casas decimais
* Corrigido o problema de o caractere com apenas um espaço ser removido quando a remoção de quebras de linha está habilitada
* Corrigido o problema de poder aparecer um espaço extra ao localizar o texto de itens de operação com parâmetros em fluxos de trabalho personalizados


## v4.2.0 (2025/09/21)

* O ajuste automático do tamanho da fonte do mecanismo de texto vertical agora é mais preciso
* A detecção da direção do texto agora se baseia por padrão na proporção da imagem
* Adicionado item de menu para abrir o diretório do software
* Na tradução em lote, a operação de mesclagem de regiões também é executada após a detecção de balões
* O OCR de reconhecimento puro agora pode ser usado apenas para textos em faixas no reconhecimento
* O RapidOCR agora suporta retornar resultados em nível de caractere
* O mangaOCR na versão ONNX agora é incluído por padrão
* Otimização dos templates com base no novo OCR integrado
* Liberar as Mat do OpenCV a tempo para otimizar o consumo de memória
* A mesclagem de regiões em lote passou a ser uma operação independente da interface
* Carregar por padrão a biblioteca dinâmica do ONNXRuntime
* Adicionada a remoção de regiões sem texto (OCR) aos fluxos de trabalho personalizados
* Ao fazer OCR de uma única região, recortar pela posição armazenada em vez da posição do controle
* O RapidOCR agora corrige a ordem por padrão ao reconhecer uma única região
* A opção de ajustar a ordem ao reconhecer uma única região não tem efeito em mecanismos de reconhecimento puro, como o mangaOCR
* Corrigido o problema de ordem do texto na versão precisa do OCR do Baidu
* Corrigido o problema de localização de itens com parâmetros em fluxos de trabalho personalizados
* Corrigido o problema de seleção incorreta de texto quando o modo de composição está habilitado, mas a tradução não está sendo visualizada
* Corrigido o problema de não ser possível adicionar itens gerais ao habilitar a adição de parâmetros em fluxos de trabalho personalizados



## v4.1.0 (2025/09/13)

* Novo OCR integrado: rapid
* Incluído por padrão o [modelo](https://github.com/xulihang/ImageTrans-docs/issues/860) para reconhecer linhas de texto em japonês
* Adicionado o plugin DocTROCR

## v4.0.2 (2025/09/10)

* A mesclagem de regiões dentro de um quadro e a operação de adicionar texto a regiões existentes com OCR agora fazem mesclagem de regiões para corrigir a ordem
* Ao adicionar texto a regiões existentes com OCR, agora é possível optar por não remover o conteúdo da imagem fora da região
* Restaurado o comportamento de expandir os limites ao mesclar horizontalmente regiões que contêm texto
* Otimizada a velocidade da detecção de quadros
* Otimizada a exibição do número de sequência
* Corrigido o problema de a definição do método de detecção de quadros não ter efeito nos fluxos de trabalho personalizados
* Corrigido um possível problema de índice fora dos limites ao selecionar uma caixa de texto para ir até a posição correspondente na imagem e ao ajustar a ordem

## v4.0.1 (2025/08/29)

Melhorada a nitidez do texto rotacionado [#950](https://github.com/xulihang/ImageTrans-docs/issues/950)

## v4.0.0 (2025/08/23)

* Novo método de geração de máscara: OCR
* Preservar o canal de transparência ao carregar WebP
* Quando há texto, dividir as regiões de detecção a partir do centro
* Usar o caminho do projeto como título do software [#946](https://github.com/xulihang/ImageTrans-docs/issues/946)
* Corrigido o problema de não ser possível aplicar o estilo padrão quando o estilo de fonte definido não existe
* Corrigido o problema de o nome da categoria ser adicionado por padrão como estilo de fonte ao usar a detecção de balões da versão de servidor
* Corrigido o problema de não ser possível fazer operações como seleção múltipla com a tecla Command no macOS
* Corrigido o problema de o PatchMatch não funcionar (a versão para macOS foi recompilada e agora usa o formato PNG por padrão)

## v3.19.1 (2025/08/17)

* As unidades de pixel das dimensões de renderização dos mecanismos de texto em diferentes proporções agora usam uniformemente números inteiros
* Suporte à importação direta de imagens no formato WebP


## v3.19.0 (2025/08/16)

* Agora é possível usar o OCR para detecção de rotação, com novas configurações de projeto relacionadas [#934](https://github.com/xulihang/ImageTrans-docs/issues/934)
* Atualizados os plugins de OCR para suportar a detecção de rotação
* Adicionada configuração de proporção de sobreposição de regiões
* Outras correções de bugs


## v3.18.2 (2025/08/10)

* O editor de máscara agora tem um atalho para alternar o modo de eliminação [#issue924](https://github.com/xulihang/ImageTrans-docs/issues/924)
* Adicionada operação para definir um deslocamento fixo para as regiões de texto
* Corrigido o problema de as regiões de texto recalcularem o tamanho do texto porque o clique na região dispara o evento de alteração de texto
* Corrigido o problema de o texto poder ficar desfocado por usar precisão dupla ao definir o tamanho da região de texto [issue928](https://github.com/xulihang/ImageTrans-docs/issues/928)

## v3.18.1 (2025/07/26)

* Novo item de menu de operação de região de texto: colar tradução
* Adicionado o plugin Ollama
* A interface principal só é exibida após o carregamento completo dos plugins
* A limpeza automática agora é desativada por padrão no servidor
* Corrigido o problema de a caixa de texto das regiões de texto selecionadas desaparecer ao unificar a fonte
* Corrigido o problema de o evento correspondente não ser disparado ao desmarcar regiões de texto em uma seleção múltipla

## v3.18.0 (2025/07/19)

* Os fluxos de trabalho personalizados agora suportam o salvamento de parâmetros extras para operações de detecção e reconhecimento de texto [#issue914](https://github.com/xulihang/ImageTrans-docs/issues/914)
* Adicionado visualizador de logs
* Adicionado gerenciador de favoritos
* Corrigido o problema de o modelo de balões selecionado uma segunda vez não ter efeito
* Corrigido o problema de abrir um projeto por arrastar e soltar sem fechar o projeto já aberto


## v3.17.5 (2025/07/05)

* O texto da área de edição de texto de textos bidirecionais como o árabe agora é alinhado à direita por padrão
* Duplo clique em uma região de texto agora ativa a edição do texto
* As regras de correção automática agora podem ser exportadas para CSV ou importadas de CSV
* Suporte à filtragem de regiões com regras personalizadas
* Adicionado item de menu para abrir a imagem sem texto com um programa externo
* Adicionado divisor de texto

## v3.17.4 (2025/06/20)

* Adicionados itens de menu para atualizar a imagem e abri-la com um programa externo
* Adicionados itens de menu para expandir e reduzir as regiões selecionadas
* Suporte à definição da cor da borda para regiões de baixa confiança
* A ordenação de nomes de arquivo agora usa ordenação natural
* O removedor de texto e o editor de máscara agora usam a proporção de zoom da imagem da interface principal ao serem abertos

## v3.17.3 (2025/06/10)

* Adicionado item de menu de configuração de estilo [#888](https://github.com/xulihang/ImageTrans-docs/issues/888)
* Adicionado item de menu de filtragem de regiões [#887](https://github.com/xulihang/ImageTrans-docs/issues/887)
* Otimizada a lógica de configuração do estilo local
* Corrigido o problema de falha ao abrir as configurações do estilo local [#889](https://github.com/xulihang/ImageTrans-docs/issues/889)
* Ao usar o STTN para processar todas as imagens, o removedor de legendas de vídeo agora processa em unidades de 30 imagens


## v3.17.2 (2025/06/04)

* Otimizada a lógica de troca de imagens
* As imagens sem texto geradas pelo removedor de legendas de vídeo agora recebem o atributo de texto já removido
* O removedor de legendas de vídeo agora suporta gerar caixas de texto para todas as imagens
* Corrigido o problema de o removedor de legendas de vídeo só poder ser aberto após carregar as legendas previamente

## v3.17.1 (2025/06/02)

* Suporte ao uso de CSS para ajustar o estilo do texto [#883](https://github.com/xulihang/ImageTrans-docs/issues/883)
* Adicionado o método de remoção de texto STTN
* O removedor de legendas de vídeo agora suporta a chamada do STTN, um método de remoção de texto específico para vídeo

## v3.17.0 (2025/05/18)

* Adicionado o removedor de legendas de vídeo
* Novo método de remoção de texto: desfoque gaussiano
* Adicionados itens de menu para inverter a seleção, selecionar regiões com o mesmo estilo e enviar para o fundo
* Adicionada opção de filtragem de regiões de texto com fundo não transparente
* Suporte à definição de máscara para operações de OCR a fim de remover regiões que não precisam ser reconhecidas [#881](https://github.com/xulihang/ImageTrans-docs/issues/881)
* Preservar os atributos das regiões de texto divididas
* O visualizador da imagem original agora pode alternar a sincronização do zoom [#879](https://github.com/xulihang/ImageTrans-docs/issues/879)
* Corrigido o problema de largura e altura incorretas ao definir a expansão de pixels na remoção de texto

## v3.16.2 (2025/05/10)

* Desabilitar os botões correspondentes enquanto as operações de processamento de uma única imagem de um fluxo de trabalho personalizado não forem concluídas
* Adicionar texto a regiões existentes com OCR agora suporta adicionar informações como cor do texto e rotação
* Adicionada opção para definir se a transparência do texto também deve ser alterada ao modificar a transparência da camada de sobreposição
* Adicionadas ao fluxo de trabalho personalizado as operações de excluir a imagem de máscara e excluir a imagem sem texto

## v3.16.1 (2025/05/02)

* A detecção de balões agora suporta filtrar resultados pelo ID da categoria
* Suporte à mesclagem de textos com base na cor do texto
* A mesclagem com base nas informações de posição do parágrafo agora suporta texto vertical
* Adicionadas ao fluxo de trabalho personalizado as operações de limpar o texto original, limpar a tradução, limpar a posição da tradução e limpar o estilo
* Adicionado botão de limpar ao fluxo de trabalho personalizado


## v3.16.0 (2025/04/26)

* Ao fazer OCR de uma única região, agora é possível adicionar bordas à imagem [#issue866](https://github.com/xulihang/ImageTrans-docs/issues/866)
* As configurações de projeto de localização e mesclagem de texto agora incluem as opções de diferença máxima de coordenada vertical e diferença máxima de coordenada horizontal
* Ao adicionar texto a regiões existentes com OCR, a imagem fora da região é removida
* Corrigido o problema de mover a imagem sobre o texto não ter efeito ao visualizar a tradução

## v3.15.4 (2025/04/18)

* Buscar e substituir agora suporta selecionar fragmentos vazios com expressões regulares
* Suporte ao zoom centralizado no mouse
* Adicionado atalho para "Ir para"

## v3.15.3 (2025/03/29)

* Adicionados itens de menu para preencher a tradução com o texto original e o texto original com a tradução
* Adicionado o botão mágico para permitir a execução de operações personalizadas de edição de texto [#858](https://github.com/xulihang/ImageTrans-docs/issues/858)
* Adicionado um plugin de tradução dedicado ao DeepSeek

## v3.15.2 (2025/03/13)

* Adicionado link de ajuda
* Adicionada ao mecanismo vertical a configuração de caracteres de altura livre [#841](https://github.com/xulihang/ImageTrans-docs/issues/841)

## v3.15.1 (2025/03/08)

* Extração de legendas embutidas aprimorada
* Adicionado item de menu "Ir para"

## v3.15.0 (2025/03/02)

* Adicionado extrator de legendas embutidas
* Adicionado suporte inicial a OCR com várias threads
* Adicionada opção de modo de substituição em Buscar e substituir
* Otimizada a lógica de ordenação com base nos números no nome do arquivo
* Corrigido o problema de as quebras de linha da tradução em TXT separado por Tab não serem escapadas

## v3.14.4 (2025/02/19)

* Suporte à abertura do projeto pelo programa padrão do sistema
* Suporte a abrir a imagem atual com um programa externo pelo menu de contexto
* Corrigido o problema de coordenadas incorretas na captura de tela de uma região fixa com alta DPI no macOS
* Corrigido um possível erro ao traduzir várias frases com o Google Tradutor [#issue835](https://github.com/xulihang/ImageTrans-docs/issues/835)

## v3.14.3 (2025/01/08)

* Corrigido o problema de deslocamento ao trocar a proporção em textos que não estão alinhados à esquerda
* Adicionado plugin de OCR que usa o ChatGPT

## v3.14.2 (2025/01/07)

* Corrigido o problema de falha na transformação de perspectiva em regiões rotacionadas de imagens grandes [#issue813](https://github.com/xulihang/ImageTrans-docs/issues/813)
* Ao salvar o projeto, verificar se ele foi modificado por outro processo
* Adicionada aos fluxos de trabalho personalizados a operação de mesclar regiões dentro de um quadro

## v3.14.1 (2024/12/28)

* O raio dos cantos arredondados das caixas de texto de sobreposição no modo impreciso agora é definido como 10 por padrão
* Aumentada a área de resposta ao redimensionar caixas de texto no modo de composição
* Corrigido o problema de desfoque nos cantos arredondados das caixas de texto de sobreposição no modo impreciso
* Corrigido o problema de falha ao alternar para uma imagem já baixada no servidor

## v3.14.0 (2024/12/14)

* Adicionada função de grade
* Adicionado item de menu de verificação ortográfica
* As configurações de API agora usam TextArea para permitir a inserção de várias linhas de texto
* No modo de seleção múltipla por arrasto, clicar em uma caixa de texto com a tecla Control pressionada não desmarca a caixa de texto
* No modo de seleção múltipla por arrasto, agora é possível limpar a seleção arrastando com a tecla Control pressionada
* O servidor agora envia uma verificação de heartbeat a cada 30 segundos
* O servidor agora suporta escolher o mecanismo de OCR com base no idioma de origem
* Corrigido o problema de o modo de servidor não alternar para a proporção de 100% ao gerar a imagem final

## v3.13.2 (2024/12/10)

* Corrigido o problema de os textos dos atalhos de redefinição não estarem traduzidos
* Corrigido o problema de o atalho de redefinição não usar o atalho específico do mac
* Corrigido o problema de não ir para o arquivo correspondente após colar um arquivo
* Adicionado WebP aos formatos de exportação
* O intervalo de detecção da conexão do servidor foi reduzido de 30 para 5 segundos
* O servidor agora suporta converter arquivos WebP enviados por caminho local

## v3.13.1 (2024/12/08)

* Corrigido o problema de coordenada Y incorreta após definir a margem superior no mecanismo vertical
* Corrigido o problema de os resultados de OCR no formato JSON não serem analisados
* No macOS, usar o java nativo para iniciar jars externos
* O servidor agora suporta enviar apenas dados de texto, sem enviar imagens
* O servidor agora envia imagens no formato WebP por padrão para economizar largura de banda

## v3.13.0 (2024/12/07)

* Otimizado o efeito de caracteres sem espaçamento no mecanismo vertical
* Otimizado o efeito do mangaTranslator no reconhecimento de uma única região
* O servidor agora suporta a conexão com servidores remotos

## v3.12.0 (2024/11/24)

* Ao usar a barra de ferramentas de seleção, clicar e mover caixas de texto exibe as coordenadas na parte inferior da interface
* Adicionadas as operações de unificar largura e unificar altura
* Adicionado conta-gotas à barra de ferramentas de fontes
* Buscar e substituir agora suporta conversão para maiúscula na primeira letra e para maiúsculas em títulos
* Adicionado item de menu para calcular automaticamente o tamanho de fonte adequado
* No modo impreciso, a máscara agora é gerada apenas com base nas regiões do texto original
* Corrigido o problema de cálculo incorreto da posição na remoção de texto por região no removedor de texto
* Corrigido o problema de falha do servidor ao analisar fluxos de trabalho
* Corrigidos problemas de exibição e salvamento das configurações de fluxo de trabalho
* Corrigido o problema de a ordenação de quadros não suportar páginas duplas
* Corrigido o problema de a máscara no modo impreciso não responder em tempo real à rotação

## v3.11.2 (2024/11/16)

* Adicionada a tradução automática da Alibaba
* O modo da barra de ferramentas do visualizador da imagem original agora suporta exibir as caixas de texto do texto original
* Adicionado item de menu para ajustar a ordem das caixas de texto

## v3.11.1 (2024/11/03)

* Suporte à importação de imagens de PDF no formato JBIG
* Suporte à chamada de fluxos de trabalho personalizados pela linha de comando para processar arquivos [#issue785](https://github.com/xulihang/ImageTrans-docs/issues/785)
* Os fluxos de trabalho personalizados agora suportam a modificação das configurações atuais
* Suporte ao uso da cor de fundo do estilo de texto como cor da caixa de texto [#issue775](https://github.com/xulihang/ImageTrans-docs/issues/775)
* Adicionadas aos fluxos de trabalho personalizados as operações de ordenação de quadros e de redução de regiões [#issue774](https://github.com/xulihang/ImageTrans-docs/issues/774) [#issue776](https://github.com/xulihang/ImageTrans-docs/issues/776)


## v3.11.0 (2024/10/25)

* Após importar imagens, permanecer na imagem atual
* Suporte à chamada do serviço local de detecção de balões [#issue771](https://github.com/xulihang/ImageTrans-docs/issues/771)
* A detecção de quadros agora suporta o uso de detecção de objetos [#issue772](https://github.com/xulihang/ImageTrans-docs/issues/772)
* Agora é possível salvar várias configurações de fluxo de trabalho personalizado


## v3.10.3 (2024/10/07)

* Suporte à abertura de projetos pela linha de comando e por arrastar e soltar arquivos
* Adicionado visualizador da imagem original [#issue763](https://github.com/xulihang/ImageTrans-docs/issues/763)
* Corrigido o problema de armazenar traduções automáticas vazias

## v3.10.2 (2024/09/22)

* Agora é possível definir se o texto deve ser extraído ao importar PDF
* Restaurar automaticamente a janela do leitor de tela após chamar a captura de tela pelo atalho
* Atualizado o plugin do ChatGPT para suportar a definição de um host com número de versão
* Corrigido o problema de regiões de texto com largura ou altura 0 causarem falha na geração de máscara
* Corrigido o problema de baixa resolução na captura de tela do leitor de tela com alta DPI
* O ajuste do tamanho da região com base na máscara de texto agora verifica se é a máscara correta pela posição do ponto central

## v3.10.1 (2024/09/15)

* Ao abrir um projeto, ir por padrão para a última imagem aberta
* Corrigido o erro ao exportar imagens sem quadros e quadros com dimensões incorretas

## v3.10.0 (2024/09/07)

* Adicionado suporte a texto horizontal dentro de texto vertical [#issue507](https://github.com/xulihang/ImageTrans-docs/issues/507)
* O rich text do mecanismo de texto horizontal agora suporta definir tachado e sublinhado
* Limpar as linhas de alinhamento ao soltar o mouse e ao atualizar
* Agora é possível ajustar o deslocamento do texto vertical
* A operação de limitar as regiões de texto dentro da imagem agora salva as informações de posição da região de tradução

## v3.9.0 (2024/09/01)

* A detecção de balões agora abre uma caixa de diálogo para selecionar o modelo
* Novo alinhamento: justificado
* Adicionadas linhas-guia de alinhamento e função de encaixe automático [#issue733](https://github.com/xulihang/ImageTrans-docs/issues/733)
* Agora é possível chamar o mecanismo 2 do OCRSpace
* Suporte à conversão de maiúsculas e minúsculas do texto original antes da tradução automática

## v3.8.0 (2024/08/25)

* A detecção de quadros agora suporta o tratamento automático de imagens com fundo escuro [#issue741](https://github.com/xulihang/ImageTrans-docs/issues/741)
* Suporte à definição da cor de fundo das tiras cômicas exportadas
* Adicionada função de remover regiões excedentes e complementar regiões ausentes com a detecção de balões
* Corrigido o problema de a mesclagem de regiões de texto não usar a imagem com cores invertidas quando a inversão de cores está habilitada
* Agora é possível definir se a detecção heurística de texto deve executar operações relacionadas à confiança das regiões de texto nas operações em lote
* Os modelos de detecção de balões agora podem ser colocados no diretório `models` do software, e o modelo a usar é escolhido nas configurações do projeto
* A detecção de balões offline agora é habilitada por padrão
* Adicionado menu de contexto de tradução em um clique com base em fluxos de trabalho personalizados
* Adicionados templates de mangá chinês, mangá coreano, quadrinhos ocidentais e outros
* Os templates agora permitem configurar se o usuário precisa definir o idioma manualmente e baixar o modelo de detecção de balões

## v3.7.0 (2024/08/18)

* A detecção de texto em cenas naturais agora suporta o tratamento de texto inclinado
* O gerador de máscara de retângulo inscrito agora suporta o tratamento de regiões inclinadas
* As operações relacionadas à detecção de regiões de texto agora verificam a sobreposição apenas com as regiões existentes
* Ao remover texto por região, as regiões rotacionadas usam o retângulo delimitador
* Corrigido o problema de cálculo incorreto de largura e altura ao importar de volta dados de anotação no formato OBB
* Corrigido o problema de mesclagem de texto rotacionado em 90 graus na detecção de objetos
* Corrigido o problema de chamada de modelos que não são ONNX
* Corrigido o problema de deslocamento da imagem ao arrastar a seleção para fora no editor de máscara e no removedor de texto

## v3.6.1 (2024/08/17)

* Adicionado suporte ao YOLO OBB para detectar texto inclinado
* O servidor agora suporta o uso de fluxos de trabalho personalizados
* Corrigido o problema de a caixa de texto não recuperar o ângulo de rotação após cancelar a rotação
* Corrigido o problema de a caixa de texto não ter a rotação definida ao detectar o ângulo do texto com OCR

## v3.6.0 (2024/08/10)

* Adicionada configuração de expansão de pixels na remoção de texto por região de texto
* Adicionado item de menu para reduzir regiões
* Adicionada operação para ajustar o tamanho das regiões de texto com base na máscara
* Adicionado corretor de orientação de imagem, usado para corrigir a orientação de imagens tiradas com celulares Apple e Samsung com base nas informações Exif
* Adicionada função de mesclar com a próxima imagem
* Corrigir automaticamente a orientação das imagens baixadas com base no Exif
* Otimizada a troca de páginas em operações em lote
* Adicionada aos fluxos de trabalho personalizados a operação de adicionar resultados de OCR a regiões existentes
* O modo de arrastar e a remoção de texto por região de texto agora são habilitados por padrão
* Corrigido o problema de o Baidu Tradutor não suportar texto com várias linhas

## v3.5.0 (2024/07/28)

* Agora é possível ajustar o tamanho e a posição das caixas de texto pelos quatro cantos
* As informações de posição da tradução agora são salvas com precisão dupla
* A exportação de quadros agora suporta salvar como uma única imagem longa


## v3.4.0 (2024/07/21)

* Suporte à importação de arquivos nos formatos Epub, Mobi, ZIP e CBZ
* Adicionado assistente de plugins para gerenciar plugins
* Adicionada barra de ferramentas de edição, com suporte a rotacionar e espelhar imagens
* Adicionado gerenciador de páginas duplas. Definindo imagens de páginas duplas, a imagem é dividida em duas, esquerda e direita, durante a ordenação e a detecção de quadros
* As preferências agora permitem definir os parâmetros dos plugins de remoção de texto e de geração de máscara
* Corrigido o problema de o removedor de texto não carregar corretamente a imagem sem texto
* Memorizar os resultados de tradução automática de várias frases

## v3.3.1 (2024/07/06)

* Corrigido o problema de as caixas de texto não serem redesenhadas ao alternar a proporção de exibição
* Corrigido o problema de perda da classificação de balões mesclados na detecção de balões

## v3.3.0 (2024/06/30)

* Adicionada configuração de margem superior ao estilo de fonte
* Adicionados itens de menu de contexto de operações relacionadas a regiões de texto em Buscar e substituir
* Adicionadas aos fluxos de trabalho personalizados operações como remover regiões externas e detecção da direção do texto
* Ao criar um novo projeto, se houver imagens na pasta do arquivo do projeto, perguntar se devem ser importadas
* Otimizado o desempenho ao alternar a proporção de exibição
* Atualizado o PDFBox para corrigir o problema de importação de PDF em japonês

## v3.2.1 (2024/06/24)

* A tradução em um clique agora executa a detecção e a ordenação de quadros por padrão
* Otimizado o efeito de exibição do mecanismo de texto horizontal ao evitar a divisão de palavras

## v3.2.0 (2024/06/23)

* Adicionada função de criar um novo projeto a partir de um template [#issue688](https://github.com/xulihang/ImageTrans-docs/issues/688)
* Suporte à exibição do nome do estilo nas caixas de texto
* Reforçado o suporte a classificações na detecção de objetos
* Corrigido o problema de o atalho padrão poder não ter efeito quando está atribuído a outra função [#issue630](https://github.com/xulihang/ImageTrans-docs/issues/630)
* Corrigido o problema de falha do OpenCV ao carregar modelos de caminhos com caracteres Unicode


## v3.1.1 (2024/06/12)

* Adicionada a operação "Obter confiança da região de texto" aos fluxos de trabalho personalizados
* Adicionada configuração de projeto de limite de confiança das regiões de texto
* Adicionada configuração de projeto para corrigir a ordem do texto do resultado de OCR de uma única região
* Corrigido o problema de os plugins de OCR em modo combinado não serem listados nas preferências
* Corrigido o problema de o texto do mecanismo horizontal ficar branco no tema escuro
* Corrigido o problema de falha na mesclagem vertical de regiões com texto na ordem de leitura da direita para a esquerda

## v3.1.0 (2024/06/10)

* Adicionado botão de cor personalizada ao conta-gotas
* A forma de definir cores na janela de configurações de composição foi alterada para usar o conta-gotas na imagem
* Os fluxos de trabalho personalizados agora suportam processar apenas a imagem atual
* Novos tipos de processamento em fluxos de trabalho personalizados: usar a cor do texto reconhecida como cor do contorno, definir a cor do contorno conforme o brilho da cor do texto, definir a cor do texto conforme o brilho da cor do contorno e usar a cor do contorno para corresponder ao estilo de texto
* Corrigido o problema de caracteres ilegíveis na lista de idiomas do OCR do WinRT


## v3.0.0 (2024/06/08)

* Atualizado o JRE para Java 23 para corrigir o problema de espaços nas extremidades afetarem a quebra automática de linha [#issue482](https://github.com/xulihang/ImageTrans-docs/issues/482)
* Suporte à definição de estilos de caixa de texto
* O editor de máscara agora suporta selecionar regiões em qualquer direção

## v2.12.4 (2024/06/02)

* A centralização vertical agora é habilitada por padrão
* Arrastar uma região de texto com a tecla SHIFT pressionada mantém a posição horizontal inalterada. Manter SHIFT e Z pressionados mantém a posição vertical inalterada
* Corrigido o problema de a quebra de linha desativar o rich text no mecanismo de texto vertical
* Corrigido o problema de o estado de seleção das regiões de texto ser redefinido ao alternar o modo de tradução


## v2.12.3 (2024/05/23)

Corrigido o problema de a centralização vertical e a centralização horizontal no modo de rich text não funcionarem nos scripts de PS

## v2.12.2 (2024/05/19)

* Agora é possível definir o idioma intermediário da tradução automática [#issue647](https://github.com/xulihang/ImageTrans-docs/issues/647)
* Corrigido o problema de falha na geração de máscara durante operações de OCR interromper as operações em lote [#issue650](https://github.com/xulihang/ImageTrans-docs/issues/650)
* Corrigido o problema de resolução inconsistente das imagens geradas pelo servidor em proporções diferentes de 100%

## v2.12.1 (2024/05/12)

Agora pode ser chamado pelo servidor para executar OCR e tradução automática

## v2.12.0 (2024/05/11)

* Adicionada configuração de projeto para evitar a divisão de palavras
* Adicionada preferência para selecionar automaticamente a primeira região de texto ao trocar de imagem [#issue642](https://github.com/xulihang/ImageTrans-docs/issues/642)
* Adicionadas pseudo-classes para aprimorar a personalização do estilo das caixas de texto com CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Suporte à exportação de imagens ou PDF por quadro
* Os resultados retornados pelo servidor agora incluem dados como coordenadas e texto

## v2.11.2 (2024/05/02)

* Corrigido o problema de a largura da coluna de tradução ser 0 no arquivo docx exportado quando a tradução está vazia [#issue639](https://github.com/xulihang/ImageTrans-docs/issues/639)
* Suporte à personalização do estilo das caixas de texto com CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Corrigido o problema de o texto centralizado horizontal ou verticalmente poder ficar desfocado por usar precisão dupla


## v2.11.1 (2024/04/26)

* Corrigido o problema de os resultados exibidos na tradução assistida poderem conter o resultado da região anterior ao mudar para outra região de texto [#633](https://github.com/xulihang/ImageTrans-docs/issues/633)
* Corrigido o erro ao buscar caracteres repetidos consecutivos em Buscar e substituir [#631](https://github.com/xulihang/ImageTrans-docs/issues/631)
* O arrasto para criar caixas agora suporta várias direções [#629](https://github.com/xulihang/ImageTrans-docs/issues/629)
* Busca simultânea de resultados de tradução automática usados na tradução assistida [#628](https://github.com/xulihang/ImageTrans-docs/issues/628)
* Corrigido o problema de a lista de fontes não ser atualizada a tempo após instalar uma fonte


## v2.11.0 (2024/04/21)

* Suporte à geração de regiões de texto com base em templates [#issue626](https://github.com/xulihang/ImageTrans-docs/issues/626)
* Definir a fonte pela janela de configurações de fonte não desmarca mais a seleção [#issue623](https://github.com/xulihang/ImageTrans-docs/issues/623)
* Adicionado item de menu para criar cópias [#issue622](https://github.com/xulihang/ImageTrans-docs/issues/622)
* Os plugins de tradução automática agora suportam retornar vários resultados candidatos na aba de tradução assistida [#issue619](https://github.com/xulihang/ImageTrans-docs/issues/619)


## v2.10.3 (2024/04/15)

* Corrigido o problema de o salvamento automático não ter efeito ao abrir por projetos recentes
* Corrigido o problema de a alteração do tempo de salvamento automático nas preferências não ter efeito imediato
* Corrigido o problema de o estado de salvamento não ser redefinido ao trocar de projeto
* Gerar um backup do projeto atual ao fechar o software

## v2.10.2 (2024/04/13)

* Suporte à definição da largura e da altura do modelo ONNX de detecção de balões
* Suporte à alteração do número de sequência do quadro com duplo clique
* Adicionados itens de menu de contexto para mesclar regiões
* Adicionadas duas formas de ordenação: primeiro vertical depois horizontal e primeiro horizontal depois vertical

## v2.10.1 (2024/04/04)

* Suporte à detecção de balões e à exportação de dados de anotação no formato de janela deslizante
* Priorizar o uso do modelo de balões colocado no diretório de imagens do projeto

## v2.10.0 (2024/03/30)

* Atualizado o OpenCV para 4.9.0
* Adicionado suporte ao modelo de detecção de objetos Yolov8 (nomeie o modelo onnx como `model.onnx` e coloque-o no diretório do software para habilitá-lo)
* Adicionado gerenciador de dados de anotação de detecção de objetos, com suporte à exportação de dados de anotação no formato Yolo ou à importação de dados de anotação


## v2.9.2 (2024/03/24)

* Adicionado "Copiar texto" ao menu de contexto
* O leitor de tela agora suporta adicionar ao projeto resultados com informações de posição do texto
* O itálico simulado do texto horizontal agora suporta definir valores de deslocamento da coordenada Y e da altura
* Corrigido o problema de correspondência incorreta das imagens processadas em lote introduzido na 2.9.1 [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)
* Corrigido o problema de criar uma nova região de texto redefinir o texto da região atualmente selecionada quando o salvamento automático está habilitado [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)


## v2.9.1 (2024/03/17)

* Adicionado removedor de transparência, capaz de gerar imagens JPG sem transparência, resolvendo o problema de a maioria dos métodos de OCR e de processamento de imagem não tratar corretamente a transparência [#issue593](https://github.com/xulihang/ImageTrans-docs/issues/593)
* Se existir uma imagem apenas com texto, priorizar o uso dela em vários métodos de processamento de imagem. Antes, ela era usada apenas no OCR das regiões de texto
* Novo método preciso de apagamento de texto: texto transparente. Suporta combinar a máscara com os pixels ao redor para restaurar o fundo. Usado principalmente para remover texto sobre fundo transparente [#issue302](https://github.com/xulihang/ImageTrans-docs/issues/302)
* Corrigido o problema de os eventos de mouse não responderem sobre o conteúdo de imagens transparentes


## v2.9.0 (2024/03/17)

* O salvamento automático agora é habilitado por padrão
* O alinhamento padrão foi alterado para alinhado à esquerda
* Adicionada configuração de projeto para espelhar horizontalmente a imagem final [#discussion592](https://github.com/xulihang/ImageTrans-docs/discussions/592)
* O rich text do mecanismo de texto vertical agora suporta definir o tamanho da fonte
* O mecanismo de texto vertical agora suporta linhas vazias
* Corrigido o comportamento do espaçamento entre linhas no mecanismo de texto vertical
* Corrigido o problema de a lista de fontes ser redefinida ao alternar para o editor de código rich text [#issue587](https://github.com/xulihang/ImageTrans-docs/issues/587)

## v2.8.8 (2024/03/09)

* Suporte à mesclagem de texto com base na posição do parágrafo [#issue586](https://github.com/xulihang/ImageTrans-docs/issues/586)
* Adicionado intervalo de processamento ao OCR online e à detecção de balões em imagens longas

## v2.8.7 (2024/03/04)

* Corrigido o problema de falha na mesclagem de regiões de texto causada pela ordenação
* Corrigido o tratamento de texto com várias linhas pelo Baidu Tradutor

## v2.8.6 (2024/03/01)

* Corrigido o problema de as quebras de linha serem removidas do resultado da mesclagem de linhas de texto quando "Remover quebras de linha automaticamente" não está marcada
* A altura e a largura ao mesclar texto no leitor de tela agora são definidas como metade das dimensões correspondentes

## v2.8.5 (2024/02/25)

* Suporte à exportação de PDF usando a imagem original e à exportação de PDF com texto pesquisável [#issue580](https://github.com/xulihang/ImageTrans-docs/issues/580)
* Suporte à geração de regiões de texto a partir de máscaras [#issue577](https://github.com/xulihang/ImageTrans-docs/issues/577)

## v2.8.4 (2024/02/15)

Otimizada a ordenação do texto ao mesclar regiões de texto [#issue576](https://github.com/xulihang/ImageTrans-docs/issues/576)

## v2.8.3 (2024/02/08)

* Suporte à pré-visualização de fontes na lista de fontes da barra de ferramentas [#issue567](https://github.com/xulihang/ImageTrans-docs/issues/567)
* A exportação da imagem final e das máscaras agora pula as imagens já traduzidas [#issue548](https://github.com/xulihang/ImageTrans-docs/issues/548)
* O gerenciador de imagens traduzidas agora permite selecionar rapidamente as imagens já exportadas
* Corrigido o problema de o ajuste automático do tamanho da fonte sobrescrever as configurações de negrito e itálico do estilo global [#issue565](https://github.com/xulihang/ImageTrans-docs/issues/565)
* Outras correções de bugs

## v2.8.2 (2024/01/21)

* O leitor de tela agora suporta atalhos globais [#issue237](https://github.com/xulihang/ImageTrans-docs/issues/237)
* O layout do leitor de tela agora pode ser ajustado
* A importação de tradução agora também permite modificar o texto original ao mesmo tempo [#issue557](https://github.com/xulihang/ImageTrans-docs/issues/557)
* Novo modo de importação de PDF: modo de extração de imagens

## v2.8.1 (2024/01/15)

* Corrigido o problema de ordem incorreta do texto ao mesclar regiões pela barra de ferramentas
* Corrigido o comportamento de mesclagem com base na pontuação na ordem de leitura da direita para a esquerda
* Corrigido o problema de a janela não ser ocultada ao capturar a tela com o leitor de tela
* Ao mesclar regiões, decidir se deve adicionar espaço com base em o idioma usar ou não espaços

## v2.8.0 (2024/01/14)

* O leitor de tela agora suporta a correção da ordem do texto [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/553)
* O leitor de tela agora pode reconhecer regiões fixas periodicamente e detectar se a imagem dentro da região sofreu alterações. A transparência da janela de região fixa pode ser ajustada [#issue521](https://github.com/xulihang/ImageTrans-docs/issues/521)
* Adicionada configuração de projeto de mesclagem de texto, que permite mesclar textos com base na pontuação final e não detectar separação ao mesclar regiões com texto [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/552)
* Os resultados de Buscar e substituir agora exibem o nome do arquivo
* Corrigido o problema de não salvar informações extras como o estilo ao mesclar regiões pela barra de ferramentas

## v2.7.1 (2024/01/01)

* Grandes modelos de linguagem como ChatGPT e Gemini agora podem usar termos para melhorar os resultados da tradução [#issue546](https://github.com/xulihang/ImageTrans-docs/issues/546)
* Buscar e substituir agora suporta ir para o resultado com duplo clique e ganhou a opção de buscar no arquivo atual [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)
* Buscar e substituir agora exibe os resultados na ordem dos nomes de arquivo [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)

## v2.7.0 (2023/12/24)

* Adicionada função de detectar o ângulo de rotação do texto [#issue543](https://github.com/xulihang/ImageTrans-docs/issues/543)
* Adicionado gerenciador de localização, que permite traduzir a interface do software [#issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)
* Adicionada preferência para desabilitar o comportamento de usar o texto original quando não há tradução ao visualizar a tradução [#issue541](https://github.com/xulihang/ImageTrans-docs/issues/541)
* Corrigido o problema de deslocamento causado por texto fora da imagem no modo de saída padrão
* Outras otimizações de usabilidade

## v2.6.0 (2023/12/17)

* Melhorado o efeito de classificação de regiões de texto em faixas [#issue536](https://github.com/xulihang/ImageTrans-docs/issues/536)
* Adicionada página de boas-vindas
* Adicionada barra de status para exibir a quantidade de imagens e o número de sequência da imagem atual [#issue535](https://github.com/xulihang/ImageTrans-docs/issues/535)
* Adicionada opção de ordenar pela coordenada horizontal [#issue533](https://github.com/xulihang/ImageTrans-docs/issues/533)
* Adicionado item de menu para ajustar o tamanho da fonte [#issue529](https://github.com/xulihang/ImageTrans-docs/issues/529)
* Memorizar o estado da interface, como a porcentagem [#issue528](https://github.com/xulihang/ImageTrans-docs/issues/528)
* Corrigido o possível deslocamento de posição de regiões de texto centralizadas verticalmente no modo de exportação de imagens grandes

## v2.5.7 (2023/12/03)

* Corrigido o problema de a máscara gerada ser reduzida ao fazer OCR de imagens grandes
* O editor de máscara agora tem a operação de remover a máscara fora das regiões de texto
* Novos itens de fluxo de trabalho personalizado: remover as regiões sem texto original de todas as imagens e remover a máscara fora das caixas de todas as imagens

## v2.5.6 (2023/12/02)

* A correção automática agora suporta o uso de expressões regulares [#issue520](https://github.com/xulihang/ImageTrans-docs/issues/520)
* Corrigido o problema de deslocamento ao arrastar caixas de texto com escala de alta DPI [#issue524](https://github.com/xulihang/ImageTrans-docs/issues/524)
* O menu de contexto na lista de imagens agora permite abrir o menu de limpar imagens [#issue516](https://github.com/xulihang/ImageTrans-docs/issues/516)

## v2.5.5 (2023/11/25)

* Adicionados os itens de menu "Ordenar" e "Preencher com tradução automática/memória de tradução"
* Suporte à geração de máscaras de texto por OCR

## v2.5.4 (2023/11/12)

* Adicionada opção para gerar máscaras de texto na detecção de texto em cenas naturais
* A verificação ortográfica agora suporta verificar a tradução [#issue514](https://github.com/xulihang/ImageTrans-docs/issues/514)
* As operações em lote agora suportam configuração prévia [#issue515](https://github.com/xulihang/ImageTrans-docs/issues/515)
* Exibir o caminho dos projetos recentes de forma abreviada [#issue509](https://github.com/xulihang/ImageTrans-docs/issues/509)

## v2.5.3 (2023/10/09)

* Corrigido o problema de deslocamento do texto rotacionado nas imagens exportadas no modo de imagem grande [#issue499](https://github.com/xulihang/ImageTrans-docs/issues/499)
* Buscar e substituir agora suporta seleção múltipla [#issue498](https://github.com/xulihang/ImageTrans-docs/issues/498)
* O navegador integrado agora suporta interoperabilidade com JavaScript para permitir consultas sem recarregar a página [#issue500](https://github.com/xulihang/ImageTrans-docs/issues/500)

## v2.5.2 (2023/10/01)

* Melhorado o desempenho do editor de máscara, com suporte ao carregamento de imagens muito grandes [#issue494](https://github.com/xulihang/ImageTrans-docs/issues/494)
* Pós-processamentos de texto como remover espaços agora são aplicados às operações de OCR da imagem inteira

## v2.5.1 (2023/09/24)

* Nova configuração do mecanismo de texto vertical: necessidade de elevar o primeiro caractere [#issue490](https://github.com/xulihang/ImageTrans-docs/issues/490)
* O gerenciador de imagens traduzidas agora permite definir que imagens traduzidas não sejam exibidas na interface de edição [#issue488](https://github.com/xulihang/ImageTrans-docs/issues/488)

## v2.5.0 (2023/09/16)

O mecanismo de texto vertical agora suporta centralização horizontal

## v2.4.1 (2023/09/16)

* Adicionada configuração de projeto de formato padrão de saída das imagens
* Adicionado item de menu para limpar o estilo do texto
* Adicionada preferência para usar o menu nativo do macOS
* Adaptação ao Mac com ARM
* Corrigido o problema de proporção incorreta de parte do texto no modo de exportação de imagens grandes
* Outras correções de bugs

## v2.4.0 (2023/08/26)

* Corrigido o problema de gerar repetidamente imagens sem texto ao exportar imagens
* Corrigido o problema de a barra de progresso mudar antes da troca de imagem ao trocar de imagem
* Aplicar o contorno do texto ao texto em vez de ao Pane pai do texto [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Adicionada a opção "aplicar a todos" à barra de ferramentas de fontes [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* As modificações na janela de configurações de fonte agora podem ser aplicadas a todas as caixas de texto selecionadas [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1694525969)
* No modo de arrastar, manter a tecla Ctrl pressionada permite usar a roda do mouse para aplicar zoom na imagem
* Os termos agora suportam a adição de observações
* Adicionado gerenciador de termos

## v2.3.0 (2023/08/20)

* Corrigido o problema de a centralização vertical não funcionar quando o tamanho automático de texto está habilitado
* Corrigido o problema de conflito de eventos no modo de arrastar
* Nova função: navegador Web integrado [#issue483](https://github.com/xulihang/ImageTrans-docs/issues/483)

## v2.2.2 (2023/08/10)

* Corrigido o problema de o texto ser cortado quando o espaçamento entre linhas do mecanismo de texto horizontal é maior que 1
* Adicionado item de menu para alinhamento de caixas de texto [#issue479](https://github.com/xulihang/ImageTrans-docs/issues/479)

## v2.2.1 (2023/08/05)

* Otimização do editor de máscara: a máscara agora é semitransparente por padrão [#issue472](https://github.com/xulihang/ImageTrans-docs/issues/472)
* O mecanismo vertical agora suporta a definição de caracteres com espaçamento zero [#issue473](https://github.com/xulihang/ImageTrans-docs/issues/473)
* Correções de bugs

## v2.2.0 (2023/07/30)

* Adicionado o plugin de tradução de imagens do Baidu [#issue470](https://github.com/xulihang/ImageTrans-docs/issues/470)
* Os plugins de OCR agora suportam definir informações como a tradução e a cor da fonte das caixas de texto
* Redimensionar imagens muito grandes e dividir imagens muito longas antes do OCR da imagem inteira
* As cores do editor de máscara agora reutilizam automaticamente as opções anteriores [#issue467](https://github.com/xulihang/ImageTrans-docs/issues/467)
* Corrigido o problema de cancelar a quebra automática de linha não ter efeito

## v2.1.0 (2023/07/09)

* Adicionada opção de ir para a imagem correspondente após selecionar uma região na lista de regiões de texto [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Adicionada opção de conversão de maiúsculas e minúsculas em Buscar e substituir
* Aplicar automaticamente as configurações necessárias antes de exportar a imagem final [#issue461](https://github.com/xulihang/ImageTrans-docs/issues/461)
* Ao ajustar regiões de texto, agora é possível manter a proporção mantendo a tecla SHIFT pressionada [#issue462](https://github.com/xulihang/ImageTrans-docs/issues/462)
* Nova barra de ferramentas relacionada à imagem original, usada para ajustar a transparência da camada de sobreposição e alinhar a posição do texto original e da tradução [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)
* Corrigido o problema de os scripts de PS não conseguirem processar contornos [b079d40](https://github.com/xulihang/ImageTrans_PhotoshopScripts/commit/b079d40ffdf8188de0c05eeaa64f742b28e2eb00)
* Corrigido o problema de desvio ao ajustar manualmente a posição e o tamanho da tradução ou ao alternar a proporção de exibição [#issue459](https://github.com/xulihang/ImageTrans-docs/issues/459)
* Corrigido o conflito do atalho de exclusão [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Corrigido o problema de a centralização vertical do mecanismo de texto vertical não funcionar ao modificar a tradução [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)

## v2.0.0 (2023/07/02)

* Atualizado o plugin do ChatGPT para suportar a definição do modelo [#issue430](https://github.com/xulihang/ImageTrans-docs/issues/430)
* O modo impreciso agora suporta cobrir texto rotacionado
* A unidade de geração de máscara de texto das regiões rotacionadas foi atualizada para o retângulo delimitador correspondente
* Ao alternar para a barra de ferramentas de ordenação, o duplo clique em uma região de texto permite definir manualmente seu número de sequência [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* Adicionada nova configuração de base de ordenação nas configurações do projeto, que permite escolher entre ordenar pela distância até a origem ou pela coordenada vertical [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* A determinação de regiões sobrepostas não considera mais a área [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* O gerenciador de imagens traduzidas agora permite selecionar rapidamente por condição [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Trazer automaticamente para dentro da imagem as regiões de texto que ultrapassam os limites da imagem [#issue452](https://github.com/xulihang/ImageTrans-docs/issues/452)
* Corrigido o problema de a máscara gerada pela detecção de texto em cenas naturais ser reduzida

## v1.9.8 (2023/05/21)

* Atualizado o plugin do ChatGPT para suportar tradução em lote por imagem [#issue404](https://github.com/xulihang/ImageTrans-docs/issues/404)
* Ao importar a tradução de TXT, agora é permitido deixar a tradução vazia
* Ao importar a tradução de TXT, se houver erro, indicar qual linha contém o erro [#issue412](https://github.com/xulihang/ImageTrans-docs/issues/412)
* Novo plugin de geração de máscara: retângulo inscrito [#issue413](https://github.com/xulihang/ImageTrans-docs/issues/413)

## v1.9.7 (2023/05/13)

* Corrigido o problema de limpar a posição da tradução apagar o texto quando o salvamento automático do texto original e da tradução está habilitado [#issue408](https://github.com/xulihang/ImageTrans-docs/issues/408)
* Adicionada função de excluir pelo menu de contexto na lista de termos

## v1.9.6 (2023/05/07)

* Corrigido o problema de correspondência de expressões regulares em várias linhas de texto em Buscar e substituir [#issue402](https://github.com/xulihang/ImageTrans-docs/issues/402)
* Suporte à exportação de arquivos de memória de tradução TMX
* Atualizado o plugin do ChatGPT para suportar a definição de serviços de terceiros [#issue401](https://github.com/xulihang/ImageTrans-docs/issues/401)

## v1.9.5 (2023/05/01)

* Atualizados os scripts de Photoshop na versão JavaScript para suportar rich text
* A pré-tradução agora suporta chamar a memória de tradução para correspondência exata
* Novo item de menu de contexto: limpar a posição da tradução [#issue393](https://github.com/xulihang/ImageTrans-docs/issues/393)
* Aplicar as configurações de tema a todas as janelas
* Otimização da usabilidade das configurações de estilo de fonte

## v1.9.4 (2023/04/05)

* Corrigido o problema de altura incorreta na transformação de perspectiva do itálico simulado quando o espaçamento entre linhas está definido
* O negrito simulado e o itálico simulado agora permitem definir o grau de negrito e de inclinação

## v1.9.3 (2023/04/02)

* Suporte à exportação para PDF [#issue366](https://github.com/xulihang/ImageTrans-docs/issues/366)
* Novos plugins de tradução automática: [ChatGPT](https://github.com/xulihang/ImageTrans-docs/issues/375) e [Yandex](https://github.com/xulihang/ImageTrans-docs/issues/386)
* Adicionado editor de código rich text [#issue390](https://github.com/xulihang/ImageTrans-docs/issues/390)
* O rich text agora suporta as configurações de negrito simulado, itálico simulado, nome da fonte e tamanho da fonte [#issue389](https://github.com/xulihang/ImageTrans-docs/issues/389)
* Nova configuração do mecanismo de texto vertical: substituição de caracteres [#issue388](https://github.com/xulihang/ImageTrans-docs/issues/388)
* Não executar as operações de uma única caixa de texto quando várias caixas de texto estiverem selecionadas

## v1.9.2 (2023/03/05)

* Corrigido o problema de a tradução não ser mesclada ao mesclar regiões
* Adicionada configuração de projeto para executar a geração de máscara de texto e de imagem sem texto por região de texto
* Suporte ao salvamento dos resultados de máscara de texto da detecção de texto em cenas naturais [#issue370](https://github.com/xulihang/ImageTrans-docs/issues/370)

## v1.9.1 (2023/02/19)

* Corrigido o problema de o BBCode não ser ignorado no cálculo da altura do texto horizontal
* Corrigido o problema de o BBCode não funcionar quando o estilo do texto está definido como maiúsculas
* O JRE padrão foi alterado para o Liberica JRE 11

## v1.9.0 (2023/02/12)

* Suporte a rich text (baseado em BBCode) [#issue194](https://github.com/xulihang/ImageTrans-docs/issues/194#issuecomment-1426964710)
* Corrigidos problemas relacionados a requisições de rede, seleção múltipla com Ctrl e confiança das regiões de texto

## v1.8.5 (2023/01/08)

* Novo plugin de OCR: o OCR nativo do macOS [#issue341](https://github.com/xulihang/ImageTrans-docs/issues/341)
* Suporte a colar imagens a partir de um caminho de arquivo
* Detectar se a imagem está no formato WebP pelo comando file [#issue338](https://github.com/xulihang/ImageTrans-docs/issues/338)
* Corrigido o problema de falha no carregamento de imagens por links data URL
* Corrigido o problema de passar a imagem em escala de cinza da máscara de texto em vez da imagem original quando o método de restauração de imagem de terceiros é definido como padrão
* Adicionada opção de definir se a correção automática deve ocorrer durante a digitação


## v1.8.4 (2022/11/26)

* Suporte à personalização de atalhos de teclado [#issue323](https://github.com/xulihang/ImageTrans-docs/issues/323)
* Otimização da interface

## v1.8.3 (2022/11/13)

* Nova função: corresponder automaticamente os estilos de texto predefinidos com base na cor do texto detectada  [#issue322](https://github.com/xulihang/ImageTrans-docs/issues/322)
* Exibir a captura de tela do leitor de tela na proporção de 100%

## v1.8.2 (2022/10/29)

* No modo de composição, ocultar a borda das caixas de texto ao arrastá-las (é possível desativar o ocultamento nas preferências) [#issue314](https://github.com/xulihang/ImageTrans-docs/issues/314)
* Nova opção de configuração de projeto: ler subpastas (habilitada por padrão) [#issue304](https://github.com/xulihang/ImageTrans-docs/issues/304)


## v1.8.1 (2022/10/05)

* Corrigido o problema de falha na remoção de texto de imagens PNG com número de canais diferente de 4
* Corrigida a lógica da caixa de seleção "Adicionar camada de sobreposição"

## v1.8.0 (2022/10/02)

* Suporte à exportação de imagens em PNG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Se o formato da imagem for PNG, as imagens sem texto e as imagens finais também usam PNG. Para outros formatos, usar JPG por padrão [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Adicionada configuração de tamanho padrão das caixas de texto nas configurações do projeto [#issue290](https://github.com/xulihang/ImageTrans-docs/issues/290)
* Suporte ao ajuste da posição de várias regiões de texto com atalhos de teclado [#issue285](https://github.com/xulihang/ImageTrans-docs/issues/285)


## v1.7.11 (2022/09/18)

Corrigido um bug de exportação de dados introduzido na v1.7.8 [#issue279](https://github.com/xulihang/ImageTrans-docs/issues/279)

## v1.7.10 (2022/09/18)

* No macOS, os atalhos agora priorizam a tecla Command [#issue277](https://github.com/xulihang/ImageTrans-docs/issues/277)
* Otimização da usabilidade do editor de máscara [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Adicionadas configurações personalizadas do mecanismo de texto vertical nas configurações do projeto [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271#issuecomment-1246208024)

## v1.7.9 (2022/09/12)

Melhorado o desempenho do mecanismo vertical com diferentes fontes [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271)

## v1.7.8 (2022/09/11)

* Corrigido o problema de falha ao salvar no editor de máscara de texto quando a largura da imagem é muito grande [#issue266](https://github.com/xulihang/ImageTrans-docs/issues/266)
* Aprimoradas as configurações de estilo de fonte [#issue256](https://github.com/xulihang/ImageTrans-docs/issues/256)
* Aprimorado o comportamento do pincel no editor de máscara de texto [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Nova opção de configuração de estilo de fonte: espaçamento entre caracteres (aplicável apenas a texto vertical) [#issue224](https://github.com/xulihang/ImageTrans-docs/issues/224)

## v1.7.7 (2022/08/27)

* Uso de transformação de perspectiva para obter imagens de regiões rotacionadas com mais precisão
* Outras correções de bugs [#issue246](https://github.com/xulihang/ImageTrans-docs/issues/246) [#issue248](https://github.com/xulihang/ImageTrans-docs/issues/248)

## v1.7.6 (2022/08/20)

Reutilizar automaticamente o mecanismo de OCR e o idioma usados anteriormente no projeto [#issue245](https://github.com/xulihang/ImageTrans-docs/issues/245)

## v1.7.5 (2022/08/13)

O texto horizontal agora suporta a configuração do espaçamento entre linhas [#issue244](https://github.com/xulihang/ImageTrans-docs/issues/244)

## v1.7.4 (2022/07/24)

* O mecanismo vertical agora suporta organizar o texto da esquerda para a direita [#issue242](https://github.com/xulihang/ImageTrans-docs/issues/242)
* Nova preferência: salvar automaticamente os resultados de OCR na área de transferência [#issue169](https://github.com/xulihang/ImageTrans-docs/issues/169)

## v1.7.3 (2022/07/03)

* O modo de edição do pincel de máscara agora suporta o ajuste do raio
* Corrigido o problema de falha na exportação de páginas web quando nenhum quadro foi detectado
* Atualizados os scripts de Photoshop na versão JS para suportar arquivos no formato PSB

## v1.7.2 (2022/06/03)

Nova preferência: pasta temporária para requisições de rede, usada para resolver o problema de "acesso negado" relatado por alguns usuários [#issue218](https://github.com/xulihang/ImageTrans-docs/issues/218)

## v1.7.1 (2022/05/29)

* Otimização da experiência de usuário na modificação de fontes [#issue212](https://github.com/xulihang/ImageTrans-docs/issues/212)
* Otimização dos atalhos de teclado [#issue205](https://github.com/xulihang/ImageTrans-docs/issues/205#issuecomment-1135449173)
* Adicionada função de atualizar pelo menu de contexto, útil para contornar o erro de trocar de imagem rápido demais no modo de visualização da tradução [#issue211](https://github.com/xulihang/ImageTrans-docs/issues/211)
* Novo plugin de restauração de imagem: Lama Inpainting [#issue216](https://github.com/xulihang/ImageTrans-docs/issues/216)


## v1.7.0 (2022/05/22)

* Adicionado gerenciador de imagens originais sem texto e de imagens apenas com texto [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199)
* A correção automática agora pode ser usada no OCR [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199#issuecomment-1126957556)
* Corrigido o problema de falha na importação de XLIFF [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Suporte à importação de tradução a partir de arquivos TXT separados por Tab [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* O fundo do estilo de fonte agora pode ser definido como transparente [#issue208](https://github.com/xulihang/ImageTrans-docs/issues/208)
* Outras correções de bugs e otimizações [#issue203](https://github.com/xulihang/ImageTrans-docs/issues/203)


## v1.6.5 (2022/05/01)

* Para casos como a tradução de japonês para inglês, em que o texto original é vertical e a tradução é horizontal, adicionada função de ajustar automaticamente a posição e o tamanho das regiões de texto para se adequarem à exibição horizontal [#issue190](https://github.com/xulihang/ImageTrans-docs/issues/190#issuecomment-1107365256)
* Adicionado botão de leitura em voz alta (pode ser configurado para ficar oculto) abaixo da área de edição de texto [#issue191](https://github.com/xulihang/ImageTrans-docs/issues/191)
* Agora é possível definir o método padrão de máscara de texto e de restauração de imagem [#issue192](https://github.com/xulihang/ImageTrans-docs/issues/192#issuecomment-1114153046)
* Chamar a geração de máscara de texto e a restauração de imagem por região de texto para aumentar a velocidade de processamento
* Outras pequenas otimizações

## v1.6.4 (2022/04/17)

* Corrigido o problema de a operação de abrir a pasta do projeto não ter efeito no macOS e o gesto de rotação do mouse ser muito amplo
* As operações de configuração de estilo de fonte agora suportam seleção múltipla e têm efeito imediato [#issue185](https://github.com/xulihang/ImageTrans-docs/issues/185)
* Otimizada a exibição de letras e pontuação no mecanismo de texto vertical [#issue186](https://github.com/xulihang/ImageTrans-docs/issues/186)
* Corrigido o problema de o texto ser cortado quando o tamanho da fonte do mecanismo de texto vertical é muito grande

## v1.6.3 (2022/04/04)

* Adicionado suporte ao método de pagamento Mianbaoduo
* Adicionado o DeepL gratuito ([instruções](https://github.com/xulihang/ImageTrans_plugins/tree/master/deeplfreeMT))

## v1.6.2 (2022/03/27)

* Adicionada função de exportar como página web (com suporte à leitura por quadro e à leitura em voz alta)
* O servidor agora pode ser usado como servidor HTTP para navegar pelas páginas web exportadas na rede local
* Mecanismo de texto vertical: suporte à configuração do espaçamento entre linhas e otimização da velocidade e da exibição da pontuação
* Adicionada operação de adicionar caixa de texto da imagem inteira
* O nome da pasta de saída agora pode ser configurado [#issue170](https://github.com/xulihang/ImageTrans-docs/issues/170#issuecomment-1058741066)
* Reproduzir um som de notificação após a conclusão das operações de fluxos de trabalho personalizados [#issue171](https://github.com/xulihang/ImageTrans-docs/issues/171)
* O tamanho da fonte na barra de ferramentas de fontes agora pode ser inserido diretamente [#issue176](https://github.com/xulihang/ImageTrans-docs/issues/176)

## v1.6.1 (2022/02/26)

* Suporte à rotação de caixas de texto arrastando com o mouse. O ângulo de rotação pode ser usado para corrigir a imagem do texto, melhorando a taxa de reconhecimento [#issue157](https://github.com/xulihang/ImageTrans-docs/issues/157)
* Adicionadas barras de progresso de processamento em lote para a detecção de quadros e de cores [#issue153](https://github.com/xulihang/ImageTrans-docs/issues/153)
* Adicionada configuração de velocidade da fala ao TTS (texto para fala), com suporte à leitura simultânea do texto original e da tradução [#issue152](https://github.com/xulihang/ImageTrans-docs/issues/152)
* Corrigido o problema de índice de texto nos scripts de Photoshop AU3 [#issue160](https://github.com/xulihang/ImageTrans-docs/issues/160)

## v1.6.0 (2022/02/06)

* Adicionada função de detecção de quadros de mangá, que pode ser usada para ordenar regiões de texto e para a leitura por quadro em dispositivos móveis [#issue147](https://github.com/xulihang/ImageTrans-docs/issues/147)
* Adicionado menu de contexto para visualizar a tradução automática, que permite ver o resultado da tradução após a concatenação dos textos de várias regiões de texto, usado principalmente quando uma frase é dividida em balões diferentes [#issue118](https://github.com/xulihang/ImageTrans-docs/issues/118)
* Outras otimizações de desempenho e correções de bugs

## v1.5.5 (2022/01/31)

* A detecção de balões agora suporta tiras cômicas longas [#issue138](https://github.com/xulihang/ImageTrans-docs/issues/138)
* O ajuste automático do tamanho da fonte agora suporta a definição de um tamanho máximo de fonte [#issue146](https://github.com/xulihang/ImageTrans-docs/issues/146)
* Adicionada função de monitorar a área de transferência ao leitor de tela [#issue145](https://github.com/xulihang/ImageTrans-docs/issues/145)
* Os resultados de tradução do tradutor silencioso agora salvam as informações do caminho do arquivo original [#issue144](https://github.com/xulihang/ImageTrans-docs/issues/144)
* Novo plugin de tradução automática: DeepL [#issue15](https://github.com/xulihang/ImageTrans-docs/issues/15)
* A operação de expandir regiões agora verifica as dimensões da imagem para evitar ultrapassar seus limites
* Mover a barra de rolagem para o topo ao trocar de imagem

## v1.5.4 (2022/01/22)

* Corrigido um problema de localização na página de preferências [#issue141](https://github.com/xulihang/ImageTrans-docs/issues/141)
* Adicionada opção de redimensionar a imagem antes da detecção de balões (por padrão, redimensionar para 1024 pixels) [#issue137](https://github.com/xulihang/ImageTrans-docs/issues/137)

## v1.5.3 (2022/01/16)

* Atualizado o OpenCV para 4.5.5 para suportar o Scaled-Yolo V4 [#issue129](https://github.com/xulihang/ImageTrans-docs/issues/129)
* Suporte à exportação de regiões de texto e à importação de volta dos resultados de OCR de cada imagem [#issue124](https://github.com/xulihang/ImageTrans-docs/issues/124)
* No modo de apagamento de texto por cobertura de cor sólida, o fundo agora pode ser definido como um retângulo com cantos arredondados [#issue123](https://github.com/xulihang/ImageTrans-docs/issues/123)
* Corrigido o comportamento inconsistente do texto centralizado verticalmente em diferentes proporções [#issue122](https://github.com/xulihang/ImageTrans-docs/issues/122)
* A função de correção automática agora também pode ser usada na tradução automática [#issue133](https://github.com/xulihang/ImageTrans-docs/issues/133)
* Outras otimizações de interface e de desempenho

## v1.5.2 (2021/12/26)

* Adicionada função de texto para fala (TTS)
* Agora é possível excluir regiões de texto diretamente com a tecla Delete
* A detecção heurística de texto agora suporta a definição de um tempo limite
* Outras correções de bugs

## v1.5.1 (2021/12/05)

* Aprimorado o comportamento do leitor de tela [issue 110](https://github.com/xulihang/ImageTrans-docs/issues/110)
* Aprimorado o comportamento do modo de composição com texto alinhado à direita

## v1.5.0 (2021/11/14)

* Suporte ao carregamento manual de arquivos de fonte [issue 100](https://github.com/xulihang/ImageTrans-docs/issues/100)
* Adicionado assistente de entrada compatível baseado em Swing JTextArea, para resolver temporariamente o problema de entrada de tibetano no JavaFX [issue 99](https://github.com/xulihang/ImageTrans-docs/issues/99)
* Nova configuração de projeto: fonte da área de edição
* Outras correções de bugs

## v1.4.8 (2021/10/30)

* Unificado o comportamento das caixas de texto na proporção de 100% e em outras proporções de exibição [issue 94](https://github.com/xulihang/ImageTrans-docs/issues/94)
* Novo plugin de OCR: Google Drive OCR [issue 91](https://github.com/xulihang/ImageTrans-docs/issues/91)
* Corrigido um problema de o OCR do Google não obter o texto corretamente

## v1.4.7 (2021/10/17)

* A detecção heurística de texto agora é executada em thread para evitar que o programa pare de responder
* Unificado o comportamento das operações de OCR entre o leitor de tela e o programa principal
* A proporção de exibição padrão foi ajustada para 100%

## v1.4.6 (2021/10/06)

* Adicionado o modo de reconhecimento de linhas de texto do Tesseract. O ImageTrans localiza as linhas de texto e depois o Tesseract reconhece cada linha, o que aumenta muito a precisão ([issue87](https://github.com/xulihang/ImageTrans-docs/issues/87))
* Adicionada opção de maiúsculas automáticas
* Adicionada opção de tradução automática ao leitor de tela
* Outras correções de bugs

## v1.4.5 (2021/09/25)

* Adicionado assistente de tradução silenciosa
* Adicionado método de remoção de furigana baseado em projeção
* Atualizado o OpenCV para 4.5.3, com suporte às funções de detecção e reconhecimento de texto do próprio OpenCV ([endereço do plugin](https://github.com/xulihang/ImageTrans-docs/issues/85)).
* Adicionado plugin de OCR em japonês: [Yomitori Kakumei](https://github.com/xulihang/ImageTrans-docs/issues/83).
* Outras correções de bugs

## v1.4.4 (2021/08/07)

* Corrigido o problema de largura e altura incorretas do texto rotacionado ao gerar imagens de tradução em alta resolução
* Corrigido o problema de a posição do texto não ser ajustada após ajustar automaticamente uma região muito pequena na composição de texto vertical
* Novo item de menu: abrir a pasta do projeto

## v1.4.3 (2021/08/05)

* Corrigido o problema de as configurações de fonte da região de texto atual não serem atualizadas ao alternar para a barra de ferramentas de fontes
* Corrigido o problema de o botão de centralização vertical da barra de ferramentas de fontes não atualizar seu estado ao trocar de região de texto
* Aprimorado o efeito da centralização vertical
* Outras otimizações

## v1.4.2 (2021/07/25)

* Corrigido o problema de falha na exportação de imagens com resolução muito alta (largura ou altura > 8000)
* O texto em disposição vertical agora suporta o ajuste automático do tamanho da fonte
* Atualizadas as operações de ajuste das regiões de texto em disposição vertical para se adequarem à mudança da versão 1.4.1, em que o texto é alinhado à direita: clicar com o mouse no lado esquerdo da região ajusta o tamanho e no lado direito ajusta a posição
* Outras otimizações


## v1.4.1 (2021/07/18)

* Adicionada opção de centralizar o texto verticalmente ([#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72))
* Adicionado atalho para excluir regiões de texto ([#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71))
* Quando a máscara de texto não foi salva, se não houver adição, remoção ou ajuste de regiões de texto, a imagem sem texto não é gerada novamente
* Adicionados vietnamita, hindi e indonésio à lista de idiomas padrão (nas versões anteriores era necessário inserir o código do idioma manualmente) ([#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61))
* O texto em disposição vertical agora começa por padrão pelo lado direito
* Outras otimizações

## v1.4.0 (2021/06/14)

* Adicionada operação Salvar como
* Adicionado menu de navegação
* Adicionado gerenciador de imagens traduzidas; as imagens marcadas como traduzidas são ignoradas nas operações em lote ([#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59))
* O editor de texto original e tradução agora pode se tornar a janela ativa
* Uso de Spinner como controle para ajustar a proporção de exibição da imagem
* Ao abrir um projeto, o projeto já aberto é fechado automaticamente ([#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39))


## v1.3.7 (2021/05/04)

* Preservar o estado ao alternar as barras de ferramentas ([#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47))
* Corrigido um problema de a tradução não ser incluída ao exportar dados ([#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45))

## v1.3.6 (2021/05/02)

* As operações de excluir e inverter a confiança pelo menu de contexto agora atuam em todas as regiões de texto selecionadas
* Manter a tecla Control pressionada permite selecionar várias regiões de texto com um único clique
* Adicionada ao menu de contexto das regiões de texto a função de remover o texto original e a tradução
* Outras otimizações

## v1.3.5 Update2 (2021/04/26)

* Exibir um aviso amigável ao executar a operação de importar imagens sem ter aberto um projeto
* Adicionado suporte à extensão JPEG

## v1.3.5 Update (2021/04/06)

* O seletor de idioma não aparece mais ao abrir projetos antigos
* O texto exibido ao passar o mouse sobre o seletor de imagens agora é o nome do arquivo atual

## v1.3.5 (2021/03/30)

* Aprimorada a função de traduzir várias frases em uma única requisição de tradução automática; o Baidu agora também suporta tradução em lote
* Adicionada função de ajuste automático de parâmetros ao método de localização heurística (experimental)
* Aprimoradas as operações de estilo de fonte, com suporte a mover e a importar de outros projetos
* Ao criar um novo projeto, agora é solicitado definir o par de idiomas
* Unificado o seletor de cor da fonte
* Melhorada a função de desfazer

## v1.3.4 (2021/03/27)

Resolvidos os problemas relatados no GitHub: [#16](https://github.com/xulihang/ImageTrans-docs/issues/16), [#19](https://github.com/xulihang/ImageTrans-docs/issues/19), [#22](https://github.com/xulihang/ImageTrans-docs/issues/22), [#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

## v1.3.3 (2021/03/23)

* Atualizado o [ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR), adicionado o [ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite), com suporte à combinação de diferentes métodos de detecção e de reconhecimento de texto, e atualizados os plugins correspondentes
* Corrigido o problema de o índice ultrapassar a quantidade de caixas de texto no OCR em lote. [Issue correspondente](https://github.com/xulihang/ImageTrans-docs/issues/6)
* Adicionada configuração de intervalo do OCR

## v1.3.2 (2021/03/07)

* Ao fazer OCR de uma região de texto, se a imagem for muito pequena, ampliá-la
* Localização de layouts antes esquecidos
* Novo plugin de OCR: CRAFT+CRNN. Ele se baseia no novo [projeto ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR). Esse projeto tem como objetivo se tornar um serviço que reúne OCRs offline que hoje têm boa personalização, velocidade de reconhecimento e precisão.

## v1.3.1 (2021/02/28)

* Novo plugin de OCR: o Clova OCR da Naver.
* Suporte à mesclagem ou exclusão rápida de regiões no modo de seleção por arrasto
* Adicionada opção de fazer OCR após a seleção por arrasto
* Adicionados atalhos de teclado para operar as regiões de texto (mover e fazer OCR)
* Detecção de balões offline, baseada no módulo Dnn do OpenCV, que pode chamar modelos gerados pelo [DarkNet](https://zhuanlan.zhihu.com/p/346021510) ou pela [TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API). É necessário colocar o arquivo do modelo, o arquivo de configuração do modelo e o model.json no diretório raiz do software ([exemplo](/assets/model.json)).
* O editor de texto agora exibe o texto original e a tradução um acima do outro


## v1.3.0 (2021/02/10)

* Adicionada função de fluxos de trabalho personalizados, que permite definir o próprio fluxo de processamento em lote
* Suporte à importação de PDF. O PDF é exportado como imagens. Se o texto do PDF puder ser copiado, o texto também é importado

## v1.2.11

* Corrigido o problema de a posição da região de tradução não ser salva corretamente
* Corrigido o problema do caminho de salvamento dos arquivos de script do Photoshop
* O editor de máscara agora suporta gerar máscaras com uma cor especificada e exibi-las de forma semitransparente
* Suporte à chamada do Caiyun Xiaoyi para solicitar a tradução de várias frases ao mesmo tempo, o que aumenta muito a velocidade da tradução automática
* A pré-tradução automática agora suporta definir o intervalo entre requisições para evitar que o excesso de requisições por unidade de tempo impeça a obtenção da tradução (os provedores de tradução automática geralmente definem um QPS)

## v1.2.10

* Novo plugin de OCR: ABBYY Cloud
* Suporte ao uso do LanguageTool para verificar a ortografia dos resultados de reconhecimento de OCR


## v1.2.9

* Se a ordem de leitura for da direita para a esquerda, espelhar as caixas de texto antes de ordená-las
* Adicionada opção de raio da restauração de imagem ao removedor de texto
* Adicionados temas. Atualmente são oferecidos o tema escuro e o tema verde.
* Alguns OCRs e traduções automáticas usam por padrão minha chave de API pessoal: entre as traduções automáticas estão Baidu, Niutrans e Tencent, e entre os OCRs estão OCRSPACE, Azure e Baidu.

## v1.2.8

* Adicionada função de desfazer
* Uso do TextFlow como renderizador de texto padrão. O texto não exibe mais reticências.
* Alternar a proporção de exibição não altera a fonte nem o layout
* Outras otimizações

## v1.2.7

* Suporte à execução simultânea de várias instâncias do tesseract para acelerar o OCR
* Manter os registros de verificação por 7 dias
* O OCR do Sogou agora suporta a ordem de leitura da direita para a esquerda
* Adicionada a versão precisa do OCR do Baidu
* Corrigidos problemas em Buscar e substituir (comportamento incorreto de ir para o fragmento e falha na substituição causada pela localização)

## v1.2.6

* As imagens no formato WebP baixadas de links são convertidas para o formato JPG (usando o OpenCV) 
* Suporte à remoção do furigana de mangás japoneses para obter melhores resultados de OCR
* Melhor conversão de texto japonês em disposição vertical para imagens em disposição horizontal (rotação e centralização de conteúdos como "—")
* Suporte à operação de unificar o estilo de fonte
* As regiões de texto obtidas por OCR também são expandidas

## v1.2.5

* Corrigido um problema de a posição da região de texto da tradução ser sobrescrita pela posição da região do texto original
* O editor de máscara agora suporta o modo de pincel
* As configurações de fonte agora permitem definir letras maiúsculas
* Adicionada configuração de porcentagem mínima de sobreposição de largura/altura à detecção de texto
* Corrigido um problema de a região de texto não ser adicionada quando havia sobreposição
* Os scripts de Photoshop agora suportam definir estilos como negrito, itálico, maiúsculas e rotação

## v1.2.4

* Adicionado suporte à extensão (plugin) do ImageTrans para Chrome. Acesse [este link](https://github.com/xulihang/ImageTrans_chrome_extension) para ver as instruções de uso.
* Não importar máscaras de texto, imagens sem texto nem imagens finais exportadas ao importar imagens
* Corrigido o problema de não ser possível criar novos projetos normalmente por causa da função de registro de projetos recentes da v1.2.2
* Outras otimizações

## v1.2.3

* Adicionada opção de traduzir após o OCR
* No modo impreciso, ao visualizar a tradução, se o texto original e a tradução estiverem vazios, o fundo da caixa de texto fica transparente para facilitar a visualização do texto original
* Adicionadas a detecção de texto em cenas naturais e a detecção de balões às operações de detecção de regiões de texto da tradução em lote
* O tradutor silencioso agora suporta a definição de fontes
* Adicionado menu de contexto com suporte a baixar imagens para o projeto a partir de links de imagens

## v1.2.2

* Adicionado o tradutor silencioso, que permite traduzir imagens em lote e pode ser chamado pela linha de comando ou executado como [servidor](https://github.com/xulihang/ImageTrans_Server)
* Novo plugin de OCR: o Sogou Shenzhi OCR
* Salvar o caminho dos projetos abertos recentemente
* A função de tradução em um clique agora pergunta se deve mesclar regiões quando usa OCR


## v1.2.1

* Suporte a arrastar várias caixas de texto ao mesmo tempo
* Suporte ao alinhamento de várias caixas de texto
* O estilo global de fonte agora suporta definir fundo, contorno e rotação
* Adicionada operação de colar imagem pelo menu de contexto

## v1.2.0

* Se a ordem de leitura estiver definida como da direita para a esquerda, a mesclagem de texto é feita em ordem inversa à das coordenadas
* Adicionados plugins de geração de máscara e de restauração de imagem. O primeiro plugin adicionado foi o [Sickzil-Machine](https://github.com/xulihang/SickZil-Machine)
* O Tesseract agora suporta detectar as regiões de texto de uma imagem inteira
* Suporte à pré-tradução e à tradução em um clique de uma única imagem (chamadas pelo menu de contexto na imagem)
* O método de detecção de texto em cenas naturais na tradução em um clique foi substituído pelo OCR
* Adicionada configuração de tamanho mínimo de fonte
* Adicionada opção de ajustar automaticamente o tamanho das regiões de texto
* Uso de caixa de seleção em vez de botão para visualizar a imagem traduzida
* Buscar e substituir agora suporta processar o texto original
* Outras pequenas melhorias

## v1.1.11

* Novos plugins de OCR: [easyOCR](https://www.jaided.ai/easyocr) e o reconhecimento de texto da Tencent
* A lista de idiomas do OCR agora exibe apenas os idiomas suportados pelo mecanismo selecionado
* Ao expandir uma região, salvar a região original como região de texto de destino
* Corrigido o método de localização do TabPane

## v1.1.10

* Adicionada tradução automática ao leitor de tela
* Removidas algumas bibliotecas de terceiros

## v1.1.9

* Atualizado o OpenCV para 4.5.0
* A confiança das regiões de texto agora pode ser obtida offline, com exibição do progresso da operação
* Novo plugin de OCR: WinRT OCR, com suporte à chamada da função de OCR nativa do Windows 10; é necessário instalar o pacote de idioma correspondente no sistema
* Incluídos alguns plugins de tradução automática do BasicCAT
* Otimização da interface


## v1.1.8

* Geração de máscaras de texto e imagens sem texto conforme a ordem, com exibição do progresso do processamento em lote
* As operações de restauração de imagem agora usam threads diferentes para evitar que o programa pare de responder
* Verificar se a posição das regiões de texto está correta ao gerar a máscara
* Corrigido o problema de desalinhamento entre a máscara de texto e a imagem ao processar imagens muito grandes
* Adicionadas operações relacionadas a regiões de texto ao menu de contexto da imagem

## v1.1.7

* O editor de máscara agora suporta zoom e a geração de máscaras na região selecionada
* O removedor de texto agora consegue remover o texto da região selecionada
* A cor padrão da máscara voltou a ser vermelha
* Adicionada função de edição da imagem sem texto
* Correções de bugs

## v1.1.6

* As máscaras de texto agora são salvas em PNG, para que o modo de remoção de texto por cobertura suporte também o caso de fundo preto
* Suporte à criação de cópias de caixas de texto


## v1.1.5

* Adicionado mecanismo de composição de texto vertical CJK
* Adicionada função de correção automática (pode ser usada para resolver o problema de entrada de pontuação de largura total no macOS)
* Correções de bugs

## v1.1.4

* Nova ferramenta na barra de ferramentas: configurações de fonte
* Ao criar um novo projeto e ao importar imagens, os caminhos escolhidos anteriormente agora são compartilhados
* Melhor seleção de cores

## v1.1.3

* Novo tipo de plugin: plugin de OCR. Código aberto: [github](https://github.com/xulihang/ImageTrans_plugins). Suporte à chamada do OCR offline PaddleOCR.
* Novo mecanismo de OCR: ABBYY (usa a [interface de linha de comando](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms) do ABBYY FineReader, apenas para Windows)
* Nova ferramenta: leitor de tela. Ele pode ser usado como ferramenta de captura de tela; a captura pode chamar o mecanismo de OCR do ImageTrans para reconhecer o texto e também pode ser adicionada diretamente ao projeto do ImageTrans.
* Adicionada barra de ferramentas, que oferece mais operações, como dividir, mesclar e selecionar regiões de texto.
* O formato do cursor do mouse agora muda corretamente de acordo com a operação disponível.

## v1.1.2

Nova opção de OCR: converter imagens com texto em disposição vertical para disposição horizontal, aplicável ao japonês em texto vertical e capaz de melhorar os resultados de OCR

## v1.1.1

* Adicionada função de tradução em um clique
* Adicionada função de detecção de regiões de texto com base na detecção de texto em cenas naturais
* Memorizar o caminho dos arquivos escolhidos anteriormente

## v1.1.0

* Adicionado removedor de texto externo (experimental)
* Adicionado suporte à localização. O software agora pode ser exibido em chinês e em inglês.

## v1.0.1

* Mais configurações
* Suporte a rich text
* Importação e exportação de XLIFF

## v1.0.0 (2020/03/13)

Lançamento do software.

{% include comments.html %}

