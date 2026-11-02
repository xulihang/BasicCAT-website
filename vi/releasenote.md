---
title: Ghi chú phát hành
layout: page
lang: vi
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* Dịch máy hỗ trợ dịch nhiều câu trong một lần yêu cầu (dịch hàng loạt)
* Có thể hủy dịch trước bằng cách đóng hộp tiến trình
* Cập nhật plugin

## v1.10.7 (2024/04/23)

* Sửa lỗi tìm và thay thế khi tìm các ký tự liên tiếp
* Thêm mục menu kiểm tra chính tả

## Ghi chú phát hành trước đây

<section>
    <ul class="post-list">
        {% comment %}
          Chưa có ghi chú phát hành cũ nào dịch sang tiếng Việt nên danh sách
          đang trống. Thêm bài viết vào _vi để chúng hiển thị tại đây.
        {% endcomment %}
        {% assign posts=site.vi | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>