---
series: reviews
title: Website review #2 - Concrete and Lavender (Maria Spyrou)
thumbnail: tick.png
publishDate: 2021-03-19 14:30
---

## Introduction


When I [posted the tweet asking for followers' websites to review](https://twitter.com/SavvasStephnds/status/1372827437290172424), Maria replied soon after. [This is her website](https://concretelavender.co.uk/). Thank you Maria for your submission!

![Screenshot of Concrete and Lavender homepage](/assets/concrete-home.png)

Let's review!

## The good

### Our story page

An About (or Our Story) page is *always* a good idea, especially if you're promoting a business. It makes you friendly and approachable. The text itself gives the impression that Maria cares deeply about her products and her customers. Well written!

![Screenshot of the Our Story page](/assets/concrete-ourstory.png)

### Products take center stage

What better way to present your products than to remove any unnecessary clutter and let your products shine on your website?

![](/assets/concrete-products.png)

### Good keyboard navigation

Being able to access a website with only the keyboard is crucial for accessibility. And Concrete and Lavender delivers. Not only is this website fully accessible with a keyboard, it also includes a "Skip to content" link. Nice!

![Screenshot of the Our Story page](/assets/concrete-skip.png)

### Works well without Javascript

Another great thing is that the website runs without Javascript with (mostly) no problems. The only thing that wasn't working was the filter dropdowns.

## Improvements

### Newsletter popup

As soon as you enter the website, you're presented with a popup asking you to sign up to the newsletter. Popups are rarely a welcome addition, especially once you enter a website. A more subtle approach such as a form at the bottom of the page would be less intrusive.

![Screenshot of newsletter popup](/assets/concrete-newsletter.png)

### Contrast on crossed-out prices

The cross-out prices gives a good indication of "before and after" price offers, but there is a contrast issue between the background colour and the text colour:

![Screenshot of crossed-out prices](/assets/concrete-oldprices.png)

This is what the Web AIM Contrast Checker shows:

![WebAIM contrast checker showing bad contrast on crossed-out prices](/assets/concrete-oldpriceswebaim.png)

### Links without discernible text

Another accessibility issue is with the images on the Recently Added Products section.

![](/assets/concrete-nondiscernibletext.png)

They are basically links (`<a>`) with a `<div>` inside them that have the thumbnail as a background image. This means that the link doesn't have any text, which can be confusing for screen reader users. This could be remedied by having only one `<a>` link per product which wraps the thumbnail and the title.

## Conclusion

An overall great and welcoming e-commerce website. Definitely welcoming to the user that clearly shows the love the owner puts in her products. The newsletter popup might be a bit intrusive however.