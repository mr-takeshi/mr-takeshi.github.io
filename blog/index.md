---
layout: default
title: "All Posts"
permalink: /blog/
description: "Browse all posts in our scientific AI blog, organized chronologically."
---

# All Posts

Browse our complete collection of research articles, tutorials, and insights on machine learning and reproducible science.

<div class="posts-list">
  {% for post in site.posts %}
    <article class="post-summary">
      <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="meta">
        <span class="date">📅 {{ post.date | date: "%B %d, %Y" }}</span>
        <span class="reading-time">⏱️ {% assign words = post.content | number_of_words %}{% if words < 360 %}1 min read{% else %}{{ words | divided_by: 180 }} min read{% endif %}</span>
        {% if post.tags %}<span class="tags">🏷️ {{ post.tags | join: ", " }}</span>{% endif %}
      </p>
      {% if post.abstract %}
        <div class="abstract">
          <p>{{ post.abstract }}</p>
        </div>
      {% else %}
        <p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 45 }}</p>
      {% endif %}
      <p><a href="{{ post.url | relative_url }}" class="read-more">Read more</a></p>
    </article>
  {% endfor %}
</div>
