---
layout: page
title:  Deep Learning for Games
date:   2018-09-07
subheadline: "Using HPC"
teaser: "
 Replicating DeepMinds work applying deep learning to the computer game StarCraft II using GPUs on the HPC at Leeds.
"
author: Martin Callaghan
image:
  thumb: blog/deeplearningforgames/scII.png
  caption: Test captions
---

Hey, I'm [Ryan Cross](https://github.com/CrossR) and for my Computer Science MEng Project, I undertook a project in applying Deep Reinforcement Learning to the video game StarCraft II, to replicate some of the [work](https://arxiv.org/abs/1708.04782) that DeepMind had done at the time.

![StarCraft II screenshot](/images/blog/deeplearningforgames/scII.png)

As part of this project, I needed to train a reinforcement learning model for thousands of games. Quickly, it became apparent that it was entirely infeasible to train my models on my computer, despite it being a fairly powerful gaming machine. I was only able to run 2 copies of the game at once, and this was nowhere near enough when for some of my tests 50,000+ runs were needed. Worse still, due to the setup of my model the smaller the number of instances I ran at once, the slower my code would converge.

It was around this time my supervisor [Dr Matteo Leonetti](https://engineering.leeds.ac.uk/staff/771/dr_matteo_leonetti) pointed out that the University had some Advanced Computing facilities I could use. Even better, there was a large amount of GPUs there, which greatly accelerates machine learning, and was perfect for running StarCraft II on.

After getting an account, I set about getting my code running on ARC3. Quickly, I ran into an issue where StarCraft II refused to run on ARC3. After a quick Google to check it was nothing I could fix easily, I had a chat with Martin Callaghan about getting the code running in any way. It turned out that due to the setup of the ARC HPC clusters, getting my code running was as simple as adding a few lines to a script and building myself a
[Singularity container](https://www.sylabs.io/). This was pretty surprising, I thought that getting a game to run on a supercomputer was going to be a giant pain, instead, it turned out to be quite easy!

The container actually ended coming in handy much later too, when I was handing my project over, I could simply ask them to run a single command or just give them my container, and they had my entire environment ready to test my code. No more "I can't run it because I only have Python 2.7", just the same environment everywhere.
Better for me, and better for reproducibility!

Once I'd got that all setup, running my experiments was easy. I'd fire off a test in the morning, leave it running for 8 hours playing 32 games at once and check my results when I got in. I managed to get all the results I needed very quickly, which would just have been infeasible without ARC3 and the GPUs it has. Getting results for tests was taking 30 minutes instead of multiple hours, meaning I could make changes and write up results much
quicker.

![AI overview of StarCraft II game](/images/blog/deeplearningforgames/pysc2.png)

Later, I started to transition my code over to help out on a PhD project, utilising transfer learning to improve my results. At this point, I had models that were bigger than most PCs RAM, and yet ARC3 was training them happily. With how ubiquitous machine learning is becoming, its great to have University resources which are both easy to use, and extremely powerful.