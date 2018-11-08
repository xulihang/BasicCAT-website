---
layout: default
permalink: /zh/
---
<div class="home">
	<section class="site-header">
		<h1 class="smallcap"><a class="site-title" href="{{ '/' | prepend: site.baseurl | prepend: site.url }}">{{ site.title }}</a></h1>
		{% include nav.html %}
		{% include intro.html %}
	</section>
	<section>
		<ul class="post-list">
            
            {% assign posts=site.zh | where:"layout", "post" %}
			{% for post in posts reversed  %}
			<li>
				<a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%-m月%-d日" }}</time>
			</li>
			{% endfor %}
		</ul>
	</section>
</div>
