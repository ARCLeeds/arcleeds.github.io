---
layout: page
title:  A whole world of cloud patterns are coming to you this Christmas
date:   2020-12-09
subheadline: "🎄12 Days of HPC"
teaser: "
 Blog post number 7 in our 12 days of HPC series showing how HPC is used to study clouds and the climate!
"
author: Leif Denby

image:
  thumb: blog/12dayshpc-2020/graphic12daysSmall.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Leif Denby

## What department do you work in?

School of Earth and Environment

## What research question are you trying to answer?

The representation of shallow tradewind cumulus clouds in climate models accounts for majority of inter-model spread in climate projections, highlighting an urgent need to understand these clouds better. In particular, their spatial organisation appears to cause a strong impact of their radiative properties and dynamical evolution. The precise mechanisms driving different forms of convective organisation which arise both in nature and in simulations are however currently unknown.

I have created a technique using an unsupervised neural network model to autonomously discover different patterns of convective organisation and classify spatial regions into distinct forms of convective organisation. This allows me to identify the large-scale and local environmental conditions (e.g. windshear, horizontal convergence) present in differently organised states, and study how these cloud types develop. The model is trained on GOES-R imagery of the tropical Atlantic.


## How does HPC help your research?

I use GPUs for training the neural networks I work with and the ARC HPC system gives me access to these.

## What is the potential impact of your research?

Being able to create better climate predictions through knowing what drives the formation of shallow convective clouds.

## In your personal opinion what's the coolest thing about your research?

It combines the computer science of recent unique techniques with the physical application of cloud formation, to study something inherently difficult about the Earth system.

## What's your favourite christmas film?

The Muppet Christmas Carol

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day7/goes16_202002051.crop_Leif Denby.gif' alt='RGB composite from GOES-16 imagery over the tropical Atlantic 5/2/2020'/>
  </div>
  <figcaption>
RGB composite from GOES-16 imagery over the tropical Atlantic 5/2/2020 (top) with three PCA components of embedding vector produced by unsupervised neural network overlaid (bottom). The regions of similar color in the overlay indicate that the neural network has predicted that these contain similar cloud structures.
  </figcaption>
</figure>
