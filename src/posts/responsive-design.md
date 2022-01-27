---
series: explained
title: Responsive design, explained.
publishDate: 2022/01/27 14:33
thumbnail: rwd.png
description: A simple introduction to responsive design
keywords: responsive web design, responsive design, web development, css, media queries
twitterimage: https://savvas.me/assets/rwd-tw.png
---

People visit websites in a lot of different devices and in a lot of different ways.

Some using their phones, some using their desktop computers, some using tablets.

The clever thing to do to reach the most amount of people, is to make your website available for each one of these devices.

How would you do that?

One possible way is to create 2-3 separate websites, each keeping one device type in mind. For example, 1 website specific for phones and 1 website specific for desktops and tablets. And when someone comes to your website, figure out where they should go from the size of their screen.

This is great and all, but there's a problem. You now have 2 separate independent websites to take care of. 

What if there was a way to have a single website, with a single code base, and just rearrange the items within it depending on the size of the screen?

For example, when the user visits from a phone, hide the left-size menu in a hamburger icon?

This is possible with a technique called Responsive Design, or Responsive Web Design.

## What is responsive design?

Responsive design is a technique used within CSS, which allows you to style things on a website depending on the size of the screen of your user. This way you can have only one webpage that looks different for different devices!

Responsive design makes use of a feature of CSS called "`@media` queries". It works like this:

Suppose you want each heading (`h1`) to have a red colour. In CSS you can do it like this:

```css
h1{
    color: red;
}
```

Now suppose you want the headings to have a red colour, but *ONLY* if the user visits from their phone, let's say a screen less than 300 pixels wide. The way to express this size limitation in CSS is:

```css
@media(max-width: 300px){
    /* CSS goes here */
}
```

So, to put these together, to make the heading red for small screens, we can do:

```css
@media(max-width: 300px){
    h1{
        color: red;
    }
}
```

That's it! 

<video width="320" height="240" src="/assets/responsive.mov" autoplay muted loop>
</video>

A common usage is to hide an navigation bar from a website

<video width="320" height="240" src="/assets/responsive-menu.mov" autoplay muted loop>
</video>

Here it is in CSS:

```css
nav{
    display: none;
}

@media(min-width: 320px){
    nav{
        display: block;
    }
}
```

The code above essentially hides the `nav` element (the navigation menu) by default until the screen is 320 px or larger.

## Learn more

To learn more about responsive web design:

* [HTML Responsive Web Design](https://www.w3schools.com/html/html_responsive.asp) by W3Schools

* [Responsive Web Design - What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/) by Smashing Magazine