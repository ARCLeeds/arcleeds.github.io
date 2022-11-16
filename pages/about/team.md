---
title: "Research Computing Team"
permalink: "/about/team/"
breadcrumb: true
---

Meet the members of the Research Computing Team at Leeds:

{% for member in site.data.team.main %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}

## Team Alumni

{% for member in site.data.team.alumni %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}

# Related Teams

## Data Analytics Team (DAT)

The [DAT Team](https://lida.leeds.ac.uk/data-analytics-team/) are based in Leeds Institute of Data Analytics and provide support for LIDA based projects around data management, data analysis and software engineering. They also support the secure research platform [LASER](https://lida-data-analytics-team.github.io/laserdocs/). 

{% for member in site.data.team.dat %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}