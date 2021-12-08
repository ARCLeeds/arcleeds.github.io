---
layout: page
title: "'Dashing through' computational modelling to understand bacterial biofilm chemis-'tree'"
date: 2021-12-08
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 8 in our 12 days of HPC series from School of Food Science & Nutrition!
"
author: "Oliver Hills"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Oliver Hills

## What department do you work in?

School of Food Science & Nutrition

## What research question are you trying to answer?

Bacterial biofilms are communities of bacteria embedded within an extracellular matrix of polysaccharides, proteins, lipids and DNA. The extracellular matrix limits the penetration of antimicrobial therapies and, consequently, bacterial biofilms are responsible for many chronic infections. My research focuses on the biofilm extracellular matrix produced by mucoid P. aeruginosa upon infection and colonisation of the cystic fibrosis lung.

Within the cystic fibrosis lung, mucoid P. aeruginosa produces a biofilm extracellular matrix that is composed, primarily, of linear anionic acetylated exopolysaccharide alginate. The aim of my research is to develop molecular (computer) models of this exopolysaccharide alginate which, using a combination of computational strategies based on quantum mechanics and statistical mechanics, will predict the structural chemistry available to this bacterial exopolysaccharide system. Having a grasp on what structural chemistry is available to this molecule will, in turn, offer novel and nuanced insight into what is the most effective treatment strategy for cystic fibrosis patients with chronic mucoid P. aeruginosa infections.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

My research involves predicting the structural chemistry available to mucoid P. aeruginosa exopolysaccharide. To do this, I use a range of different computational chemistry softwares, most notably CASTEP and DLPOLY. I also create data analysis workflows in Python to perform a variety of post-simulation data processing.

CASTEP is a computational chemistry software that is able to accurately calculate the structure, energetics and properties of molecules (and materials) from first principles. "From first principles" refers to calculations performed using quantum mechanics - for example, CASTEP employs the density functional theory plane-wave pseudopotential approach. This allows us to obtain a variational minima in a molecule's electron density and, from which, we can obtain the low energy positions of the atomic nuclei.

DLPOLY is a computational chemistry software that is able to explore the conformational space available to a molecular system using a technique called molecular dynamics. Given a suitable description of the interatomic potentials (this is called a 'forcefield'), declaration of environmental conditions such as temperature and pressure and a framework in which to integrate Newton's equations, we are able to simulate the time-evolution of a molecular system. During a molecules time-evolution (also called its 'trajectory'), it will access an array of different, unique, configurations providing lots of information on the possible geometries that a given molecular system can adopt.

## How does HPC help your research?

The use of HPC architectures is absolutely pivotal for my research. 

CASTEP is a computational chemistry software solving a series of quantum mechanical equations, which requires a large degree of compute power and would take many months (or even years!) on classical computing architectures. 

DLPOLY is a computational chemistry software exploring conformational space available to a molecular system. Even for relatively small molecular systems, conformational space is absolutely enormous and computing molecular dynamics trajectories to sample as much of this space as possible requires a large degree of compute power.

Furthermore, both computational chemistry softwares that I use can benefit from parallelization - splitting their respective calculations over multiple cores, where each core performs its own section of the calculation, and the final answer materialises as the solutions of each independent calculation are recombined at the end. This leads to significant calculation speed up.

## What is the potential impact of your research?

Understanding the structural chemistry available to mucoid P. aeruginosa exopolysaccharide alginate means we can test hypotheses on relationships between chemical structure, function, stability and virulence. We can understand and make predictions, at an atomic-scale, on what (structural) chemistry is responsible for increased bacterial virulence, pathogenicity and chronicity in cystic fibrosis patients with chronic mucoid P. aeruginosa infections. Hopefully, my research will provide atomic-scale data suitable for informing on the refinement of existing treatment strategies for mucoid P. aeruginosa biofilm infections in the cystic fibrosis lung.

## In your personal opinion what's the coolest thing about your research?

Being able to predict the structures certain molecules adopt is by far the coolest area of my research and is something that is extremely compelling. Molecular structures are not something visible to the naked eye and being able to "visualise", to an extremely high resolution, where the atoms and electrons are in a molecule is something that is not possible (to the same resolution) using current modern-day spectroscopic and characterisation techniques.

Moreover, being able to predict the energies of these molecular structures is also something that is very engaging. The energy of a molecule, although a relatively "simple" piece of information, is incredibly valuable and can be used to help rationalise the reactivity of a molecule as well as allow us to formulate reaction coordinates.

Ultimately, the structures and energies of molecules can be used to explain the chemistry of the world around us and this is incredibly exciting!  



## In your opinion, what is the ultimate Christmas song?

Driving home for christmas - Chris Rea






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/Matrix_molecule_binding_Oliver_Hills.png"
    alt="" />
    
      
      <figcaption>
        An optimised molecular structure of a chemical system encompassing a polyguluronate quadramer (shown in green) invading the calcium-exopolysaccharide alginate ionic cross-links
      </figcaption>    
    
  </div>

</div>

</figure>
