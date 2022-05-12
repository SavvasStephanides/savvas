---
series: explained
title: CSS Flexbox, explained.
publishDate: 2022/05/11 12:00
thumbnail: flexbox.png
description: A brief introduction to the CSS property Flexbox.
keywords: css, flexbox, flexible box, web development, web design, flex
twitterimage: https://savvas.me/assets/flexbox-tw.png
---

Suppose you create a new web page.

It only contains a heading and 5 link items in a list.

Without any styling, the elements on the page go under each other, as you'd expect.

![](/assets/flex01.png)

HTML:

```html
<h1>My website</h1>
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">About me</a></li>
  <li><a href="#">My projects</a></li>
  <li><a href="#">My articles</a></li>
  <li><a href="#">Contact me</a></li>
</ul>
```

Of course you can style anything on the website, like making the heading colour red:

```css
h1{
  color: red;
}
```
![](/assets/flex02.png)

Or making it so it looks like a navigation menu:

```css
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li a{
  text-decoration: none;
  color: black;
  display: block;
  padding: 9px;
  border: 1px solid black;
  width: 90px;
}
```
![](/assets/flex03.png)

But to really make it look like a navigation, we have to change its style so that the navigation elements are side by side instead of one under the other. How is this possible?

Determining which direction a list of elements should go, either downwards or sideways, can be set by a CSS property called **Flexbox**!

## What is Flexbox?

Flexbox is essentially a way of saying:

> I have a bunch of elements, I want to decide whether these elements are shown vertically, or horizontally.

In the case of our navigation elements above, the list items (`li`) are contained within an "unordered list" element (`ul`).

Essentially we want to say:

> I want the stuff that's in the unordered list element to be horizontal

So we set the styling of the `ul` to include `display: flex`:

```css
ul{
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex; /* 👈 "I am now a Flexbox" */
}
```

The unordered list is now essentially a box with some list items on it.

Now we can specify which direction the items within it should go: row or column:

```css
ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row; /* 👈 Put items here in a row */
}
```

Now each item in your navigation will be on a single row.

![](/assets/flex04.png)

Or if you'd rather have them in a column, use `flex-direction: column` instead.

So what else can Flexbox do?

## Centering a div!

With flexbox, it's easier than ever to center a `div`!

Suppose you have a div and inside it, a piece of text in another div:

```html
<div class="outer">
  <div class="inner">Some text</div>
</div>
```

The outer div has a size of `300x120`:

```css
.outer{
  border: 6px solid red;
  width: 300px;
  height: 120px;
}
```

![](/assets/flex05.png)

If we want the inner div to be centered, all we need to do is to set the outer div as a flexbox:

```css
.outer{
  border: 6px solid red;
  width: 300px;
  height: 120px;
  display: flex; /* 👈 I am now a flexbox */
}
```

And set the `margin` of the inner div as `auto`:

```css
.inner{
  margin: auto;
}
```

That's it! Now the text is centered!

![](/assets/flex06.png)

## More information

To learn more about flexbox, check these resources:

* [Flexbox - web.dev](https://web.dev/learn/css/flexbox/)

* [Basic concepts of flexbox - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

* [CSS Flexible Box Layout - Wikipedia](https://en.wikipedia.org/wiki/CSS_Flexible_Box_Layout)

* [Flexbox Froggy - Codepip: Learn flexbox by playing a game!](https://flexboxfroggy.com/)