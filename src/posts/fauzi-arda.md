---
series: reviews
title: Website review #9 - Fauzi Arda
thumbnail: tick-fauzi.png
publishDate: 2021/04/16 15:00
---

## Introduction

![](/assets/fauzi-intro.png)

Last March, I've [posted a tweet](https://twitter.com/SavvasStephnds/status/1372827437290172424) with a simple message: "Post your website and I'll do a review of it". Fauzi [submitted his own](https://twitter.com/fauziarda1/status/1373135779875016713) with a message:

> I'd love to know your opinion

So here it is!

This website will be assessed 4 main topics:

* Usability
* Design
* Responsiveness
* Accessibility

[Fauzi Arda's website](https://fauziarda.space/)

## Usability

### The Good

Fauzi has created a website that is easy to navigate. The About Me, Projects and Contacts sections all live on the home page which can be easily accessed with either scrolling or with the header menu. 

![](/assets/fauzi-home.png)

### Suggestions for improvement

In the contacts section, all links lead to external websites which open in a new tab. These links lack a `rel=noreferrer` text to make them more secure.

![](/assets/fauzi-contact-links.png)

Also some descriptions in the project pages are written in Indonesian, some in English and some in a mixture of English and Indonesian. This can be confusing to the reader. If you need to provide multiple languages, it's best to have 2 separate versions of your website.

![](/assets/fauzi-indonesian.png)

Finally, the top left icon is a link that goes nowhere. I was expecting it to go to the home page, as would all the site's visitors.

![](/assets/fauzi-header-icon.png)

Usability score: 7/10

## Design

### The good

If there's one thing that is done well here is the website's design. Straightforward, and it does the job.

The home page hero section has a cute illustration. I really want to believe this is Fauzi's creation. If it is, well done! If it's not, well done for fitting it so well with the rest of the site!

![](/assets/fauzi-illustration.png)

In the project pages, the project are center stage. Not too much text, just large thumbnails that captivate the viewer to get a better idea of what the project/app is all about!

![](/assets/fauzi-projectthumbs.png)

### Suggestions for improvement

The colour could use some adjustments to make them more accessible. See Accessibility section.

Design score: 8/10

## Responsiveness

### The good

Fauzi's website is a site that works well on phone screens and is quite responsive.

![](/assets/fauzi-responsive.png)

The navigation is neatly tucked in into a hamburger menu which is quite nicely designed!

![](/assets/fauzi-hamburger.png)

### Suggestions for improvement

What needs attention is the font size of the headers in the project pages. It looks massive on small screens which is not quite a good look!

![](/assets/fauzi-projecttitle.png)

Responsiveness score: 7/10

## Accessibility

### The good

Fauzi has used semantic HTML tags like `<section>`, `<header>` and `<footer>` on his website. Great for accessibility!

### Suggestions for improvement

I would like to see further usage of semantic HTML like `<main>`

There are contrast issues with the colour scheme Fauzi has chosen:

The top navigation...

![](/assets/fauzi-topnav.png)

The Hire Me link...

![](/assets/fauzi-hireme.png)

And copyright notice...

![](/assets/fauzi-copyright.png)

All use the same text-background colour combo which fails contrast tests:

![](/assets/fauzi-webaim1.png)

The small text under the Projects section on the home page also fails contrast tests:

![](/assets/fauzi-projectstext.png)

This is what WebAIM says about this:

![](/assets/fauzi-webaim2.png)

Finally there's an issue with the top left icon in the header. As well as the issue we discussed before, where the link doesn't lead anywhere, the image also doesn't have `alt` text. This means that the link doesn't have any text for screen readers to read, so a screen reader user will have no idea what the link is about.

![](/assets/fauzi-nonamelink.png)

Accessibility score: 6/10

## Conclusion

Fauzi Arda has created a website with a beautiful design and project pages that gives the projects themselves take center stage. This design however comes at a cost to accessibility.

Final score: 7/10