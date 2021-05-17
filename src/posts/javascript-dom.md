---
series: explained
title: The DOM, explained.
publishDate: 2021/05/17 15:00
thumbnail: jsdom.png
---

The DOM, or *Document Object Model*, is a concept in Javascript that allows you to manipulate a website and add dynamic content. But what is it and how does it work?

## Let's explain!

Suppose you have a very basic website. It looks like this:

![](/assets/domexplained-page.png)

It's a very simple website with 5 `div`s. This is the HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>
</html>
```

Now, as we know, Javascript adds interaction to our website. How does it do that?

Let's say we need to add a button on our website, which sets the background colour of our website to black. How can we do this using Javascript?

![](/assets/domexplained-button.png)

```diff
<body>
    <div id="app">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
+   <button id="the-button">Turn background black</button>
</body>
```

To do anything on the page using Javascript, we need to have a representation of the website as Javascript objects. This way we can access the elements and run scripts on them.

For example, to get the button, we can do this:

```js
let theButton = document.querySelector("#the-button")
```

Or to get the `<body>` from the HTML, we can do this:

```js
let body = document.body
```

That way, we can set some Javascript code to run whenever the button is clicked:

```js
theButton.addEventListener("click", () => {
  // whatever goes here gets executed after the button is clicked
})
```

Now we can get the body we declared above and set its background colour:

```diff
theButton.addEventListener("click", () => {
+   body.style.backgroundColor = "black";
})
```

If we now click the button, the background colour of the whole website will turn black! This is the type of interactivity (and much more) that is possible using Javascript.

As you may have noticed we have a website built using HTML and a representation of it in Javascript so we can interact with it. In other words, Javascript contains a version of the HTML using *objects*!

This is what we call the **Document Object Model**, or DOM.

## A step further

Now suppose we have a `div` within another `div`. Something like this:

```html
<div id="outer">
  <div id="inner">Hello</div>
</div>
```

If we need to access the inner `<div>`, there are two ways to do it:

The first:

```js
var outer = document.querySelector("#outer #inner")
```

Or the second way is to access the inner `<div>` *from the outer*:

```js
var outer = document.querySelector("#outer")
var inner = outer.querySelector("#inner")
```

This is because the DOM in structured sort-of like a tree, according to how you structure your HTML.

![](/assets/dom-tree.png)

This is it's called a "DOM Tree".

## Learn more

To learn more about the DOM the Mozilla Developer Network has a [complete guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).