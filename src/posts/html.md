---
series: explained
title: HTML, explained.
publishDate: 2022/01/09 17:57
thumbnail: html.png
description: HTML is the backbone of the web. So what is it? Let's explain!
keywords: html, web, hypertext markup language
twitterimage: https://savvas.me/assets/html-tw.png
---

HTML is basically a piece of text that your browser (like Chrome, Firefox, or Edge) reads to show you a website on your screen.

This piece of text contains some instructions on what to show on the website, and also some details about the site itself, for example what to show on the tab when the website is opened.

So how does it work?

Suppose you want to write a small document. Something that contains a title and two paragraphs. Something that would look like this:

![A basic document with a title and two paragraphs](/assets/html-basicdoc.png)

You can tell a browser how to show this a web page using HTML.

HTML uses "tags" to label each line of text. For example:

A title (or a first-level heading) can be written using the `h1` tag like so:

```html
<h1>My vacation</h1>
```

With this line, you're basically telling the browser:

> Show me a title that says "My vacation".

A paragraph can be written using the `p` tag. So to write our two paragraphs, we do this in HTML:

```html
<p>Last summer I went on vacation to the Greek islands or Rhodes and Crete. It was loads of fun</p>

<p>We went to the beach, ate tons of ice cream and enjoyed the sun so much that we got a little sunburned</p>
```

So what if you want to add an image? 

![A basic document with a title, an image and two paragraphs](/assets/html-docwithimg.png)

You can do this using the `img` tag:

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Island_of_Crete%2C_Greece.JPG" alt="Satellite image of Crete" />
```

As you can see the `img` tag contains two more things you need to include: a `src` and an `alt`. With `src` you can tell it where to go and find the image. With `alt` you can add a description of the image so that people using assistive software know what the image contains.

Add the `img` tag where you want the image to show up.

Some other useful tags in HTML include:

* `a` where you can add links to other web pages within your website or externally.

* `ul` shows a list with bullet points. Each point is tagged as `li` within the `ul` tag.

* `ol` is the same as `ul` but with numbers instead of bullet points.

* `header` to tell the browser that this is the top header of the website, that usually contains the logo and the navigation.

For a full list of tags, see [this page](https://www.w3schools.com/TAGS/default.ASP).

As I mentioned before, HTML doesn't only contain things that show on the page, it also contains information *about* the page that don't show up on the page itself.

Stuff like what to show on the browser's tab, when a page opens. This is done with the `title` tag:

```html
<title>My vacation</title>
```

So how do we differentiate between things that show up on the page and things that are *about* the page? This is where the `head` and `body` tags come in. This is how a complete HTML page looks like:

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

A few things to notice from the code above:

1. The `<!DOCTYPE html>` line at the top that simply says: "This is an HTML file"

2. The `<html>` tag that surrounds every other tag in the file

3. the `<head>` tag that contains information about the page (like the `title`)

4. the `<body>` tag that contains information that will be shown on the page (like the paragraphs and heading)

And this is HTML in a nutshell!

## Learn more

To learn more about HTML, check out these resources:

[1] [HTML Tutorial - W3Schools](https://www.w3schools.com/html/default.asp)

[2] [Introduction to HTML - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)