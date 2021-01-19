---
title: "WikiViz: Parallel Browsing"
date: 2020-05-12
category: "Website"
image: "/static/images/wikiviz/wikiviz.gif"
featured: true
excerpt: A quick interactive prototype of an old and still unrealized way to traverse the internet built using the Wikipedia API and React.
---

# Xandau and the potential richness of parallel browsing

Perhaps the single most rich and inspiring instance of an idea for a digital tool I've come across is [Project Xanadu](https://xanadu.com/). Ted Nelson's lifelong endeavor to forge a _uniquely digital_ alternative to paper remains a radical and still largely unimplemented concept. Xanadu is a complex and nuanced project with a variety of design propositions, but the one in particular that I'm interested in is _parallel, side by side browsing of pages with visible links between_. This design for a browser was first introduced in the 1960's, and remains one of the core unimplemented parts of the Xanadu project.

There have been relatively few attempts to prototype Nelson's designs outside [he and his collaborators' efforts](https://xanadu.com/xUniverse-D6). While parallel browsing of pages with visible links seems like a compelling idea theoretically, it's hard to evaluate the design without some kind of prototype. There is just [one prototype of this interface](https://www.xanadu.com/xanademos/MoeJusteOrigins.html), and it only operates with a small set of example pages. **I wanted to implement the design so the interface could be evaluated in a more qualitative way; answering the question _what is it really like to use?_**

# The interface design

I started in a fairly unusual situation: I would need to implement a prototype of an interface that was designed before the internet, before the mouse and keyboard, and before personal computers. The core idea, though, seemed fairly simple:

1. Pages can be viewed side by side in the two dimensional environment
2. There are hyperlinks between pages
3. Clicking a hyperlink brings the destination page up next to the origin and the link between the two is displayed visibly

Returning to the source and reading Nelson's original writing about his design was a good place to start. He calls the [links between pages and the relations that emerge _associative trails_](https://dl.acm.org/doi/pdf/10.1145/800197.806036?casa_token=H_-DtcbZqScAAAAA:IL4pRZJLTrAt_bW5P7ag_bhbguLbQHzJzV1-E6eD9IdtREm5LUQ3pfwTihgvolbmtbSjD4Beqq0I); the interface was designed to provide a way of manifesting these trails visibly. The design was further codified in 1972 when he and his collaborators published [a report](https://archive.org/details/frommemextohyper0000unse/page/245/mode/2up) containing a physical prototype of the interface:

![](/static/images/wikiviz/prototype.png)

## Translating the idea to an implementable design

The idea is simple enough, but I needed to find a way to translate it into something implementable given the constrains that the current web protocol imposes. Core to Nelson's idea is an unrealized concept called _transclusion_, where a reference on one page directly links to it source; the reference is a live pointer to the source. The problem is that hyperlinks on the web today don't have this rich bidirectional linking behavior. A link contains no information about _where_ on the destination page is most relevant for the reader.

I simplified the design by working with this constraint and only showing a visible connection from the source hyperlink to the destination page.

Codifying this in an interface, the idea is that there are many pages that are related to one another through hyperlinks:

![](/static/images/wikiviz/many-links.png)

These links are _invisible_ in most browsers, where clicking on one page navigates you to the destination without preserving the original page in any way. This interface changes that dynamic by placing visible links between the linked pages:

![](/static/images/wikiviz/many-links-concrete.png)

# Building the prototype

I chose to work with Wikipedia for its huge repository of existing, densely interlinked pages, the contents of which can be easily fetched through the [excellent WikiMedia API](https://www.mediawiki.org/wiki/API:Main_page).

I used [React to implement the interface](https://github.com/rainflame/wikiviz). The development process was quite simple and very soon I had a basic working prototype:

![](/static/images/wikiviz/wikiviz.gif)

Try it out at [wikiviz.rainflame.com](https://wikiviz.rainflame.com).

How does it feel to use?

This may be a situation where the simplicity is both good and bad; it's easy to understand the associative trails, but the overall lack of hierarchy provides difficulty. There's no real differentiation between _current_ and _past_ pages, which makes it easy to lose your place.

Despite this, I think there's potential. Nelson was definitely on to something here; the associative trails aspect certainly works in practice as an effective way of preserving context. I'd love to address the pain points from this design in a version that introduces some form of hierarchy and visualization at different resolutions or scales.

_2021 update: I'm planning on implementing an updated prototype as part of [my yearlong endeavor to create twelve small websites](https://futureland.tv/christian/twelve-websites)._
