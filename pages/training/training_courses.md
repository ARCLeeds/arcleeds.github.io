---
title: "Training Courses"
permalink: "/training/courses/"
breadcrumb: true
---

### Browse our available training courses below and click to find out more including how to book a place. Our main 2 areas of training focus on HPC - High Performance Computing and SWD - Software Development.

## Beginner Level Courses
{% comment %}
   The below sections automatically populates tiles on the page based on
	 widget data in the _data/training_courses.yml file.
	 It works by selecting out data at the level beginner, calculates the array size
	 calculates the number of rows as no. of items / max item per row (4) rounded up.
	 It then loops over the calculated number of rows, and loops over the number of columns
	 (1 to 4), it assigns a col2 value that is equal to the current column which it uses to index
	 the widget data from the data subset created earlier.
	 It tests if the data exists (by checking if a title exists for the given widget) and if it
	 does exist it includes the _training_widget.html passing it data from the indexed widget
{% endcomment %}

{% assign beginner_data = site.data.training_courses.widget | where: 'level','beginner' %}

{% assign beginner_items = beginner_data | size %}

{% assign beginner_nrows = beginner_items | divided_by: 3.0 | ceil %}

{% assign col2 = 0 %}

<div class="test-space t60">
  {% for row in (1..beginner_nrows) %}
	   {% for col in (1..3) %}
				{% assign col_data = beginner_data[col2] %}
	      {% if col_data.title %}
				   {% include _training-widget.html widget=col_data  %}
				{% endif %}
				{% assign col2 = col2 | plus: 1 %}
		{% endfor %}
  {% endfor %}
</div>				

## Intermediate Level Courses

{% assign intermediate_data = site.data.training_courses.widget | where: 'level','intermediate' %}

{% assign intermediate_items = intermediate_data | size %}

{% assign intermediate_nrows = intermediate_items | divided_by: 3.0 | ceil %}

{% assign col2 = 0 %}

<div class="t60">
  {% for row in (1..intermediate_nrows) %}
	   {% for col in (1..3) %}
				{% assign col_data = intermediate_data[col2] %}
	      {% if col_data.title %}
				   {% include _training-widget.html widget=col_data  %}
				{% endif %}
				{% assign col2 = col2 | plus: 1 %}
		{% endfor %}
  {% endfor %}
</div>				
