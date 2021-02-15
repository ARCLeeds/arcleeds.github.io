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
  thumb: blog/rseShowcase/RAMP/rampUA-ui.png

breadcrumb: true
---

Over the past few months Alex Coleman from the Research Computing RSE team has been contributing to the [Rapid Assistance in Modelling the Pandemic (RAMP)](https://royalsociety.org/topics-policy/health-and-wellbeing/ramp/) initiative Urban Analytics project with researchers in Leeds and across the UK.

The RAMP Urban Analytics project led by Professor Mark Birkin from the University of Leeds and the Alan Turing Institute and involved working closely with Professor Nick Malleson, also from the University of Leeds and other researchers from Leeds, Exeter and Cambridge universities and University College London. It aimed to develop a simulation that combined individual interactions, such as going to work, school and shopping, and disease transmission dynamics.

The initial model work focused on the population of Devon and provides a high resolution simulation that connects individual behaviour with disease spread. The model offers the opportunity to test different scenarios and generate hypotheses about different policy interventions or behaviours.

<div style="text-align:center;">
  <img src='/images/blog/rseShowcase/RAMP/rampGUI.gif' alt='GIF of Improbable RAMP GUI'/>
</div>



As an RSE embedded in this project I've been involved in encouraging software development best practise particularly around reproducible research. This focused on small, simple steps that could be incorporated into the researchers workflow to help them just get on with writing the implementation of the model:

#### 1. Using GitHub actions to include a workflow for running the code test suite before merging pull requests
  Testing the research code we write is a crucial step in developing research software. At the very least its a _sanity check_ that the function we just wrote does what we think it does. Getting into the habit of writing tests as you write your research code is an important skills that helps you stretch your thinking about what your code is supposed to do and how it should react in different circumstances. Ideas around [test-driven development](https://swcarpentry.github.io/python-novice-inflammation/10-defensive/index.html#test-driven-development) are an extension of this approach and one we strongly encourage researchers to learn more about. Crucially, as this sort of project becomes larger and we sought to ensure the model was function as we developed it we used GitHub actions to automatically run the test suite whenever code changes were proposed through pull requests. This is a key quality control step to help reduce the introduction of changes that broke the code base to help researchers focus on development.

#### 2. Using Sphinx and GitHub pages to create an automated documentation webpage  
  [Shinx](https://www.sphinx-doc.org/en/master/) is a documentation generator commonly used alongside [readthedocs](https://docs.readthedocs.io/en/stable/index.html). As researchers wrote the model code they included [docstrings](https://www.python.org/dev/peps/pep-0257/) within the code which we wanted to build into a documentation page for the project. The [autodocs](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html) Sphinx extension makes this easy, allowing for docstrings to be extracted from code and rendered into reStructured Text which is used by Sphinx. 
  Next, we wanted to automate the generation of documentation, to achieve this we looked to [GitHub actions](https://github.com/features/actions) and [GitHub pages](https://pages.github.com/). GitHub pages lets us host a simple static website associated with the code repository (just what we needed) and GitHub actions allows us to create automated workflows that run on specific conditions. In our case we adapted the workflow ([view our workflow](https://github.com/Urban-Analytics/RAMP-UA/blob/master/.github/workflows/deploy-docs.yml)) for building Sphinx documentation and then utilised an existing action that deploys a specific directory to the `gh-pages` branch (which is where GitHub pages are rendered from). This allows for the documentation to build automatically everytime new code is pushed to the `master` branch and be deployed to GitHub pages helping researchers just write their code and associated docstrings and worry less about writing out more documentation.

#### 3. Holding weekly developer stand ups  
  Working with a team distributed across the UK and all working on different aspects of the code meant it was crucial to instigate good practises around distributed team working. At the core of this was organising a weekly develop stand up where everyone working on the code base would join for just half an hour, once a week to go through what they'd been up to, what their plans were and to identify anything blocking or potentially blocking their progress. This helped everyone keep pace with the project and make sure others were able to know what was happening and whether there was anything they could contribute. 
  To aid with this we initially used the [Teams feature](https://github.com/team) within GitHub organisations but more on that in [6.](./#6-making-the-most-out-of-github-repository-tools)

#### 4. Repository organisation
  Getting the organisation of a project right is crucial to making your work reproducible and more than anything else good for your own sanity as you embark on writing your code. With this project being a mix of Python and R we took a decision early on to create two separate code repositories: one for the [Python code](https://github.com/Urban-Analytics/RAMP-UA) and one for the [R package](https://github.com/Urban-Analytics/rampuaR). Both of these repositories follow the standard templates for packages in their respective languages although adapted for the specifics of this particular projects. Imposing these structures early was an important step to ensure the code is as accessible as possible and to avoid duplication with developers working asynchronously on the project.

#### 5. Environment specification
  A core pillar of ensuring everyone in the team was able to work on the project from their own setup was to ensure a project environment specification. There's plenty of tools available for managing this but due to its widespread use in the Python community we opted for [`conda`](https://docs.conda.io/en/latest/). This allows all researchers to work on the project within a specific environment where all package versions are the same so we can ensure consistent behaviour of the model. It also allows us to provide a file within the repository that includes that specification so that anyone can recreate the environment on their own setup. This wasn't without hurdles, in particular ensuring we could run the model on all operating systems, due to particular packages we still currently haven't got the python/R version of the model working on Windows, although the OpenCL model implementation does work on Windows.


#### 6. Making the most out of GitHub repository tools
