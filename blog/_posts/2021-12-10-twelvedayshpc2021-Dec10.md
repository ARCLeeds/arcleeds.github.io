---
layout: page
title: "Discovering the genetic basis of the human heart's shape and function"
date: 2021-12-10
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 10 in our 12 days of HPC series from Computing!
"
author: "Rodrigo Bonazzola"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Rodrigo Bonazzola

## What department do you work in?

Computing

## What research question are you trying to answer?

Within my PhD research carried out at the Centre for Computational Imaging & Simulation Technologies in Biomedicine (CISTIB), I aim to discover the genetic factors underlying variations in heart shape and function across the human population, by means of magnetic resonance images (MRI) and linked genetic data from the UK Biobank. For that, I extract different quantitative measures that describe this variation (called "phenotypes" in this context) using deep learning techniques. On these quantitative phenotypes, genome-wide association studies (GWAS) are performed to discover genetic locations that are significantly associated to them, by testing statistically each genetic variant (single-nucleotide polymorphisms, SNPs) one at a time.


## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

- Python: for post-processing (Pandas) and scripting the job submission. PyTorch for neural network implementation (this part is not done on ARC).
- BGENIE and BOLT-LMM: command-line-based tools for running GWAS.
- R: for preprocessing (tidyverse) and downstream analysis (tidyverse, qqman).



## How does HPC help your research?

The ARC HPC allows me to parallelize computationally costly tasks to speed up my research. Since the GWAS is highly parallelizable (by virtue of genetic variants being tested independently from each other) it's possible to partition the genome in nearly equally-sized regions and submit each to a different node of the HPC (batch mode). It also allows me to work interactively with computers with higher memory capabilities than my personal computer (interactive mode).

## What is the potential impact of your research?

Finding genetic factors that affect different phenotypes is very valuable knowledge, from a basic science perspective but also from a health care perspective. Regarding the latter, these genetic variants could function as biomarkers of prognostic value for pathologic conditions. Also it is possible that these genetic markers could help discriminate between that are phenotypically similar but have a distinct underlying genetic architecture; thus helping decide for more personalized therapies. Finally, understanding the mechanism of genetic variants with a deleterious effect can help design novel therapies to counter these effects.

## In your personal opinion what's the coolest thing about your research?

In my opinion, the coolest part is that it makes it possible to answer highly relevant scientific questions for the first time, building on top of work performed in my lab, CISTIB, as well as by the broader community of medical imaging and artificial intelligence. Also, the UK Biobank project made available to the scientific community a dataset of unprecedented size and breadth, that enabled this research.



## In your opinion, what is the ultimate Christmas song?

I will choose a song from my home country: "Los Reyes Magos" (The Three Wise Men), from the "Navidad Nuestra" (Our Nativity), a suite composed by Ariel Ramírez and Félix Luna for choir and regional instruments.






