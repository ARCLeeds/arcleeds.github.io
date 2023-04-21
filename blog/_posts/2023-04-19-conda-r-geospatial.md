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

One way to solve this is to use the [conda package manager](https://docs.conda.io/en/latest/) to install these geospatial libraries as well as using it to install R itself. One advantage in using conda to manage your R installations is that it any R packages installed will also be installed within that specific R environment helping us separate out R packages into distinct projects controlled by the conda environment. 

Let’s imagine we want to install terra, a spatial data analysis package that is the successor to the [raster](https://cran.r-project.org/web/packages/raster/index.html) package and [sf](https://cran.r-project.org/web/packages/sf/index.html), the simple features package for encoding spatial vector data. These are big spatial packages that require libraries like udunits2, gdal, geos and proj as well as having C++ components that need to be compiled. 

We can use conda to specifically create an environment into which we install these libraries as well as install a specific version of R we want to use.
It's important here that we use conda to also manage our R installation, to ensure that the right compiler tools are also added to our conda environment in order for the correct compiler toolchain to be used when compiling R packages that use C++.

> One issue i've seen on ARC4 is people trying to mix using the anaconda module and the R module. This always leads to problems because of the different compiler toolchains that have been used.

So let's get to business, and install this package on ARC4!

To get started we need to get access to the conda command line interface (CLI), on ARC4 we have the `anaconda` module that provides access to this so lets load it.

```bash
# add the anaconda module to get access to the conda CLI
module add anaconda/2022.05
```

This means we can now use the command `conda` in the shell to create and manage conda environments.
Conda environments are very similar to virtual environments in Python; they create an isolated environment into which we can install packages, helping prevent the dependencies of one project conflict with the dependencies of another.  [See more about Conda environments in our HPC2 course notes](https://arctraining.github.io/hpc2-software/course/conda.html#conda-environments).
When using Conda on our HPC systems it's important to do our [suggested initial configuration steps](https://arcdocs.leeds.ac.uk/software/compilers/anaconda.html#first-time-conda-setup) to ensure you don't fill your home directory with Conda packages.

For our example we want an environment into which we're going to install R and those library dependencies for our geospatial package terra.
We can then use this environment for all our work related to the project we're doing using `terra` and keep this isolated from any other R based work be might be doing with different packages by not using this environment.

To create an environment we use the `conda create` command. In the snippet below we specify the environment's name, some packages we want to install with specific versions and the [Conda channel](https://docs.conda.io/projects/conda/en/stable/user-guide/concepts/channels.html) from which we want to install these packages from.

```bash
# create a conda environment called r-geo
# and install 3 packages from the conda forge channel
conda create -n r-geo -c conda-forge r-base=4.1.1 gdal=3 udunits2 -y
```

Now this step above is sort of cheating. I only specify the geospatial library `gdal` here but Conda also installs an additional series of dependencies for those libraries.
So I actually get a number of other critical geospatial libraries too such as [PROJ](https://proj.org/) and [GEOS](https://libgeos.org/).
This is an important caveat when using Conda, in that it doesn't just install the packages we ask for but also installs any dependencies the packages we request depend on.
To be fully reproducible across different systems we need to be aware of this and conscious of how we document these steps.
Conda provides a [number of commands for outputting a specification file](https://arctraining.github.io/hpc2-software/course/conda.html#sharing-conda-environments) for your environment that you can share and have others reproduce your environment from. 
We **strongly** recommend that if you're using Conda you create these environment specification files and include them in your project repositories to help reproduce your environment. 
However that is a topic outside of the scope of this particular blog post so lets now get back to installing `terra`.

With our environment created we now need to enter that environment with our shell. 
Conda environments are these isolated bubbles which we need to step into and out of in the shell in order for that isolation to work.
To enter a Conda environment and have access to all the packages we've installed in it we use the command `conda activate ENV_NAME`, where `ENV_NAME` is the name of the environment. 
However, on ARC4 we use the older version of this command `source activate ENV_NAME` to avoid some niggles we have with the newer behaviour of `conda activate`.

```bash
# activate the environment to use the packages you've installed
source activate r-geo
```

After running `source activate` our prompt will be prepended with the name of our environment and we can now access the packages we installed into this environment.
To install our R package we can either start up the R console and run `install.packages` directly or use the `R -e` command to pass in a string to the R to be run without opening a full R console.

```bash
# Install packages in R without starting an R console
(r-geo) R -e 'install.packages("terra", repo="https://cloud.r-project.org/");' 
```

This will now attempt to install the package using the version of R we installed with Conda. 
This ensures that all the libraries we installed through Conda will be available to R as it attempts to build any R packages that have C++ dependencies and uses the same compiler toolchain that was used to compile the version of R we installed with Conda.
Any packages installed within a Conda environment are also saved within the Conda environment, helping isolate these R packages from any other R packages you may have installed using an R module or in another Conda environment.
This again really helps with isolating our environment to prevent any package conflicts that occur and also makes it easy to dispose of our environment when we're done with it (we just delete the conda environment!).

Overall, Conda is a very useful tool for managing dependencies and as demonstrated here is not just for Python!
We can use it to manage versions of R, along with library dependencies for R packages. 
This however does come with some potential drawbacks:
- We've added another tool; by using Conda to manage dependencies we've added to the complexity of our project because for people to reproduce it they will now need Conda.
- We're constrained by what libraries are available via Conda; now that we're using Conda to manage our library dependencies we're dependent on someone making sure those libraries are available and up-to-date via Conda. It also becomes harder for us to compile a different library from source and make it available to our Conda-installed version of R.
- We're using a different compiler toolchain than the one on our system; on ARC4 the R module has been compiled with a specific compiler available on the HPC. When we use the Conda-installed version of R this has been compiled using a different compiler toolchain (that is also installed via Conda). This may not have optimised for the architecture of our HPC and so we might not be getting the best performance for Conda-installed R versus the R module on HPC.

## Spack/Apptainer alternative

You could decide that you wanted to create a container with this package
included instead.

[Spack](https://spack.io/) is a package manager for supercomputers, that can
also help you build containers.  [Apptainer](https://apptainer.org/) is the
most widely used container system for HPCs.

The Conda approach is definitely more straightforward, but there are
potentially performance advantages to the Spack route, with it using a
compressed image that takes up less space on disk, and also a single file,
which contrasts with the ~50k files likely with the Conda approach.  This is
particularly true if you're using a Lustre filesystem, that performs poorly
with large numbers of files.

It's also easier to archive on OneDrive, to share with other people, or
transfer onto other systems.

### Method

```bash
# Load the necessary anaconda (for Python) and apptainer modules
module add anaconda/2022.05 apptainer/1.1.6

# Write out a config file defining the container we want
cat > spack.yaml << EOB
spack:
  specs:
  - gdal@3
  - r@4.1.1
  - r-codetools
  - r-terra

  container:
    format: singularity
    images:
      os: "ubuntu:22.04"
      spack: develop
    os_packages:
      final:
      - libgomp1
      - libgfortran5
      - locales-all
EOB

# Install a copy of Spack
git clone https://github.com/spack/spack
# Enable Spack
. spack/share/spack/setup-env.sh 
# Generate a container definition file
spack containerize > r-geo.def
# Built it into a SIF file
apptainer build r-geo.sif r-geo.def

# You can delete the files we no longer need
rm -rf spack r-geo.def spack.yaml
```

This single file we've generated can now be used, e.g:

```bash
apptainer run r-geo.sif Rscript ./test.R
```

I don't think there's a right or wrong answer to problems like this, and it's
nice to have options.
