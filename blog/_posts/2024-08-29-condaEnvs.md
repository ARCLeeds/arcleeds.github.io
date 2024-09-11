---
layout: page
title:  Recording and exporting conda environments for Python
date:   2024-08-29
subheadline: "Training"
teaser: "
 Knowing how best to balance reproducibility and reuseability can be difficult when exporting conda environments. How can you ensure dependencies are recorded but also ensure restrictive versioning doesn't prevent you from rebuilding a conda env?
"
author: Maeve Murphy Quinlan
image:
  thumb: research_hack.jpg
  caption: Managing conda environments can be the difference between smooth sailing and dependency hell
---

# Recording and exporting conda environments for Python

When it comes to version and package management for Python, there are an overwhelming number of options, including minimal approaches including [pyenv](https://github.com/pyenv/pyenv), [pipenv](https://pypi.org/project/pipenv/), and [venv](https://docs.python.org/3/library/venv.html); conda-centric approaches including [Anaconda](https://www.anaconda.com/), [Miniconda](https://docs.anaconda.com/miniconda/), and [Miniforge](https://github.com/conda-forge/miniforge), and multi-featured package and project-management tools such as [Pixi](https://pixi.sh/latest/) and [Poetry](https://python-poetry.org/).

Depending on your specific use-case, some of these tools may be better suited to your project; for example, if you are developing a package and want to build your binaries locally, Poetry might be a great solution for you. If you want to install scientific packages from certain conda channels, one of the conda ecosystem options might suit you best.

Let's assume you are working within a research group that generally uses conda envs, and you are installing software that frequently includes conda-related install instructions. We recommend using [Miniforge](https://github.com/conda-forge/miniforge), the open source Mamba-enabled tool that is essentially drop-and-replace with conda.

How do you organise your conda environments while you are developing your code, and when you want to share it? How should you share your environment files?

## Creating conda environments

> Remember, don't work from `base`! Always install libraries and run code within a dedicated separate environment. This way, if you break an environment or end up in a complete tangle of dependencies, you can just create a new environment, whereas if you are working in `base` you may have to uninstall and reinstall conda in order to fix your environment!

When building an environment with multiple different Python (or R!) packages or modules, dependencies and requirements may mean you need to use a slightly-older-than-latest version of some other packages. This, in turn, may restrict what versions of other packages you need. Say you want to install the imaginary package `science`. The package `science` depends on Python version 3.x specifically and newer versions will break it because of how a specific feature works in the background. Now, you want to install the equally imaginary package `research`, but the most recent version depends on a feature implemented in the most recent version of Python - and so `research` will break if we try to install the newest version. Because we are restricted to Python 3.x, we need to pick a slightly older version of `research` that will work with the other packages in our environment.

You can see immediately why we would want different isolated environments for different coding projects, but you can also see that even in a single project, juggling different dependencies can become tricky.

If you create a conda environment using

```bash
conda create -n myenv python
```

and then after activating it, add packages using

```bash
conda install imaginary-science-package
```

you can end up in a bit of a pickle, as package dependencies will be set depending on the order in which they have been installed, potentially leading to conflicts when you try to install later packages and you discover that the environment already contains incompatible versions of different libraries.

Instead, it's usually a good idea if at all possible to list all your required packages (including any pinned versions, such as requiring Python 3.x in the example above) in an `environment.yml` file. This allows conda to figure out exactly what versions of different libraries are required to ensure all your packages actually work together (if at all possible).

The environment file should look something like this:

```yml
name: packaging-env
dependencies:
  - python=3.12
  - pytest
  - setuptools
  - sphinx
  - blackd
```

This example contains a bunch of conda packages that are useful for writing your own Python packages. You can use this to create a conda environment using the command (replacing `environment.yml` with the file name or path of your environment file):

```bash
conda env create -f environment.yml
```

Of course, if needed, you can always add more packages to this later by running `conda install package-name` from inside the active environment.

### Adding `pip` packages to your conda env

Adding packages with `pip` introduces messiness and complexity when it comes to dependency management and organisation, but sometimes it cannot be avoided.

> Remember, once you have installed `pip` and `pip`-dependent packages in your environment, you can't return to using `conda install` without everything likely breaking.

If you know from the get-go that you need `pip` installed in your environment, you can include it in your `environment.yml` file:

```yml
name: mkdocs-env
channels:
  - defaults
dependencies:
  - python=3.12
  - pip
  - pip:
    - mkdocs
    - "mkdocstrings[python]"
    - mkdocs-material
```

This file contains packages required to build a documentation website using `mkdocs`.

## Using your environment

If you have a selection of similar environments that have subtly differing package versions, make sure you record exactly which environment you are using for your research calculations.

Ideally, all your results should be produced with the same environment, as trying to keep track of when you added or updated a package in an environment can become very messy, very quickly.

## Recording your environment

Recording your environment is really important, both for ensuring that your research computing work is transparent (with exact versions of packages used to produce results recorded) and reproducible (by making it possible for people to recreate your working environment). Of course, if you create your environment from an `environment.yml` file then you have a ready-made recipe for people to build an equivalent environment, but if you want to record the exact versions of packages used (which you should want to do!) or if you added additional packages later, you can export your environment.

There are quite a few different ways to export your conda environment. The most straightforward is to simply call `export` from within your active environment:

```bash
conda env export > environment.yml # from inside the env
```

This will create a record with every package and its version in your environment, including background dependencies that you did not specify but were required by your packages. This file will include specific builds of packages and a path to the environment directory on your machine.

> This is a really useful record of the exact environment you used to create your results; however, it is not useable to create a new environment from due to specified builds

You can remove the specified builds:

```bash
conda env export --no-builds > environment.yml # from inside the env
```

Hypothetically, this resulting file *can* be used to create a conda environment (using `conda env create -f environment.yml`); however, the extensive pinning of every single library means it is likely to break on any system except the one it was created on (and will fail there too if anything has been updated).

You can fix this issue completely by passing the `from-history` flag, which instead lists only what you specified (so, it will include specific versions if you requested them when making the environment, such as `python=3.12`):

```bash
conda env export --from-history > environment.yml # from inside the env
```

This is great for quickly building an environment file that people can use to create a similar environment to yours, but it does lose a lot of useful information about what package versions you used in your research. **Additionally, this will not capture any `pip` requirements**.

If you have installed packages with pip from inside your conda env, you will need to add a few steps to record these requirements. [ekiwi111](https://github.com/conda/conda/issues/9628#issuecomment-1608913117) on GitHub provides the following useful code snippet:

```bash
# Extract installed pip packages
pip_packages=$(conda env export | grep -A9999 ".*- pip:" | grep -v "^prefix: ")

# Export conda environment without builds, and append pip packages
conda env export --from-history | grep -v "^prefix: " > new-environment.yml
echo "$pip_packages" >> new-environment.yml
```

For more flexibility in pip package versions, we can modify this to cut the pip version numbers out:

```bash
# Extract installed pip packages
pip_packages=$(conda env export | grep -A9999 ".*- pip:" | grep -v "^prefix: " | cut -f1 -d"=")

# Export conda environment without builds, and append pip packages
conda env export --from-history | grep -v "^prefix: " > new-environment.yml
echo "$pip_packages" >> new-environment.yml
```

## A possible workflow

It's often a good idea to both create a robust record of your work using `conda env export > environment.yml` (or some sensible environment file name) and then a more user-friendly one that makes use of the `--from-history` flag or the code snippets above (again, called something distinct and sensible).

This means you have a detailed record of the exact environment that was used to create your code, and so if down the line someone fails to reproduce your results, they can look at the versions of libraries you used to see if they can track down the discrepancies.

At the same time, you have an easy-to-use `yml` file that you can point to in your documentation and include along some example Python scripts to help other researchers get up and running and using your code quickly.

## Summary

There are many, many different tools to manage and record dependencies and packages in Python; conda is just one (very popular) option of many. There are also many different schools of thought on how you should record dependencies; the above is just a workflow that has worked for me in the past, that I think balances practical reuseability (by peers who would like to use your code) and theoretical reproducibility (where the exact conditions of your research can theoretically be recreated).

In a future post, I hope to delve into balancing a development environment (which you use while writing your Python code, for linting and packaging it) and a production/research environment (that you use when conducting research), and how the `pyproject.toml` file format can help. If you'd like a sneak preview, you can look at some of my course notes [here](https://software-dev.streamlit.app/Project_Workflow#3-create-a-dev-env).

What tools do you use to manage packages? What solutions have you found to sharing your research environment? Does your research group have a preferred approach or does each researcher use their own preferred tools?
