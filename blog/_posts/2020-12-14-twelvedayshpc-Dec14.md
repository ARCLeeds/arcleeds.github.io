---
layout: page
title:  Improving Santa’s workshop’s design process
date:   2020-12-14
subheadline: "🎄12 Days of HPC"
teaser: "
 Blog post number 10 in our 12 days of HPC series looking at using machine learning to improve the product design process!
"
author: Thomas Hazlehurst

image:
  thumb: blog/12dayshpc-2020/graphic12daysSmall.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Dr Tom Hazlehurst

## What department do you work in?

School of Mechanical Engineering

## What research question are you trying to answer?

In product design, knowing how a product can be assembled, from a list of parts or Bills of Materials (BOM) is often not considered until late in the design process.  Without experience, this task can often be time consuming, and for complex products, errors may not be known until manufacturing takes place, leading to costly errors.
We are developing a machine learning based tool to help engineers speed up the design process. Two different aspects of the design process can be learnt by looking at how existing computer aided design (CAD) models are created.  First, the geometry of each part can be converted into a face adjacency based graph-network; information about each part can be learnt through the use of Graph Convolution Neural Networks. Second, the part-part hierarchy relationships that form how an assembled BOM is created; this takes the learnt information about each part and learns which combinations of parts are grouped together to form new assemblies.

Based on what has been learnt from existing CAD models, a designer can use this tool for two main scenarios:
1. Given an unassembled BOM to create a number of suggestions on how parts can be assembled, either providing the designer with a usable solution or a good starting place for further modifications.  
2. A designer may have to replace a part in an existing CAD model, for example if a part is no longer in production. The tool will then be able to suggest alternative parts based on what it has learnt from existing models.
 

## How does HPC help your research?

The GPUs on the HPC accelerate the machine learning calculations to a speed which would otherwise not be possible on a standard computing platform.

## What is the potential impact of your research?

This research could be used in multiple industries as a design tool to speed up the design process, giving designers the opportunity to use their time more creatively, or efficiently.

## In your personal opinion what's the coolest thing about your research?

I think the coolest thing you could do, depends on what is available to teach the tool. Imagine having a dataset of Lego models to learn from, and then you are given a box of Lego pieces to play with… Let’s see what the computer builds!

## What's your favourite christmas film?

Die Hard

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day10/figure_1_Thomas Hazlehurst.PNG' alt='A computer aided design (CAD) model of a torch, with a Bill of Materials (BOM) containing ten parts.'/>
  </div>
  <figcaption>
1. A computer aided design (CAD) model of a torch, with a Bill of Materials (BOM) containing ten parts.
  </figcaption>
</figure>

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day10/figure_2_Thomas Hazlehurst.png' alt='The process for creating a new product assembly. In each step, all the parts are considered, but only groupings that have been learned are made into an assembly. This process repeats with the remaining parts and the new assemblies considered until only one assembly remains, which yields the competed assembly structure.'/>
  </div>
  <figcaption>
2. The process for creating a new product assembly. In each step, all the parts are considered, but only groupings that have been learned are made into an assembly. This process repeats with the remaining parts and the new assemblies considered until only one assembly remains, which yields the competed assembly structure.
  </figcaption>
</figure>

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day10/figure_3_Thomas Hazlehurst.png' alt='Given a part, alternatives can be found (here three) from an existing database of parts, based on information from the machine learning.'/>
  </div>
  <figcaption>
3. Given a part, alternatives can be found (here three) from an existing database of parts, based on information from the machine learning.
  </figcaption>
</figure>