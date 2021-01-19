---
title: "Whispers: a Telematic Environment"
date: 2018-09-27
category: "Website"
image: "/static/images/whispers/edit-4.gif"
excerpt: The game of telephone, online.
---

My description of the project from [the original post](http://cmuems.com/2018/60212f/chromsan/09/27/chromsan-telematic/):

In short, this is the game of telephone for random people on the internet with text instead of audio.

![](/static/images/whispers/edit-4.gif)

I wanted to implement this game (sometimes called "Chinese whispers," evidently) with text instead of voice while preserving the same quality of randomness that it has. I initially thought about using a reCAPTCHA style system to mess up the text, but that would have been too easy to read. Messing with the unicode made it much more difficult to read the messages, and I found <a href="https://github.com/combatwombat/Lunicode.js">a nice library</a> for doing that. What's interesting about the game telephone is that everyone has an important role in playing since they each pass the message along, but all the players are equal in the sense that everyone's job is the same, except for one. In the original game, the person that starts the message is somewhat more important, but I got rid of this dynamic by having each visitor enter their own message, which is then interpreted by the other visitors. In my version, all the players have the same role.

![](/static/images/whispers/edit-5.gif)

I had the idea to keep the messages so that the next visitor could add to the chain of whispers, which Glitch didn't seem to easily be able to do. I then decided to make my life much more difficult by shifting over to python and making a backend with Django, which I then put on Heroku, which was probably really unnecessary especially for this one feature. However, now the whispers that are added are persistent, so anyone can add to each of the chains and the initial phrases can keep morphing- they don't disappear when no one is online.

<a href="https://whisper-back.herokuapp.com">Direct link to project.</a>
