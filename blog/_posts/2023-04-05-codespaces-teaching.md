---
layout: page
title:  GitHub Codespaces for teaching
date:   2023-04-05
subheadline: "Training"
teaser: "
 GitHub Codespaces offering an interesting option for easy to spin up computational teaching environments
"
author: Alex Coleman
image:
  thumb: blog/codespaces-teaching/1200x630-codespaces-social.png

breadcrumb: true
---

_Thumbnail taken from [GitHub blog post](https://github.blog/2021-08-11-githubs-engineering-team-moved-codespaces/). All copyright for the image belongs to GitHub._

Recently, we delivered a Python and git/GitHub crash course session for a centre for doctoral training. It's always great to do courses with a room full of keen PhD students and this was no exception. The catch with this course was the limited time frame required to both introduce Python and also git and GitHub. Our internal preference is to do this as two separate courses, a 2-day Python course and a 1-day intro to version control using git and GitHub. 

A critical steep learning curve for both these courses is often set up. We encourage people to bring their own devices or use a University cluster machine and typically try and use tools like conda to help manage installation. This however adds additional complexity which feels like an extra cognitive burden for learners. Now they have to think about environments, directories to install things, etc etc. In recent courses we've accepted this and spent some time talking about these things in the time we've had available but for a 1-day course touching on both we wanted to try something a little different. For this course setup need to be easy so we didn't have to think about installing Python or git, and be able to get straight into writing Python with a bit of git thrown in as well as integrating with GitHub.

The approach we went for was [GitHub Codespaces](https://github.com/features/codespaces), a service offered by GitHub that allows you to spin up a containerised cloud runtime of a repository that you can develop code in as well as running it. With GitHub free tier you get 120 free core hours per month ([see more about billing](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#monthly-included-storage-and-core-hours-for-personal-accounts)) that was more than enough for this training course.

We created a [template repository](https://github.com/ARCTraining/teaching-python-codespace) for Python containing a [devcontainer.json](https://github.com/ARCTraining/teaching-python-codespace/blob/main/.devcontainer/devcontainer.json) file that included the Python base container image to ensure Python was installed from the get go. Forking from this template we created a [repository](https://github.com/ARCTraining/dimen-python-2023) that contained the data and instructions needed for the workshop and encouraged all attendees to get a GitHub account and fork the workshop-specific repository. Attendees could create a Codespace instance using their forked repository which billed against their free hours but ensured their setup was the same as the instructor.
I think we could also do this via [GitHub Classroom](https://classroom.github.com/) however at this stage with users from multiple different academic institutions going via this route was more straightforward.

This enabled all attendees to get a working environment to do the course in with the same Python installation, with git installed and with the repository pre-configured to push to their GitHub fork. This felt like a big win for the crash course! 

There's obviously pitfalls to this approach. Not actually exposing users to how to get all this set up hides some of the complexity and potentially makes it harder to translate this to different setup. But we made sure to sign post this clearly to attendees and provide resources to how they can set themselves up locally. I would argue with the time available this course is a fair compromise so we could get on with teaching Python and not fighting with different setups and configuring remotes with git.

Our preference for teaching Python is to use a Jupyter notebook as the primary interface. This has its drawbacks but we accept these as instructors and try to reflect these during the session. GitHub codespaces  again makes this quite straightforward as VScode, the text editor codespaces is based on natively supports the Jupyter notebook format .ipynb. So, we can just create .ipynb files and specify that the kernel be the base Python installation and you can start to write notebooks. GitHub also supports (as a public beta) starting a codespace as a [Jupyter Lab session direct from GitHub](https://github.blog/changelog/2022-11-09-using-codespaces-with-jupyterlab-public-beta/). This requires that the codespace has JupyterLab installed but again is a nice option to immediately drop people into a notebook like environment similar to [Google Colab](https://colab.research.google.com/).

Overall, GitHub Codespaces worked really nicely for what we (the instructors) wanted here. We hope that attendees also found it straightforward (pending feedback) but would definitely consider using this in future for our training sessions and encourage others who are looking for easy to configure, small compute environments for teaching to explore this offering.

If you're interested in getting started with this I would recommend looking through the following resources:

- GitHub documentation on [setting up a Python Codespace](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-python-project-for-codespaces)
- [Introduction to dev containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers), the underlying technology for Codespaces
- [GitHub Guide to creating a codespace on a repository](https://docs.github.com/en/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)
