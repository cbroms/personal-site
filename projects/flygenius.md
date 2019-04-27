---
path: /projects/flygenius
title: FlyGenius
subtitle: Domestic flight departure and air time prediction website
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
disp_order: 2
---

# Background

This is the second iteration of FlyGenius. The first version was a project for [an HCI class at CMU](http://humanaiclass.org) I took in fall 2018. The first iteration was done in a very short timeframe, just 4 days. I started with a dataset from the US Department of Transportation of data from every domestic flight since the late 80's. I spent the first two days [visualizing, cleaning, and developing a model](https://github.com/CBR0MS/flight-time-model-data/blob/master/visualization/v1/v1Modeling.md) from the data, using Tensorflow.

The next two days I spent designing and implementing the site. I trained the models offline and encoded them to json format, so they could be opened and used again with Tensorflow JS, making the site very lightweight. The interface was very simple, with one page for input and a second to display and visualize the results:

![](/uploads/og1.jpg "The old frontpage UI")

![](/uploads/og2.jpg "The old visualization/dashboard page")

I decided to expand the project into something a little larger and improve the ML models used to make predictions.

# Rework

## ML Rework

I started by switching out the regression model for a classifier. To see the full process, check out [the Jupyter notebook I wrote detailing the change](https://github.com/CBR0MS/flight-time-model-data/blob/master/visualization/v2/v2Modeling.md).

I started by adding a few new features to each row, including likelihood of ontime departure, both for the relevant airline and airport. These data are calculated by taking the mean departure time across all flights for a given location, airline, and time.

For classification, I created two categories: _late_ and _not late_, with a cutoff of 10 minutes for a flight to be classified as late. I assigned the appropriate class to all the training data and ran it through the model. The classifier was able to achieve 90.79% accuracy on test data. I'm no ML expert, so I was fairly pleased at the \~20% improvement in accuracy over the previous method.

## UI Rework

The goal of the website is very simple, so I kept the UI as clean as possible. I added a few new features in the new site, such as ability to compare multiple airlines for a given route, as well as support for non-direct flights. The inputs for these new features were worked into the old input section.

![](/uploads/fg4.png "Revised information input UI")

I also did some experimentation with the background of the site, to add some visual interest. I added a gradient that gently animates around the edge of the screen, as well as a background that shifts color and imagery based on the time of day. The colors in the gradient change over the course of the day, so there is a very natural shift from the brighter background and colors during the day to the "dark mode" at night.

![](/uploads/fg1.png "The new frontpage during the day")

![](/uploads/fg5.png "The new frontpage at night")

The final change was to the display of the prediction and statistical information. Each piece of data was grouped under a relevant header, with information about the route and airports on the left and a comparison of airlines on the right.

It was important that when the sections are collapsed information is still conveyed to the user. For this reason, each airline's section is ordered from best to worst, and the predicted chance of ontime arrival is displayed. It is clear at a glance which airline is best.

![](/uploads/fg2.png "Closed panels")

Clicking on each section reveals more information about the route, airport, or flight.

![](/uploads/fg6.png "Open panels")

This project's repository can be [found on GitHub](https://github.com/CBR0MS/flight-time-model).

Check out the site at [flygeni.us](https://flygeni.us)

# API

As part of the rework, I created an API with the Django REST framework. It contains entries for 12 major airlines, 320 airports, and a total of 5,597 routes. Check it out at [api.flygeni.us](https://api.flygeni.us/docs).
