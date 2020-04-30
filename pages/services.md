---
title: "Services"
permalink: "/services/"
---

We provide a range of services to support researchers and research projects.  

{% assign filtered_navigation = site.data.navigation | where:'title', page.title %}

{% assign service_names = filtered_navigation[0].dropdown | map: 'title' %}

<!-- added page-row t60 div to ensure flexbox -->
<div class="t60">
{% for item in site.data.widgets %}
  {% assign widget_feat = item[1] %}
  {% if service_names contains widget_feat.title %}
    {% include _frontpage-widget.html widget=widget_feat %}
  {% endif %}

{% endfor %}
</div>
