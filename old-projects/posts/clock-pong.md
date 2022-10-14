---
title: "Clock Pong Game"
date: 2018-09-20
category: "Game"
image: "/static/images/clock-pong/edit-3.gif"
excerpt: A small game where you keep time from passing by playing.
---

I made this game using p5.js for an assignment in 60-212 Interactivity and Computation and CMU. My description from [the original post](http://cmuems.com/2018/60212f/chromsan/09/20/chromsan-clock/):

Prevent time from passing by knocking away the incoming seconds. The longer you play, the faster the seconds will come. If one of the seconds makes it past you, time is reset and can even go into the future.

![](/static/images/clock-pong/edit-3.gif)

I liked the idea of making some sort of a game for this project, as time is usually quite a large part of games. I also wanted to make a clock that was not quite accurate, so that you could have some control over the clock's speed. I took inspiration from Pong, so that the player can prevent time from being added to the clock. To give a bit of a challenge, I made time speed up as the player is more successful. This way, if they miss, time is both reset and a couple seconds may be added to the clock. The main issue with using p5.js for this project is that the animation stops drawing when you leave a tab, so the time that is drawn will be different from the real time, and the scoring system gets messed up. I'd like to find a way around this.
