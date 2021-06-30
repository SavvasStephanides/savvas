---
series: explained
title: Svelte, explained.
description: Svelte is a Javascript framework that helps you build blazing fast web applications. This is Svelte explained.
thumbnail: svelte.png
publishDate: 2021/06/30 11:00
keywords: svelte, sveltejs, javascript, ui, interactive, web apps, fast
twitterimage: https://savvas.me/assets/tw-svelte.png
---

Have you ever heard of Svelte? If you have, you probably heard of it as an alternative to Javascript frameworks like React or Vue. If you haven't, this article will explain what it is.

So what is Svelte and what makes it different from other frameworks?

## Let's explain!

So you're a developer and you need to create a complex user interface. Like, say, a game of Snake.

Such a game is very complicated and will need lots of code to make it happen. Since it's a web game, you'll obviously use Javascript.

Now if you think using vanilla Javascript is too much code for you, you can use a framework to make things easier like React or Vue. 

Both these frameworks help you build something complex with ease and once you build your project, you get some nice vanilla Javascript code you can host anywhere.

One of the nicest things about React or Vue is how simply your web page reacts to changes. Changes in lists, or any other variables get picked up and shown on your page.

However, there's a drawback to this. This mechanism (called the "Virtual DOM") that helps adapt to change, gets included in your bundled app. This means that it gets loaded whenever your user opens your app.

This can make your app *super* slow. 

What if there was a better way? Something that more or less works like React or Vue but when the final product gets built, it gets rid of all the unnecessary stuff so that my app is faster for my users?

## Enter Svelte

Svelte is a Javascript framework for creating complex user interfaces. Unlike React or Vue, it has a radical new approach to building apps. It helps you build apps that are *much* faster, by removing unnecessary stuff that your user doesn't need to load while still maintaining the adaptability of other frameworks.

Your user can therefore have a more pleasant experience!

In most other ways apart from speed, Svelte works exactly the same way as React or Vue, so if you're familiar with those frameworks you'll feel right at home.

* If helps you separate your UI into components
* It works with Node and npm
* It helps you write plain HTML instead of complex vanilla Javascript.

## Learn more

To get started with Svelte, their website has a straightforward easy to follow tutorial:

[Svelte tutorial](https://svelte.dev/tutorial)

Also check out this article which explains why Svelte is a better choice for a Javascript framework:

[Frameworks without the framework: why didn't we think of this sooner?
](https://svelte.dev/blog/frameworks-without-the-framework)

Now let's go ahead and give our users a better experience by building faster web applications with Svelte!