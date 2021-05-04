---
series: tips
title: Use prefers-color-scheme in CSS to set light/dark mode according to user's settings!
thumbnail: light-dark.png
publishDate: 2021/05/04 11:56
---

Many websites have a toggle in their header which lets users switch betwen light and dark mode. This is a great feature to have but there's a chance they already set their preference in their operating system's settings. Wouldn't it be great if your website was simply responsive according to their settings?

This is possible with the `prefers-color-scheme` media query in CSS!

## How does `prefers-color-scheme` work?

`prefers-color-scheme` works exactly like any other `@media` query.

A basic example:

```css
@media (prefers-color-scheme: light) {
  body{
      /* Set the background to white and text to black */
      background: white;
      color: black;
  }
}

@media (prefers-color-scheme: dark) {
  body{
      /* Set the background to black and text to white */
      background: black;
      color: white;
  }
}
```

Just like that, your website responds to changes to your user's preferences.

For a live demo, [see this example on CodePen](https://codepen.io/SavvStudio/pen/ExWYgYj). Set your operating system preferences from light mode to dark mode and vice versa, and check the page dynamically changing colours!

## Best practice

In the code example above, I've shown how you can use both `light` and `dark` in `prefers-color-scheme`. However, some operating systems don't support colour schemes, or some older browsers don't support `prefers-color-scheme`. The solution for this is to set default colours without the `prefers-color-scheme` and set the alternative colour scheme later.

For example:

```css
/* The light mode is set as default here without the `prefers-color-scheme` query.
This will be set if the query isn't supported for whatever reason. */

body{
    background: white;
    color: black;
}

/* This will be taken into account only if colour scheme preference is supported by the operating system or browser.
It will set the page to dark if the colour preference is set to dark. */
@media (prefers-color-scheme: dark) {
  body{
      background: black;
      color: white;
  }
}
```