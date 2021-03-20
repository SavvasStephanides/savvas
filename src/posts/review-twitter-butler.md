---
series: reviews
title: Website review - Twitter Butler Digest
thumbnail: tick.png
publishDate: 2021-03-20 09:57
---

## Introduction

Tibo submitted the website for his product Twitter Butler Digest as a reply to [my tweet](https://twitter.com/SavvasStephnds/status/1372827437290172424). [Here is the website](https://digest.tweetbutler.com/).

![Twitter Butler Digest homepage](/assets/twitterbutler-home.png)

## The good

### Powerful in its simplicity

Everything is a single page. The request form, testimonials, and descriptions are all together. Simple and effective!

### Testimonials

What better way to sell your product than with showing what people think of it! A nice touch and definitely a selling point!

![Twitter Butler testimonials section](/assets/twitterbutler-testimonials.png)

### Straightforward access request form

An email address, a twitter handle and a button. That's it. Probably takes 2 seconds to send. No complicated questions, just a beautiful responsive form. Kudos!

![Twitter Butler request form](/assets/twitterbutler-form.png)

### Clear description of what the product does

If you're visiting the page for the first time, you'd like to learn more about the product. The 4 bullet points are more than enough to get you up to speed and make a decision on whether to sign up or not.

![Twitter Butler request form](/assets/twitterbutler-description.png)

### Nice colour scheme

I always appreciate a dark colour scheme when I see one. Dark background on light text. Much easier on the eyes. Tibo does a brilliant job at creating a distinct colour scheme. Plus it has a nice contrast for accessibility!

![Twitter Butler contrast check for site background](/assets/twitterbutler-contrast1.png)

## Suggestions for improvement

### Screenshots

The description is nice but I would like to see some screenshots of what to expect after I sign up. How do the reports look like?

### Request Access button contrast

This is an accessibility issue. The Request Access button on the form last sufficient contrast:

![Twitter Butler contrast check for site background](/assets/twitterbutler-button.png)

Below is the Web AIM Contrast Checker result:

![Twitter Butler contrast check for button](/assets/twitterbutler-contrast2.png)

### `<iframe>` needs a title

The testimonials section is surrounded by an `<iframe>` element. `iframe`s need a `title` in order to be fully accessible:

![Twitter Butler testimonials iframe element](/assets/twitterbutler-iframe.png)

### Twitter link needs a discernible name

The Twitter link at the bottom is basically an `<a>` tag with an `<svg>` inside it. Screen readers don't know how to describe this to their users unless there's some text describing it. An `aria-label` will do the trick.

![Twitter link](/assets/twitterbutler-twlink.png)

## Conclusion

A simple, effective website, with a clear description of what the product is about. Some minor accessibility issues.

[More reviews](/reviews)