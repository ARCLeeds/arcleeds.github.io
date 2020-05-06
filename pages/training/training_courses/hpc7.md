---
title: "HPC7: HPC for Data Analytics"
permalink: "/training/courses/hpc7/"
---

{% assign filtered_navigation = site.data.training_courses.widget | where:'url', page.permalink %}

{% assign page_content = filtered_navigation[0].content %}

### Booking for this course is through the IT Training Unit. [Click here to book]({{ page_content.booking }})

## Workshop content

{{ page_content.body }}


At the end of the workshop, attendees will be able to:
{% for item in page_content.outcomes %}
  - {{ item }}
{% endfor %}

## Prerequisites

{{ page_content.prereq }}
## Duration

{{ page_content.duration }}
## Frequency

{{ page_content.frequency }}

If you would like a bespoke version of this course run in your department then please [contact us](https://bit.ly/arc-help).
## Suitability

{{ page_content.suitability }}
