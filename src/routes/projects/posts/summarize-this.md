---
title: "Summarize This"
date: 2019-10-07
category: "Experiment"
image: "/static/images/summarize-this/times1.png"
excerpt: A website that scrapes other websites and outputs entertaining sentences using their content.
---

Summarize This is an experimental website that takes a url and produces a summary of the page in a series of short sentences. It is not meant to be accurate, but rather to produce entertaining outputs that may or may not be a good reflection of the site's content.

It works by extracting a random selection of a webpage's text and collecting the organizations, people, topics, and parts of speech. It analyses the sentiment of the webpage and then creates new sentences from the entities that have been extracted that are similar in sentiment to the overall page. It does not add any new content to the output; all words are harvested from the original website and reused to make the summary.

A website can be entered:

![](/static/images/summarize-this/front.png)

Then a random summary is output:

![](/static/images/summarize-this/times1.png)

Reloading the same page produces different outputs:

![](/static/images/summarize-this/times2.png)

Here's the site run on the Wikipedia page for World War II:

![](/static/images/summarize-this/ww21.png)

![](/static/images/summarize-this/ww22.png)

And on a page about chocolate:

![](/static/images/summarize-this/choc.png)
