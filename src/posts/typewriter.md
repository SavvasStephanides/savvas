---
title: The problem with the typewriter effect and how to fix it
series: accessibility
thumbnail: default.png
publishDate: 2021-03-04 00:00
---

## About

So you want to show off your portfolio website and you want to add some fancy graphics to show off your Javascript skills. What better way than by adding a fancy "typewriter effect" to show the world your multi-faceted personality?

It's nice, sure! But there's a problem. And it has to do with **accessibility**.

## The problem

Simply put, blind people visiting your website with screen readers, just can't see what the hell you've written on that section.

When their screen reader goes over that section, it will read whatever is currently written there. For example if "typewr_" is displayed at the time the screen reader has focus, it will read just that. That will confuse your screen reader visitors and most probably leave your website.

For example, let's create a typewriter effect on our website that cycles through the words "Developer", "Designer" and "Coffee addict". 

The HTML will look something like this:

```html
<h1 id="typewriter-effect">
  <span id="text"></span>
</h1>
```

Some Javascript will then be added to populate the `<span>` letter by letter. [See CodePen for the complete example](https://codepen.io/SavvStudio/pen/KKzvbOx).

If we visit your website using VoiceOver on iOS (a popular screen reader feature for the iPhone), the section where you have your typewriter effect will sound like this:

> Coffee underscore. Heading level 1

because at the time of focus, "Coffee_" is displayed on that section.

See [here](https://vimeo.com/454411237) for a video with audio.

Far *FAR* from what you want your user to read. You'd want your user to read something like "Developer, designer and coffee addict".

## The solution

`ARIA` attributes to the rescue!

We are going to use ARIA labels to do two things:

* `aria-label` in order to tell the screen reader what to actually say instead of what's in the heading or `<span>`.
* `aria-hidden="true"` in order to tell the screen reader to skip the typewriter effect altogether and read the label instead.

That way, when the screen reader user goes to the heading section, they'll get exactly what you want. The HTML will therefore now look like this:

```html
<h1 id="typewriter-effect" aria-label="Developer, designer and coffee addict">
  <span id="text" aria-hidden="true"></span>
</h1>
```

[Check this CodePen for the complete example](https://codepen.io/SavvStudio/pen/ZEWJZpx).

Check [this video](https://vimeo.com/454411533) to see how the screen reader now reads your page. *THIS* is what we want! 🎉🎉🎉

## But why?

I hear you ask:

* Is is that important to be accessible?
* Do I *actually* need to make some novelty feature such as the typewriter effect accessible to screen reader users? 

The answer is Yes and Yes. It is your responsibility to make your website accessible and inclusive. And not just as an afterthought. Accessibility should be part of your default workflow. Use semantic HTML. Add `alt` tags to all your images. And yes, use `ARIA` attributes where necessary. Be inclusive. Be human.

## How about you?

Do you have a "typewriter effect" on your website? Have you made it accessible? If yes, what steps have you made to make it accessible? Let me know!