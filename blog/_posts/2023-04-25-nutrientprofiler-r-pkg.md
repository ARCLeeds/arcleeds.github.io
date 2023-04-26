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

## Building a package in R

Over the last few months I’ve been involved in a research software engineering
project working with Vicki Jenneson at the CDRC. This project looked at
extending the functionality of their [Nutrient Profile Model calculator Shiny
app](https://npmcalculator.cdrc.ac.uk/). As part of this I looked at developing
a separate R package that implemented a series of functions to represent the
Nutrient Profile Model logic and could be applied to product data in bulk.
 
I’ve used the R language for several years, although predominantly as a scripting
language in data science (using the [tidyverse](https://www.tidyverse.org/)), or
developing web apps (using [Shiny](https://shiny.rstudio.com/)). I haven’t ever
written an R package before so this project has been a really interesting
experience looking at the R packaging ecosystem. 

My main reference point for this experience is the fantastic [R packaging
book](https://r-pkgs.org/) developed by Hadley Wickham and Jennifer Bryan that
is available free online and provides a really handy guide for how to go about
developing an R package. This naturally led me to the [devtools
package](https://devtools.r-lib.org/), which is an R package designed to help
you build an R package.

A further tangent on my setup is that I also looked at using a
[devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) for
developing this package, which is a personal design choice and not at all
necessary but helped ensure a seamless developer experience between different
devices!

To get started with writing an R package using
[devtools](https://devtools.r-lib.org/) is straight forward, we can use
following function that steps up a directory with all the files we need
to get started. Devtools also brings with it the package
[usethis](https://usethis.r-lib.org/) this which again makes it easy to
integrate additional tools like [testthat](https://testthat.r-lib.org/) for testing and
[roxygen2](https://roxygen2.r-lib.org/) for documentation. Adopting devtools, it
is worth noting however, will dictate your workflow. The way we’ll write and
interact with our developing package will be through a series of devtools
functions such as `devtools::test()`, and `devtools::check()`. I didn’t find any
problems with this approach but I can imagine there might be certain flexibility
drawbacks if you want to have super custom setups.

When initially starting this project I came to it from my previous experience in
Python and object orientated programming concepts. Whilst these exist within R
it isn’t a true object oriented language and has a number of [different systems
for implementing object orientated features](https://adv-r.hadley.nz/oo.html).
With the time available I briefly dabbled with these but eventually dropped them
in favour of adopting a purely functional approach and in particular trying to
write something that could behave reasonably nicely with
[tidyverse](https://www.tidyverse.org/) packages (although not explicitly depend
upon them).

So the basic workflow of developing this package was creating a file within R
that contained the functions I wanted for a specific functionality of the
package. Writing tests for those functions and saving them in `tests/testthat`.
Using `devtools::test()` to check the tests pass. Writing roxygen2 doc strings on
my functions and writing Rmarkdown vignettes showing how to use the package in
`vignettes`. Putting this all together using `devtools::check` to make sure the
package built and passed checks for both tests, documentation and vignettes and
pushing these to GitHub. I also used pkgdown to build a GitHub pages based
documentation website which allowed me to present the internal documentation and
vignettes publicly for users. [Usethis](https://usethis.r-lib.org/) and
[pkgdown](https://pkgdown.r-lib.org/) also come with out of the box GitHub
actions setup which is very nice and convenient for setting up CI based
documentation deployment. 

This all makes for a pretty nice workflow for developing a package. It feels
familiar to the Python world where you also typically use a variety of 3rd party
packages to help manage your package development (although unlike in Python we
aren't overwhelmed by choice for package build tools). It is however quite a bit of
extra complexity, although I recognise tools like devtools are actually trying
to reduce this complexity(!), and that is a lot to take on for beginners. This
again makes me grateful for the excellent book I've used to guide me through
this process and would recommend it in a heartbeat for anyone else interested in
developing an R package.

## Introducing `nutrientprofiler`

This leads me to introduce the package developed during this project called
[`nutrientprofiler`](https://github.com/Leeds-CDRC/nutrientprofiler/). This
package implements a series of functions that aim to help users assess product
nutritional information against the [UK Government Nutrient Profile
Model](https://www.gov.uk/government/publications/the-nutrient-profiling-model).
This model was developed by the UK Department of Health to help Ofcom
implement restrictions in advertising of foods that are high in fats, salt and
sugar (HFSS). 

The CDRC had previously developed a single form Shiny App that implements this
model for helping check a product against the Nutrient Profile Model. This
package expands on that logic and provides it as explicit low level R functions,
along side high level R functions for applying the Nutrient Profile Model across
datasets of products.

At present the package is not available via CRAN but can be downloaded directly
from GitHub using the `remotes` package:

```R
install.packages("remotes")

remotes::install_github("Leeds-CDRC/nutrientprofiler")
```

Vicki Jenneson, who has helped lead on this project said the following about RSE
involvement: 
> XXXXXX