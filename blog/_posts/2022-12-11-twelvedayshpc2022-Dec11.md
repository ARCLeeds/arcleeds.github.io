---
layout: page
title: "Bringing the Christmas dinner home in ten minutes"
date: 2022-12-11
subheadline: "🎄12 Days of HPC 2022"
teaser: "
 Blog post number 11 in our 12 days of HPC series from School of Computing and Faculty of Biological Sciences!
"
author: "Sujit Kumar Nath"

image:
  thumb: blog/12dayshpc-2022/2022-logo.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Sujit Kumar Nath

## What department do you work in?

School of Computing and Faculty of Biological Sciences

## What research question are you trying to answer?

The Saharan silver ants, scientifically known as Cataglyphis bombycina, have a harsh environment to live in the scorching heat of Saharan deserts. Largely due to the extremely high temperatures of their habitat, but also due to the threat of their predators,  the ants can be active outside their nest for only about ten minutes per day, and that also happens to be at midday when the temperature rises around 47 degrees Celsius. Below this temperature, its predators can still roam around on the hot sand but when the temperature rises beyond, the predators go under their shelter, and that is when the desert ants can come out for searching their food without being their predator's lunch. The unique shining silver-coloured coating on the ants' body (hence their name) can support them only for ten minutes out under the sun and on the hot sand when no other creature can tolerate this temperature. But this ten-minute time-bound is very crucial and any overstaying will surely grill them to death. So, their challenge is to find their food within ten minutes to avoid starvation.  However, Mother Nature, being kind, has evolved the desert ants to be the fastest animal on this earth. The silver ants travel 108 times their body length per second—the equivalent of a human running 440 miles an hour. 

However, running only at high speed in a single direction does not help much in securing food in a short amount of time. Since the location of the food is random (it can be in any arbitrary direction, at any arbitrary distance from the nest), running like Usain Bolt towards the South does not help to hit any food located in the North of the nest. Therefore, the ants occasionally change their direction of motion randomly, and then run again in the newly chosen random direction. This type of random motion is known as run-and-tumble motion in soft condensed matter physics and statistical physics. We can model such motion using stochastic differential equations and can estimate the probability of successfully finding food located at a random location, given a running speed and tumbling (direction-changing) rate. These stochastic models need to be simulated to quantitatively understand these random dynamics. We use HPC at the University of Leeds to study such ecological complex systems. 

A video link to get motivated: 
[https://www.youtube.com/watch?v=mCaVvHeI8jU](https://www.youtube.com/watch?v=mCaVvHeI8jU)

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

Python

## How does HPC help your research?

HPC helps me to simulate the stochastic dynamics of these systems which are computationally very intensive. HPC is an indispensable part of this research.

## What is the potential impact of your research?

Apart from understanding the foraging behaviour of the desert ants, this research helps to design stochastic optimisation algorithm based on random search methods, motivated by such ecological systems. In stochastic optimisation, these optimised run-and-tumble random walk concepts can be used to find the extrema of objective functions in a given parameter landscape. 

## In your personal opinion what's the coolest thing about your research?

Understanding evolutionary benefits of ecological systems and using them to solve real life problems. 






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/desertAnt_Sujit_Nath.png"
    alt="A schematic of a foraging ant" />
    
      
      <figcaption>
        A schematic of the foraging path of a desert ant (Image taken from the internet).
      </figcaption>    
    
  </div>

</div>

</figure>
