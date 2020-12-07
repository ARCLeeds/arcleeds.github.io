---
layout: page
title:  Could Santa live on exoplanets?
date:   2020-12-08
subheadline: "🎄12 Days of HPC"
teaser: "
 Blog post number 5 in our 12 days of HPC series showing how HPC is used to simulate proteins interacting with biological membranes!
"
author: Gregory Cooke

image:
  thumb: blog/12dayshpc-2020/graphic12daysSmall.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Gregory Cooke

## What department do you work in?

Astrophysics (Physics and Astronomy)

## What research question are you trying to answer?

Exoplanets are planets that orbit other stars. Through simulations, I want to find out what type of exoplanets give rise to habitable environments, what type of exoplanets don’t, and what these exoplanets look like through telescopes. A major goal of exoplanetary science and my research is to determine whether any of these planets could be hospitable for life as we know it. Or in other words, could Santa and all the Elves survive on different worlds? This depends on many factors, all of which I will have to consider during my PhD. 

Some planets have very different chemical compositions to Earth. For example, some may have more methane and carbon dioxide. Others may have no oxygen, which likely means no ozone and therefore little UV protection for life – although there are other types of atmospheres that could provide UV protection. There could be Titan-like (Titan is Saturn’s largest moon, and it’s larger than Mercury) exoplanets that have human-toxic gases such as hydrogen cyanide. Other planets could have crushing pressures and blistering temperatures like Venus or be ice-cold like the Saturnian moon Enceladus. Even stranger are exoplanets where they are tidally-locked to their star, such that one side of the planet experiences a permanent day and one side experiences permanent night, because the orbital period of the exoplanet is matched to its rotational period.

We know of over 4000 exoplanets now, and many of these are rocky, like Earth. There is a huge parameter space to investigate. Of course, with all these factors come uncertainties, and the simulations, although state-of-the art, are not perfect representations of exoplanets and their atmospheres. Combining simulations like the ones I produce alongside my supervisors, with real observational data, is the best way to understand the variety of planets out there. If life exists outside of the solar system, it could be completely different to life on Earth, so keeping an open mind is important.

## How does HPC help your research?

I am using the HPC at the University of Leeds to simulate Earth-like exoplanets. To do this I am using an Earth system model which simulates the Earth’s atmosphere, land, ice and oceans. This model is the 'high-top' version of the Community Earth System Model (CESM2 - https://www.cesm.ucar.edu/models/cesm2/), known as the Whole Atmosphere Community Climate Model (WACCM). I often need to simulate somewhere between 10-100 model years before a simulation comes into an inter-annual equilibrium state, and on a single HPC computer node, 0.5 years takes roughly 18 hours. Clearly these simulations are computationally intense, and I wouldn’t be able to get anywhere with my research on a regular laptop or a standard desktop computer. I am still surprised at how easy it is to use a supercomputer for my research, and every week I look forward to analysing the exciting new results I retrieve from the HPC. I wonder what supercomputer Santa uses to process all those wishes?

## What is the potential impact of your research?

There are theoretical and practical implications. At the moment we have not observed enough atmospheres to know the frequency of planetary atmosphere types. Do more planets have an Earth-like or a Venus-like atmosphere, or something completely different? My simulations will constrain the theoretical parameter space. Examining unique planetary atmospheres is akin to understanding the history and evolution of atmospheres in our own solar system. Such simulations also help the community analyse the observations that telescopes will take in the future, putting those observations into context. When we search for and (hopefully) find Earth-like planets, my simulations should provide insights into what telescopes glimpse in the chemical signatures from star and planet light. We might discover that on most tidally-locked planets, the poles are temperate regions, so Santa might emigrate to the colder, permanently dark side of the planet.

## In your personal opinion what's the coolest thing about your research?

Simulations will be one of the primary ways we determine the surface conditions, and potential habitability, of other planets. If we ever detect biological molecules on exoplanets (known as biosignatures), we will need simulations to determine if those molecules are of geochemical or biological origin. And if they’re biological, the implications are immense. Any work that helps towards such a discovery is super cool! My only hope is that hard-working present-producing Elves are ubiquitous in the Universe…

## What's your favourite christmas film?

Home Alone

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day6/TRAPPIST-1_Gregory Cooke.jpg' alt='An illustration of the TRAPPIST-1 planetary system compared to the Inner Solar System.' />
  </div>
  <figcaption>
    Image 1: An illustration of the TRAPPIST-1 planetary system compared to the Inner Solar System, where there are seven Earth-sized exoplanets orbiting the star TRAPPIST-1, which is a colder, smaller and dimmer star than our Sun. These planets are all orbiting closer to their star than Mercury orbits the Sun. Modelling studies indicate that the planets d, e and f could be habitable, but many think planet e is likely to be the most habitable candidate. All the planets are likely tidally-locked, where they have a permanent dayside and nightside. Image credit: NASA/JPL. 
  </figcaption>
</figure>

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day6/WACCM6_Banner_Gregory Cooke.png' alt='A WACCM6 banner showing simulation output for winds (left) and temperature (right).'/>
  </div>
  <figcaption>
    Image 2: A WACCM6 banner showing simulation output for winds (left) and temperature (right). WACCM6 simulates the atmosphere up to 140 km, has fully coupled chemistry and physics, over 500 chemical reactions, and fully interactive atmosphere, land, land ice, sea ice and ocean models, which are all coupled. No wonder we need the HPC! 
  </figcaption>
</figure>

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day6/WACCM6_Output_Gregory Cooke.png' alt='Output from two CESM2 (WACCM6) simulations comparing two planets, one of which is much colder than the other, where all the land is covered in ice, and the oceans are much colder, with a larger sea-ice extent.'>
  </div>  
  <figcaption>
    Image 3: Output from two CESM2 (WACCM6) simulations comparing two planets, one of which is much colder than the other, where all the land is covered in ice, and the oceans are much colder, with a larger sea-ice extent. Would Santa be able to live here? Maybe, but there would be nowhere for him to relax on a beach and get a tan.
  </figcaption>
</figure>