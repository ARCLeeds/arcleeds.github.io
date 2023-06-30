---
title: "Research Computing Team"
permalink: "/about/team/"
breadcrumb: true
---

Meet the members of the Research Computing Team at Leeds:

## Management

{% assign sortedManagement = site.data.team.management | sort:"lastname" %}

{% for member in sortedManagement %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}

## Team

{% assign sortedMain = site.data.team.main | sort:"lastname" %}

{% for member in sortedMain %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}

## Team Alumni

{% assign sortedAlum = site.data.team.alumni | sort:"lastname" %}

{% for member in sortedAlum %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}

# Related Teams

## Data Analytics Team (DAT)

The [DAT Team](https://lida.leeds.ac.uk/data-analytics-team/) are based in Leeds Institute of Data Analytics and provide support for LIDA based projects around data management, data analysis and software engineering. They also support the secure research platform [LASER](https://lida-data-analytics-team.github.io/laserdocs/). 

{% assign sortedDat = site.data.team.dat | sort:"lastname" %}
{% for member in sortedDat %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}
