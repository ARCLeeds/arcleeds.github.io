---
title: "About"
permalink: "/about/"
breadcrumb: true
---

For more information about the Research Computing Team:

{% assign filtered_navigation = site.data.navigation | where:'title', page.title %}

{% assign service_names = filtered_navigation[0].dropdown | map: 'title' %}

<!-- added row t60 div to ensure flexbox -->
<div class="row t60">
{% for item in site.data.widgets %}
  {% assign widget_feat = item[1] %}
  {% if service_names contains widget_feat.title %}
    {% include _frontpage-widget.html widget=widget_feat %}
  {% endif %}

{% endfor %}
</div>
