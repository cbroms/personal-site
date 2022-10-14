---
title: "Stratus: AR Weather Visualization"
date: 2019-08-15
category: "App"
image: "/static/images/stratus/stratus.png"
featured: true
excerpt: An augmented reality app that visualizes the latest METAR weather report from any airport in the United States.
---

# The problem: it's difficult to visualize what a stream of data is describing

One of the major challenges faced when trying to analyze a realtime and continuous stream of data is how to structure and visualize it in a way that results in near-instantaneous understanding. There are methods of data visualization that can display particular aspects of a dataset, such as a chart or graph. The problem is that they are limited in terms of _what kind of data can be visualized_, as well as _the speed someone is able to understand_ the data being represented.

One particular domain of data that has this problem is weather data. There's a huge amount of data being generated, and understanding it quickly is often of the utmost importance, especially for pilots. This is why data comes in a strucured format—a [METAR](https://aviationweather.gov/metar) report—that is easily understandable for pilots who are familiar with the standard. But for those unfamiliar, the string `KDEN 170253Z 11006KT 10SM FEW150 BKN180 M03/M08 A3010 RMK AO2 SLP205 T10331083 52009` is completely unintelligable. How might we make one of these weather reports understandable to anyone near-instantly?

Over the summer of 2019 while interning at Booz Allen Hamilton, I and [Luke Fleck](http://lrfleck.com/), [Hannah Schenk](https://www.hannahschenk.com/), and [Connor Pan](https://github.com/NameClassified) worked on solving this problem and creating a working prototype.

I was responsible for the design of the app and its interface, while my teammates were responsible for the engineering and art assets.

## Design Process

We began by understanding the kind of data that we'd be working with from the METAR reports. How do people engage with each metric, both as a measurement and as a feeling? Temperature, for example, is easily understood as a measurement. Most people can understand 67°F in an _experiential_ way. Measurements like pressure, on the other hand, don't have the same qualities.

![ ](/static/images/stratus/whiteboards.jpg "A compilation of whiteboard sketches during early ideation sessions")

It was clear that there would need to be a gradient of visualization types corresponding to each metric, from from visually well-defined (clouds and precipitation) to abstract (air pressure) and somewhere in between (wind). Though the task was to create these visualizations in augmented reality, as we quickly discovered the real challenge was to find a visualization method that people could easily understand _before_ moving to AR. Once in AR, the visualization could be tweaked to make it more legible and interactable.

## The interface

In our initial exploration of the data, it was clear that there are some aspects of the weather report where a visualization would not provide enough information. It would be important to include these values in addition to the visualization, to provide additional clarity when needed. Beacuse of our short timeframe, we elected to lay a 2D interface over the AR environment rather than integrate the metrics _into_ the environment itself.

### Designing the UI: considering interaction methods

When creating a UI, my first consideration was the form of the device; we were building for mobile phones. Since the centerpiece of the experience would be the AR environment, it was important to design the UI such that it felt natural to overlay on the rectangular window used to look at and interact with the environment. There needed to be a clear distinction between how to interact with the environment and how to interact with the 2D UI above. I began to make many sketches considering the way that the window would be held and the most natural ways of interacting with it.

![ ](/static/images/stratus/interact.png "Some of the exploratory sketches I made around the interaction with the interface and AR environment")

The information architecture that we'd developed included quite a bit of additional information—the decoded METAR values—that would need to be accessed. I worked on developing ways to hide and reveal this information though a quick and intuitive gesture. In the end I decided on a swipe up from the bottom to reveal a panel below. This lower panel included all of the fields from the original METAR.

![ ](/static/images/stratus/wire1.png "A simple mockup of the UI with the panel closed")

![ ](/static/images/stratus/wire2.png "With the panel open")

<!--
### Separating 3D from 2D in the final UI design

When making higher fidelity versions of the UI, I focused on creating a way to differentiate the 2D elements from the 3D background. It was clear that a solid colored background made the display feel too heavy and limited the size of the viewport a bit too much. Having no background at all resulted in too little contrast between the text and the 3D elements. I experimented with a semi-transparent background panel, but the variable background presented difficulties in keeping the text legible in all environments.

In the end, I settled on creating a blurred background so that the panel does not feel too heavy and still allows for easy reading of the text.

![ ](/static/images/stratus/stratus1.png "A screenshot of the app showing the AR visualization of rainy weather at an airport")

![ ](/static/images/stratus/stratus2.png "The panel showing additional details and specific measurements") -->

### Promoting legibility through a 3D visualization

By building on people's pre-existing understanding of what weather looks like physically, we could create something that was _instantaneously understandable_ without any additional training.

We created many versions of each of the three visualizations and tested them out with users. We iterated on each and gradually improved how fast and how well they could be interpreted. One particularly challenging visualization was pressure, but by reducing it down we got it to a very simple visual:

![ ](/static/images/stratus/pressure.gif)

A key part of the visualizations was ensuring that they were realistic enough to convey the right amount of information. This meant maintaining a consistent level of quality through all possible weather conditions, which was challenging given the procedural generation of each of the environments. [This video](https://player.vimeo.com/video/374321979) demonstrates a few of the weather events that can be found in the app.

### Considering interactivity

Most of the design for AR interactivity came from handing a phone with the visualization on it to people and seeing what they tried to do. Most of the time they tried to pinch (to zoom in) and tap on some element in the scene (the clouds, or wind visual). We implemented what they expected, then refined.

## The Final Prototype

![ ](/static/images/stratus/stratus.gif)

<!-- **We used Unity to create an augmented reality app to present realtime weather data in an experiential form that can be instantly understood.** This involved:

-   Fetching and decoding realtime METAR reports provided by all airports in the United States.
-   Generating an AR environment that adapts to the current decoded report, displaying cloud levels, air pressure, wind speed and direction, and other elements.
-   Creating an app to easily facilitate entering airports and interacting with their AR environments.

# Building it -->
