---
layout: page
title:  Helping COVID modelling efforts
date:   2021-02-09
subheadline: "RSE Showcase"
teaser: "
 Showcasing a recent RSE project to help encourage reproducible research practises in a COVID modelling project
"
author: Alex Coleman
image:
  thumb: blog/

breadcrumb: true
---

Over the past few months Alex Coleman from the Research Computing RSE team has been contributing to the [Rapid Assistance in Modelling the Pandemic (RAMP)](https://royalsociety.org/topics-policy/health-and-wellbeing/ramp/) initiative Urban Analytics project with researchers in Leeds and across the UK.

The RAMP Urban Analytics project led by Professor Mark Birkin from the University of Leeds and the Alan Turing Institute and involved working closely with Professor Nick Malleson, also from the University of Leeds and other researchers from Leeds, Exeter and Cambridge universities and University College London. It aimed to develop a simulation that combined individual interactions, such as going to work, school and shopping, and disease transmission dynamics.

The initial model work focused on the population of Devon and provides a high resolution simulation that connects individual behaviour with disease spread. The model offers the opportunity to test different scenarios and generate hypotheses about different policy interventions or behaviours.

<div style="text-align:center;">
  <img src='/images/blog/rseShowcase/RAMP/rampGUI.gif' alt='GIF of Improbable RAMP GUI'/>
</div>


As an RSE embedded in this project I've been involved in encouraging software development best practise particularly around reproducible research. This focused on small, simple steps that could be incorporated into the researchers workflow to help them just get on with writing the implementation of the model:

1. Using GitHub actions to include a workflow for running the code test suite before merging pull requests

Using unit tests to ensure your code does what you expect is a critical step in ensuring your work is reproducible. On a big project like this encouraging researchers to write tests alongside their code and creating workflow that ran tests everytime researchers wanted to update the code base was a crucial quality control step.

2. Using Sphinx and GitHub pages to create an automated documentation webpage 

[Shinx](https://www.sphinx-doc.org/en/master/) is a documentation generator commonly used alongside [readthedocs](https://docs.readthedocs.io/en/stable/index.html). As researchers wrote the model code they included [docstrings](https://www.python.org/dev/peps/pep-0257/) within the code which we wanted to build into a documentation page for the project. The [autodocs](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html) Sphinx extension makes this easy, allowing for docstrings to be extracted from code and rendered into reStructured Text which is used by Sphinx. 
Next, we wanted to automate the generation of documentation, to achieve this we looked to [GitHub actions](https://github.com/features/actions) and [GitHub pages](https://pages.github.com/). GitHub pages lets us host a simple static website associated with the code repository (just what we needed) and GitHub actions allows us to create automated workflows that run on specific conditions. In our case we adapted the workflow ([view our workflow](https://github.com/Urban-Analytics/RAMP-UA/blob/master/.github/workflows/deploy-docs.yml)) for building Sphinx documentation and then utilised an existing action that deploys a specific directory to the `gh-pages` branch (which is where GitHub pages are rendered from). This allows for the documentation to build automatically everytime new code is pushed to the `master` branch and be deployed to GitHub pages helping researchers just write their code and associated docstrings and worry less about writing out more documentation.

3. Holding weekly developer stand ups



4. Repository organisation
5. Environment specification
6. Making the most out of GitHub repository tools