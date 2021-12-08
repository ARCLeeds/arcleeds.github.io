---
layout: page
title:  Hot Jupiters to warm your cold winter
date:   2020-12-10
subheadline: "🎄12 Days of HPC"
teaser: "
 Blog post number 8 in our 12 days of HPC series showing how HPC is used to study some extreme exoplanets!
"
author: Craig Duguid

image:
  thumb: blog/12dayshpc-2020/graphic12daysSmall.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Craig Duguid

## What department do you work in?

CDT Fluid Dynamics (applied mathematics)

## What research question are you trying to answer?

Hot Jupiters are a class of extreme planet which are gas giant planets, of roughly the mass of Jupiter or larger, but orbit very close to their host star (the length of the year for these planets ranges from 10 Earth days to as little as 16 hours!). Being so close to their host star they are subject to significant tidal interactions, similar to those of the Earth-Moon system, which can lead to the inward migration of the planet (which then could result in it being consumed by the star!).

I am interested in looking at the interaction between the tidally excited flow within the star (excited by the planet) and the convective motion of the fluid. This interaction can dissipate tidal energy and hence transfer orbital momentum from the planet (so the planet spirals inwards) into spin momentum of the star (the star spins up).

The interaction between this tidal flow and the convection is not the only mechanism which can dissipate the tidal energy, but it is typically thought to be the dominant one. My work is questioning this assumption that it is the dominant mechanism.

## How does HPC help your research?

In order to explore this problem I have to run many simulations of convection with a tidal flow and analyse the results. The reason many simulations are required is because we need to explore how the dissipation depends on things like the strength of the convection, the tidal frequency (which is related to the orbital period), the amplitude of the tidal flow (which is related to the Hot Jupiters mass), and more. This has resulted in an extensive study using more than 700 simulations. If it wasnt for HPC my work would not be possible as we have uncovered that the physics is much more complicated than previous theories had been able to predict!

## What is the potential impact of your research?

We have recently observed the slow inspiral of the Hot Jupiter exoplanet WASP-12b and my research can help us understand this observation. My work is important for understanding recent observations of some Hot Jupiter planets.

## In your personal opinion what's the coolest thing about your research?

It is not possible to pick one thing! But perhaps one thing to highlight is just how crazy other planetary systems are. This gives theorists, like myself, plenty of new problems to consider (thanks observers!).

## What's your favourite christmas film?

The Snowman - I am only saying this because when I was around 5 I saw this movie at school. On my way home I started crying for seemingly no apparent reason in the back of my Mums car. When asked what was wrong I said "the snowman melted". My family has continually mocked me for this every single year.... 

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day8/tidal_lag_Craig Duguid.png' alt='Schematic of the tidal deformation (due to the tidal flow)'/>
  </div>
  <figcaption>
Schematic of the tidal deformation (due to the tidal flow) which in this case is lagging behind the line of centres, which is generally the case for Hot Jupiter's but the opposite is the case for the Earth-Moon system. The star (left object) is pulled towards the planet resulting in the primary's spin up. Due to Newtons third law this also applies a decelerating (in this example) force to the planet resulting in an inward migration.
  </figcaption>
</figure>

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day8/star3png_Craig Duguid.png' alt='Stars like the Sun have a convective shell which is where I am interested in.'/>
  </div>
  <figcaption>
Stars like the Sun have a convective shell which is where I am interested in. Instead of looking at the entire star, which would be really difficult, I consider a small cuboid patch of this region to represent the entire convective zone. This box is then thermally unstable to convection, that is it is hot at the bottom and cooler at the top, and is subjected to a tidal like shear flow (the shear flow periodically changes direction like the eb and flow of the tides).
  </figcaption>
</figure>

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day8/ux_case2_and_8_Craig Duguid.png' alt='These are examples of what the fluid flow looks like for two very different tidal frequencies.'/>
  </div>
  <figcaption>
These are examples of what the fluid flow looks like for two very different tidal frequencies. By eye it is not possible to see any difference as the motion due to the convection is much stronger than the tidal shear. However, there are subtle statistical differences between the two which require a lot of data to resolve.
  </figcaption>
</figure>

