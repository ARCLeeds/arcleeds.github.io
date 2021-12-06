---
layout: page
title: "Catching the Misinformation Grinch"
date: 2021-12-07
subheadline: "🎄12 Days of HPC 2021"
teaser: "
 Blog post number 7 in our 12 days of HPC series from Faculty of Science Sciences and School of Languages Cultures & Societies!
"
author: "Daniel Valdenegro"

image:
    thumb: blog/12dayshpc-2021/12dayshpc-slice.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High performance computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Daniel Valdenegro

## What department do you work in?

Faculty of Science Sciences and School of Languages Cultures & Societies

## What research question are you trying to answer?

I'm working in project led by Professor Serge Sharoff, to develop a AI tool to detect Covid-19 and vaccination related misinformation in tweets and on Telegram messages, as well as to detect users who might be more vulnerable to fall for this misinformation messages. This project is in close collaboration with NSH and the Yorkshire and Humber AHSN, in order to provide them with useable information for possible future initiatives.

## What tools or technologies do you use in your research? (Programming languages, packages, APIs)

Most of the work is being done in Python. The data collection process in Twitter is being done thanks to the new Academic Researcher API offered by the platform, which provided extensive access to archive and real time tweets for academic purposes. Telegram data collection is being performed thanks to their automation API which provided access to its channels and public groups archive.
In term of libraries, for creating the deep learning models to be used in the system we are using Huggingface Transformers framework, in its Pytorch flavour. Specifically, we are using BERT and DistilBERT large language models as a base to build fine tuned models for language classification and language understanding.

## How does HPC help your research?

The HPC, by the use of the ARC 4 facilities, provided with the hardware necessary to fine-tuned the large language models used in the project. Specifically we use the GPU nodes equipped with Nvidia Tesla V100 to performs all our trained and fine-tuning.

## What is the potential impact of your research?

We hope first to have a better understanding of the main factors of a misinformation message, and also the factors that make the users be more vulnerable to believe in those misinformation messages. This information can be later be used to create better informative campaigns, not only for Covid vaccination, but for other types of misinformation attacks regarding public health.

## In your personal opinion what's the coolest thing about your research?

The change to use cool, state of the art, AI and Deep learning tools to help in a very concrete manner to the well-being of society.



## In your opinion, what is the ultimate Christmas song?

Die Hard Soundtrack






  


<figure>
<div class='column' style="text-align:center;">


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/pexels-joshua-miranda-3989901_Daniel_Valdenegro_Ib.jpg"
    alt="" />
    
      
      <figcaption>
        Fake news
      </figcaption>    
    
  </div>


  <div class='row'>
    <img src="/images/blog/12dayshpc-2021/bert-google-896x504_Daniel_Valdenegro_Ib.png"
    alt="" />
    
      
      <figcaption>
        Google Bert Mascot
      </figcaption>    
    
  </div>

</div>

</figure>
