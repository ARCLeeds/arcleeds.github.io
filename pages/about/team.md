---
title: "Research Computing Team"
permalink: "/about/team/"
breadcrumb: true
---

Meet the members of the Research Computing Team at Leeds:

{% for member in site.data.team.main %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}
