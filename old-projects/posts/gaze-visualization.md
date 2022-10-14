---
title: "Gaze Visualization"
date: 2018-10-12
category: "Experiment"
image: "/static/images/gaze-visualization/edit-5.gif"
excerpt: Using PoseNet to extrapolate what someone's gaze might be.
---

![](/static/images/gaze-visualization/edit-5.gif)

My description from the [original post](http://cmuems.com/2018/60212f/chromsan/10/12/chromsan-body/):

For this project, I created a visualization of the space where the gaze of two characters in conversation meet. As the characters look at or away from one another, a shape is created between them that grows over the course of a scene.

I used ml5.js and PoseNet to track the characters in the videos and p5.js to draw the shape between them. The field of view for each character is determined by a line drawn from their ear to a point between their eyes and nose. The line is extended outward at two different angles to create a triangle. Both characters' fields of vision are checked for intersecting points and the shape drawn between them is progressively built from these points, layered over and over.

<iframe src="https://player.vimeo.com/video/294702146" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<iframe src="https://player.vimeo.com/video/294701280" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

I decided to use scenes from movies mainly because of the one scene from There Will Be Blood where Daniel and Eli engage in this intense standoff, where Daniel talks down to Eli in both the dialogue and his body language. Eli's gaze falls to the ground while Daniel's stays fixed on Eli. This scene worked particularly well, as there is a good amount of change in their gazes throughout, and the shape that emerges between the two is quite interesting. I searched for more scenes with dialogue shot from the side, and came up with a number of them, mostly from P.T. Anderson and Tarantino, the only two directors that seem to use it regularly. I ended up using clips from _Kill Bill Vol.I_, _There Will Be Blood_, _Boogie Nights_, _The Big Lebowski_, and _Inglourious Basterds_.

<iframe src="https://player.vimeo.com/video/294702122" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

I initially wanted to create one shape between the characters and have their gaze pull it around the screen, but I didn't like the result. So I created a fill for the area where the gazes intersected, and then I created multiple fills that built up to create a complex shape that ends up looking like a brushstroke. There are definitely limitations to this method though; the camera has to be relatively still, there can't be too many characters, and the scene has to be pretty short. Drawing all the shapes on every draw call in addition to running PoseNet in realtime is quite computationally demanding. Even with a good graphics card the video can start to lag; the frames definitely start to drop by the end of some of the longer scenes. Overall, I'm pretty happy with the result, but there is certainly more optimization to be done.
