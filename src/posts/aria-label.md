---
series: explained
title: aria-label in accessibility, explained.
publishDate: 2021/08/18 08:47
thumbnail: arialabel.png
description: An explanation of the aria-label attribute in accessibility
keywords: accessibility, aria, aria-label, web development, javascript, hoisting, explained
twitterimage: https://savvas.me/assets/arialabel-tw.png
---

What is `aria-label` is accessibility?

## Let's explain

Suppose in your website you have a button:

```html
<button></button>
```

This button appears when there's a popup window and its job is to close that window:

```html
<button onclick="closeWindow()"></button>
```

To make the button as minimal as possible, you decide to give it a label "X", instead of "Close":

```html
<button onclick="closeWindow()">X</button>
```

So the button will look like this:

![The close button in the website](/assets/closebutton1.png)

Although the button looks nice, there's a problem.

A screen reader will announce the label of the button as is. So once the button has the focus, the screen reader will say:

> Cap X, button

That doesn't really give an very good picture of what the button is supposed to do to the screen reader user. We need a clearer label, but at the same time, keep the "X" as our label.

What can we do?

We can use an attribute in our HTML, called `aria-label`.

This is how it can be used in our button:

```html
<button onclick="closeWindow()" aria-label="Close window">X</button>
```

So now the button will be announced like this:

> Close window, button

In conclusion, if you need a screen reader to announce an element separately than its actual label, use `aria-label`.

To learn more see [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
