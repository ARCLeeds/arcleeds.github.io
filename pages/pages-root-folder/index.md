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

<!-- row1 of services tiles -->
<div class="t60">
	{% if site.data.widgets.widget1.image or site.data.widgets.widget1.video or site.data.widgets.widget1.title %}
		{% include _frontpage-widget.html widget=site.data.widgets.widget1 %}
	{% endif %}

	{% if site.data.widgets.widget2.image or site.data.widgets.widget2.video or site.data.widgets.widget2.title %}
		{% include _frontpage-widget.html widget=site.data.widgets.widget2 %}
	{% endif %}

	{% if site.data.widgets.widget3.image or site.data.widgets.widget3.video or site.data.widgets.widget3.title %}
		{% include _frontpage-widget.html widget=site.data.widgets.widget3 %}
	{% endif %}
</div>

<!-- row2 of services tiles -->
<div class="t60">
	{% if site.data.widgets.widget4.image or site.data.widgets.widget4.video or site.data.widgets.widget4.title %}
		{% include _frontpage-widget.html widget=site.data.widgets.widget4 %}
	{% endif %}

	{% if site.data.widgets.widget5.image or site.data.widgets.widget5.video or site.data.widgets.widget5.title %}
		{% include _frontpage-widget.html widget=site.data.widgets.widget5 %}
	{% endif %}

	{% if site.data.widgets.widget6.image or site.data.widgets.widget6.video or site.data.widgets.widget6.title %}
		{% include _frontpage-widget.html widget=site.data.widgets.widget6 %}
	{% endif %}
</div>
