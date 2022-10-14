---
title: "Startup Colors"
date: 2019-10-29
category: "Dataset"
image: "/static/images/startup-colors/colors.png"
excerpt: Disillusioned with the homogeneity of startup web design, I created a dataset of the most common colors used by these new websites.
---

# A dataset of colors harvested from startups' websites.

![](/static/images/startup-colors/colors.png)

# Method

To scrape the colors and SVGs from the startup websites, it was first necessary to compile a list of urls to these websites. For this, I turned to producthunt.com and Y Combinator. On Producthunt, people post their startups and projects for the community. The posts on Producthunt are anything from Facebook's new cryptocurrency to Joe Schmoe's note-taking app that he's been working on solo for a few months. Popular posts are voted up and each day, week, and month has a top-voted product.

Y Combinator is a bit different, as all of the startups listed on their website were funded for at least \$150,000 by the seed accelerator. Many of these sites have grown much larger, and plenty have shut down completely.

Both of the websites lazy-load the data, so I had to create a browser session with selenium to scrape the site contents. Producthunt has an infinite-scrolling system which required that the script execute javascript in the browser to automatically scroll down and trigger the loading of more data. Once a certain number of posts have been loaded, it pulls the links to each post. Then the script requests each post page and extracts the url to the featured project's website. A similar process takes place for the Y Combinator site, which lazy-loads the contents all at once.

Once I had a list of startup websites from both Producthunt and Y Combinator, I could begin to scrape colors and SVGs. For each site, I make a request and pull out the references to CSS files and SVG files in the site's HTML. I then request each of these resources. For the colors, I pull out any valid CSS color in rgb, hsl, and hex. Each is then converted to a hex value and saved.

# Why?

Startups are unique in that they have the chance to completely redefine what a website can be and how it looks. They're new, they're thinking different, they're revolutionizing cloud computing/human resources/security testing/legal and compliance workflows/modern medical billing/cannabis delivery/code delivery/electric scooters. Yet so often, the design of these websites is [exactly](https://www.percept.ai/) [the](https://www.scholarme.co/) [same](https://www.emailjs.com/), [over](https://www.askdata.com/) [and](https://credpal.com/) [over](https://slapdash.com/) [again](https://www.inscribe.ai/). There's clearly a "safe" route to go; a landing page with pastel colors and gradients, bubbly two-dimensional illustrations of people with massive hands and tiny heads, a call to action and logos of more reputable companies that could conceivably be users of their revolutionary new SaaS/DaaS/ITaaS/PaaS/IaaS/MSaaS/ITMaaS.

It's a bit of a shame that these websites, some of them less than a day old, follow such a familiar pattern. Yet in this homogeneity there is an opportunity to learn more about this style, to better define it. Artistic styles and painters are defined by their palettes, and so should web styles. We all are aware of the differences between the web styles of the late 90's and late 2000's, but there is no codified difference between them in terms of colors and border styles and padding. We take for granted the differences but have not defined them. Yet the information is all there, linked in stylesheets and ready to be scraped, analyzed, and built upon.

The aesthetics of the web are always a consideration, but the content is usually the core of what we're concerned with. This is reflected in our tools for interfacing with the web; there's a plethora of python and javascript packages for parsing and extracting bits of content from HTML but there are none for CSS. The medium of the web might be HTML, CSS and javascript, but we're often only really interested in the content by way of the HTML. The site's javscript and CSS is often discarded as a byproduct of the scraping process.

Artistically, however, there's just as much potential to work with the aesthetics of the website as there is the content. Someone's impression of a site is very much defined by its style; a site with a monospace font with strong colors has a very different association than a site with a sans-serif and pale blues. In some cases the content doesn't really matter; an impression of a website is formed by its style alone. Consider these two startup websites: [one](https://www.inscribe.ai/) and [two](https://percept.ai/). How do they feel? Would the same kind of people work at these two companies? Are the sites designed for the same user? In this case, the content of the sites and the focus of the two companies are different; one makes customer support chatbots and another analyses documents. Yet the feel of the sites, who they're designed for, and how they work is very much the same. There's a nearly identical page layout, color scheme, and illustration style. Such a relationship can be better understood with the actual color and style values, especially across many more sites.

The project and more information can be [found on GitHub](https://github.com/cbroms/website-palettes).
