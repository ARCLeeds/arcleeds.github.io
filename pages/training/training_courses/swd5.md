---
title: "SWD5: Scientific Python"
permalink: "/training/courses/swd5/"
breadcrumb: true
---

{% assign swd5w = site.data.training_courses.widget | where:'code', 'SWD5' %}
{% assign swd5 = swd5w[0].content %}
{% assign course = swd5.content %}

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
