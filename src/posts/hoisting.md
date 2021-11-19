---
series: explained
title: Javascript Hoisting, explained.
publishDate: 2021/07/19 13:00
thumbnail: hoisting.png
description: A brief and simple explanation of Hoisting in Javascript
keywords: web development, javascript, hoisting, explained
twitterimage: https://savvas.me/assets/jshoisting-tw.png
---

What is Hoisting in Javascript?

## Let's explain!

Suppose you're writing a function in Javascript. A very simple function that just prints "Hello" to the console:

```js
let sayHello = function(){
    console.log("Hello");
}
```

Now to actually make the function get "Hello" to print in the console, you'll need to call the function. It makes sense that you'll call the function after it's been defined right?

```js
let sayHello = function(){
    console.log("Hello");
}

sayHello();
```

Now you're reading about how to make your code more readable and cleaner and you hear about calling the functions *above* the function itself. In other words:

```js
sayHello();

let sayHello = function(){
    console.log("Hello");
}
```

But what would happen if you execute this code?

You'll get this error:

```
Uncaught ReferenceError: sayHello is not defined
```

Which makes sense! You can't just call a function before it's defined! Right?

We need a way to define the function *as soon as the script runs* so it's available for me to run wherever I need.

This thing is possible with a technique called Hoisting!

Let's have another look at the function and notice how it is defined:

```js
let sayHello = function(){
    console.log("Hello");
}
```

It is defined using the `let` keyword. This means that the function is defined *at that point*. Not before - not after. To make this work...

```js
sayHello();

let sayHello = function(){
    console.log("Hello");
}
```

You'll need to give it priority, lift it at the top of the queue. In other words you need to **hoist** it.

How do you do that?

Simply change your function definition to this:

```js
function sayHello(){
    console.log("Hello");
}
```

Now when you call the `sayHello()` function above the definition:

```js
sayHello();

function sayHello(){
    console.log("Hello");
}
```

You'll get the desired result!
```sh
> Hello
```

And that's how hoisting works in simple words. Thank you for reading. I hope this has made hoisting slightly easier. 👋👋👋