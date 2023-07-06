---
title: "HPC4: An introduction to Parallel Programming with MPI C and Fortran"
permalink: "/training/courses/hpc4/"
breadcrumb: true
---

{% assign hpc4w = site.data.training_courses.widget | where:'code', 'HPC4' %}
{% assign hpc4 = hpc4w[0] %}
{% assign course = hpc4.content %}

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
