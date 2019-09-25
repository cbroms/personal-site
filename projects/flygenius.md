---
path: /project/flygenius
title: FlyGenius
subtitle: Domestic flight departure and arrival time prediction website
synopsis: >-
    A website that provides flight departure and arrival time predictions using a
    model trained on a dataset from the U.S. Department of Transportation.
tags:
    - websites
    - big projects
    - machine learning
image: /uploads/fg1.png
timeframe: 3 Months (January-April 2019)
project_type: Personal Project
tools:
    - React
    - Tensorflow
    - Django
disp_order: 1
---

# Background

This is the second iteration of FlyGenius. The first version was a project for [an HCI class at CMU](http://humanaiclass.org) I took in fall 2018. More information about the original project can be [found here](https://archive.christianbroms.com/project/flygenius-v1).

This project had three main parts: a redesign of the machine learning model making the flight time predictions, a redesign of the website interface and information architecture, and the development of the new site.

# Rework

## The Machine Learning Model

I'm not much of a machine learning expert, so this part was quite a bit of new exploration for me.

I started by switching out the regression model for a classifier. To see the full process, check out [the Jupyter notebook I wrote detailing the change](https://github.com/CBR0MS/flight-time-model-data/blob/master/visualization/v2/v2Modeling.md).

I started by adding a few new features to each row, including likelihood of ontime departure, both for the relevant airline and airport. These data are calculated by taking the mean departure time across all flights for a given location, airline, and time.

For classification, I created two categories: _late_ and _not late_, with a cutoff of 10 minutes for a flight to be classified as late. I assigned the appropriate class to all the training data and ran it through the model. The classifier was able to achieve 90.79% accuracy on test data. I was fairly pleased at the \~20% improvement in accuracy over the previous method.

## The Information Architecture and Interface

One of the main things I liked about my previous design is the scarcity of extraneous information. Everything that's displayed is there for a reason.

The goal of the website is very simple, so I kept the UI as clean as possible. I added a few new features, such as ability to compare multiple airlines for a given route, as well as support for non-direct flights. The inputs for these new features were worked into the old input section.

![](/uploads/fg4.png "Revised information input UI")

I also did some experimentation with the background of the site, to add some visual interest. I added a gradient that gently animates around the edge of the screen, as well as a background that shifts color and imagery based on the time of day. The colors in the gradient change over the course of the day, so there is a very natural shift from the brighter background and colors during the day to the "dark mode" at night.

![](/uploads/fg1.png "The new frontpage during the day")

![](/uploads/fg5.png "The new frontpage at night")

The final change was to the display of the prediction and statistical information. Each piece of data is grouped under a relevant header, with information about the route and airports on the left and a comparison of airlines on the right.

It was important that when the sections are collapsed information is still conveyed to the user. For this reason, each airline's section is ordered from best to worst, and the predicted chance of ontime arrival is displayed. There's a clear hierarchy of airlines, running from the top to the bottom of the page.

![](/uploads/fg2.png "Closed panels")

Clicking on each section reveals more information about the route, airport, or flight and a small visualization of the probabilities of on-time departure and arrival.

![](/uploads/fg6.png "Open panels")

This project's repository can be [found on GitHub](https://github.com/CBR0MS/flight-time-model).

Check out the site at [flygeni.us](https://flygeni.us)

# API

As part of the rework, I created an API with the Django REST framework. It contains entries for 12 major airlines, 320 airports, and a total of 5,597 routes. Check it out at [api.flygeni.us](https://api.flygeni.us/docs).
