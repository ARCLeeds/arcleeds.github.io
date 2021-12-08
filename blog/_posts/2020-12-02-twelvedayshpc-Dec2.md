---
layout: page
title:  Now bring us a YIG'y pudding
date:   2020-12-02
subheadline: "🎄12 Days of HPC"
teaser: "
 Blog post number 2 in our 12 days of HPC series and we're off to learn about YIGs!
"
author: Joseph Barker

image:
  thumb: blog/12dayshpc-2020/graphic12daysSmall.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Joseph Barker

## What department do you work in?

School of Physics and Astronomy

## What research question are you trying to answer?

We work in the field of insulator spintronics. Instead of moving electrons around a circuit (electronics) we move ""spin"" the magnetic property of electrons--without moving the electrons! In magnetic materials particles called magnons can diffuse and carry spin independently of the electrons. This means we can transmit, store and manipulate information without generating the heat caused by electrons moving. This is understood on a basic level, but the best materials for magnon transport are incredibly complex magnets. Chief amongst them is yttrium iron garnet (YIG), an entirely man made material cooked up in a Russian lab decades ago. We are trying to understand how different types of magnons affect the transport of spin. We have recently made a two-pronged approach, first using polarised neutron scattering on YIG and making the first ever measurements of magnon polarisation [Physical Review Letters 125, 027201 (2020)](https://doi.org/10.1103/PhysRevLett.125.027201) to confirm our previous predictions from atomistic spin dynamics simulations [Physical Review Letters 117, 217201 (2016)](http://dx.doi.org/10.1103/PhysRevLett.117.217201). The experimental method was so complicated that we had to make detailed simulations of the neutron scattering cross section from YIG to confirm we were interpreting it correctly. Secondly we have made state of the art electronic structure calculations of YIG [arXiv:2009.14601](https://arxiv.org/abs/2009.14601). Using advanced methods (Quasiparticle Self-Consistent GW) the calculations are entirely parameter free (something which is uncommon for magnetic insulators) giving an entirely independent result to compare to experimental measurements.


## How does HPC help your research?

We make extensive use of GPUs to accelerate our work. YIG is such a large and complex material that some results are only tractable with the acceleration of GPUs. For example we attempted the electronic structure calculations a couple of years ago (before the GPU implementation was completed) and a single iteration of the algorithm would take days. Now on a tier0 supercomputer (the Marconi100 in Italy) an iteration takes about 10 minutes. When doing statistical modelling for temperature effects we have recently improved the methodology but with an increase in computational cost. However the impact has been almost negligible because we can effectively parallelise the calculation on GPUs and cover some of the cost through asynchronous execution of different, independent parts of the calculation.

## What is the potential impact of your research?

The combination of quantitative multi scale methods we use allows us to interrogate materials in more detail than can be done experimentally. In principle it allows us to predict magnet properties of materials before they have been measured. In the long term we hope to better understand what magnetic features affect the magnon spin transport which will help us to select materials for building low energy computing devices in the future.


## In your personal opinion what's the coolest thing about your research?

After tens or hundreds of thousands of lines of code being able to directly compare simulations and experiments and finding agreement.

## What's your favourite christmas film?

Die Hard

<figure style="text-align: center;">
    <img src='/images/blog/12dayshpc-2020/day2/YIG_comparison_Joseph Barker.png' alt='A comparison of polarised neutron scattering measurement of the magnons in YIG with our simulations of the finite temperature neutron scattering cross section using atomistic spin dynamics.' />
    <figcaption>
      A comparison of polarised neutron scattering measurement of the magnons in YIG with our simulations of the finite temperature neutron scattering cross section using atomistic spin dynamics.
    </figcaption>
</figure>

