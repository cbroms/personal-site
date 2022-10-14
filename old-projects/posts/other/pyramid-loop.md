---
title: "Looping Geometric GIF"
date: 2018-09-13
category: "Experiment"
image: "/static/images/pyramid-loop/loop.gif"
---

![](/static/images/pyramid-loop/loop.gif)

A little looping gif I made in Processing for an assignment. My description from [the original post](http://cmuems.com/2018/60212f/chromsan/09/13/chromsan-animatedloop/):

For this project, I wanted to make something using just geometry made in processing and try to give it a hypnotic quality. I also wanted to play with 2D and 3D shapes and try and find ways to create illusions with their combinations. I experimented a bit and decided on making a set of triangles which merge into a square, which then becomes a pyramid viewed above, which then becomes a triangular hole. After creating this, I wasn't really getting the hypnotic quality I was going for so I added a ball for your eye to follow around the screen, also playing with the physics of the ball and how it interacts with the shapes, in addition to some random movement to give the illusion of air resistance. When coding the loop, the most helpful function, by far, was the map function. I used this to control how every movement is played and the amount of time that each takes as a percentage of the total time. In addition, I added the double exponential sigmoid function to liven up the movements. I liked the way that it gives the transitions a snappy feel. I'm fairly happy with the result, but I think the loop could be reworked towards the end to create a cleverer transition to the beginning, which is much more interesting.
