---
layout: page
title: "Learning to go down in life: A tale of root gravitropism "
date: 2021-12-13
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 13 in our 12 days of HPC series from School of Computing and Faculty of Biological Sciences!
"
author: "Sujit Kumar Nath"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Sujit Kumar Nath

## What department do you work in?

School of Computing and Faculty of Biological Sciences

## What research question are you trying to answer?

Like all organisms, plants require a variety of resources to survive and reproduce. Being sessile, plants
must be capable of maximizing the amount of resources captured from their surroundings. A plants
shape, or architecture, is an important aspect of resource optimization, with different architectures
maximizing the capture of different resources available for uptake. For example, topsoil tends to
contain a greater concentration of nutrients but is often drier than than deeper soil layers. Hence,
understanding the control parameters of the growth of plant-roots under the influence of gravity
(called gravitropism) is of immense importance to grow healthy crops (capable of taking nutrients in
an optimized way), and to produce drought resistant plants in future. 

We capture images of plant-roots (Arabidopsis Thaliana) under gravity, over time, by reorienting them 
at a non-vertical angle (say at 90 degree). The collection of images are then analysed by our 
home-developed image processing software to prepare the time series data of the root-tip angle 
using HPC facility at the University of Leeds. This data basically tells us how the roots behave 
at various angles, i.e., how fast the roots bend at different angles. 

Having obtained this biological data we analyze (statistical analyses) this data to understand 
whether the bending behavior of roots is only a function of angle or whether there is any other factor 
which determines the bending behavior. We try to find out whether the root remembers its reorientation 
angle while bending, or whether the root has a memory of its initial condition of gravistimulation or 
not, and if it remembers its initial condition then how long that memory lasts etc. For example, 
are the behavior of two roots, one reoriented at 90 degree and the other at 60 degree, same? If not, 
then how long and how much do they differ? Do the roots remember whether they were reoriented at 60 degree 
or 90 degree? If they do remember, then how long their memory last? 

To answer such questions (in the modern terminology these type of research topics are called complex 
systems) we work together as an interdisciplinary team consisting of biologists, computer scientists, 
physicists, and mathematicians. We exploit all of our different expertise and perspectives to 
get a broad understanding of this complex system. To answer such questions, we use various 
statistical techniques, data visualizations, and mathematical modelling. This project can be a benchmark 
example highlighting the necessity of interdisciplinary work force to solve interesting and 
impactful problems in complex systems. 

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

Python, Image processing software (home-developed and written in Python), Linux shell-scripts. 

## How does HPC help your research?

Most of our heavy codes such as the image processing software and simulations (mathematical models) are run in HPC. HPC is an indispensable part of this research. 

## What is the potential impact of your research?

This research has potential applications in future crop science, such as in growing healthy plants, drought resistant plants etc. This research can contribute to food security for our future. 

## In your personal opinion what's the coolest thing about your research?

That we can even understand plants and their behavior. 






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/statolith_Sujit_Nath.png"
    alt="" />
    
      
      <figcaption>
        The roots perceive the direction of gravity by the sedimentation of starch-filled particles
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/tracking_Sujit_Nath.png"
    alt="" />
    
      
      <figcaption>
         called statoliths (green balls)
      </figcaption>    
    
  </div>

</div>

</figure>
