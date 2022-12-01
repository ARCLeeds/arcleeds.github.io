---
layout: page
title: "What if Santa lives on an Earth-twin exoplanet in an elliptical orbit?"
date: 2022-12-12
subheadline: "🎄12 Days of HPC 2022"
teaser: "
 Blog post number 12 in our 12 days of HPC series from Astrophysics (Physics & Astronomy)!
"
author: "Binghan Liu"

image:
  thumb: blog/12dayshpc-2022/2022-logo.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Binghan Liu

## What department do you work in?

Astrophysics (Physics & Astronomy)

## What research question are you trying to answer?

With increasingly improved observation technology, we have detected thousands of exoplanets in the recent decade. Many rocky exoplanets, unlike our Earth, are not always orbiting their host star in a nearly-circular shape. The difference in the orbital geometry causes a time-varying solar irradiance entering the planet's atmosphere, and it may cause unexpected climate response and observational features.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

We simulate the Earth-twin planet system using the Whole Atmosphere Community Climate Model 6 (WACCM6). WACCM6 is one of the state-of-art Global Circulation Models (GCM). GCMs are 3D models, which are often used together with 1D radiative-transfer models if investigating a large parameter space. The novelty of WACCM6 is that it is a fully-coupled Earth-system model including not only the physics part, such as radiative transfer and dynamics in the atmosphere and in the ocean, but also chemistry in the atmosphere, biogeochemistry in the ocean, and atmosphere dynamics, land, soil, vegetation, etc. While the model is complicated and is not designed originally to be applied to rocky exoplanets, we started the simulation case in a well-tested pre-industrial run and only modified the orbital obliquity and eccentricity. Once the simulation is finished, we use Python 3.0, including the Matplotlib and the Xarray package, to analyse the results.

## How does HPC help your research?

To run the simulation with GCMs, super-computers (HPC) are needed. In my case, having a one-month simulation would require about 3 hours of HPC time with one node of 40 cores. HPC at the University of Leeds provides us with useful tutorials on how to use HPC to achieve our objectives. If we run into a problem, the tech team is always helpful. 

## What is the potential impact of your research?

As we know, the James Webb Space Telescope (JWST) has been launched, and one of its mission is to discover and characterize rocky exoplanets around M dwarfs. In the near future, with more advanced telescopes such as the HabEx, LUVOIR, and TMT concepts, we will eventually be observing rocky exoplanets around G dwarfs (Sun-like). In my research, I simulated the climate system of the Earth-Sun analogue with a different obliquity (axial tilt of the planet) and eccentricity (orbital shape). We found a higher water loss rate on Earth-like exoplanets in eccentric orbits, but the climate still remains temperate inside and outside of the traditional habitable zone. Using the Planetary Spectrum Generator (PSG) for the synthetic transit spectrum, we found a higher water feature is always present in the eccentric orbit than in the circular case, even at the coldest orbital phase. In the next step, we want to dig deeper into the climate response, and such research allows us to understand more about the habitability of the rocky worlds outside of our solar system and to constrain the rocky planet's climate better from observation.

## In your personal opinion what's the coolest thing about your research?

As you might wonder why we adopted the Earth system as the template to understand rocky exoplanet habitability, the fact that we live on Earth and hence a lot more information can be obtained and then proved with, for example, Atmosphere science, Geoscience and Earth and Ocean Science. It offers us a fundamental understanding of the habitability of other rocky worlds. The research questions are, in other words, what if we put the Earth in other planetary systems with different orbital parameters? Will our Earth still remains habitable? How would the climate and chemistry change in response to the changes we made? As future advanced telescopes and more intense research begin to unveil the mysteries, we will be able to discover if intelligent civilization exists outside of the solar system - the coolest thing about my research.






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/cesm_Binghan_Liu.png"
    alt="An organisational diagram of the components of the WACCM6 model" />
    
      
      <figcaption>
        Image I: Visualization of how models are coupled together for WACCM6 (credits: https://nordicesmhub.github.io/containers/01-introduction/)
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/TS_season_Binghan_Liu.png"
    alt="A heatmap of variations in zonal surface temperature depending on orbit type" />
    
      
      <figcaption>
        Image II: Seasonal variation of zonal mean surface temperature in the elliptical orbit (left), the circular orbit (middle), and their difference (right).
      </figcaption>    
    
  </div>

</div>

</figure>
