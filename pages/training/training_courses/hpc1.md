---
title: "HPC1: Introduction to High Performance Computing"
permalink: "/training/courses/hpc1/"
breadcrumb: true
---

{% assign hpc1w = site.data.training_courses.widget | where:'url', page.permalink %}
{% assign hpc1 = hpc1w[0] %}
{% assign course = hpc1.content %}

{% assign hpc0w = site.data.training_courses.widget | where:'code', 'HPC0' %}
{% assign hpc0 = hpc0w[0] %}

### Booking for this course is through the IT Training Unit. [Click here to book]({{ course.booking }})

## Workshop content
- {{ hpc1.text }}
- {{ course.body }}
- Syllabus:
{% for item in course.syllabus %}
  - {{ item }}
{% endfor %}

# Prerequisites
- A HPC user account ([Click here to get an account]({{ site.data.variables.get_account_url }}) - a process that typically takes at least 1 full working day)
- {{ course.prereq }}
  - (If you lack familiarity with command line Linux, please consider taking the following first:
    - [{{ hpc0.code }}: {{ hpc0.title }}]({{ hpc0.url }}))

## Duration
{{ course.duration }}

## Frequency
{{ course.frequency }}
<!--
If you would like a bespoke version of this course run in your department then please
[contact us]({{ site.data.variables.contact_url }}).
-->

## Suitability
{{ course.suitability }}
