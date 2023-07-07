---
title: "HPC5: Introduction to GPU programming with CUDA"
permalink: "/training/courses/hpc5/"
breadcrumb: true
---

{% assign hpc5w = site.data.training_courses.widget | where:'code', 'HPC5' %}
{% assign hpc5 = hpc5w[0] %}
{% assign course = hpc5.content %}

### Booking for this course is through the IT Training Unit. [Click here to book]({{ course.booking }})

## Workshop content
{{ course.body }}

At the end of the workshop, attendees will be able to:
{% for item in course.outcomes %}
  - {{ item }}
{% endfor %}

## Prerequisites
{{ course.prereq }}

## Duration
{{ course.duration }}

## Frequency
{{ course.frequency }}

If you would like a bespoke version of this course run in your department then please [contact us]({{ site.data.variables.contact_url }}).

## Suitability
{{ course.suitability }}
