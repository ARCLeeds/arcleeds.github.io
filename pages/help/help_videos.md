---
title: "Research Computing Bitesize Videos"
permalink: "/help/videos/"
breadcrumb: true
---

Find a number of simple walkthrough videos below that cover the basics submitting and troubleshooting jobs as well as videos about configuring Anaconda on your personal computer.

### Using HPC whilst working remotely

See below for a range of videos covering useful topics for using HPC when working remotely.

<div class="t60">
    {% for vid in site.data.bitesize-videos.main.working-remotely %}
        <div class="medium-4 columns">
            <iframe src="{{ vid.src }}" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" scrolling="auto" allowfullscreen="allowfullscreen" style="display:block;">
            </iframe>
            <p> 
                {{ vid.description }}
            </p>
        </div>
    {% endfor %}
</div>

### Research Remote working resources

See below for videos on how to set up useful research computing tools on your local computer when remote working.

<div class="t60">
    {% for vid in site.data.bitesize-videos.main.remote-working-resources %}
        <div class="medium-4 columns">
            <iframe src="{{ vid.src }}" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" scrolling="auto" allowfullscreen="allowfullscreen" style="display:block;">
            </iframe>
            <p> 
                {{ vid.description }}
            </p>
        </div>
    {% endfor %}
</div>