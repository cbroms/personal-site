---
path: /project/magc
title: MAGC Interactive Map
subtitle: An interactive map and guided tour showcasing historic gardens for visitors
synopsis: >-
    A website I designed and developed to present the history and features of the Marin Art and Garden Center, an arts and conservation organization.
tags:
    - products
    - websites
image: /uploads/magc1.png
timeframe: 2 Months (July-August 2018)
project_type: Professional project done for MAGC
tools:
    - Django
    - Javascript
disp_order: 4
---

# Background

This is a project I began in the summer of 2018 for the non-profit [Marin Art and Garden Center](https://magc.org) (MAGC) in Ross, California. MAGC is an eleven-acre site containing historic gardens and buildings, as well as gallery and retail spaces. The organization hosts a variety of programs in the arts, gardens, and conservation.

I was tasked with designing and implementing a digital version of a map of the grounds that would contain information about historical features on the site. MAGC found many visitors to be unaware of the history behind many of the gardens and buildings, which before could only be learned from a guided tour. MAGC wished to make this information available to a larger audience both online and onsite.

# Design

The first challenge I undertook was designing a system that would fulfill the vision MAGC had for an interactive map, while also incorporating features that might assist a new visitor to the site, a key requirement for any map.

## A tagging system

Early ideas concentrated on a tagging system for the points, where locations of historic significance could be distinguished from ordinary locations through a simple change in color. This way the map could include all notable points on the grounds, such as newer gardens and spaces, while still providing the historic information the organization originally wanted to convey.

Initial user research found that visitors to MAGC are often not interested in the entire site, but rather something specific. Some come to see the gardens, while others are mainly interested in the history of the site. The ability for the user to toggle points based on their own personal interests would facilitate a better experience for those with particular goals in their visit.

![](/uploads/magcfilter.gif "Enabling and disabling which points are shown through the tagging system")

I created an open-ended system so that the organization could create categories for points and add them to the map. In the future, if more points are added, MAGC can always create a new tag category to expand the available filters. They could also create more fine-grained categories if they find visitors want the ability to further reduce their query.

## The map

For the map itself, I wanted to create something very simple to highlight just the basic elements needed for visitors on the site. I took a survey of the site and reduced it to simple outlines of paths, buildings, and trees. The points could be overlayed on this layer and toggled by the user as necessary.

![](/uploads/magcmap.png "The map with points")

## Interaction

A key part of this web app is the ability of the user to interact with the map. I didn't want to do anything too fancy here. To keep interaction intuitive, I used a Google/Apple Maps style where pinching and swiping on touch screen moves the map in and out, and scrolling the mouse wheel and dragging on desktop does the same.

## Answering questions

After completing the map, we found one missing element to be a tour feature, where visitors could take a self guided tour around the grounds. I added a way for MAGC to create different tours for visitors with points already on the map. All it required was the addition of a question to prompt the next point in the sequence. A tour looks like this:

![](/uploads/magctour.gif)

## Graphics and typography

For graphic design of the site, I had to work with MAGC's style guidelines. In particular, this meant using the fonts [Klinic Slab](https://befonts.com/klinic-slab-font.html) and [Berthold Akzidenz Grotesk Extended](https://www.bertholdwebfonts.com/berthold-fonts/akzidenz-grotesk-extended). For the headings I wanted something less distracting, so I went with [Chivo](https://fonts.google.com/specimen/Chivo), a font that pairs well with Klinic Slab, used as the body font.

For colors, MAGC also has a convention. I went with lightened versions of these colors for the map, and filled in similar feeling colors for the tags.

# Development

The main challenge for this project was finding a medium between hardcoding the content and allowing MAGC to input new content. I decided to opt for allowing the organization to control more of the content.

For this reason, I decided to use Django as the web framework. I wanted to create a robust system of models that would allow for easy future customization. Django's admin system also provides an excellent interface for the content managers.

## Placing the points on the map

Since the points would be added by the organization, I needed to find a way to place the points accurately on the map. After a bit of testing, I settled on using the real-world latitude and longitude of the locations and transferring them to screenspace x/y coordinates. I hardcoded the the latitude and longitude of each of the corners of the map from the survey, and implemented [an algorithm to approximate the 2D locations](https://en.wikipedia.org/wiki/Mercator_projection#Mathematics_of_the_Mercator_projection) of the points using these markers.

All that needs to be done to add a new point is to retrieve the longitude and latitude of the location from a mapping application and the point will be accurately placed on the online map. Though using latitude and longitude might seem a bit overkill for a project of this size, it preserves the possibility of easily of adding useful features, such as a guided tour through the gardens from a phone's geolocation (which is delivered using geographic coordinates).

## Open-source

All the code for this project is open-source and can be found [on GitHub](https://github.com/CBR0MS/magcInteractiveMap). The map can be found at [interactive.magc.org](https://interactive.magc.org)

![](/uploads/magcfront.gif)
