---
title: 릴리스 노트
layout: page
lang: ko
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* 기계 번역이 한 번의 요청으로 여러 문장을 번역할 수 있도록 지원합니다(일괄 번역)
* 사전 번역은 진행률 대화 상자를 닫아 취소할 수 있습니다
* 플러그인 업데이트

## v1.10.7 (2024/04/23)

* 찾기 및 바꾸기에서 연속된 문자를 검색할 때 오류가 발생하는 문제를 수정했습니다
* 맞춤법 검사 메뉴 항목을 추가했습니다

## 이전 릴리스 노트

<section>
    <ul class="post-list">
        {% assign posts=site.ko | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %-m월 %-d일" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>
