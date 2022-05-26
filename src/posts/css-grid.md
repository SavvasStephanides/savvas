---
series: explained
title: CSS Grid, explained.
publishDate: 2022/05/26 12:00
thumbnail: cssgrid.png
description: A brief introduction to the CSS property Grid.
keywords: css, grid, columns, rows, web development, web design, display grid
twitterimage: https://savvas.me/assets/cssgrid-tw.png
---

Suppose you are a photographer and you’ve taken some photos you want to show the world.

![](/assets/grid01.png)

So you decide to learn HTML and CSS so can create a website with all your photos.

It takes you a bit of time but eventually you manage to upload all your photos for everyone to see!

By default, a browser displays all elements one under the other. Your website is no exception.

![](/assets/grid02.png)

It’s great that you have a place to show off your work, but the website doesn’t quite look right. You want it to look less than a long document, and more like a gallery of photos!

Essentially you want all your photos to be shown in rows and columns, like a grid. How can you do that?

This is where CSS Grid comes in!

Now suppose this is the [HTML](/explained/html) you created to place your photos:

```html
<div id="myphotos">
    <img src="photo01.jpg" alt="">
    <img src="photo02.jpg" alt="">
    <img src="photo03.jpg" alt="">
    <img src="photo04.jpg" alt="">
    <img src="photo05.jpg" alt="">
    <img src="photo06.jpg" alt="">
    <img src="photo07.jpg" alt="">
    <img src="photo08.jpg" alt="">
    <img src="photo09.jpg" alt="">
</div>
```

It’s basically a `div` called `myphotos` with some images. As we saw, by default, the images are displayed one under the other. We want to display these photos as a grid. Here’s how.

First, in [CSS](/explained/css), we set the “myphotos” div to `display: grid`:

```css
#myphotos{
    display: grid;
}
```

Next we’re going to tell our browser that we need a grid made up of 3 columns:

```css
#myphotos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

Now our photo gallery actually looks like a gallery!

![](/assets/grid06.png)


As a last step to finalise our gallery, we can add some space between our photos by using `grid-gap` in CSS:

```css
#myphotos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
}
```

Now it looks even more like a gallery!

![](/assets/grid08.png)


This is essentially what CSS Grid lets us do. It lets us define columns and rows so we can organise elements in a grid. It works for every element, not just photos!

CSS Grid works best in larger displays so to find out more about how to accommodate for different screen sizes, see:

[Responsive design, explained](/explained/responsive-design)

## Next steps

Now that you got a good first idea of what a grid is, these will get you up to speed:

* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - CSS Tricks

* [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - MDN

* [CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o) - Traversy Media on YouTube