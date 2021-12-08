---
layout: page
title:  Predicting the rain, dear!
date:   2020-12-11
subheadline: "🎄12 Days of HPC"
teaser: "
 Blog post number 9 in our 12 days of HPC series looking at using Deep learning to help forecast rain!
"
author: Claire Bartholomew
image:
  thumb: blog/12dayshpc-2020/graphic12daysSmall.png

breadcrumb: true
---

_During the month of December we're featuring blog posts from researchers from across the University of Leeds showcasing the fantastic work they do using our High Performance Computing system. Follow us [@RC_at_Leeds](https://twitter.com/RC_at_leeds) to keep up to date with our 12 days of HPC blog series._

## What's your name?

Claire Bartholomew

## What department do you work in?

School of Computing and School of Earth and Environment

## What research question are you trying to answer?

1. Can deep learning add value above and beyond traditional nowcasting methods for short-term forecasts of precipitation? (- this is the research question I've started with, haven't yet moved onto the next ones) Nowcasting is the prediction of weather in the 0-2 hour time frame and focuses on the use of weather observations such as rainfall radar data. Traditional methods include approaches such as optical flow. By using deep learning, we hope to harness more of the value that come from the observations and to speed up the process of generating predictions. 
2. Can deep learning provide novel new ways of predicting convection/convective initiation to a sufficient degree of accuracy to be useful to an end user? 
3. What added value comes from different input data fields and how can they best be used within a model to maximise performance in predicting convection? 
4. How can deep learning models be used in convective nowcasting to support the aviation industry, for example through impact prediction? 

## How does HPC help your research?

As a great resource (with useful documentation) to train neural network models and trial different architectures.

## What is the potential impact of your research?

Improving short term predictions of thunderstorms would help keep Santa's sleigh (and other aircraft) safe in the skies and allow for more efficient route planning, saving fuel/reindeer energy levels. It would also be beneficial to other high impact events like flooding.

## In your personal opinion what's the coolest thing about your research?

The coolest thing about this research is being able to work with weather observations like rain radar and satellite data in a novel way, stretching the boundaries of traditional weather forecasting. 

## What's your favourite christmas film?

Love Actually

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day9/lp_ens_radar_animation_201909291300_Claire Bartholomew.gif' alt='An ensemble approach using different model samples to account for the uncertainty in future predictions.'/>
  </div>
  <figcaption>
An ensemble approach using different model samples to account for the uncertainty in future predictions. These can be used to look at the mean and maximum values, or the probability of a specific threshold being exceeded (bottom row).
  </figcaption>
</figure>

<figure>
  <div style="text-align:center;">
    <img src='/images/blog/12dayshpc-2020/day9/radar_animation6_6_0_27Nov_1515_Claire Bartholomew.gif' alt='An example comparison of surface rain rates (in mm/hr) from the target rainfall radar data.'/>
  </div>
  <figcaption>
An example comparison of surface rain rates (in mm/hr) from the target rainfall radar data (left), deep learning prediction (centre) and the prediction from the current operational nowcast at the Met Office (right). 
  </figcaption>
</figure>


_This work is supervised by David Hogg (School of Computing), John Marsham (School of Earth and Environment), Teil Howard (Met Office)._