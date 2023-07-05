---
# code: HPC0
# name: "Introduction to Linux for HPC"
# title: "HPC0: Introduction to Linux for HPC"
permalink: /training/courses/hpc0/
breadcrumb: true
---

{% assign hpc0w = site.data.training_courses.widget | where:'url', page.permalink %}

{% assign hpc0 = hpc0w[0] %}

<!--
The following sets the page title and adds the title into a <h1> level heading.
It is done like this to reduce the number of places that need updating if course codes and names change.
Whilst the page.title (yaml title: ) in the front matter of this markdown file worked, it was yet one more place to edit.
Jekyll currently will not by default allow variables in the front matter without a plugin being written, so this javascript seemed like the best way.
In all honesty, the Web site is a bit of a horror and probably needs a complete re-write. Andy
-->
# {{ hpc0.code }}: {{ hpc0.title }}

<div id="hpc0_title">{{ hpc0.title }}</div>

<script type="text/javascript">
    var hpc0Title = document.getElementById("hpc0_title");
    if (hpc0Title) {
        document.title = hpc0Title.textContent;
    }
    hpc0Title.style.visibility = "hidden"; 
</script>

<!--
The following was a successful attempt to get the filename of this file which contains the code for the training course.
The problem is that this can't be injected into Jekyll to build the HTML as this happens prior to the javascript running.
The code has been left here as a reminder for the time being.
 
pages/training/training_courses/hpc0.md
{{ page.path }}

<p id="page_path">{{ page.path }}</p>

<script type="text/javascript">
    var pagePath = document.getElementById("page_path").innerText;
    if (pagePath) {
        const filename = new URL("file://" + pagePath).pathname.split("/").pop();
        const code = filename.split(".")[0].toUpperCase();
        document.getElementById("page_path").innerHTML = code;
    }
</script>
-->

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
