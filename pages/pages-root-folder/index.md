---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: page
section: home

#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#

permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

{% assign page_list = site.data.widgets.main %}

{% assign page_data = page_list %}

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
