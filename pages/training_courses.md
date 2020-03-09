---
layout: page-fullwidth
title: "Training Courses"
permalink: "/training/courses/"
---

<div class="row t60">
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
