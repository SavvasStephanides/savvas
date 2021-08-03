---
series: explained
title: ARIA live regions, explained.
publishDate: 2021/08/03 14:00
thumbnail: a11y.png
description: What ARIA live regions are in accessibility
keywords: html, accessibility, aria roles, live regions, button, aria
twitterimage: https://savvas.me/assets/liveregions-tw.png
---

What are "live regions" and how can they make my interactive website more accessible?

## Let's explain

Let's suppose you've made a website. This website is interactive. There's a dropdown of programming languages and a Go button

The Go button displays information about the selected language below.

Demo: https://live-region-test.netlify.app/

There is a problem however with how screen readers interpret this page.

Notice what happens after the user clicks on the Go button:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">There is a problem however with how screen readers interpret this page.<br><br>Notice what happens after the user clicks on the Go button: <a href="https://t.co/CRDrMR29sC">pic.twitter.com/CRDrMR29sC</a></p>&mdash; Savvas Stephanides (@SavvasStephnds) <a href="https://twitter.com/SavvasStephnds/status/1422520443144187905?ref_src=twsrc%5Etfw">August 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Nothing gets announced after the Go button is clicked. The screen reader user has no idea that the text below has been updated.

How can we fix this?

Let's have a look at the HTML code. The Javascript and CSS code have been left out because they're irrelevant.

You can see the `<select>` tag which is the dropdown, the `<button>` element and a div with ID "description" which updates with the selected programming language details:

```html
<div id="app">
    <select id="language-selection">
        <option value="none">-- Select a language --</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="html">HTML</option>
    </select>

    <button id="go-button">Go</button>

    <div id="description">
        <span id="text"></span>
    </div>
</div>
```

How can we make sure that every time the description changes, the changes get announced by the screen reader?

We can solve this by using an ARIA "live region".

With a live region, our HTML should look like this:

```html
<div id="app">
    <select id="language-selection">
        <option value="none">-- Select a language --</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="html">HTML</option>
    </select>

    <button id="go-button">Go</button>

    <div id="description" role="region" aria-live="polite">
        <span id="text"></span>
    </div>
</div>
```

* the `role="region"` parts marks that specific area as significant
* `aria-live` marks this area as "live", which is to say that it will be updated. 
* `"polite"` means announce the change only when the user isn't doing something else.

So now our page would look something like this with a screen reader:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">So now our page would look something like this with a screen reader: <a href="https://t.co/26BYsvsy47">pic.twitter.com/26BYsvsy47</a></p>&mdash; Savvas Stephanides (@SavvasStephnds) <a href="https://twitter.com/SavvasStephnds/status/1422520480876142597?ref_src=twsrc%5Etfw">August 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Now the screen reader announces to the user every time there's a change!

And that's how live regions work. Thanks for reading!