---
series: explained
title: CSS, explained.
publishDate: 2022/01/16 17:57
thumbnail: css.png
description: CSS makes the web a more colourful place. So what is it? Let's explain.
keywords: html, css, web, cascading style sheets, explained.
twitterimage: https://savvas.me/assets/css-tw.png
---

CSS is basically a document that decides how things should look like on a web page. What does this mean exactly?

Suppose you want to create a webpage about your vacation in Crete. 

![](/assets/css01.png)

To create the content of the web page, you'll need a file called HTML, which would look something like this:

```html
<h1>My vacation</h1>

<p>Last summer I went on vacation to the Greek islands or Rhodes and Crete. It was loads of fun</p>

<p>We went to the beach, ate tons of ice cream and enjoyed the sun so much that we got a little sunburned</p>
```

[More on HTML](/explained/html)

The document has a heading ("My vacation") and two paragraphs. In HTML, a heading is `<h1>` and a paragraph is `<p>`.

Now the problem is that, although it's great that we can get our content out there, it's a little *boring*.

What if we could give it a little colour? This is where CSS comes in.

With CSS we can tell the browser to do things like:

* Give this heading a red colour

* Make some space between paragraphs so it doesn't look as crammed

* Change the size of this image so it's nice and tidy.

So how do we do this?

## Adding CSS to your website.

This is an example of a typical page made with HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My vacation</title>
</head>
<body>
    <h1>My vacation</h1>

    <p>Last summer I went on vacation to the Greek islands or Rhodes and Crete. It was loads of fun</p>

    <p>We went to the beach, ate tons of ice cream and enjoyed the sun so much that we got a little sunburned</p>
</body>
</html>
```

Suppose we need to make the heading have the colour red. In CSS it would look like this:

```css
h1{
    color: red;
}
```

Where `h1` is just our heading (as we discussed) and `color: red` basically says "make the colour red".

The CSS code above basically says: 

> Whenever there's a first-level heading (`h1`), make it red.

But we're still not done. We somehow need to tell the HTML file:

> Hey HTML! I have some colours and stuff I want you to add to your page. Here's a file for it.

To do this, go to the `<head>` of your page (remember, `head` is for stuff that aren't written on the page) and use this line, for a CSS file called `style.css`:

```html
<head>
    <link rel="stylesheet" href="style.css"/>
</head>
```

That's it! If you load (or refresh) the page on your browser again, the heading will now appear red!

![](/assets/css02.png)

## More stuff you can do with CSS

CSS has loads of stuff you can "style" your web page with:

* Add a background color with `background-color: blue`

* Change the size of something (like an image) with `width: 300px`

* Make some space between things, like paragraphs with `margin: 30px`

## Further more

CSS can also be used to add styling to a page, depending on things like screen sizes. So you can actually make the page look different on desktops and mobile phones without having 2 separate pages! These are called "media queries" which we'll get to on a later date!

## Next steps

Now you know what CSS is all about. It's basically about taking a page with content and changing how it looks!

Now that you got a basic idea of CSS, here are some links to go study further:

* [CSS by MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)

* [CSS tutorial by W3 Schools](https://www.w3schools.com/css/)