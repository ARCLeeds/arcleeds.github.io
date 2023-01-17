---
layout: page
title: "Adventures with WSL2/Spack/Apptainer"
date: 2023-01-16
teaser: "
 A roundabout tinker with useful with tools to install research software
"
author: "Research Computing"

image:
  thumb: blog/wsl2spackapptainer/spack-logo.svg

breadcrumb: true
---

## Introduction

This was meant as a deliberate tinker with these tools, to see what worked, and how unpleasant the process would be.  I'm not trying to claim this was the best way of acheiving what I was needing to do, but was meant to see whether we could get anywhere with building a piece of software under WSL2, and then carrying that over onto an HPC.

## Approach

The idea was to use WSL2 under Windows to get [ESPResSo](https://espressomd.org/wordpress/) working with [waLBerla](https://www.walberla.net/) integration. although I ended up a little off piste.

Since there weren't believed to be packages that offered this, we'd need to build stuff from source to get there.

[WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) was used for the Linux environment under Windows, [Spack](https://spack.io/) was used to build software, and [Apptainer](https://apptainer.org/) was used to build a container at the end, that could be taken and used elsewhere, for example on an HPC system.

## Steps

### Setup a WSL2 instance

I'm assuming you have WSL2 enabled on your system, so I'm not covering that step.  It might be as simple as running `wsl --install` in a command prompt, but I promise nothing.

I installed the default [Ubuntu image from the Microsoft Store](https://apps.microsoft.com/store/detail/ubuntu/9PDXGNCFSCZV).

Creating a WSL instance using this is straighforward.  In a command prompt run:

```bash
wsl --install Ubuntu
```

Up pops a new terminal, which asks you to set a username and password, and then you're up and running with a working WSL2 instance:

![WSL2 start up](/images/blog/wsl2spackapptainer/wsl2.png)

### Install Spack

Well, before we install Spack, we're going to install some dependencies:

```bash
sudo apt-get update -y
sudo apt-get install -y build-essential gfortran
```
This is the essential bits that Spack's likely to need - it includes compilers and GNU Make, and I've tacked on a Fortran compiler at the end as I know I'll be needing that later.

Installing Spack itself is just like on any other Linux system:

```bash
# Get it from github
git clone https://github.com/spack/spack
cd spack
# Switch the the latest release version
git checkout v0.19.0
# Source the config file
. share/spack/setup-env.sh 
```

That all works cleanly:

![Install spack](/images/blog/wsl2spackapptainer/installspack.png)

### Check espressomd

We can have a look at the package that exists for espressomd in Spack:

```bash
$ spack list |grep -i espresso
py-espresso
py-espressopp
quantum-espresso
```

We have a few options there, and we can look at each one:

```bash
spack info py-espresso
```

This shows us it's the one we want, but doesn't mention anything about waLBerla, so it looks like we'll have to sort this bit out ourselves.  You can also look at the full list of dependencies it expects to need using:

```bash
spack spec py-espresso
```

It's never a bad thing to do an early check like this anyway, as it triggers Spack to install its necessary bootstrap packages, providing functionality needed by Spack itself.  But sadly, there's no mention of waLBerla.

There's no point tweaking the py-espresso package to use waLBerla yet, given we don't have waLBerla installed.

### Install waLBerla

There isn't a package for waLBerla, but it is a standard CMake package, so should be easy for Spack to handle.  `spack create` is able to interrogate the source release, and use that to create a template build script:

```bash
spack create https://i10git.cs.fau.de/walberla/walberla/-/archive/v6.1/walberla-v6.1.tar.bz2
```

![Basic recipe](/images/blog/wsl2spackapptainer/initialrecipe.png)

Now this isn't a perfect package file, as it doesn't have any dependencies defined, but it's a very nice starting point, given how little effort we've had to put in to make it.  Let's give that a try and see what fails, if anything:

```bash
spack install walberla
```

This goes through and installs all the things it thinks it needs to build a generic CMake package, then fails:

```
Wrapper.h:68:10: fatal error: mpi.h: No such file or directory
```

Ah okay, it needs MPI to be installed. Edit the recipe (`spack edit walberla`) so we can add a dependency on MPI where it says in the file:

```python
depends_on("mpi")
```

How did I know it was a package called "mpi" that I needed to add here?  I actually just did `spack info hdf5` to take a look at another package I knew probably had a similar requirement, and learnt from that.

Retry the install (`spack install walberla`) and it fails again, this time with a new error:

```
987     g++: fatal error: Killed signal terminated program cc1plus
```

What's happened here is that we've run out of memory, since by default, WSL2 gets no more than 50%/8Gbytes of RAM, and 2Gbytes of swap.  To increase this, create a file in your Windows home directory (e.g `C:\Users\exuser`) called .wslconfig containing:

```bash
[wsl2]
# Limits VM memory to use no more than 12 GB, defaults to 50% of ram
memory=12GB
# Sets the amount of swap storage space to 16GB, default is 25% of available RAM
swap=16GB
```

In my case, this is just enough to let it build successfully, but you may want different figures for your system.  It appears to need a total of ~15Gbytes to run all in memory, but that wasn't an option on the 16Gbyte machine I tested on.  Pick figures that work for you.

You need to restart wsl at this point, so in a Windows command prompt:

```bash
wsl --shutdown
```

Start your Ubuntu session back up (I just clicked the Ubuntu entry in the Start Menu), reload spack into your environment, and build waLBerla again:

```bash
. spack/share/spack/setup-env.sh
spack install walberla
```

Spack will only rebuild what it needs to, so it should skip straight to building waLBerla, and this time it will succeed.

### Why I'm off piste...

This is the point I realise that what I thought I understood about how espressomd integrated with waLBerla was total nonsense, and I'd been digging an interesting shaped hole all this time.  The integration isn't present in the main fork, and when it is included, it pulls in its own copy of waLBerla rather than using an existing build version!  Ah well, at least we know we've got all the pieces in places for this to work...

### Actually installing py-espresso with waLBerla support

We're going to create a new package py-espresso-walberla, and create a config based on py-espresso, but with the other git repo, and targeting the branch we want to build.  This is similar to what we did before with `spack create` but here's we're giving it a name explicitly, and making sure that it understands that it's a project that builds via CMake.

```bash
spack create -n py-espresso-walberla https://github.com/RudolfWeeber/espresso -t cmake
```

This config is wrong, but if I copy the text out of `spack edit py-espresso` and edit it to fix the class name, git repo, and branch, we end up with:

```python
# Copyright 2013-2022 Lawrence Livermore National Security, LLC and other
# Spack Project Developers. See the top-level COPYRIGHT file for details.
#
# SPDX-License-Identifier: (Apache-2.0 OR MIT)


from spack.package import *
from spack.pkg.builtin.boost import Boost


class PyEspressoWalberla(CMakePackage):
    """ESPResSo is a highly versatile software package for performing and
    analyzing scientific Molecular Dynamics many-particle simulations of
    coarse-grained atomistic or bead-spring models as they are used in
    soft matter research in physics, chemistry and molecular biology. It
    can be used to simulate systems such as polymers, liquid crystals,
    colloids, polyelectrolytes, ferrofluids and biological systems, for
    example DNA and lipid membranes. It also has a DPD and lattice
    Boltzmann solver for hydrodynamic interactions, and allows several
    particle couplings to the LB fluid.
    """

    homepage = "https://espressomd.org/"
    git = "https://github.com/RudolfWeeber/espresso"

    version("walberla", branch="walberla")

    depends_on("cmake@3.0:", type="build")
    depends_on("mpi")
    depends_on("boost+serialization+filesystem+system+python+mpi")

    # TODO: replace this with an explicit list of components of Boost,
    # for instance depends_on('boost +filesystem')
    # See https://github.com/spack/spack/pull/22303 for reference
    depends_on(Boost.with_default_variants)
    extends("python")
    depends_on("py-cython@0.23:", type="build")
    depends_on("py-numpy", type=("build", "run"))
    depends_on("fftw")
    depends_on("hdf5+hl+mpi")
```

That includes everything but turning on the waLBerla support, so we add in:

```python
    variant("walberla", default=True, description="Include waLBerla support")
    def cmake_args(self):
        spec = self.spec
        args = [
            self.define_from_variant("ESPRESSO_BUILD_WITH_WALBERLA", "walberla")
        ]
        return args
```

Have we arrived at working build?  `spack install py-espresso-walberla` rather does make it look like we have.

Now was that really the right way to add this new version of py-espresso?  I'm not going to lose sleep over it right now.

## Putting this in a container

What if I wanted to export this as a container to run on another system?  This is where I think we can plug Apptainer and Spack together.

### A basic Spack container recipe

Spack has support for making Apptainer compatible recipes for exporting Spack environments into containers, but it's not quite up to the challenge of working with this modified Spack (that exists on this machine alone).

So let's do the nearly-but-not quite, then tweak it.  If we write a spack.yaml file:
```yaml
spack:
  specs:
  - py-espresso-walberla

  container:
    format: singularity
    images:
      os: "ubuntu:22.04"
      spack: develop
```
We can then ask spack to generate a recipe:
```bash
spack containerize > py-espresso-walberla.def
```

That tries to use Spack from within their Docker container, not our version which contains the extra packages we've added, so let's just tweak it to delete the version in the container, and copy ours in instead.

Additional tweaks to py-espresso-walberla.def:
```bash
%files
spack /opt/newspack

# This is the top of the %post section, not an additional one
%post
   rm -rf /opt/spack ~/.spack
   mv /opt/newspack /opt/spack
```

We're all setup at this point to try to make a container image, but don't have the necessary software to do so.  So next we need to install Apptainer into our WSL2 instance, along with the required dependencies:
```bash
sudo apt-get install -y uidmap squashfuse fuse2fs fuse-overlayfs gfortran
spack install apptainer@1.1.5~suid
```

Then use it to build the container:
```bash
spack load apptainer
apptainer build -B /run py-espresso-walberla.sif py-espresso-walberla.def
```

There's a couple of gotchas in there that I seem to have magically sidestepped with awesome foresight.  Ahem.  Make sure you don't use the default OS image, else the compiler used is too old, and we've not done anything to load a newer compiler.  Also, if you get a crypic permission denied error, that's what the `-B /run` avoids and you might end up spending far too long scratching you head why it's complaining.

# Summary

We finish a very long and loopy process with a SIF file containing our custom build of py-espresso with waLBerla integration, along with all its dependencies, that we can now take onto other systems.  But we did at least get there, and have poked at the edges of what WSL2, Spack, and Apptainer can do, which might just come in useful with future projects.
