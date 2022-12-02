---
layout: page
title: "Bunnimolecular Simulations!"
date: 2022-12-02
subheadline: "🎄12 Days of HPC 2022"
teaser: "
 Blog post number 2 in our 12 days of HPC series from Physics, Maths, Biology, Computer Science, Medicine!
"
author: "Sarah Harris, Molly Gravett, Michelle Peckham, Joanna Leng, Ste Muench, Daniel Read, Oliver Harlen, Ryan Cocking, David Brockwell, Charlie Scarff, Sean McMillan, David Brockwell, James Ault"

image:
  thumb: blog/12dayshpc-2022/2022-logo.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Sarah Harris, Molly Gravett, Michelle Peckham, Joanna Leng, Ste Muench, Daniel Read, Oliver Harlen, Ryan Cocking, David Brockwell, Charlie Scarff, Sean McMillan, David Brockwell, James Ault

## What department do you work in?

Physics, Maths, Biology, Computer Science, Medicine

## What research question are you trying to answer?

Our team use Biomolecular Simulations to understand how biomolecules move, which tells us about their function. We are particularly interested in molecular motors, such as myosin, as they do much of the work associated with being a living organism. Our simulations complement structural biology experiments such as cryo-electron microscopy (cryo-EM) imaging, by adding dynamics to otherwise static information. You can see that insight is vital if we are to understand molecular machines! 

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

We use many different computational tools at different length-scales, depending on the particular aspect of our molecular machines that we are interested in. We use the AMBER suite of programs to do atomistic molecular dynamics simulations, for example to fit atomic models into cryo-EM images, and we have developed our own mesoscale Fluctuating Finite Element Analysis (FFEA) software to deal with larger systems which are too big to be treated fully atomistically. FFEA is written in C, with additional python scripts to deal with system setup and analysis. 

## How does HPC help your research?

Our fully atomistic simulations are extremely computationally expensive and so are impossible without HPC. Fortunately they run brilliantly on GPUs! FFEA simulations run on CPUs with shared memory parallelisation. Although these will run fine on very good laptop, we need HPC when we are running many of them, which is frequently the case, such as when performing parameter sweeps to match the experimental imaging data. 

## What is the potential impact of your research?

The mechanics of molecular motors plays a vital role in all living systems, but is still poorly understood. Greater insight into their behaviour could help us design treatments for many diseases that arise from genetics, infection or ageing. 

## In your personal opinion what's the coolest thing about your research?

Molecular motors arguably provide the "spark of life" that distinguishes living systems from inanimate matter. Rigor mortis, which is a well-known symptom of death, occurs when the myosin molecular motors in muscle run out of the ATP fuel they need to work. If we can understand these motors using simulations, we will have a molecular level view of what it takes to be alive. 





## Postscript

Addressing the biggest scientific questions, such as the molecular mechanics of life, requires multidisciplinary teams to work together. The greater the diversity of the team, e.g. experiments, theory and simulation, considering multiple length and time-scales, different scientific disciplines, scientific cultures, personalities and ways of working, the more ideas there are to share, and the more creative the team will be. Molecular biology in particular is moving towards an "Integrative approach" where multiple experimental and computational methods are used by collaborative teams to build a holistic model. It's the Christmas party where everyone is invited and can contribute! Even baby rabbits!





<figure>
<div class='column' style='display:flex;'>
    <div class='row'>
        <img src="/images/blog/12dayshpc-2022/sarah-harris-post.jpg"
            alt="A baby grey rabbit sits infront of a bowl of brussel sprouts on a desk whilst a model of the motor protein myosin is shown on a computer screen behind it." />
        <figcaption>
            Biomolecular simulations are for everyone! Here baby Ashley is inspecting Molly's model of the motor protein myosin while he eats his Christmas dinner!
        </figcaption> 
    </div>
</div>

</figure>
