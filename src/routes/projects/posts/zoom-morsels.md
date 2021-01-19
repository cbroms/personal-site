---
title: "Zoom Morsels"
date: 2020-04-30
category: "Experiment"
image: "/static/images/zoom-morsels/FaceTracking.jpg"
excerpt: A system I devised to add facetracking to Zoom, allowing people to control their virtual presence through a series of small interactions.
---

# A series of small interactions using facetracking to control your presence on Zoom.

Description from [the original post](https://courses.ideate.cmu.edu/60-461/s2020/cbromsandrew-cmu-edu/04/30/christian-final/):

I created a system that captures people’s faces from Zoom, tracks them over time, uses them to control a new environment, then sends video back to Zoom. I was most interested in finding a way to capture people’s face and gaze from their Zoom feeds without them having to make any sort of effort; just by being in the call they get to see a new view. The system runs on one computer, uses virtual cameras to extract sections of the screen for each video, then uses the facetracking library [ofxFaceTracker2](https://github.com/jjzhang166/ofxFaceTracker2) and [openCV](https://github.com/kylemcdonald/ofxCv) in [openFrameworks](https://openframeworks.cc/) to re-render the video with new rules for how to interact. There’s lots of potential uses and fun games you could play with this system, once the pose data has been extracted from the video you can do nearly anything with in in openFrameworks.

<iframe src="https://player.vimeo.com/video/413654044" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

# The System

Creating this system was mainly a process of finding a way to grab zoom video and efficiently running the facetracking model on multiple instances. I created a virtual camera using the virtual camera plugin for OBS Studio for each person and masked out their video by hand. Then, in openFrameworks I grabbed each of the video streams and ran the facetracker on each of them on different threads. This method gets quite demanding quickly, but enables very accurate landmark detection in real time.

![](/static/images/zoom-morsels/FaceTracking.jpg)

Here’s what happens on the computer running the capture:

1. The section of the screen with the speaker’s video from zoom is clipped through OBS (this is done 3x when there are three people on the call)
2. OBS creates a virtual cam with this section of the screen.
3. openFrameworks uses the virtual camera stream from OBS as its input and runs a face tracking library to detect faces and draw over them.
4. A second OBS instance captures the openFrameworks window and creates a second virtual camera, which is used as the input for Zoom.

The benefit of this method is that it enables very accurate facetracking, as each video stream gets its own facetracker instance. However, this gets quite demanding quickly and with more than three video streams requires much more processing power than I had available. Another limitation is that each video feed must be painstakingly cut out and turned into a virtual camera in OBS; it would be preferable if just one virtual camera instance could grab the entire grid view of participants. My [update post](https://courses.ideate.cmu.edu/60-461/s2020/cbromsandrew-cmu-edu/04/19/final-project-wip-update/) explains more about this. I’m still working on a way to make the grid view facetracking possible.

# The Interactions

Having developed the system, I wanted to create a few small interactions that explore some of the ways that you might be able to control Zoom, if Zoom were cooler. I took inspiration in the simplicity of some of the work done by Zach Lieberman with his [face studies](https://www.instagram.com/p/Beli5JFAM0o/?taken-by=zach.lieberman).

I was also interested in thinking about how you might interact with standard Zoom controls (like toggling video on and off) through just your face in a very basic way. For example, having the video fade away unless you move your head constantly. I created four different interaction modes and a couple of extra tidbits, including a tag game. The code that runs the facetracking and different interaction modes can be [found here](https://github.com/cbroms/zoom-zoom).
