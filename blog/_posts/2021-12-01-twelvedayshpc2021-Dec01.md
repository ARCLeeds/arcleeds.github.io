---
layout: page
title: "This year, Santa’s bringing new open co- 'ho ho ho' –hort designs to clinical trials!"
date: 2021-12-01
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 1 in our 12 days of HPC series from Leeds Institute of Clinical Trials Research!
"
author: "Laura Marsden"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Laura Marsden

## What department do you work in?

Leeds Institute of Clinical Trials Research

## What research question are you trying to answer?

The aim of my research is to determine whether a new "open cohort" trial design for cluster-randomised trials is superior to existing designs, and under which circumstances. Cluster-randomised trials are a type of clinical trial where instead of randomising individual patients to different treatments, whole "clusters" are randomised – these clusters could be institutions such as schools, hospitals, GP practices and so on. The existing trial designs do not perform particularly well for trial populations where individuals leave the clusters frequently for unavoidable reasons. For example, in care homes, individuals can drop-out at a high rate, most commonly to move to another care home or due to death. 

I also want to determine whether alternative statistical models might be superior to standard methods in analysing this type of data.


## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

I used R to generate my datasets and analyse the data using mixed effects models. The other four analysis models were more complicated and not as easy to implement in R, so I learned how to program these in STATA instead. 

## How does HPC help your research?

I wanted to simulate 288 variations of clinical trials with different parameters (eg. varying the drop-out rate of patients, cluster size, and so on). Each single trial simulation consisted of thousands of simulated measurements taken from thousands of simulated participants, moving in and out of clusters over time. Each single trial simulation took up to a minute to generate, and up to five minutes to analyse using the different statistical models. To make things even more complicated, to ensure accuracy of my results I had to run 650 replications of each variation. This would have taken far too long using a single version of R or STATA, could have been unstable and risky (eg. if large runs crash towards the end and all data is lost), and would have also meant that my computer couldn’t do a lot else whilst the simulations were running. 

I would not have been able to look at such a wide range of parameters without the help of the HPC. Rather than running the 650 replications one after the other, the HPC allowed me to use ‘task arrays’ which means each replication was run in parallel (at the same time) over different cores, so the execution was much more time-efficient. All of this also happened ‘in the background’ so I could work on other tasks on my computer whilst the simulations were running! 


## What is the potential impact of your research?

This research sheds a light on when particular trial designs are most appropriate. If this new design were adopted in practice it could allow those working in clinical trials to answer new and important research questions, or to answer existing research questions more efficiently. 

## In your personal opinion what's the coolest thing about your research?

The fact that our research ultimately could impact clinical practice, nationally and internationally. 



## In your opinion, what is the ultimate Christmas song?

Wham - Last Christmas.  George Michael’s voice gives me goosebumps.






  


<figure>
<div class='column' style='display:flex;'>

    
      
    

  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/OPIS-CRTs-logo-1_Laura_Marsden.png"
    alt="Our research project is called OPIS-CRTs. The graphic on the left represents different individuals (coloured lines) within a cluster (the black box) who enter and leave over time" />
    <figcaption>
      Our research project is called OPIS-CRTs. The graphic on the left represents different individuals (coloured lines) within a cluster (the black box) who enter and leave over time
    </figcaption>
  </div>

</div>

</figure>
