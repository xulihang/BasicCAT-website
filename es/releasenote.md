---
title: Notas de versión
layout: page
lang: es
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* La traducción automática permite traducir varios segmentos en una sola solicitud (traducción por lotes)
* La pretraducción se puede cancelar cerrando el cuadro de progreso
* Plugins actualizados

## v1.10.7 (2024/04/23)

* Corregido el error de búsqueda y sustitución al buscar caracteres consecutivos
* Añadido el elemento de menú para la revisión ortográfica

## Notas de versión anteriores

<section>
    <ul class="post-list">
        {% comment %}
          Aún no hay notas de versión anteriores traducidas al español, así
          que la lista está vacía. Añade entradas en _es para que aparezcan aquí.
        {% endcomment %}
        {% assign posts=site.es | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>