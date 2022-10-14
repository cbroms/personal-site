---
title: "Extended Encyclopedia of Philosophy"
date: 2018-11-16
category: "Experiment"
image: "/static/images/encyc-of-phil/excerpt.png"
excerpt: A generated book that uses information from Wikipedia pages to create new philosophical "-isms".
---

A collection of twelve new -isms. A sample chapter can be viewed [here](http://cmuems.com/2018/60212f/wp-content/uploads/2018/11/0-chromsan.pdf).

![](/static/images/encyc-of-phil/excerpt.png)

For this project, I wanted to create some sort of an encyclopedia of new terms. I was originally thinking about doing made up wars, but in the end shifted to creating new philosophies.

Since I was making an encyclopedia, it was fitting that I source the text from Wikipedia. This has a few advantages. Firstly, Wikipedia has a nice API that makes searching for pages and getting the text of any page very easy in javascript. Second, I could get any page Wiki has to offer, which means that I could create many interesting combinations. Finally, all text on Wikipedia is explicitly free to be remixed.

I began by collecting a list of all the -isms that Wikipedia has articles on. There's a nice list [here](https://en.wikipedia.org/wiki/Glossary_of_philosophy). When you request a page, Wiki provides the entire HTML structure that has not been parsed, so javascript is a must for this task. I wrote a [short script](https://github.com/cbroms/interactive-comp/blob/master/generative-text/collect.js) using p5 to do this. Now, I had [a json file with all the -isms Wiki has to offer](https://github.com/cbroms/interactive-comp/blob/master/generative-text/isms.json), structured to include the urls from the hyperlinks on the page, so I could easily get each article with one API call.

I then started to make the made up philosophies. Some are created by mashing two together: dropping the -ism on the first and replacing it with -ist. Others are created by adding a latin prefix from [this list](https://en.wiktionary.org/wiki/Category:Latin_prefixes) (that I parsed into a json file in the same manner as before) to the first term. This yields an interesting list of new philosophies like:

![](/static/images/encyc-of-phil/names.png)

I then collected the pages for each of the original philosophies used and parsed them to get just the first couple paragraphs that summarize the terms. These were then mashed together to get around 4-6 sentences of description of the new term. I did a little work to replace mentions of the original terms with the new term to make it feel a bit more natural. This entire process was done in [another p5 script](https://github.com/cbroms/interactive-comp/blob/master/generative-text/sketch.js). It results in descriptions such as:

![](/static/images/encyc-of-phil/para1.png)

I wasn't a huge fan of the fact that the original philosophers were kept in the descriptions of the new terms, as it roots them a bit too much in the two original philosophies. So, I wrote a [short script](https://github.com/cbroms/interactive-comp/blob/master/generative-text/mixer.py) in python to mix up the names and places a bit. For this, I needed a way to identify individuals like Karl Popper in the example above. There is a really nice package built on NLTK that I've worked with before that [does just that](https://spacy.io/usage/linguistic-features#entity-types). This created text like:

![](/static/images/encyc-of-phil/para2.png)

Finally, I [typeset the pages using basil.js](https://github.com/cbroms/interactive-comp/blob/master/generative-text/typeset.jsx) in InDesign. I'd never worked with basil.js before and really liked the amount of freedom it affords you.

The resulting text can have some interesting combinations of philosophies. Often times there are some clear contradictions between the different elements of the terms, which makes it even better. I do think, however, that the text part is a bit too long, especially when there are 12 pages of it; I probably should have made each summary about 3-4 sentences. There was also more work to do in ensuring the text was well formatted with appropriate spaces and periods, as this was messed up when I did some of the parsing. It's readable, but not perfect in this regard. I'm otherwise happy with the result.

A sample chapter can be viewed [here](http://cmuems.com/2018/60212f/wp-content/uploads/2018/11/0-chromsan.pdf).

The full set of PDFs can be downloaded [here](https://drive.google.com/drive/u/1/folders/1dlie-D0Jxn-Dmsp30zEJaOKA08CM24VL).

All the code for this project can be found [here](https://github.com/cbroms/interactive-comp/tree/master/generative-text).
