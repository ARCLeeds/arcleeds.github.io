---
title: "SWD3: Software development practices for Research"
permalink: "/training/courses/swd3/"
breadcrumb: true
---

{% assign swd3w = site.data.training_courses.widget | where:'code', 'SWD3' %}
{% assign swd3 = swd3w[0] %}
{% assign course = swd3.content %}

{% assign hpc0w = site.data.training_courses.widget | where:'code', 'HPC0' %}
{% assign hpc0 = hpc0w[0] %}

### Booking for this course is through the IT Training Unit. [Click here to book]({{ course.booking }})

## Workshop content
{{ course.body }}

At the end of the workshop, attendees will be able to:
{% for item in page_content.outcomes %}
  - {{ item }}
{% endfor %}

## Prerequisites
{{ page_content.prereq }}
  - (If you lack familiarity with command line Linux, please consider taking the following first:
    - [{{ hpc0.code }}: {{ hpc0.title }}]({{ hpc0.url }})

## Duration
{{ page_content.duration }}

## Frequency
{{ page_content.frequency }}
If you would like a bespoke version of this course run in your department then please [contact us]({{ site.data.variables.contact_url }}).

## Suitability
{{ page_content.suitability }}
