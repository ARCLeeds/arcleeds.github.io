---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  #image_fullwidth: header_unsplash_12.jpg
widget1:
  title: "Platforms"
  url: '/services/platforms/'
  image: widget-1-302x182.jpg
  text: 'Learn about the Research Computing platforms available at Leeds including HPC, Cloud and more.'
  style: '#56B4E9'
widget2:
  title: "Consulting"
  url: '/services/consulting/'
  text: 'Learn about our Research Software Engineer Consulting service, helping provide bespoke expertise to your research project.'
  video: '<a href="#" data-reveal-id="videoModal"><img src="http://phlow.github.io/feeling-responsive/images/start-video-feeling-responsive-302x182.jpg" width="302" height="182" alt=""/></a>'
  style: '#004f2b'
widget3:
  title: "Training"
  url: '/services/training/'
  image: widget-github-303x182.jpg
  text: 'Read more about the wide range of training we offer from introduction to linux to Advanced Python courses.'
  style: '#0072B2'
widget4:
  title: "Support"
  url: '/help/'
  image: widget-github-303x182.jpg
  text: 'Find our support documents and FAQs to help you navigate HPC and any other Research Computing queries.'
  style: '#56B4E9'
widget5:
  title: "Contact"
  url: '/help/'
  image: widget-github-303x182.jpg
  text: 'Need to get in touch? Learn how to contact us and get your query direct to Research Computing.'
  style: '#004f2b'
widget6:
  title: "About"
  url: '/about/'
  image: widget-github-303x182.jpg
  text: 'Come and meet the Research Computing team, learn more about our work and history.'
  style: '#0072B2'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#

permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
