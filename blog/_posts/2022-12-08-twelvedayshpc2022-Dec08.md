---
layout: page
title: "Where is the source?"
date: 2022-12-08
subheadline: "🎄12 Days of HPC 2022"
teaser: "
 Blog post number 8 in our 12 days of HPC series from Faculty of Environment!
"
author: "Pedro Alejandro Espín Bedón"

image:
  thumb: blog/12dayshpc-2022/2022-logo.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Pedro Alejandro Espín Bedón

## What department do you work in?

Faculty of Environment

## What research question are you trying to answer?

Complement the monitoring studies and thus contribute to the understanding of the possible magmatic source of the Sangay volcano located in Ecuador in South America using remote sensing methodology that studies the surface deformation in places of difficult access and with little on-site instrumentation.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

I use the InSAR technique to measure the surface deformation in the volcano. I used data from the [LiCSAR automatic system](https://comet.nerc.ac.uk/comet-lics-portal/) and the [LiCSBAS software](https://github.com/yumorishita/LiCSBAS) for the time series processing. Finally I used [Def Volc](http://opgc.fr/defvolc/Vue/MainPage.php) to perform the inversion and searched the possible magmatic source.

## How does HPC help your research?

HPC helped me in processing the inversion to find my possible magmatic source with the DefVolc software.
[DefVolc]( https://doi.org/10.18145/defvolc) is a software for inverse modeling of volcano deformation data (InSAR, GNSS), whether the sources of displacement are fracture (fluid filled fracture or faults) or massive reservoirs. DefVolc is based on a 3D Boundary element method for elastic media combined with non linear inversions, based on [near-neighborhood inversion algorithms](http://opgc.fr/defvolc/Vue/MainPage.php).

## What is the potential impact of your research?

It has a great impact because using a program that takes into account the topography of the volcano and other methods in the investment has given me better and more real results in my research.

## In your personal opinion what's the coolest thing about your research?

I think that the most interesting thing is to be able to study a volcano that is located in the Amazon zone (very difficult access, 2 days walk) of my country that has been little studied, to complement the monitoring studies, with the purpose of helping and providing better information to the population in general.






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/DisplacementVector_3D_paper_Pedro_Espin_Bedon.png"
    alt="A visualisation of the potential geometry of Sangay volcano" />
    
      
      <figcaption>
        Preliminary result of the possible geometry below the Sangay Volcano
      </figcaption>    
    
  </div>

</div>

</figure>
