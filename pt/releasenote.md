---
title: Notas de versão
layout: page
lang: pt
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* A tradução automática agora permite traduzir várias frases em uma única requisição (tradução em lote)
* A pré-tradução agora pode ser cancelada fechando a janela de progresso
* Plugins atualizados

## v1.10.7 (2024/04/23)

* Corrigido o erro ao pesquisar caracteres consecutivos em Localizar e Substituir
* Adicionado item de menu para a verificação ortográfica

## Notas de versão anteriores

<section>
    <ul class="post-list">
        {% assign posts=site.pt | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>