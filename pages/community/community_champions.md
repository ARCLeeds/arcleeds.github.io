---
title: "Champions"
permalink: "/community/champions/"
breadcrumb: true
---

#### Research Computing Champions are members of the Research community who we think are super!
<br>
They are researchers who we think do great research and know their way around subject-specific computing tools and techniques. They help the Research Computing Team by being a point of call for domain specific queries and who are happy to help others too. To reward their collaborations with us we offer them access to the cool, new things we often get to work with and provide them with access to our smaller peer training sessions we run.

Could you be a champion or know someone who could be? [Send us a message (login required).](https://it.leeds.ac.uk/it?id=sc_cat_item&sys_id=7587b2530f675f00a82247ece1050eda)

Below are the current champions:

{% for member in site.data.champs.main %}

  {% include _about-widget.html widget=member %}

  <br>

{% endfor %}
