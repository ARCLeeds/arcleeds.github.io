---
title: "Consultancy Support for Research"
permalink: "/consulting/"
breadcrumb: true
---

Our Research Computing team at the University of Leeds, delivered through our dedicated Research Software Engineers (RSEs), offers a comprehensive range of expert services designed to support researchers throughout the entire lifecycle of their projects. You can meet members of the team via the [Team page]({{ site.baseurl }}/about/team/).

## How to Access Our Services

We are committed to making our RSE expertise accessible to all researchers. General advice, guidance, and grant consultancy are always available at **no cost**. Whether you need help refining your research ideas, selecting the right tools, or developing a solid bid, our team is here to support you.

For new projects, we understand that initial funding may be limited. Therefore, we offer a **limited** number of **free hours** for proof of concept work and other pump-priming activities to help you get started.

Typically, access to our RSE services is arranged by costing the support into your research grants. Our RSEs are usually costed as **Top of Grade 7** or **Grade 8** technical staff under 'Directly Incurred' costs, allowing you to tailor the level of support to your project’s needs. This can range from a commitment of **0.2 FTE for one month**, to more extensive support from multiple RSEs over a longer period.

## How to Request Support

To begin, simply submit the details of your project via our contact form, including the scope of your project, the technical requirements, and the expected timelines. Once we receive your submission, we will reach out to arrange a one-to-one scoping meeting. During this meeting, we’ll discuss your needs in detail and determine the best way to proceed, ensuring you receive the most effective support for your research.

<div class="event-space">
    <div class="event-tile" style="background-color:#56B4E9">
        <a class="event-tile-a" href="https://it.leeds.ac.uk/it?id=sc_cat_item&sys_id=7587b2530f675f00a82247ece1050eda">
            <strong>Contact Form (login required)</strong>
        </a>
    </div>
</div>

<!-- ### Case studies

You can read through some examples of consulting work the Research Computing Team have been part of at our [Case studies blog]({{ site.baseurl }}/about/casestudies/). -->

## Service Catalogue Summary

This catalogue details the services we provide. By consulting this list, you can identify the specific support you need from our team to ensure the success of your research, from initial concept through to final dissemination.

We're constantly developing new skills, integrating new colleagues and learning about new technologies so please get in touch if you are unsure if we can work together.

{% comment %}

  Generates the catalogue summary.

  All event information is retrieved from `_data/service_catalogue.yml`. This includes:
    - Service Title
    - Service Url

{% endcomment %}

{% assign page_list = site.data.service_catalogue %}

{% for service in page_list %}
        {% assign page = service %}
        {% include _catalogue.html %}
{% endfor %}
