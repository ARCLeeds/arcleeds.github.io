---
layout: page
title: "All I Want for Christmas is Better Air Quality"
date: 2021-12-17
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 17 in our 12 days of HPC series from School of Earth & Environment - Institute for Climate & Atmospheric Science!
"
author: "Connor Clayton"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Connor Clayton

## What department do you work in?

School of Earth & Environment - Institute for Climate & Atmospheric Science

## What research question are you trying to answer?

I am using the new integrated socioeconomic & climate scenarios (SSPs) developed for the IPCC's 2021 report on climate change to estimate how following different strategies for mitigating or adapting to climate change could affect air pollution-related mortality in Europe. The scenarios I am using are:

- SSP1-2.6, which represents a world in which rapid adoption of sustainable behaviours and policies result in low challenges to climate mitigation and adaptation and effective pollution control, limiting radiative forcing to 2.6 Wm-2
- SSP2-4.5 which assumes no great shift in trajectory to the present day in terms of climate mitigation and adaptation. Radiative forcing is 4.5 Wm-2 at the end of the century.
- SSP3-7.0 which assumes no additional climate mitigation, adaptation or pollution control and results in a radiative forcing of 7.0 Wm-2 at the end of the century.

More specifically I am trying to compare European air pollution in the 2050s following these scenarios with present-day air pollution using a high-resolution model. I then want to isolate how climate mitigation alone affects air pollution in each of the scenarios. I will take this output and use functions that can then predict how many lives will be lost from air pollution-related issues in each of the scenarios. The objective of this is to quantify how beneficial emissions reductions for the sake of climate mitigation could also be for reducing the health burden of air pollution. This could hopefully demonstrate how beneficial climate mitigation could be for other pressing environmental issues.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

I use WRF-Chem, a coupled chemistry-climate model hosted on ARC4. I take the inputs for the model from different sources, for example the anthropogenic emissions data is hosted on JASMIN and information on the climate and meteorology at the edge of my domain of interest is coming from a climate model called WACCM, currently being used at the National Centre for Atmospheric Research in Colorado.

I use python for processing input into my model and for analysing output. I frequently use xarray for processing input. When plotting output, I tend to use a combination of matplotlib and cartopy to produce maps and graphs.

## How does HPC help your research?

WRF-Chem is an incredibly detailed and complex model, which calculates interactions between all kinds of chemical and meteorological variables. It produces huge quantities of data, even for relatively short simulation periods. A normal PC would not have the ability to run WRF-Chem effectively or enough storage space for a large quantity of output. Without HPC, I wouldn't be able to do this project at all! 

## What is the potential impact of your research?

So far there isn't a huge amount of published research examining future air pollution using the scenarios I am using. Much of the previous work in the field have used scenarios that do not factor in socio-economic changes the way that the SSPs do, making them a big advancement on previous scenarios.

The work that does exist on modelling future air pollution from the SSPs tends to use climate models or reduced-form models that have a comparatively low resolution, this can make it difficult for these models to effectively calculate the formation of some air pollutants and makes it harder for them to represent regional trends such as pollution spikes over urban areas. This makes it a lot more difficult to produce effective estimations of the health impact of air pollution using these kind of models. By using a higher-resolution model and limiting my focus to Europe, I will be able to produce better estimates of how changes in air quality in the different scenarios could affect health.

This could be interesting to the public and policymakers as a tangible estimate of what the scenarios will actually mean for people. This could be more effective for demonstrating why we need to aim to follow a path similar to the more sustainable scenarios.

## In your personal opinion what's the coolest thing about your research?

I really enjoy that my work bridges the gap between climate and health. Ultimately, climate mitigation is important because climate change could result in conditions that are damaging to human health and wellbeing. I think it's cool that my research will take model output and then translate that into an estimation of the human lives that can be saved following more sustainable pathways compared to less sustainable pathways from just one of the environmental issues associated with the climate. I think producing that kind of information is really important for communicating the importance and value of climate mitigation. 



## In your opinion, what is the ultimate Christmas song?

Merry Xmas Everybody - Slade






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/control_perturbed_map_Connor_Clayton.png"
    alt="" />
    
      
      <figcaption>
        Fig 1 - map showing percentage difference in O3 concentration in Nov 2015 after removal of transport emissions.
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/pop_weight_bargraph_Connor_Clayton.PNG"
    alt="" />
    
      
      <figcaption>
        
Fig 2 - Bar graph of population-weighted PM2.5 exposure for several European countries in November 2015 before and after removal of transport emissions
      </figcaption>    
    
  </div>

</div>

</figure>
