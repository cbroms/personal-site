---
path: /project/flygenius
title: FlyGenius
subtitle: Domestic flight departure and arrival time prediction website
synopsis: >-
    A website that provides flight departure and arrival time predictions using a
    model trained on a dataset from the U.S. Department of Transportation.
tags:
    - products
    - ml
    - websites
image: /uploads/fg1.png
timeframe: 3 Months (January-April 2019)
project_type: Personal project
tools:
    - React
    - Tensorflow
    - Django
    - Adobe XD
disp_order: 1
times:
    - 2
    - 4
    - 6
---

# Short Version 

## Background

This is the second iteration of FlyGenius. The first version was a project for [an HCI class at CMU](http://humanaiclass.org) I took in fall 2018. More information about the original project can be [found here](https://archive.christianbroms.com/project/flygenius-v1).

__This project had three main parts: a redesign of the machine learning model making the flight time predictions, a redesign of the website interface and information architecture, and the development of the new site.__

## The ML Model

To see the full process, check out [the Jupyter notebook I wrote detailing the change](https://github.com/CBR0MS/flight-time-model-data/blob/master/visualization/v2/v2Modeling.md).

![](/uploads/data.png "A piece of the dataset, showing the kind of data used in building the classifier.")

## The Information Architecture

Having added some features to the classifier, I had to reexamine the information architecture of the input and output pages.

I started by sketching out the kinds of information being entered and received by the user. __It was clear that the output could easily get overwhelming if the information was not properly grouped into easily interpretable chunks.__

![](/uploads/flow.png "A sketch of the kind of information that is entered and received")

To solve this problem, I created a hierarchy of information with the output ranked by how essential the data is to the user, whose goal is to find the most dependable flight for a given route and date. 

![](/uploads/archi.png "A sketch of the levels of information and a crude representation of how they might look")

## The Interface

### Rapidly Generating Possibilities

I took this information architecture and translated it into an interface. Having already built an interface for the first iteration, I kept the same visual language and refined the input and output pages with the new IA.

I started by making some quick wireframe-like mockups of the display screen. 

![](/uploads/fgwire3.png "Separating the locations and route from airlines")

![](/uploads/fgwire5.png "Another view of the separated scheme, with an open entry showing level 2 information")

### The Final Design

The final output page is made up of a series of panels. When the panels are closed, information from level 1 is visible. The optimal airline is revealed through a change in color:

![](/uploads/fg.gif)

![](/uploads/fg6.png "Open panels")

For the input section, I kept the design quite similar to the first iteration. The order of the inputs was cleaned up a bit, and I added the option to have a connecting flight and explicitly specify an airline.

![](/uploads/fg4.png "Revised information input UI")


This project's repository can be [found on GitHub](https://github.com/CBR0MS/flight-time-model).

Check out the site at [flygeni.us](https://flygeni.us)




# Medium Version 

## Background

This is the second iteration of FlyGenius. The first version was a project for [an HCI class at CMU](http://humanaiclass.org) I took in fall 2018. More information about the original project can be [found here](https://archive.christianbroms.com/project/flygenius-v1).

__This project had three main parts: a redesign of the machine learning model making the flight time predictions, a redesign of the website interface and information architecture, and the development of the new site.__

## The ML Model

To see the full process, check out [the Jupyter notebook I wrote detailing the change](https://github.com/CBR0MS/flight-time-model-data/blob/master/visualization/v2/v2Modeling.md).

For the input, it was clear that the kinds of information entered by the user to the model would have to be easily at hand, like the date and destinations. This contrasts with the kinds of data available in the dataset that I used to build the model, which are detailed and definitely _not_ the kind of information an average user would have.

![](/uploads/data.png "A piece of the dataset, showing the kind of data used in building the classifier.")

However, some of this information is necessary for creating an accurate prediction. To solve this problem, I built an API to serve data based on a user's chosen origin and destination. 

## The Information Architecture

Having added some features to the classifier, I had to reexamine the information architecture of the input and output pages.

I started by sketching out the kinds of information being entered and received by the user. __It was clear that the output could easily get overwhelming if the information was not properly grouped into easily interpretable chunks.__

![](/uploads/flow.png "A sketch of the kind of information that is entered and received")

To solve this problem, I created a hierarchy of information with the output ranked by how essential the data is to the user, whose goal is to find the most dependable flight for a given route and date. There are three levels of data, with each providing additional information that builds on the previous level.

![](/uploads/archi.png "A sketch of the levels of information and a crude representation of how they might look")

## The Interface

### Rapidly Generating Possibilities

I took this information architecture and translated it into an interface. Having already built an interface for the first iteration, I kept the same visual language and refined the input and output pages with the new IA.

I started by making some quick wireframe-like mockups of the display screen. I made a lot of very fast iterations, focusing on different methods of relating flights, locations, and routes, as well as the information that's available on each. 

![](/uploads/fgwire4.png "Thinking about the flights as more of a list, ordered by on-time arrival probability")

![](/uploads/fgwire3.png "Separating the locations and route from airlines")

![](/uploads/fgwire5.png "Another view of the separated scheme, with an open entry showing level 2 information")

### The Final Design

The final output page is made up of a series of panels. When the panels are closed, information from level 1 is visible. The optimal airline is revealed through a change in color:

![](/uploads/fg2.png "Closed panels")

Clicking on each section reveals more information about the route, airport, or flight and a small visualization of the probabilities of on-time departure and arrival, accounting for levels 2 and 3.

![](/uploads/fg.gif)

![](/uploads/fg6.png "Open panels")

For the input section, I kept the design quite similar to the first iteration. The order of the inputs was cleaned up a bit, and I added the option to have a connecting flight and explicitly specify an airline.

![](/uploads/fg4.png "Revised information input UI")

I also did some experimentation with the background of the site, to add some visual interest. I added a background that shifts color and imagery based on the time of day. The colors in the gradient change over the course of the day, so there is a very natural shift from the brighter background and colors during the day to the "dark mode" at night.

![](/uploads/fg1.png "The new frontpage during the day")

![](/uploads/fg5.png "The new frontpage at night")

This project's repository can be [found on GitHub](https://github.com/CBR0MS/flight-time-model).

Check out the site at [flygeni.us](https://flygeni.us)





# Long Version 

## Background

This is the second iteration of FlyGenius. The first version was a project for [an HCI class at CMU](http://humanaiclass.org) I took in fall 2018. More information about the original project can be [found here](https://archive.christianbroms.com/project/flygenius-v1).

__This project had three main parts: a redesign of the machine learning model making the flight time predictions, a redesign of the website interface and information architecture, and the development of the new site.__

## The ML Model

To see the full process, check out [the Jupyter notebook I wrote detailing the change](https://github.com/CBR0MS/flight-time-model-data/blob/master/visualization/v2/v2Modeling.md).

For the input, it was clear that the kinds of information entered by the user to the model would have to be easily at hand, like the date and destinations. This contrasts with the kinds of data available in the dataset that I used to build the model, which are detailed and definitely _not_ the kind of information an average user would have.

![](/uploads/data.png "A piece of the dataset, showing the kind of data used in building the classifier.")

However, some of this information is necessary for creating an accurate prediction. To solve this problem, I built an API to serve data based on a user's chosen origin and destination. This way, the user enters the data they know, the website gets the complicated information that they wouldn't know from the API, and the combination is fed into the classifier.

As a side note, the API I built contains entries for 12 major airlines, 320 airports, and a total of 5,597 routes. Check it out at [api.flygeni.us](https://api.flygeni.us/docs).

## The Information Architecture

Having added some features to the classifier, I had to reexamine the information architecture of the input and output pages.

I started by sketching out the kinds of information being entered and received by the user. __It was clear that the output could easily get overwhelming if the information was not properly grouped into easily interpretable chunks.__

![](/uploads/flow.png "A sketch of the kind of information that is entered and received")

To solve this problem, I created a hierarchy of information with the output ranked by how essential the data is to the user, whose goal is to find the most dependable flight for a given route and date. There are three levels of data, with each providing additional information that builds on the previous level.

1. The route and the ranking of the airlines. Here the goal is to make the best-performing airline immediately visible, with the route also clearly defined.
2. Details about the route and airlines. Each of the airlines and the route has a fair amount of information associated that could be useful, such as the duration and likelihood of ontime departure and arrival.
3. The airport details. Each of the airports has additional information that could be useful for a traveler when choosing between two.

![](/uploads/archi.png "A sketch of the levels of information and a crude representation of how they might look")

## The Interface

### Rapidly Generating Possibilities

I took this information architecture and translated it into an interface. Having already built an interface for the first iteration, I kept the same visual language and refined the input and output pages with the new IA.

I started by making some quick wireframe-like mockups of the display screen. I made a lot of very fast iterations, focusing on different methods of relating flights, locations, and routes, as well as the information that's available on each. I referenced my IA to determine what to show without interaction and what to add later after a user has interacted with the interface.

![](/uploads/fgwire1.png "Showing just one flight at a time situated between each of the origin, connection, and destination locations")

![](/uploads/fgwire4.png "Thinking about the flights as more of a list, ordered by on-time arrival probability")

![](/uploads/fgwire3.png "Separating the locations and route from airlines")

![](/uploads/fgwire5.png "Another view of the separated scheme, with an open entry showing level 2 information")

### The Final Design

The final output page is made up of a series of panels. When the panels are closed, information from level 1 is visible. The optimal airline is revealed through a change in color:

![](/uploads/fg2.png "Closed panels")

Clicking on each section reveals more information about the route, airport, or flight and a small visualization of the probabilities of on-time departure and arrival, accounting for levels 2 and 3. By default the panels for the best airline and the route are open, facilitating easy access to information at level 2.

![](/uploads/fg.gif)

![](/uploads/fg6.png "Open panels")

For the input section, I kept the design quite similar to the first iteration. The order of the inputs was cleaned up a bit, and I added the option to have a connecting flight and explicitly specify an airline.

![](/uploads/fg4.png "Revised information input UI")

I also did some experimentation with the background of the site, to add some visual interest. I added a background that shifts color and imagery based on the time of day. The colors in the gradient change over the course of the day, so there is a very natural shift from the brighter background and colors during the day to the "dark mode" at night.

![](/uploads/fg1.png "The new frontpage during the day")

![](/uploads/fg5.png "The new frontpage at night")

This project's repository can be [found on GitHub](https://github.com/CBR0MS/flight-time-model).

Check out the site at [flygeni.us](https://flygeni.us)
