---
path: /project/webet
title: WebET
subtitle: A UX research tool for online eye tracking studies
synopsis: >-
    A project aimed at developing a tool for capturing user intention through eye tracking in online studies.
tags:
    - research
    - data viz
    - ml
image: /uploads/webet-heatmap-2.png
timeframe: 2 Months (Summer 2020)
project_type: Research fellowship awarded by Carnegie Mellon University
tools:
    - Figma
    - InDesign
    - React
    - Tensorflow
    - Docker
disp_order: -1
---

# Short Version

# Medium Version

# Long Version

## The problem: inferring intention

How can we gain deeper insight into how people use the websites we design? There's usually two ways, generally divided in the kind of data they produce: _quantitative_ (web analytics, A/B testing) and _qualitative_ (user interviews, observation, feedback). While analytics are fast and cheap to deploy, they don't offer the same descriptive power as talking to users. While talking to users provides insight into their mental models, it's slow and expensive. **There's a great opportunity to develop a research method that has the best qualities of both quantitative and qualitative methods: cheap, fast, descriptive, and actionable.**

![ ](/uploads/methods-comparison.png "An informal comparison of analytics and interviews. Individual instances of each method will vary in each of the four categories, but generally there's a price+time/explanatory power trade-off.")

**One method that has _potential_ to have some of the best qualities of existing methods is eye tracking.** Traditionally, eye tracking studies involve an eye tracker: a piece of hardware that determines where someone's eyes are in space to estimate where they're looking on a surface. What's unique about eye tracking is that it's quantitative _and_ descriptive; it can be used to make inferences about someone's intention and goals.

However, the method has a number of drawbacks:

-   _Expensive_. It's often prohibitively expensive—the equipment needed to facilitate an eye tracking study costs thousands of dollars—and therefore unlikely to be used by small teams with limited UX research budgets.
-   _Physical_. Eye trackers are physical pieces of hardware and require users to be present with the researchers. This limits study size.
-   _Complicated_. Eye trackers aren't designed for quick, iterative design work. They produce a huge amount of data that must be sifted through, analyzed, and visualized.

![ ](/uploads/methods-comparison-et.png "A comparison of the existing and preferred future states of eye tracking. How might we address eye tracking's weaknesses: cost, time, and physicality?")

In the ideal case, we would remove the physical eye tracker from the equation entirely by simply using a webcam and eye tracking software, therefore reducing the expensive and physical qualities. This is a technical problem I planned to solve by using existing software. However, the question that still remained was how to simplify the process, which first meant understanding how eye tracking fits into the usability evaluation process in the first place.

## Exploring how eye tracking has been used for UX research

Before designing the system, I began by reseraching how eye tracking has been used for evaluating interfaces. There are very few case studies that utilize eye tracking methodology, and those that do exist involve evaluating already highly polished interfaces.

![ ](/uploads/et-background.png "A section of a collection of resources I compiled surrounding the use of eye tracking in UX evaluation")

A number of other resources suggested that eye tracking should only be included in usability evaluation towards the end of development, and only if absolutely necessary. Eye tracking's weaknesses were often suggested as strongly detracting from any benefit that the method might bring, especially to highly iterative and fast-paced design work.

### How do researchers visualize eye tracking information?

Perhaps the most insightful part of case studies were the visualizations; they suggested how the abstract eye tracking data can be made understandable for design work. For each case study I went through, I collected any included visualizations and classified them. They fell into three main categories:

1. _Heatmaps._ This is by far the most popular visualization method, appearing in nearly every eye tracking case study. Heatmaps can be shown for one or more users and can denote amount of time spent fixating, number of fixations, and many more metrics.
2. _Fixation point maps_. A common method that shows the precise points a user fixated on. Can only be shown for one user, but helpful in parsing out intention and telling a story.
3. _Areas of interest_ (AOIs). I only came across this visualization method a few times. It groups elements into regions and displays metrics for those regions.

![ ](/uploads/et-viz-methods.png "Examples of the three visualizations methods I identified from case studies and articles.")

The AOI visualization method stood out as particularly interesting to me as it uses the actual interface as a framework for displaying metrics, as opposed to the others which can be applied over any arbitrary content. **AOIs also suggested a way to bootstrap the problem of creating a webcam-based eye tracker: use an image classifier to determine which _region_ someone was fixating on, rather than which _pixel_.**

## Creating research flows with AOIs

In the same way that a designer might create a user flow diagram to show the typical way a user might use a website or app, I created _research_ flow scenarios to see where AOI-based eye tracking could fit in to bolster an existing research process. Given information from web analytics about a page, how could AOI-based eye tracking be used answer a research question?

For example, in one case, how could we use eye tracking to find out why this panel isn't being clicked on?

![ ](/uploads/et-flow-question.png "Dividing a page into AOIs and generating a reserach question from web analytics.")

Using the AOIs provided by researchers, we can prompt people to find something to read from the page and examine which elements they looked at. A _trace_ provides insight into their process and tells a story a bit like the fixation maps do.

![ ](/uploads/et-flow-trace.png "Hypothetical traces output by the eye tracker.")

Given these traces, it appears that people didn't click on the panel because they didn't see it: an actionable outcome.

