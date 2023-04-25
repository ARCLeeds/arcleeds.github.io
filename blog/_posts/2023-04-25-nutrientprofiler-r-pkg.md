---
layout: page
title:  Building an R package for the Nutrient Profile Model
date:   2023-04-25
subheadline: "RSE"
teaser: "
 Installing geospatial R packages can be challenging on HPC, conda provides on possible solution to this problem.
"
author: Alex Coleman
image:
  thumb: HPC3small.jpg

breadcrumb: true
---

Over the last few months I’ve been involved in a research software engineering project working with Vicki Jenneson at the CDRC. This project looked at extending the functionality of their Nutrient Profile Model calculator shiny app. As part of this I looked at developing a separate R package that implemented a series of functions to represent the Nutrient Profile Model logic and could be applied to product data in bulk. 

I’ve used the R language for several years although predominantly as a scripting language in data science (using the tidyverse) or developing web apps (using Shiny). I haven’t ever written an R package before so this project has been a really interesting experience looking at the R packaging ecosystem. 

My main reference point for this experience is the fantastic R packaging book developed by Hadley Wickham that is available free online and provides a really handy guide for how to go about developing an R package. This naturally led me to the devtools package, which is an R package designed to assist you build an R package. 

A further tangent on my setup is that I also looked at using a devcontainer for developing this package, which is a personal design choice and not at all necessary but helped ensure a seamless developer experience between different devices!

Getting started with writing an R package using devtools is straight forward, we can the following function that steps up a directory with all the files we need to get started. Devtools also brings with it the package usethis this which again makes it easy to integrate additional tools like testthat for testing and roxygen2 for documentation. Adopting devtools it is worth noting however will dictate our workflow. The way we’ll write and interact with our developing package will be through a series of devtools functions such as test(), and check(). I didn’t find any problems with this approach but I can imagine there might be certain flexibility drawbacks if you want to have super custom setups. 

When initially starting this project I came to it from my previous experience in Python and object orientated programming concepts. Whilst these exist within R it isn’t a true object oriented language and has a number of different systems for implementing object orientated features. With the time available I briefly dabbled with these but eventually dropped them in favour of adopting a purely functional approach and in particular trying to write something that could behave reasonably nicely with tidyverse packages (although not explicitly depend upon them).

So the basic workflow of developing this package was creating a file within R that contained the functions I wanted for a specific functionality of the package. Writing tests for those functions and saving them in tests/testthat. Using devtools::test() to check the tests pass. Writing roxygen2 doc strings on my functions and writing Rmarkdown vignettes showing how to use the package in vignettes/. Putting this all together using devtools::check to make sure the package built and passed checks for both tests, documentation and vignettes and pushing these to GitHub. I also used pkgdown to build a GitHub pages based documentation website which allowed me to present the internal documentation and vignettes publicly for users. Usethis and pkgdown also come with out of the box GitHub actions setup which is very nice and convenient for setting up CI based documentation deployment. 

This all makes for a pretty nice workflow for developing a package. It feels familiar to the Python world where you also typically use a variety of 3rd party packages to help manage your package development. It is however quite a bit of extra complexity, although I recognise tools like devtools are actually trying to reduce this complexity(!), and I miss the straightforwardness of the build experience in Rust where cargo does a lot of this heavy lifting directly out of the box.

But this is a post about R not Rust so back on track…

