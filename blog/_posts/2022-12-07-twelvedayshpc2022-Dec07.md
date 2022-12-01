---
layout: page
title: "Not all seniors can afford reindeer rides!"
date: 2022-12-07
subheadline: "🎄12 Days of HPC 2022"
teaser: "
 Blog post number 7 in our 12 days of HPC series from School of Geography!
"
author: "Manon Prédhumeau"

image:
  thumb: blog/12dayshpc-2022/2022-logo.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Manon Prédhumeau

## What department do you work in?

School of Geography

## What research question are you trying to answer?

In 2021, more than 18% of the UK and Canada populations were aged 65 years and over. By 2030, 21.5% of residents will be aged 65 or over in the UK and 22.8% in Canada.
These demographic trends pose challenges to existing mobility infrastructure and services.

For now, elderly mobility is highly dependent on private cars. However with age-related health issues, the ability to drive decreases and many older seniors cannot drive anymore. Accessible mobility services play a crucial role in enabling older residents to maintain a high level of independence and well-being.

The RAIM (Responsible Automation for Inclusive Mobility) project is a British-Canadian collaboration to address how an on-demand autonomous vehicle system (EAV DRT) can meet the diverse needs of older populations and improve the lives of older travellers. The two areas of interest – Winnipeg, Canada, and the West Midlands Combined Area, UK – are facing the common challenge of increasing older populations with service issues.

As part of this project, my work contributes to the development of AI-based models and simulations to identify the seniors' mobility needs and predict their demand for an EAV DRT service. We are particularly interested in exploring the following research questions:
- What is the current mobility of seniors in Winnipeg and the West Midlands Combined Area?
- What are their mobility needs given spatial, temporal, and population-level variation?
- What would be the demand for an EAV DRT service?

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

Python and MATSim, a Java-based open-source framework for implementing large-scale agent-based transport simulations.

## How does HPC help your research?

In this project, we use an approach called Agent-Based Modelling and Simulation. We model each individual, with socio-demographic characteristics, spatial location, decisions and mobility behaviours. As seniors do not live in a senior-only world, we model all the population in order to reproduce the interactions (in the households, on the road, ..) between the individuals.
HPC helps me to run the python scripts and MATSim simulations for big populations in a reasonable time. We model around 3 millions agents for WMCA and 700,000 agents for Winnipeg. Code that would take weeks or months to be executed on my laptop runs in some hours on HPC (making my year and a half postdoc much more productive!).

## What is the potential impact of your research?

The RAIM project has established partnerships with key local partners, including local transport authorities. We hope that our research will guide future transport policy and will provide insights into the feasibility of new demand responsive autonomous vehicle services in the areas of interest.
Our most hoped-for impact would be that the future mobility services are useful and used by seniors because they are designed for them.

## In your personal opinion what's the coolest thing about your research?

The coolest part of this research for me is to work with synthetic populations of individuals. It is like a small world where you can test what-if scenarios that could never be tested in the real world. “What if tomorrow we add a fleet of on-demand autonomous vehicles in Birmingham for seniors?”, “What if this service is free to use?”, “What if the vehicles are shared?” are examples of scenarios that cannot be explored in few months without simulation. Another very cool thing about this research is that it is oriented towards public good.





## Postscript

This research is conducted with Pr. Ed Manley as part of the RAIM project (Responsible Automation for Inclusive Mobility: Using AI to Develop Future Transport Systems that Meet the Needs of Ageing Populations), funded by the ESRC-Canada AI initiative (ES/T012587/1).




  


<figure>
<div class='column' style='display:grid; gap: 2%;'>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/%25_65+_by_msoa_Manon_Predhumeau.png"
    alt="" />
    
      
      <figcaption>
        Image 1: % of individuals aged 65 years and over by geographic area (MSOA) in the 2022 synthetic population vs. in the real population reported by the 2021 census.
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2022/wm_simulation_1pct_Manon_Predhumeau.png"
    alt="" />
    
      
      <figcaption>
        
      </figcaption>    
    
  </div>

</div>

</figure>
