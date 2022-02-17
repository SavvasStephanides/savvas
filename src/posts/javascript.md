---
series: explained
title: Javascript, explained.
publishDate: 2022/02/10 14:00
thumbnail: js.png
description: Javascript can really make your website come alive. So what is it?
keywords: javascript, programming, web development, fundamentals
twitterimage: https://savvas.me/assets/js-tw.png
---

Javascript is the part of a website that is responsible for responding to user actions. This can really make a website come to life! How does it do that?

Any website must contain some content. The content of a website is handled by a language called `HTML`.

[HTML, explained](/explained/html)

For example, if you want to add a heading and a paragraph, underneath it

![](/assets/jse01.png)

the HTML would look like this:

```html
<h1>Hello</h1>
<p id="my-name">My name is Savvas</p>
```

What a website looks like, is handled by another language called `CSS`.

[CSS, explained](/explained/css)

For example, if you want the paragraph (`<p>`) called `my-name` from above to have a red text, 

![](/assets/jse02.png)

you would use CSS like this:

```css
#my-name{
  color: red;
}
```

Now suppose we want to make it so that whenever the user clicks a button, a box appears with a message.

Can we do this in HTML? 

No, because HTML is responsible for the content of a page.

Can we do this in CSS?

No, because CSS is responsible with how a website looks.

So what can we use? This is where *Javascript* comes in!

## Enter Javascript

Javascript is the third and last of the languages for building websites. It's what adds interaction to a website.

So let's do this!

First of all, let's create a button the user can click on.

Let's update our HTML first to add our button:

```diff
<h1>Hello</h1>
<p id="my-name">My name is Savvas</p>

+ <button>Show me a message!</button>
```

![](/assets/jse03.png)

To use Javascript, let's create a file called `popup.js` which will contain our code for the popup.

Next, we're going to add a line in our `<head>` of our HTML, to read the file:

```html
<head>
    <script src="popup.js"></script>
</head>
```

In the `popup.js` file, we're going to create a function which will show a popup when called. Let's call it `showPopup`:

```js
function showPopup(){

}
```

Now, add something in our function to show the popup itself (or an `alert` in Javascript):

```js
function showPopup(){
    alert("Hello!")
}
```

Now that our function is ready, let's tell our button that there's a function you want to execute when it's clicked.

All we need to do is update our `<button>` element with an `onclick` which contains our function name:

```js
<button onclick="showPopup()">Show me a message!</button>
```

And that's it!

Now when the user clicks the button, a popup (alert) will appear saying "Hello!". 

<video width="320" height="240" src="/assets/jse04.mov" autoplay muted loop>
</video>

Congratulations! You've added your first interaction to your website! You made your website come to life!

Now there are lots of things you can do, like changing colours, adding and removing elements, even code entire games that are playable in your browser using Javascript!

For a proper introduction to Javascript, I suggest this 3.5 hour free tutorial from freeCodeCamp:

<iframe width="560" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Thank you for reading!