I used AOIs to create a heatmap-like visualization as well, this time combining eye tracking data with mouse events.

![ ](/uploads/webet-heatmaps-combined.png "Heatmap-like visualizations using AOIs.")

This provides yet another insight: the content of the element is compelling enough for people to click, only most don't see it. Again, an actionable outcome to the research question.

The next step was to take these flows and create a system that would allow for a researcher or designer to quickly answer a usability question about an interface using eye tracking.

## Designing a simple system

Given the research flow outlined above, the next task was to create the basic parts of a system that would facilitate it. **Since I was working on a short timeframe, I would have to quickly design and develop a basic working prototype of the system in four weeks.**

It was clear that the system could be broken up into two distinct sub-systems:

1. A website that researchers could use to create new _studies_ (eye tracking sessions with users) for a prototype of an interface and easily view the resulting data in the form of visualizations.
2. A website that a participant of a study could visit to facilitate the eye tracking process itself.

I had two websites to design, each meant to be used by different stakeholder groups. For the sake of keeping the project on track, I allocated one week to design and build each website, one extra week to build the backend infrastructure to support tying together both, and one week to build the eye tracking software itself.

### The eye tracking software, briefly

I don't have a lot of machine learning expertise, but I have been able to hack together [some ML projects](https://archive.christianbroms.com/project/flygenius-v2/) in the past. I built the eye tracker as a simple image classifier with tensorflow. There's a training phase where the AOIs defined by researchers are used to create a path for a fixation point, which users look at and images of their eyes are captured. These images are fed into the image classifier with the corresponding AOI labels, which trains on this data. The model is then used to infer AOIs using unlabeled images captured during the study. I was able to get this method to 86-94% accuracy, depending on the specific test conditions.

### The participant website

The website I designed for the participants was primarily built around the constraints imposed by the eye tracking software. There had to be a calibration phase and a study phase, and the remainder was a matter of guiding the participant through the process. In particular, the study would require the use of their webcam, so before requesting access (which results in a browser pop-up) it would be important to make clear the nature of the study and _why_ we needed to use their camera.

The entire website was broken down into just four steps:

1. Welcome/introduction, explain needed permissions
2. Show preview of collected info (around eyes), agree to terms of study
3. Instructions for calibration and start calibration
4. Instructions for study and start study
5. Confirm completion

### The researcher website

I introduced two main ideas to frame a user's mental model of the system:

1. _Studies_. Each research question is answered with a _study_, a collection of users that are all shown the same interface and given the same task.
2. _Sessions_. Each study is composed of _sessions_, which are when a user joins and completes the eye tracking task. Session results can be aggregated in visualizations such as heatmaps.

Then it was just a matter determining how each are created, modified, and destroyed. Studies are created by researchers from a prototype, sessions are created as users join the study, and that's about it. This results in a page to create a study, and a page to view a study's results.

I created some quick wireframes, then implemented them with React. After a bit of work on the backend, I had a working prototype of the system.

![ ](/uploads/et-create-study.gif "Creating a study and selecting AOIs through the prototype interface")

The system automatically generates heatmaps and traces using aggregate and individual session data.

![ ](/uploads/et-heatmap.png)

![ ](/uploads/et-trace.gif)

<!-- ## Dematerializing eye tracking

At least two major problems stem from eye tracking being constrained to a physical device: its cost and small study sizes. Physical hardware is expensive, especially when it's made for scientific studies that require extremely high precision. Bringing users in to conduct studies in person takes time and is also expensive, and introduces a host of problems associated with placing someone in an unfamiliar environment.

The first step in addressing this problem is thinking about eye tracking _non-physically_. What is the core process like, independent of the requirements that hardware places on it? Consider this workflow:

1. There's a well-defined usability question about a prototype or website.
2. Users are prompted to engage with the artifact while their eyes are tracked.
3. The eye tracking data is used to provide new insight into the original question and/or leads new questions.

Key here is that the entire process is based around a _question_ and is insight driven; the purpose is to learn something new about the interface in an _actionable_ way. -->

<!-- When designing a website, it can be helpful to think in terms of _goals_ (sometimes called jobs-to-be-done) and to consider an individual's journey through the website as they try to accomplish their goal. Every page should exist for a reason, and a user should have a clear mental model of how a page serves their goal; whether that is to find something to read, pay their power bill, talk to a friend, and so on. Of course, designing elegant user flows is a challenge, which is where an interative design process and lots of testing comes in handy.

## A Tool for Quick, Actionable Web-based Eye Tracking

Despite providing a potentially compelling source of user feedback, eye tracking has yet to become a staple of the UX designer's toolkit for a number of practical reasons including high cost and complexity. By dematerializing the eye tracking procedure and inserting it earlier in the design process, an easily distributed, low cost tool aimed at providing fast insight into user intention is born.

I worked on developing this project in summer 2020. More details and the full case study are upcoming.

![ ](/uploads/webet-heatmap.png "A mockup of the heatmap visualization")  -->

_This project was advised by Professor John Zimmerman and is the result of an Undergraduate Summer Research Fellowship awarded by Carnegie Mellon University, funded by the Porges Family Fund for Undergraduate Research._
