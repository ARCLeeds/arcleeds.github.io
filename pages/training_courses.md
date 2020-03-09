---
layout: page-fullwidth
title: "Training Courses"
permalink: "/training/courses/"
---

<div class="row t60">
	{% if site.data.training_courses.widget1.image or site.data.training_courses.widget1.video or site.data.training_courses.widget1.title %}
		{% include _training-widget.html widget=site.data.training_courses.widget1 %}
	{% endif %}

	{% if site.data.training_courses.widget2.image or site.data.training_courses.widget2.video or site.data.training_courses.widget2.title %}
		{% include _training-widget.html widget=site.data.training_courses.widget2 %}
	{% endif %}

	{% if site.data.training_courses.widget3.image or site.data.training_courses.widget3.video or site.data.training_courses.widget3.title %}
		{% include _training-widget.html widget=site.data.training_courses.widget3 %}
	{% endif %}
</div>
