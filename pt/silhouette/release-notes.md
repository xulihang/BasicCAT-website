---
title: Notas de versão do Silhouette
layout: page
description: Notas de versão do Silhouette.
lang: pt
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.6.2 (2026/08/30)

* Atualiza os plugins de ChatGPT e DeepSeek
* Novo plugin de LLM gratuito
* Corrige o uso incorreto do texto de origem no lugar do texto de destino ao dividir o texto


## v1.6.1 (2026/05/01)

* Adiciona o FunASR
* Corrige a falha de análise dos arquivos SRT exportados quando o resultado do reconhecimento continha apenas números
* Corrige o problema em que as preferências de tamanho da fonte das legendas não eram aplicadas durante a reprodução de áudio
* Corrige o problema em que o foco da caixa de texto mudava inesperadamente ao pressionar a barra de espaço ou mover o mouse

## v1.6.0 (2026/04/28)

* Adiciona o Qwen3-ASR
* Mais opções de mesclagem de linhas: por pontuação e com verificação de tempo
* Preferência de deslocamento inferior das legendas
* Verifica se os plugins de ASR estão instalados ou em execução
* Corrige o bug de abertura de arquivos de áudio

## v1.5.5 (2025/10/21)

* Suporte ao Windows 7
* Falhas ao carregar o VLC agora geram uma mensagem de erro
* Corrige a falha de navegação ao clicar na forma de onda quando ela está desativada
* Corrige o problema de o estado de "Acompanhar progresso" não ser restaurado após pausar a reprodução das linhas selecionadas

## v1.5.4 (2025/10/19)

* Corrige o erro ao clicar com o botão direito na área de reprodução quando nenhum vídeo está aberto
* Inclui o VLC por padrão

## v1.5.3 (2025/07/06)

* Adiciona uma configuração de tempo para avançar
* Adiciona item de menu para reproduzir cada linha
* Corrige bugs

## v1.5.2 (2025/05/18)

* Adiciona o gerador de vídeo sem legendas
* Permite clicar na forma de onda para saltar no progresso

## v1.5.1 (2025/05/11)

* Desativa "Acompanhar progresso" ao reproduzir a seleção
* O alinhador agora permite alinhar parte do texto
* Adiciona preferências de legenda: formato e correspondência com a largura do vídeo
* Adiciona o executor de FFmpeg
* Nova opção de exportação: vídeo com legendas fixas (gravadas com o FFmpeg)

## v1.5.0 (2025/05/02)

* Novos recursos: dividir linhas e mesclar linhas
* Adiciona ao divisor de frases um botão para dividir frases automaticamente com base em regras SRX
* Novo modo de divisão e mesclagem
* Novo botão de tradução rápida
* Nova configuração de CSS para o texto das legendas
* Corrige a passagem de parâmetros extras ao reconhecer o arquivo inteiro com o Whisper
* Melhora as mensagens de erro do Whisper

## v1.4.1 (2025/04/04)

* Nova opção de importação e exportação para TXT
* Novas opções relacionadas à importação de texto a partir de SRT
* Novo plugin DeepSeek
* Aumenta o tempo limite do ChatGPT para 2 minutos

## v1.4.0 (2025/03/01)

* Novo conversor de chinês simplificado e tradicional
* Novo extrator de quadros
* Adiciona itens de menu relacionados a saltar e reproduzir
* Adiciona item de menu de contexto para reconhecer a seleção
* Corrige o código de idioma chinês do Whisper

## v1.3.0 (2025/02/22)

* Novo alinhador para alinhar as linhas de tempo reconhecidas com um texto existente (alinhamento texto-áudio)
* Suporte à importação e exportação de XLIFF
* Suporte à importação de SRT bilíngue
* Nova configuração de projeto para parâmetros extras de reconhecimento de fala
* Novo item de menu para trocar o texto de origem e o de destino
* Nova opção de reconhecimento de fala: não dividir o áudio
* No Windows, pergunta se deve habilitar a GPU na primeira inicialização
* Outras correções de bugs

## v1.2.0 (2025/02/09)

* Adiciona preferência para reproduzir a seleção com precisão
* Adiciona entrada de voz
* Adiciona divisor de frases
* O tradutor em lote agora permite exportar SRT
* Pergunta qual intervalo ajustar antes de ajustar a linha do tempo em lote
* Corrige o deslocamento na renderização da forma de onda
* Outras correções de bugs

## v1.1.0 (2025/02/04)

* Adiciona preferência de tamanho da fonte das legendas
* Adiciona preferência de uso da GPU
* Adiciona configuração de projeto para prompts
* Adiciona tradução em lote
* Adiciona a função de deslocamento geral da linha do tempo
* Adiciona itens de menu para mover as linhas selecionadas para cima e para baixo
* O texto de progresso usa o formato hh:mm:ss
* Os atalhos do macOS usam a tecla Command
* Permite excluir rapidamente a linha selecionada com a tecla Delete
* Insere uma nova linha depois da linha selecionada
* Avisa que o caminho do arquivo não deve conter espaços no macOS e no Linux
* Corrige o alinhamento centralizado das legendas
* Corrige problemas de localização

## v1.0.0 (2025/01/27)

Lançamento da primeira versão.

{% include comments.html %}
