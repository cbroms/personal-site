---
title: "Snippets"
date: 2019-04-15
category: "Experiment"
image: "/static/images/snippets/snip.png"
excerpt: A quick experimental website designed to reveal the parts of text people find to be most meaningful.
---

![](/static/images/snippets/snip.png " ")

This project asks users to select what they find to be the meaningful portion of a snippet of text. Users' selections are aggregated to create a mapping between each word and the proportion of people that found it meaningful. The original text is redrawn to reflect this proportion, resulting in a new passage organized in a sort of hierarchy of meaning. As intersubjective agreement increases, letters in words come together, become darker, and grow larger. In areas with less agreement, letters shrink, become lighter, and spread apart.

The project is a bit of an experiment for a few possible future projects. At the core, I'm interested in the way that people construct meaning from text, and how much of this construction is subjective. From the results of this poll, I seek to find possible ways of addressing this question that builds on the successes and failures of this method.

# Design

When I first envisioned the project, I wanted to create a way for users to read over a passage of text and select the portions they found to be meaningful. However, it became clear that this would result in either _too many_ selections (users selecting both meaningful portion and contextual elements) or _too few_ selections (users selecting the most meaningful few words out of the entire passage).

I decided to split each passage of text into multiple _snippets_, small chunks of two to three sentences. This way, users would have to select _something_, but would not be able to select _everything_.

With this constraint, I could get a more accurate representation of what people find to be meaningful from a sample of text that is neither too large nor too small.

A snippet of text from _Crime and Punishment_ looks like this:

![](/static/images/snippets/snip2.png " ")

It was also very important that the UI was as simple and easy to use as possible, as this survey would be distributed to a population with an unknown level of technical expertise. I minimized the number of possible actions on each page to just the essential ones, and designed a simple user flow between survey to results, and then back to a new survey.

Another interesting characteristic of this website is that a homepage is not necessary. Users access the site from a direct link and click through the survey to the results without any need for the homepage.

Finally, the primary action: highlighting. The most intuitive way of selection a portion of text on a computer is to run the cursor over it and highlight it. I figured there was no reason to make the selection process any fancier than that.

![](/static/images/snippets/snip3.png " ")

# Development

I built the site with the MERN stack. It was my first time working with both MongoDB and Express, but found both very intuitive to work with and easy enough to learn. Since the goal was to get something up and running quickly, I kept the site as simple as possible; there are no extraneous animations or menus.

For the text highlighting portion of the survey, I elected to use a pre-made component, [react-highlight-selection](https://www.npmjs.com/package/react-highlight-selection). The only limiting factor of this component is that it allows for one section of text to be highlighted at a time. This meant that users' selections would be limited to a single continuous line of text. In the end, this turned out to be a positive addition, as the goal is to select _just_ the most important section.

Some of the visualizations of agreement created by highlighting the text can be quite revealing. For example, sometimes there are snippets with less agreement (<40% coherence):

![](/static/images/snippets/snip6.png " ")

Other times, the meaningful portion of the snippet seems quite clear (>90% coherence):

![](/static/images/snippets/snip5.png " ")

Similar trends can be found in the passage visualizations:

![](/static/images/snippets/snip7.png " ")

![](/static/images/snippets/snip8.png " ")

This project's repository can be [found on GitHub](https://github.com/CBR0MS/a-perfect-tree).
