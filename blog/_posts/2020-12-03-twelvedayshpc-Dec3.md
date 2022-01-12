---
layout: page
title:  Tis the season (for surfactant solutions) to be jelly (like)
date:   2020-12-03
subheadline: "🎄12 Days of HPC"
teaser: "
 Blog post number 3 in our 12 days of HPC series is all about surfactant solutions!
"
author: Rachel Hendrikse

image:
  thumb: blog/12dayshpc-2020/graphic12daysSmall.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Rachel Hendrikse

## What department do you work in?

Fluid Dynamics Centre for Doctoral Training

## What research question are you trying to answer?

I am trying to understand how surfactant solutions behave under shearing. These solutions can have very different viscosities depending on the amount of surfactant molecules in them. At low concentrations the thickness is very low (like water), then at around 50% concentration they're extremely thick and gel like (bit like peanut butter), and then at 70% and above they're thinner (more ketchup like). 
Surfactants are the molecules that you get in most cleaning products, personal care products and detergents. The surfactant molecule can be split into the part of it that wants to move away from water molecules, and the part that is drawn to them. Because the molecule has these two parts, when a bunch of the molecules are put in water, they can form weird structures within the water. For example, depending on the concentration, the surfactant molecules can clump into spheres or could arrange themselves into neat layers within the water. The formation of these structures is the thing affecting the solution properties, such as the viscosity. 
The viscosity of the solutions can also depend on the amount of shearing force applied, with a lot of them appearing to be less viscous when more force is applied. I'm trying to investigate what is happening with these structures in the fluid in these cases.

## How does HPC help your research?

I use the perform a lot of simulations using the simulation technique of Dissipative Particle Dynamics, while also performing some Molecular Dynamics. In these simulations I model the surfactant and water molecules in the solution to see what they're doing. I need to perform lots of different simulations to see the effects of varying surfactant concentration, as well as the length of the surfactant molecule chain. I am also investigating the effect of varying the amount of shearing force for all of these cases. These simulations can take a vary long time to run, often taking millions of iterations for the structures to form. 

## What is the potential impact of your research?

At the moment there is no good way of predicting what the viscosity of a surfactant solution is going to be, without measuring it with a rheometer. Knowing what the viscosity of a given solution was going to be would make the manufacturing process of surfactant containing products a lot easier.

## In your personal opinion what's the coolest thing about your research?

The images and videos I produce from the simulations are quite cool. It's quite nice to watch a bunch of randomly placed surfactant molecules form nice neat structures inside the simulation box. 

## What's your favourite christmas film?

Elf. I remember going to watch it in the cinema for my birthday when I was about 9, and I still watch it on my birthday every year (my birthday is only a couple of weeks before Christmas which is pretty great). 

<figure>
<div class='row' style='display:flex;'>
  <div class='column'>
    <img src='/images/blog/12dayshpc-2020/day3/MicellarPhase_Rachel Hendrikse.png' alt='Phase structures for Micellar Phase c = 15%. The micellar phase is when the surfactant molecules bunch up to form spheres within the water.' />
  </div>
  <div class='column'>
    <img src='/images/blog/12dayshpc-2020/day3/HexagonalPhase_Rachel Hendrikse.png' alt='Phase structures for Hexagonal c = 50%. The hexagonal phase consists of tubes of surfactant molecules that stack to form a honeycomb structure.'/>
  </div>
  <div class='column'>
    <img src='/images/blog/12dayshpc-2020/day3/LamellarPhase_Rachel Hendrikse.png' alt='Phase structures for Lamellar c=70%. This phase is formed when the water molecules and the surfactant molecules separate out into need parallel layers.'>
  </div>  
</div>
    <figcaption>
      Phase structures found for a variety of AES concentrations c in aqueous solution. Results found from DPD simulations using the DL_MESO software and visualisations created using VMD. Coarse graining: hydrophilic (pink) and hydrophobic (green). Water molecules not shown. <br>
      (L) Micellar Phase c = 15%. The micellar phase is when the surfactant molecules bunch up to form spheres within the water. <br>
      (M) Hexagonal c = 50%. The hexagonal phase consists of tubes of surfactant molecules that stack to form a honeycomb structure. <br>
      (R) Lamellar c=70%. This phase is formed when the water molecules and the surfactant molecules separate out into need parallel layers.
    </figcaption>
</figure>

