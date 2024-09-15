---
layout: default
title: "Home"
toc: false
---

<ul>
  {% assign pages_sorted = site.pages | where: "toc", true | sort: "order" %}
  {% for page in pages_sorted %}
       <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
			{% assign content = page.content | markdownify %}
			<!-- Split the content by "<h2" -->
			{% assign headers_h2 = content | split: "<h2" %}
			<ul>
				{% for header_h2 in headers_h2 %}
					{% if forloop.index0 > 0 %}
						<!-- Split by the first ">" to isolate the actual header text -->
						{% assign header_h2_text = '<h2' | append: header_h2 | split: "</h2>" | first %}	
						<!-- Display the clean header text (with HTML stripped) -->
						<li><a href="{{ page.url }}#{{ header_h2_text | strip_html | slugify }}">{{ header_h2_text | strip_html }}</a></li>
					{% endif %}
				{% endfor %}
			</ul>
      </li>
  {% endfor %}
</ul>
