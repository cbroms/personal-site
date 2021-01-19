---
title: "Gaze Narratives"
date: 2020-02-27
category: "Experiment"
image: "/static/images/gaze-narratives/debug.gif"
excerpt: An experiment using an eye tracker to reveal the sorts of narratives that emerge from people's gaze across images.
---

A series of narratives that emerge based on peoples gaze across an image. Find the [full description here](https://courses.ideate.cmu.edu/60-461/s2020/cbromsandrew-cmu-edu/02/27/typology-of-fixation-narratives/).

How do people create narratives through where they look and what they choose to fixate on? As people look at an image, there are brief moments where they fixate on certain areas of it:

![](/static/images/gaze-narratives/debug.gif)

Putting these fixation points in the sequence that they're created begins to reveal a kind of narrative that's being created by the viewer. It can turn static images into a kind of story:

<iframe src="https://player.vimeo.com/video/394094607" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

The story is different for each person:

<iframe src="https://player.vimeo.com/video/394094721" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

I used a Tobii Gaming eye tracker and wrote some programs to record the gaze and output images. The process works like this:

<ol>
    <li>An openFrameworks program to show people a sequence of images and record the stream of gaze points to files. This program communicates with the eye tracker to grab the data and outputs JSONs. The code for this program can be <a href="https://github.com/cbroms/of-eye-tracker">found here</a>.</li>
    <li>Another openFrameworks program to read and smooth out the data, then zoom in and out on the image based on movement speed. It plays through the points in the sequence that they've been recorded and exports individual frames. Code can be <a href="https://github.com/cbroms/of-eye-tracker-output">found here</a>.</li>
    <li>A small python program to apply some post-processing to the images. This code can be found in the <a href="https://github.com/cbroms/of-eye-tracker-output">export program's repository</a> as well.</li>
    <li>Export the image sequences as video in Premiere.</li>
</ol>

There were a couple of key limitations with this system. First, the eye tracker only works in conjunction with a monitor. There's no way to have people look at something other than a monitor (or a flat object the same exact size as the monitor) and accurately track where they're looking. Second, the viewer's range of movement is low. They must sit relatively still to keep the calibration up. Finally, and perhaps most importantly, the lack of precision. The tracker I was working with was <em>not</em> meant for analytical use, and therefore produces very noisy data that can only give a general sense of where someone was looking. It's common to see differences of up to 50 pixels between data points when staring at one point and not moving at all.

Though the process of developing the first program to record the gaze positions wasn't particularly difficult, the main challenge came from accessing the stream of data from the Tobii eye tracker. The tracker is specifically designed to not give access to its raw X and Y values, instead to provide access to the gaze position in a C# SDK that's meant for developing games in Unity, where the actual position is hidden. Luckily, someone's <a href="https://github.com/TatsuyaOGth/ofxTobiiEyeX">written an addon</a> for openFrameworks that allows for access to the raw gaze position stream. Version compatibility issues aside, it was easy to work with.

[Read more from the original post](https://courses.ideate.cmu.edu/60-461/s2020/cbromsandrew-cmu-edu/02/27/typology-of-fixation-narratives/).
