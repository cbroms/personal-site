---
path: /project/snippets
title: Snippets
subtitle: An experiment crowd-sourcing hierarchies of meaning from snippets of text
synopsis: >-
  A study that allows people to highlight sections of text that they
  find meaningful. Passages are reformatted to reflect how people interpret the
  text, revealing areas of inter-subjective agreement
tags:
  - websites
  - experiments
  - data viz
image: /uploads/snip.png
timeframe: 1 Week (April 2019)
project_type: Class project done at CMU
tools:
  - React
  - Express
  - Node
  - MongoDB
disp_order: 2
---

# The Idea

Highlighting is the processing of reducing a page down to its most important details; a more essential state. It is a way of making sense of what is written and finding meaning. It is also very subjective; what I highlight on a page is probably a bit different than what you would.

The act of highlighting reveals quite a bit about both the text and the person doing the annotating. Yet it always follows a similar pattern; there's usually one or two highlights per paragraph. Visually, it's very familiar:

![](/uploads/combined.jpg "A section of my annotation of an article")

I became interested in the dichotomy between subjective and universal that highlighting seems to exist within. I created a study that uses it as a method of extracting what people perceive to be higher-value portions of text.

This study asks users to select what they find to be the meaningful portion of a snippet of text. Users' selections are aggregated to create a mapping between each word and the proportion of people that found it meaningful. The original text is redrawn to reflect this proportion, resulting in a new passage organized in a sort of hierarchy of meaning. As inter-subjective agreement increases, words come together, become darker, and grow larger. In areas with less agreement, words shrink, become lighter, and spread apart.

The study is a bit of an experiment for a few possible future projects. At the core, I'm interested in the way that people construct meaning from text, and how much of this construction is subjective. From the results of this poll, I seek to find possible ways of addressing this question that builds on the successes and failures of this method.

# Implementation

## Study Design

When I first envisioned the project, I wanted to create a way for users to read over a passage of text and select the portions they found to be meaningful. However, it became clear that this would result in either too many selections (users selecting both meaningful portion and contextual elements) or too few selections (users selecting just one word out of the entire passage).

I decided to split each passage of text into multiple _snippets_, small chunks of two to three sentences. This way, users would have to select something, but would not be able to select everything.

With this constraint, I could get a more accurate representation of what people find to be meaningful from a sample of text that is neither too large nor too small.

![](/uploads/snip2.png "A snippet of text from Crime and Punishment")

## Interface Design

It was also very important that the UI was as simple and easy to use as possible, as this survey would be distributed to a population with an unknown level of technical expertise. I minimized the number of possible actions on each page to just the essential ones, and designed a simple flow between survey to results, and then back to a new survey.

Perhaps the most intuitive way of selecting a portion of text on a computer is to run the cursor over it and highlight it. I figured there was no reason to make the selection process any fancier than that, and implemented a system that could pull out what users selected with their cursor.

![](/uploads/snip3.png "UI for the survey")

The process of using the survey is captured in this walk-through:

<iframe width="650" height="415" src="https://www.youtube.com/embed/wSrFppFurKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- ## Build

I built the site with the MERN stack. It was my first time working with both MongoDB and Express, but found both very intuitive to work with and easy enough to learn. Since the goal was to get something up and running quickly, I kept the site as simple as possible; there are no extraneous animations or menus.

For the text highlighting portion of the survey, I elected to use a pre-made component, [react-highlight-selection](https://www.npmjs.com/package/react-highlight-selection). The only limiting factor of this component is that it allows for one section of text to be highlighted at a time. This meant that users' selections would be limited to a single continuous line of text. In the end, this turned out to be a positive addition, as the goal is to select _just_ the most important section.

This project's repository can be [found on GitHub](https://github.com/CBR0MS/a-perfect-tree). -->

# Results

Some of the visualizations of agreement created by highlighting the text can be quite revealing. For example, sometimes there are snippets with less agreement (<40% coherence):

![](/uploads/snip6.png " ")

Other times, the meaningful portion of the snippet seems quite clear (>90% coherence):

![](/uploads/snip5.png " ")

Similar trends can be found in the passage visualizations:

![](/uploads/snip7.png " ")

![](/uploads/snip8.png " ")
