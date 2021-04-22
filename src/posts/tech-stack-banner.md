---
series: reviews
title: Website review #10 - Tech Stack Banner (Andy Griffiths)
thumbnail: tick-techstackbanner.png
publishDate: 2021/04/22 08:44
---

## Introduction

![](/assets/techstackbanner-front.png)

Back in March when I posted [this tweet](https://twitter.com/SavvasStephnds/status/1372827437290172424) for followers to submit their websites for me to review, Andy Griffiths [submitted his own](https://twitter.com/brandymedia/status/1373236964384780291) with the message:

> Just a quick little JavaScript project I built. 

> Be interested to know your thoughts as not had much feedback yet. 

So without further ado, let's look at Andy's little project, [Tech Stack Banner](https://stack.brandymedia.co.uk/):


## The Good

### A very useful tool

Tech Stack Banner is a tool I haven't seen before but I would *definitely* see myself using. You could say it's one of those "I didn't know I needed" kind of tool for many who want to show off their skillset in a simple image. The image can be downloaded and used as a Twitter header for example.

![](/assets/techstackbanner-stack.png)

### Simple and straightforward

The user interface for this tool is pretty straight forward. Start typing your tool of choice into the box and you'll be immediately get suggestions underneath. Click on one and it immediately goes into your banner as a tile. You can tell a lot of work has been put into making this app!

![](/assets/techstackbanner-dropdown.png)

### Fully accessible with a keyboard

As a test, I've tried to use the tool only using a keyboard. I had no issues whatsoever and there was no part of the app I couldn't access without a mouse. Good job!

### Responsive

The app is fully responsive. I had no problem using the app in a variety of screen sizes without any trouble.

![](/assets/techstackbanner-mobile.png)

### Use of `aria-expanded`

Andy has made sure screen reader visitors know that the input box is expandable by providing an `aria-expanded` tag in the input box! That's a major consideration I haven't seen much in tools like this!

## Improvements

### Use of semantic HTML

While testing the site, I had a look at the source code. Although having just `<div>`s works well on the surface, I would've liked to see the header in a `<header>` tag, the footer in a `<footer>` tag, the main part in a `<main>` tag and so on.

![](/assets/techstackbanner-html.png)

### No rel in external links

At the bottom of the page, Andy has provided a link to his business, Brandy Media. This link opens in a new tab. It is good practice however, to have `rel="noreferrer"` in such links, even though it's your own link you know and trust.

![](/assets/techstackbanner-bottomlink.png)

### Contrast issues

Some of the text in the app doesn't have sufficient contrast against its background. Most importantly, the list of tech stack items in the input.

![](/assets/techstackbanner-stackinput.png)

This is what WebAIM says about it:

![A contrast ratio of 1.92:1 which fails all contrast checks](/assets/techstackbanner-stackinput-webaim.png)

The "I'd love it if you attributed the design - No hard feelings if you decide not to." also has some contrast issues which could affect some of the app's visitors.

![](/assets/techstackbanner-attribute.png)

This is what WebAIM says about this:

![A contrast ratio of 4.39 which fails all checks for normal text](/assets/techstackbanner-attribute-webaim.png)

### Checkbox without a label

The checkbox next to "Attribution" doesn't have a label or something the screen reader can read back to its user. The text "Attribution" itself could act as the label.

![](/assets/techstackbanner-attributioncheckbox.png)


### Performance improvements

There is an opportunity to improve performance by removing some unused CSS

![](/assets/techstackbanner-unusedcss-lighthouse.png)

### Conclusion

Tech Stack Banner is a very useful and easy to use "didn't know I needed" app. Some opportunities for improvement are there.

Score: 9/10