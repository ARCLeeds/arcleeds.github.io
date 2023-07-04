---
title: "HPC0: Introduction to Linux for HPC at Leeds"
permalink: /training/courses/hpc0/
breadcrumb: true
---

{% assign filtered_navigation = site.data.training_courses.widget | where:'url', page.permalink %}

{% assign course_page = filtered_navigation[0] %}



{% assign page_content = filtered_navigation[0].content %}

### Booking for this course is through the IT Training Unit. [Click here to book]({{ page_content.booking }})

## Workshop content
- {{ course_page.text }}
- Aimed at new HPC users.
- [Get an account]({{ site.data.variables.get_account_url }})
in preparation for the workshop (a process that typically takes at least 1 full working day) 
- The main purpose of the workshop is to develop knowledge, skills and confidence in using
Linux command line and preparing shell scripts.
- The workshop does not cover job submission which is covered in the subsequent course: 
[{{ hpc1[0].code }}: {{ hpc1[0].title }}]({{ hpc1[0].url }})

## Syllabus:
{% for item in page_content.syllabus %}
  - {{ item }}
{% endfor %}

## Prerequisites
{{ page_content.prereq }}

## Duration
{{ page_content.duration }}

## Frequency
{{ page_content.frequency }}

If you would like a bespoke version of this course run in your department then please
[contact us]({{ site.data.variables.contact_url }}).

## Suitability
{{ page_content.suitability }}
