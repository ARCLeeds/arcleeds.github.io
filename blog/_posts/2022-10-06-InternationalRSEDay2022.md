---
layout: page
title:  International RSE Day 2022
date:   2022-10-06
subheadline: "RSE"
teaser: "
 Celebrating RSEs and their contribution to science at Leeds
"
author: Alex Coleman
#image:
#  thumb: pc_user.jpg

breadcrumb: true
---

On Thursday 13th October we celebrate International RSE Day 2022! 
The International RSE Day is to celebrate Research Software Engineers around the world and raise awareness for the increasingly relevant discipline of Research Software Engineering. 
And as a team of RSEs within Research Computing we've taken a few minutes to reflect on what it's like being an RSE at Leeds.

{% for member in site.data.rseday22.main %}

  {% include _quote_widget.html widget=member index=forloop.index %}

{% endfor %}


