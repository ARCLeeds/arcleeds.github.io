---
# code: HPC0
# name: "Introduction to Linux for HPC at Leeds"
# title: "HPC0: Introduction to Linux for HPC at Leeds"
permalink: /training/courses/hpc0/
breadcrumb: true
---

{% assign hpc0w = site.data.training_courses.widget | where:'url', page.permalink %}

{% assign hpc0 = hpc0w[0] %}



<!--
The following sets the page title and puts in the title.
This is to avoid having to have lots of places to update the title.
-->
# {{ hpc0.code }}: {{ hpc0.title }}

<span id="pagetitle" style="display: none">{{ hpc0.title }}</span>

<script type="text/javascript">
    var pagetitle = document.getElementById("pagetitle");
    if (pagetitle) {
        document.title = pagetitle.textContent;
    }
</script>



{% assign course = hpc0.content %} 

{% assign hpc1w = site.data.training_courses.widget | where:'code', 'HPC1' %}

{% assign hpc1 = hpc1w[0] %}

{% assign hpc1code = site.pages.training.training_courses.hpc1.code %}

### Booking for this course is through the IT Training Unit. [Click here to book]({{ page_content.booking }})

## Workshop content
- {{ hpc1code }}
- {{ hpc0.text }}
- Aimed at new HPC users.
- [Get an account]({{ site.data.variables.get_account_url }})
in preparation for the workshop (a process that typically takes at least 1 full working day) 
- The main purpose of the workshop is to develop knowledge, skills and confidence in using
Linux command line and preparing shell scripts.
- The workshop does not cover job submission which is covered in the subsequent course: 
[{{ hpc1.code }}: {{ hpc1.title }}]({{ hpc1.url }})

## Syllabus:
{% for item in course.syllabus %}
  - {{ item }}
{% endfor %}

## Prerequisites
{{ course.prereq }}

## Duration
{{ course.duration }}

## Frequency
{{ course.frequency }}

If you would like a bespoke version of this course run in your department then please
[contact us]({{ site.data.variables.contact_url }}).

## Suitability
{{ course.suitability }}
