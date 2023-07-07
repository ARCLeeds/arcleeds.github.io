---
title: "HPC3: Computer architectures and shared memory parallel programming"
permalink: "/training/courses/hpc3/"
breadcrumb: true
---

{% assign hpc3w = site.data.training_courses.widget | where:'code', 'HPC3' %}
{% assign hpc3 = hpc3w[0] %}
{% assign course = hpc3.content %}

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
