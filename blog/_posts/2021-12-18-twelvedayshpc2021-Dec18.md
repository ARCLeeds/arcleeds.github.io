---
layout: page
title: "All I want for Christmas is (a GP)U... for running my models for melanoma patient outcome prediction"
date: 2021-12-18
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 18 in our 12 days of HPC series from Centre for Doctoral Training in Artificial Intelligence for Medical Diagnosis and Care!
"
author: "Lucy Godson"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Lucy Godson

## What department do you work in?

Centre for Doctoral Training in Artificial Intelligence for Medical Diagnosis and Care

## What research question are you trying to answer?

My project looks a melanoma patient data from patients enrolled in the Leeds Melanoma Cohort. Melanoma is the most aggressive form of skin cancer and the fifth most common cancer in the UK. While most of our understanding of patient prognosis focuses on looking exclusively at histopathology images - high resolution images of the cells of a patient's tumour, recent studies have shown how genetic signatures from a patient's tumour can also be important in predicting patient outcome. In my research, I am aiming to use artificial intelligence methods to bring this imaging and molecular data together with clinical data, to see if this helps improve our understanding of the disease and patient outcomes.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

I mainly use python to write scripts, with PyTorch as a library for implementing neural networks.

## How does HPC help your research?

One histopathology image can contain billions of pixels, therefore my methodology looks at segmenting images from their background and splitting each image into 256 by 256 pixel patches, that are easier to handle. Needless to say, the HPC services at Leeds are extremely useful in helping me to do this, as they provide the capacity and processing and run models with these large datasets! 

## What is the potential impact of your research?

The ultimate aim is to be able to develop a tool that clinicians can use to help stratify patients into prognostic groups and better understand which patients would benefit from different treatments.

## In your personal opinion what's the coolest thing about your research?

Being able to develop a model, that uses only 256 by 256 pixel patches from a huge histopathology images, and is then able to predict a patient's outcome and locate tumour regions is fairly astounding!



## In your opinion, what is the ultimate Christmas song?

Last Christmas by Wham (but Marley and Marley from The Muppet Christmas Carol is an absolute tune!)






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/high_low_immune_Lucy_Godson.png"
    alt="" />
    
      
      <figcaption>
        Images of patient melanomas with attention heatmaps
      </figcaption>    
    
  </div>

</div>

</figure>
