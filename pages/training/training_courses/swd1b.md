---
title: "SWD1b: Introduction to R programming"
permalink: "/training/courses/swd1b/"
breadcrumb: true
---

{% assign swd1bw = site.data.training_courses.widget | where:'code', 'SWD1b' %}
{% assign swd1b = swd1bw[0] %}
{% assign course = swd1b.content %}

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
