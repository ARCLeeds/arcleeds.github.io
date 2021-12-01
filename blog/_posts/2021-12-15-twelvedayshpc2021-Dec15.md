---
layout: page
title: "Developing a polygenic risk score for severe COVID-19 "
date: 2021-12-15
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 15 in our 12 days of HPC series from Leeds Institute for Data Analytics!
"
author: "Natalie Chaddock"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Natalie Chaddock

## What department do you work in?

Leeds Institute for Data Analytics

## What research question are you trying to answer?

Hospitalization and death from COVID-19 is an immediate threat to public health and medical systems worldwide. Previous genome-wide association studies (GWAS) have identified 27 genetic variants associated with multiple COVID-19 traits (including COVID-19 severity/susceptibility), however, the small proportion of risk explained by each associated variant limits the extent to which biological interpretations can be drawn from these studies. We wanted to summarise the genetic risk of severe COVID-19 by combining these genetic variants in a polygenic risk score (PRS) for severe COVID-19 in the population-based UK Biobank cohort. 

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

R, Bash, Python, PLINK, PRSice, LDSC

## How does HPC help your research?

Genetic data is so huge (genetic reference data can take up multiple TB in storage) that analysis of genetic data would be completely inefficient on a local laptop/desktop (let alone, very expensive)! On top of this, developing PRS involves running numerous time- and computationally- intensive analyses to optimise the results. Using batch jobs on the high-performance cluster improves the speed at which these algorithms can be run to a pace that simply wouldn’t be possible without HPC. This, in turn, improves my productivity and means that we can get answers to time-sensitive medical questions (like those involving a pandemic) fast!  

## What is the potential impact of your research?

Information about clinical, demographic and genetic risk factors is vital to provide guidance for clinical decision making in severe COVID-19, and to understand the pathogenesis of SARS-CoV-2 in the human body. Our research has identified several clinico-demographic risk factors associated with severe COVID-19, as well as a polygenic risk score associated with severe COVID-19 that acts independently of other known risk factors. Furthermore, bioinformatic analysis of this PRS has demonstrated that host genetic variation in antiviral immune pathways may contribute to the discrepancy in COVID-19 severity found amongst individuals and populations. This work demonstrates the value of PRS in both risk stratification and biological understanding of the pandemic which has impacted our day-to-day lives so notably.  

## In your personal opinion what's the coolest thing about your research?

For me, it’s two-fold... Firstly, we’re using methods which involve the manipulation of published data, which means we’re extracting even more biological information from studies performed up to 15 years ago. Secondly, the PRS we build not only reveal some of the underlying biological mechanisms of a deadly disease, but also could be further developed and used in clinic to provide guidance on decisions that may save lives. That’s pretty cool. 



## In your opinion, what is the ultimate Christmas song?

It has to be Fairytale of New York, by The Pogues ft. Kirsty MacColl. No question.  






  


<figure>
<div class='column' style='display:flex;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/geneManhattan_FUMA_jobs151802_Natalie_Chaddock.png"
    alt="" />
    
      
      <figcaption>
        Manhattan plot for the MAGMA gene-based test
      </figcaption>    
    
  </div>

</div>

</figure>
