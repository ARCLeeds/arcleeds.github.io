---
title: "SWD2: Version Control with Git and GitHub"
permalink: "/training/courses/swd2/"
breadcrumb: true
---

{% assign swd2w = site.data.training_courses.widget | where:'code', 'SWD2' %}
{% assign swd2 = swd2w[0] %}
{% assign course = swd2.content %}

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
