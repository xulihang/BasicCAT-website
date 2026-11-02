---
title: Versionshinweise
layout: page
lang: de
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* Maschinelle Übersetzung unterstützt das Übersetzen mehrerer Sätze in einer Anfrage (Stapelübersetzung)
* Die Vorübersetzung lässt sich durch Schließen des Fortschrittsfensters abbrechen
* Plugins aktualisiert

## v1.10.7 (2024/04/23)

* Fehler bei Suchen und Ersetzen aufeinanderfolgender Zeichen behoben
* Menüpunkt für die Rechtschreibprüfung hinzugefügt

## Frühere Versionshinweise

<section>
    <ul class="post-list">
        {% comment %}
          Es gibt noch keine früheren Versionshinweise auf Deutsch, die Liste ist
          daher leer. Fügen Sie Beiträge in _de hinzu, damit sie hier erscheinen.
        {% endcomment %}
        {% assign posts=site.de | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>