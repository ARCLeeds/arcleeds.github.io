---
title: "Help"
permalink: "/help/"
breadcrumb: true
---

{% assign page_list = site.data.widgets.main | where: 'title', page.title %}

{% assign page_data = page_list[0].subpages %}

{% assign page_items = page_data | size %}

{% assign page_nrows = page_items | divided_by: 4.0 | ceil %}

{% assign col2 = 0 %}

<div class="t60">
  {% for row in (1..page_nrows) %}
	   {% for col in (1..4) %}
				{% assign col_data = page_data[col2] %}
	      {% if col_data.title %}
				   {% include _frontpage-widget.html widget=col_data  %}
				{% endif %}
				{% assign col2 = col2 | plus: 1 %}
		{% endfor %}
  {% endfor %}
</div>		
