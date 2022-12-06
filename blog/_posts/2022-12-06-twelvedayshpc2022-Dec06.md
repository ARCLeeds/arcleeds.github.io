---
layout: page
title: "Is metabolism to blame for ethnic-differences in disease risk?"
date: 2022-12-06
subheadline: "🎄12 Days of HPC 2022"
teaser: "
 Blog post number 6 in our 12 days of HPC series from Food Science and Nutrition!
"
author: "Michael Zulyniak"

image:
  thumb: blog/12dayshpc-2022/2022-logo.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Michael Zulyniak

## What department do you work in?

Food Science and Nutrition

## What research question are you trying to answer?

Pregnancy-induced diabetes (or Gestational Diabetes Mellitus; GDM) is the most common pregnancy complication worldwide and is linked with short- and long-term health risks for the mother and her child, including ≥ 2-fold increased risk for future type 2 diabetes. Interestingly, the proportion of women who develop diabetes in pregnancy varies between ethnic groups, with women of South Asians ancestry up to 3-fold greater risk  compared to women of European ancestry. The environmental and biological mechanisms responsible for this difference in disease risk are unclear but recent evidence suggests that differences in metabolism may underly  this disparity.

Research Question: What is the contribution of genetically-modulated metabolic traits towards ethnic-associated differences in risk for developing diabetes in pregnancy?

Methods and Results
The Bradford in Bradford cohort provided data from 3688 South Asian and 3354 European pregnant women with full genetic data (>1 million genetic variants) and measures of 146 metabolites quantified in blood samples collected in pregnancy. Using the HPC facility, robust ethnic-specific genetic predictors for each metabolite were identified by running 146 genome-wide association studies for each ethnic group (i.e., 146 GWASs for each ethnic group). Following this, genetic risk scores for every metabolite were calculated and each participant before sequentially testing the association of each genetic risk score against glucose levels in pregnancy. 

Briefly, we found that cholesterol metabolites were key drivers of poorly controlled glucose in European women while saturated fatty acids were more common drivers of poorly controlled glucose in South Asian women glucose.

Conclusions
Numerous metabolites associated with measures of glucose levels in pregnancy. The distinct   panels of metabolites that associated with glucose in South Asian and European women suggests that the metabolic drivers of dysglycemia in pregnancy are ethnic-specific and may underline differences in GDM prevalence.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

PLINK, R, and METAL

## How does HPC help your research?

The scale of this work, size of data and number of variables and analyses (146 metabolites*1 million SNPs) in two ethnic groups could not have been done on any standard computer with my lifetime.

## What is the potential impact of your research?

This work helps to demonstrate the need for improved support and consideration to prevent of disease within a diverse populations, because if the drivers of disease are not the same its unlikely the a single management strategy will work for everyone. 

## In your personal opinion what's the coolest thing about your research?

The fact that we could run almost 300 GWASs over a couple days blows my mind!!





## Postscript

This study was led by Dr Harriett Fuller as part of her dissertation and would not have been possible without her exemplary skills and persistence, or the support and expertise of her co-supervisors (Drs Mark Iles and Bernadette Moore).




  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/Screenshot_2022-11-22_at_15.12.22_Michael_Zulyniak.png"
    alt="A flow diagram of the studies analysis workflow" />
    
      
      <figcaption>
        Inforgraphic of study work flow.
      </figcaption>    
    
  </div>

</div>

</figure>
