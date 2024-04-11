---
title: "Upcoming Events"
permalink: "/training/"
breadcrumb: true
---

{% assign current_date = site.time | date: "%s" %}
{% for event in site.data.events %}
  {% assign event_date = event.dates[0] | date: "%s" %}
  {% if event_date > current_date %}
    {% assign page = event %}
    {% include event.html %}
  {% endif %}
{% endfor %}
