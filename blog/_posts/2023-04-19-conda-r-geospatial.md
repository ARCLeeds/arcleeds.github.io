---
layout: page
title:  Using Conda to install geospatial R packages on ARC4
date:   2023-04-05
subheadline: "HPC"
teaser: "
 Installing geospatial R packages can be challenging on HPC, conda provides on possible solution to this problem.
"
author: Alex Coleman
image:
  thumb: HPC3small.jpg

breadcrumb: true
---

Occasionally, we get requests in about issues installing geospatial R packages on our HPC systems. These are big geospatial packages like [sf](https://cran.r-project.org/web/packages/sf/index.html) or [terra](https://cran.r-project.org/web/packages/terra/index.html) that are fantastic libraries that have dependencies on big geospatial system libraries. 

One way to solve this is to use the [conda package manager](https://docs.conda.io/en/latest/) to install these geospatial libraries as well as using it to install R itself. One advantage is using conda to manage your R installation is that it any R packages installed will also be installed within our R environment helping us separate out R packages into distinct projects controlled by the conda environment. 

Let’s imagine we want to install terra a spatial data analysis package that is the successor to the [raster](https://cran.r-project.org/web/packages/raster/index.html) package and [sf](https://cran.r-project.org/web/packages/sf/index.html) the simple features package for encoding spatial vector data. These are big spatial packages that require libraries like udunits2, gdal, geos and proj as well as having C++ components that need to be compiled. 

We can use conda to specifically create an environment into which we install these libraries as well as install a specific version of R we want to use.
It's important here that we use conda to also manage our R installation to ensure that the right compiler tools are also added to our conda environment to make sure that when compiling R packages that use C++ the same compiler toolchain is used.

> One issue i've seen on ARC4 is people trying to mix using the anaconda module and the R module. This always leads to problems because of the different compiler toolchains that have been used.

So let's get to business, on ARC4 lets install this package! 

```bash
# add the anaconda module to get access to the conda CLI
module add anaconda
# create a conda environment called gwmodel
# and install 3 packages from the conda forge channel
conda create -n r-geo -c conda-forge r-base=4.1.1 gdal=3 udunits2

# activate the environment to use the packages you've installed
source activate r-geo

# Install packages in R without starting an R console
(gwmodel) R -e 'install.packages("terra");' 
```