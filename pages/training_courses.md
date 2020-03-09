---
layout: page-fullwidth
title: "Training Courses"
permalink: "/training/courses/"
---

### Research Computing training courses exist in 3 distinct tiers: Padawan for beginners, Knight for intermediate level and Master for advanced users


## Padawan Level Courses
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

  {% if site.data.training_courses.widget4.image or site.data.training_courses.widget4.video or site.data.training_courses.widget4.title %}
		{% include _training-widget.html widget=site.data.training_courses.widget4 %}
	{% endif %}
</div>
