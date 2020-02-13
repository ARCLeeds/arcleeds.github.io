---
layout: page-fullwidth
show_meta: false
title: "Services"
permalink: "/services/"
---

We provide a range of services to support researchers and research projects.  

{% assign filtered_navigation = site.pages.index %}


{% for item in filtered_navigation %}
    {% for dditem in item.dropdown %}
      <p>{{ filtered_navigation }}</p>
         {% include _frontpage-widget.html widget=dditem %}
      {% endfor %}
  {% endfor %}
