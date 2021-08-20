---
title: Occupant Fonts Text Laboratory
layout: home.njk
---

<ul>
    {%- for book in collections.book -%}
        <li><a href="{{ book.url | url }}"> {{book.data.title}}, {{book.data.author}}</a></li>
    {% endfor %}
<ul>