---
title: "SWD1a: Introduction to Python programming"
permalink: "/training/courses/swd1a/"
breadcrumb: true
---

{% assign swd1aw = site.data.training_courses.widget | where:'code', 'SWD1a' %}
{% assign swd1a = swd1aw[0] %}
{% assign course = swd1a.content %}

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
