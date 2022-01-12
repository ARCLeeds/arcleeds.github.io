---
layout: page
title: "500 birds of Christmas"
date: 2021-12-06
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 6 in our 12 days of HPC series from School of Geography on identifying birds using cutting hedge technology!
"
author: "Sofia Biffi"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Sofia Biffi

## What department do you work in?

School of Geography

## What research question are you trying to answer?

Hedgerows are an important part of traditional agricultural landscapes throughout Europe, where they have been used for shelter, crop protection, and livestock enclosure since the Neolithic. In the UK, they have suffered strong declines mid-20th century in association with agricultural intensification. Today, farmers are encouraged to reverse this decline by planting hedgerows as part of agri-environment schemes and other environmentally-friendly initiatives.  

As part of the Resilient Dairy Landscape project at Leeds we are looking at the environmental impacts of planting hedgerows on dairy farms in Cumbria. We are focusing on their role for carbon sequestration, nutrient cycling, flood mitigation, and biodiversity. When it comes to biodiversity, we are researching how hedgerow planting can, over time, benefit bird communities in an otherwise intensively managed environment. Using groups of hedgerows of known ages we can assess how hedgerows can support biodiversity as they grow and mature. Does hedgerow planting help boosting the activity of birds? How long after planting do we see changes in the bird community activity and composition?

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

Traditionally, assessing the effects of hedge characteristics on birds is expensive and time consuming 
and bird monitoring techniques require high expertise. As this is a broad project encompassing many of the ecosystem services that hedgerows are associated with, we could not afford to spend weeks in the field listening to bird calls. So, have explored ways to monitor biodiversity remotely, using passive acoustic monitoring through autonomous recording units. These recording units ([AudioMoths](https://www.openacousticdevices.info/audiomoth)) are deployed on the field programmed to turn on and start recording at set times of the day or night. They are left there for a few weeks (until the batteries run out!) to record the soundscape without the disturbance of human recorders on the spot, which for example, can alter bird calling behaviour. The soundscapes then can be analysed by either re-listening to them or through the use of machine learning.

For soundscape analysis we use [BirdNET](https://github.com/kahst/BirdNET), a freely available program written in Python. BirdNETuses sound spectrograms to identify bird calls and attribute them to species through deep machine learning. It has been trained for over 500 European species and accounts, to some degree, for the local dialects that are shown by bird communities living geographically apart, as well as for background noise. 
BirdNET is run through the HPC and then the output is analysed in R. 

## How does HPC help your research?

We have collected around 4500 hours of daylight soundscapes, which cannot be analysed by playback and manual identification, and would take days (if not probably weeks) to analyse using BirdNET on our computers. HPC allows us to run BirdNET over all these recordings in a short time!

## What is the potential impact of your research?

Technology wise, the development of BirdNET is new, as is the use of convoluted neural networks in general to identify species from soundscapes.  This is one of the very first studies to test BirdNET over a large number of recordings. We will be comparing its outputs with the identification of expert ornithologists to assess its error rate,  which will inform how this tool may be used in future large scale studies involving bird communities monitoring. 

In terms of hedgerow research, the more we know about how hedgerows can provide ecosystem services, the more we can advocate for their planting across the country. With both bird and insect communities declining in agricultural landscapes, we are hoping to quantify how hedgerows can help support their activity, and give an estimate of the time it will take for this to happen. 

## In your personal opinion what's the coolest thing about your research?

While at the moment we are focusing on birds, we will be using HPC to process the recordings again listening to insects! The technology behind the identification of insects using their passive by-product of wing movement (buzzing) is very new, so it will be very exciting to see if we can pick up differences in pollinator groups among younger and older hedgerows.   



## In your opinion, what is the ultimate Christmas song?

Jingle Bell Rock






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/cow_and_audiomoth_Sofia_Biffi.jpeg"
    alt="" />
    
      
      <figcaption>
        An AudioMoth busy at work in its natural environment (Photo by Seb Stroud)
      </figcaption>    
    
  </div>

</div>

</figure>
