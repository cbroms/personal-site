---
title: "Flygenius Version 1"
date: 2018-12-13
category: "Website"
image: "/static/images/flygenius-v1/og1.jpg"
excerpt: A four day project to build a machine learning model to predict domestic flight times and website interface to use it.
---

This was a project for [an HCI class at CMU](http://humanaiclass.org) I took in fall 2018. I completed this project in a very short timeframe, just 4 days. This involved:

-   Finding a dataset of flight data for all domestic flights
-   Visualizing the data to find correlations between variables that could be used in an ML model
-   Building and training a model with Tensorflow in python
-   Designing the information architecture for a website to use the model
-   Designing the interface and visualization of the model's output
-   Building the website interface and deploying the site with the model

I started with a dataset from the US Department of Transportation of data from every domestic flight since the late 80's. I spent the first two days [visualizing, cleaning, and developing a model](https://github.com/CBR0MS/flight-time-model-data/blob/master/visualization/v1/v1Modeling.md) from the data, using Tensorflow.

The next two days I spent designing and implementing the site. I trained the models offline and encoded them to json format, so they could be opened and used again with Tensorflow JS. The interface was very simple, with one page for input and a second to display and visualize the results:

![](/static/images/flygenius-v1/og1.jpg "The old frontpage UI")

![](/static/images/flygenius-v1/og2.jpg "The old visualization/dashboard page")
