---
layout: page
title: "AI is not just for Christmas: Using image-recognition to analyse exoplanetary atmospheric models."
date: 2022-12-05
subheadline: "🎄12 Days of HPC 2022"
teaser: "
 Blog post number 5 in our 12 days of HPC series from Physics (Astrophysics)!
"
author: "Felix Sainsbury-Martinez"

image:
  thumb: blog/12dayshpc-2022/2022-logo.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Felix Sainsbury-Martinez

## What department do you work in?

Physics (Astrophysics)

## What research question are you trying to answer?

Next-generation atmospheric models are becoming increasingly large, with both model resolutions increasing, as well as model complexity, as additional dynamics, such as multi-stream radiative transfer and non-equilibrium chemistry, are required to understand high-resolution exoplanet observations from, for example, JWST. We investigate if AI, specifically image-recognition, could be used to reduce the researched workload and autonomously post-processes simulation result. 

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

Our models where run using the GCM DYNAMCIO, which is written in Fortran and which is compiled using the legacy Intel fortran compiler, Intel MPI, and Intel MKL. It also links against XIOS, which is an IO library for GCMs which converts the models grid to a user-readable output, at run-time, and stores this output in netCDF files. 
Our AI image-recognition models are based upon the Keras Convolution Neural-Network which is implemented as part of TensorFlow. 

## How does HPC help your research?

As a computational astrophysicist, HPC is at the very heart of my work. For example, without HPC, the atmospheric models which where used to train the image-recognition models would not have been possible. For example, the models used here required over 2 million cpu hours to equilibrate, and other proper models, upon which these are based, have required even longer. 

## What is the potential impact of your research?

Whilst our study was limited to analysing exoplanetary atmospheric models, the underlying methodology is also applicable to models of the Earths atmosphere, an area of obvious interest, especially given how many models of the Earths atmosphere are run every single day. Given that amount of data that all these models of both the Earth and exoplanets generates, any methodology which could decrease the work required to analyses them is incredibly valuable.  

## In your personal opinion what's the coolest thing about your research?

I love how models allow us to explore the universe in ways that would otherwise be impossible. In particular, my research is focused upon hot Jupiters (imagine a Jupiter size planet orbiting closer to the sun than Mercury), objects which do not exist in our solar-system, and which can only be understood though a combination of observations (using high power telescopes) and models. Furthermore, by using Earth models to model the atmospheres of these more unusual objects, we can push the models to more extremes, thus also improving the accuracy of the model when exploring the Earths atmosphere. 





## Postscript

The paper detailing the above work has been submitted to A&A and should hopefully be available soon. 
Examples of the wind dynamics seen in our atmospheric models can be found online at [https://www.youtube.com/watch?v=s-7AXs5_owg](https://www.youtube.com/watch?v=s-7AXs5_owg) and [https://www.youtube.com/watch?v=toDpbqer2e4](https://www.youtube.com/watch?v=toDpbqer2e4).




  


<figure>
<div class='column'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/Figure_0_Felix_Sainsbury-Mart.jpg"
    alt="An example convolutional neural-network layer structure diagram used for modern optical character recognition." />
    
      
      <figcaption>
        Figure 0: An example convolutional neural-network layer structure used for modern optical character recognition. Note the use of stacked, and hence non-linear, convolution layers which are separated by dimensionality-reducing pooling layers, and which eventually feed into fully connected neural-network layers which perform the final image classification.
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/Figure_1_Felix_Sainsbury-Mart.jpg"
    alt="A panel of graphs showing winds with rows of black arrows ontop of a blue and red heatmap for 8 experimental conditions." />
    
      
      <figcaption>
        Figure 1: Temporally averaged zonal wind (arrows) and temperature profile (map) at four different pressures levels (0.0026 bar - left, 0.016 bar - middle left, 0.2 bar - middle right, and 10 bar - right) for a pair of HD209458b-like atmospheric models, one with a short orbit (‘hot’ - top) and one with a longer orbital  (‘cool’ - bottom). Each figure has been labeled with the primary feature that has been used to train our image-recognition models. 
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/Figure_2_Felix_Sainsbury-Mart.jpg"
    alt="A multi coloured scatter plot showing the categorisation of 'hot' atmospheric model" />
    
      
      <figcaption>
        Figure 2: AI categorisation map for our ‘hot’ HD209458b-like atmospheric model. Here we show the categories detected (with the opacity of each detection point representing the strength of the detection) at each pressure level (where an increase in pressure level corresponds to a decrease in actual pressure as we move out of the atmosphere) against time. The categories in question correspond to the detection of a north- south asymmetric thermal structure in blue, a banded (i.e. horizontally homogenised) thermal structure in orange, a radiative- dominated thermal structure (driven by tidal-locking) in green, a butterfly thermal structure (i.e. eastward equatorial advection flanked by slight, off-equator, westward advection) in red, a vertical thermal inversion in purple (increasing T with P) and brown (decreasing T with P), and an equatorial (wind) jet in pink. Here we find that the dynamics detected are dominated by the presence of a butterfly and deep thermal bands, both of which are typical of a model in which anisotropic horizontal transport is strong.
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/Figure_3_Felix_Sainsbury-Mart.jpg"
    alt="A multi coloured scatter plot showing the categorisation of 'cool' atmospheric model" />
    
      
      <figcaption>
        Figure 3: AI categorisation map for our ‘cool’ HD209458b-like atmospheric model. Here we find that the dynamics are more controlled by isotropic horizontal transport, leading to the tidally locked structure in the outer atmosphere, and the thermal inversion in the mid atmosphere, the later of which forms due to isotropic day-night energy transport. Not that the asymmetric bands detected in the deep atmosphere are indicative of a model in which vertical mixing is weak.  
      </figcaption>    
    
  </div>

</div>

</figure>
