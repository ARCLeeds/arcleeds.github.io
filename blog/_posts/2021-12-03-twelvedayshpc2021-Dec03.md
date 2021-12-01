---
layout: page
title: "The holly and the myosin-5-ey"
date: 2021-12-03
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 3 in our 12 days of HPC series from Astbury Centre/Biological Sciences/Physics/Maths/Computer Science!
"
author: "FFEA Research Group (Ryan Cocking, Molly Gravett, Oliver Harlen, Sarah Harris, Joanna Leng, Daniel Read & Jarvellis Rogers)"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

FFEA Research Group (Ryan Cocking, Molly Gravett, Oliver Harlen, Sarah Harris, Joanna Leng, Daniel Read & Jarvellis Rogers)

## What department do you work in?

Astbury Centre/Biological Sciences/Physics/Maths/Computer Science

## What research question are you trying to answer?

We are interested in studying motor protein mechanics using a combination of experimental information (cryoEM), atomistic molecular dynamics and coarse-grained modelling (Fluctuating Finite Element Analysis (FFEA)). We use molecular dynamics simulations (holly) and experimental data to gain material parameters for our coarse-grained rod models (e.g. candy canes). Myosin-5a is a molecular motor that transports cargos around the cell by walking along a filamentous actin track. The holly in our figure is made up of 2 myosin-5a S1 subunits (leaves) bound to 3 actin subunits (berries). Molecular dynamics simulations are unable to cover the timescales necessary to see myosin-5a walking (ms), but are useful for gaining material parameters of the lever domain (wiggling part). We can then use these to parametrise our coarse-grained rod models (e.g. candy canes) in order to simulate much longer timescales, and try to capture its stepping motion.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

 -	Cryo-EM experiments
-	cryoEM processing software – Relion & crYOLO
-	Languages – C++ (FFEA), Python (FFEA tools)
-	Modelling software – FFEA & Amber
-	Visualisation – chimera, VMD, pyMOL & Paraview

## How does HPC help your research?

HPC is essential for our research because our calculations are too big for a desktop. More cores = more power = more images (EM)/ more atoms (MD sims)/ more elements (FFEA mesh). This means we can look at bigger systems across longer timescales.

## What is the potential impact of your research?

All organisms rely on motor proteins for essential functions however we do not understand the mechanics of how they work. Using FFEA as a means of integrating different data, we can simulate timescales long enough to cover entire motor cycles. This will enable things like visualising intermediate states, unseen before due to the spatiotemporal limitations of experimental and atomistic MD simulations.

## In your personal opinion what's the coolest thing about your research?

Reconstructing real-world biological processes from computer code and getting to witness emergent behaviour arising from physical laws. Integrating information from different sources also means working with lots of cool people from different backgrounds. 



## In your opinion, what is the ultimate Christmas song?

[https://youtu.be/_gXzES9m4MA](https://youtu.be/_gXzES9m4MA)





## Postscript

If you would like to find out more about experimental and computational approaches to investigate molecular motors at the mesoscale please read our review! [https://doi.org/10.1002/wcms.1570](https://doi.org/10.1002/wcms.1570)




  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/holly_myosin5_Molly_Gravett.gif"
    alt="" />
    
      
      <figcaption>
        A winter fireplace scene decorated with holly (2 x myosin-5a S1s as leaves)
      </figcaption>    
    
  </div>

</div>

</figure>
