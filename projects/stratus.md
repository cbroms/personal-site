---
path: /project/stratus
title: Stratus
subtitle: Realtime weather visualization in augmented reality
synopsis: "An app that reads encoded weather data and presents it in augmented reality so pilots are able to instantaneously understand the current conditions."
tags:
    - prototypes
    - data viz
    - ar/vr
image: /uploads/stratus6.png
timeframe: 10 Weeks (Summer 2019)
project_type: Team project completed while interning at Booz Allen Hamilton
tools:
    - Unity 3D
    - Adobe XD
disp_order: 0
---

# The Problem

One of the major challenges faced when trying to analyze a realtime and continuous stream of data is how to structure and visualize it in a way that results in near-instantaneous understanding. There are methods of data visualization that can display particular aspects of a dataset, such as a chart or graph. The problem is that they are limited in terms of _what kind of data can be visualized_, as well as _the speed someone is able to understand_ the data being represented.

One particular domain of data that has this problem is weather data. There's a huge amount of data being generated, and understanding it quickly is often of the utmost importance, especially for pilots.

Over the summer, I and a team of other interns ([Luke Fleck](http://lrfleck.com/), [Hannah Schenk](https://www.hannahschenk.com/), and [Connor Pan](https://github.com/NameClassified)) at Booz Allen Hamilton worked on solving this problem and creating a working prototype.

# Our Solution

We used Unity to create an augmented reality app to present realtime weather data in a form that can be instantaneously understood. This involved:

-   Fetching and decoding realtime weather reports provided by all airports in the United States ([METARs](https://aviationweather.gov/metar)).
-   Generating an AR environment that adapts to the current decoded report, displaying cloud levels, air pressure, wind speed and direction, and other elements.
-   Creating an app to easily facilitate entering airports and interacting with their AR environments.

# Building it

## Design Process

Our initial brainstorming sessions revolved around the kind of data that we'd be working with from the METAR reports. We were mainly concerned with how each would be visualized and where to use augmented reality versus a traditional 2D UI. The answer came from a simple question about our target users: what was it that pilots needed to know from the weather reports, and where could we aid in their understanding?

![ ](/uploads/whiteboards.jpg "A compilation of whiteboard sketches during early ideation sessions")

A visual is mainly useful to generate an understanding of data where simply reading or hearing numbers cannot. So, we would develop an environment representative of the airport that generated the weather data and the current conditions overhead. We would develop three main visualizations that ranged from visually well-defined (clouds and precipitation) to abstract (air pressure) and somewhere in between (wind).

Our design process involved extensive brainstorming sessions that included everyone on the team: our artist, the programmers, and myself. Together we worked to pull apart the data that we were working with into more manageable pieces and create a hierarchy based on our users' needs. We designed and built the app at the same time, working from very low fidelity to high and testing our assumptions at each level. Since much of the app was AR-based, we ensured the interaction methods we included were working by putting what we'd built into the hands of our users. This meant building each part of the app separately and quickly iterating, then integrating it into the overall build.

## The 2D UI

In our initial exploration of the data, it was clear that there are some aspects of the weather report where a visualization would not provide enough information. One example is pressure, as pilots use the pressure provided by a METAR to calibrate their altimeter. It would be important to include these values in addition to the visualization, to provide additional clarity when needed.

### Interaction Design

When creating a UI, my first consideration was the form of the device. Since the centerpiece of the experience would be the AR environment, it was important to design the UI such that it felt natural to overlay on the rectangular window used to look at and interact with the environment. There needed to be a clear distinction between how to interact with the environment and how to interact with the 2D UI above. I began to make many sketches considering the way that the window would be held and the most natural ways of interacting with it.

![ ](/uploads/stratSketches.jpg "Some of the exploratory sketches I made around the interaction with the interface and AR environment")

The information architecture that we'd developed included quite a bit of additional information that would need to be accessed. I worked on developing ways to hide and reveal this information though a quick and intuitive gesture. In the end I decided on a swipe up from the bottom to reveal a panel below. This lower panel included all of the fields from the original METAR in their decoded format.

![ ](/uploads/wire1.png "A simple mockup of the UI with the panel closed")

![ ](/uploads/wire2.png "With the panel open")

## Final UI Design

When making higher fidelity versions of the UI, I focused on creating a way to differentiate the 2D elements from the 3D background. It was clear that a solid colored background made the display feel too heavy and limited the size of the viewport a bit too much. Having no background at all resulted in too little contrast between the text and the 3D elements. I experimented with a semi-transparent background panel, but the variable background presented difficulties in keeping the text legible in all environments.

In the end, I settled on creating a blurred background so that the panel does not feel too heavy and still allows for easy reading of the text.

![ ](/uploads/stratus1.png "A screenshot of the app showing the AR visualization of rainy weather at an airport")

![ ](/uploads/stratus2.png "The panel showing additional details and specific measurements")

## The AR Visualization

For the augmented reality environment, it was important that just that data that was most often needed by pilots be presented. This meant focusing on how to visualize specific parts of the METAR report, like clouds and wind. The answer was to go with the most intuitive solution: what do these elements _look like_?

By building on people's pre-existing understanding of what weather looks like physically, we could create something that was _instantaneously understandable_ without any additional training.

We created many versions of each of the three visualizations and tested them out with users. We iterated on each and gradually improved how fast and how well they could be interpreted.

![ ](/uploads/pressure.gif)

A key part of the visualizations was ensuring that they were realistic enough to convey the right amount of information. This meant maintaining a consistent level of quality through all possible weather conditions, which was challenging given the procedural generation of each of the environments. This video demonstrates a few of the weather events that can be found in the app:

<div style="padding:75% 0 0 0;position:relative;max-width: 1000px;margin:0 auto;"><iframe src="https://player.vimeo.com/video/374321979" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

It was also important to consider how people would interact with the AR environment. We were sure to provide interaction methods such as panning, scaling and tapping, which we developed after testing a number of methods. This area in particular was quite a challenge, as we were working in a space where there aren't many assumptions about how interaction works, and there aren't any implicit controls in and AR visualization. To address this, we provided some explicit instructions during the placement process that encouraged the user to try tapping and panning around the scene.

## The Final Prototype

![ ](/uploads/stratus.gif)

Our final iOS and Android app integrates a number of realtime data sources to create one simple visualization of the weather at any airport in the United States, to promote instantaneous interpretation of the current conditions.


