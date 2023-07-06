---
title: 'HPC0: Introduction to Linux for HPC' 
# title: {{ code }}: {{ name }}
permalink: /training/courses/hpc0/
breadcrumb: true
#layout: page_training_course
---

{% assign hpc0w = site.data.training_courses.widget | where:'code', 'HPC0' %}
{% assign hpc0 = hpc0w[0] %}
{% assign course = hpc0.content %} 

{% assign hpc1w = site.data.training_courses.widget | where:'code', 'HPC1' %}
{% assign hpc1 = hpc1w[0] %} 

### Booking for this course is through the IT Training Unit. [Click here to book]({{ course.booking }})

## Workshop content
- {{ hpc0.text }}
- {{ course.body }}
- Syllabus:
{% for item in course.syllabus %}
  - {{ item }}
{% endfor %}
- The users work on a login node and do not learn about submitting jobs in this workshop
  - To learn about the HPC resources at Leeds and be guided in using them properly, please consider signing up to the following course:
    - [{{ hpc1.code }}: {{ hpc1.title }}]({{ hpc1.url }}).

## Prerequisites
- A HPC user account ([Click here to get an account]({{ site.data.variables.get_account_url }}) - a process that typically takes at least 1 full working day)
{{ course.prerequisites }}
 
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
