---
layout: page
show_meta: false
title: "Services"
subheadline: "Layouts of Feeling Responsive"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/services/"
---

{% include list-nav-dd-items ddtitle='Services' %}

<p>starting...</p>
<ul>
      {% assign filtered_navigation = site.data.navigation | where:'title', 'Services' %}
	  {% for link in filtered_navigation %}
	  in..
	  {% for dropdown_link in link.dropdown %}
	  inside...
          <li>Hi<a href="{{dropdown_link.url}}">{{dropdown_link.title}}</a></li>
      {% endfor %}
      {% endfor %}
  </ul>  
<p>ending...</p>
