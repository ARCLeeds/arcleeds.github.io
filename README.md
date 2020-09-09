![University of Leeds Logo](https://github.com/ARCLeeds/arcleeds.github.io/raw/master/assets/img/lighterblueText_wLogo_m2.1.png)
# [University of Leeds][1] Research Computing Website

This is the official repository of the Research Computing Team website from
the University of Leeds. It is built using GitHub pages and Jekyll and is
based on the [*Feeling Responsive*][2] theme.

You can find the site at [arcleeds.github.io](https://arcleeds.github.io)

## Website Structure Philosophy

The way this site has been structured looks to take advantage of Liquid syntax
to neatly manage page content without writing lots of HTML. You'll find most of the data
that makes up the content to this site within the \_data/ directory, with most of the files
in the pages directory just including the liquid syntax to load the data.

The blog, changlog and casestudies pages are in the blog format for this Jekyll template.
This means to add a post you need to add a new markdown file into the \_posts subdirectory
in the format of `yyyy-mm-dd-articleName-category`.

## Contributing

Found a bug? Or got a suggestion? We welcome contributions to help make this site and repository better.

Please check out our [contributing guidelines](https://github.com/ARCLeeds/arcleeds.github.io/blob/master/CONTRIBUTING.md) to help guide you get started.

As contributors and maintainers to this project, you are expected to abide by
our code of conduct which can be found within our [contributing guidelines](https://github.com/ARCLeeds/arcleeds.github.io/blob/master/CONTRIBUTING.md).

## Local Development Environment

### Anaconda

Using Anaconda environment (recommended for Linux/Unix).
We recommend miniconda if you don't have Anaconda installed already.
Please use the supplied environment.yml, which will provide a standised environment.

To create locally:

```{bash}
$ git clone https://github.com/ARCLeeds/arcleeds.github.io.git

$ git checkout -b [YOURBRANCHNAME] # all work should be on this branch

$ conda env create -f environment.yml
```

### Ruby

To create locally:

Using the Ruby environment (recommended for Windows).
Download the recommended ruby + devkit installer from [rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/) and install.
Please use the supplied Gemfile, which will provide a standised environment.

```{bash}
$ git clone https://github.com/ARCLeeds/arcleeds.github.io.git

$ git checkout -b [YOURBRANCHNAME] # all work should be on this branch

$ gem install bundler #installs the bundler gem that will manage our dependancies

$ bundler install
```

### To build and test locally

```{bash}
$ jekyll serve --incremental --watch  
```
If you leave jekyll running these flags allow you to make changes, save and jekyll will rebuild your changes automatically.
The generated HTML is located under the `_site subfolder` for viewing/testing.

### Merging your changes

To merging your changes do a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

If you are working against an issue, remember to [link your pull request](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).



## Contact us

You can get in touch with the Research Computing Team via our [help form](https://bit.ly/arc-help).

Or you can email the team via [ask-rc@leeds.ac.uk](mailto:ask-rc@leeds.ac.uk)


 [1]: https//www.leeds.ac.uk
 [2]: http://phlow.github.io/feeling-responsive/
