---
series: explained
title: Immediately Invoked Function Expressions (IIFE), explained.
publishDate: 2021/07/26 14:33
thumbnail: iife.png
description: A simple introduction to Javascript Immediately Invoked Function Expressions
keywords: javascript, web development, Immediately Invoked Function Expressions, iife
twitterimage: https://savvas.me/assets/iife-tw.png
---

What is IIFE (Immediately Invoked Function Expressions) in JavaScript?

## Let's explain! 

So let's suppose you have a function. A simple function that prints "Hello" to the console:

```js
function sayHello(){
    var message = "Hello"
    console.log(message)
}
```

You need to call the function as soon as it's defined, so you do what makes more sense:

```js
function sayHello(){
    var message = "Hello"
    console.log(message)
}

sayHello()
```

The function never needs to be called again after that. So you declare the function, call it and then never touch it again.

What this means that the function and its defined variable `message` take space that isn't needed, in lines of code, memory or variable names.

A better approach would be to structure a function in such a way that you don't need to name it. Just define it and run it immediately, and the function with its variables will disappear from your workspace after its run, clearing the way for more important things.

**IIFEs** or *Immediately Invoked Function Expressions* are the solution to this problem.

IIFEs are the simplest way to create functions that run as soon they are defined. You don't even need to give them a name!

Such a function is called an "anonymous function" because (you guessed it) it doesn't have a name.

So how does it work?

First, remove the name from the function:

```js
function (){
    var message = "Hello"
    console.log(message)
}
```

Second, surround the function in brackets:

```js
(function (){
    var message = "Hello"
    console.log(message)
})
```

This will define the function even if it doesn't have name. 

So now we need to run it as soon as it's defined so include a `()` at the end:

```js
(function (){
    var message = "Hello"
    console.log(message)
})()
```

That's it! The code will define an anonymous function which declares a variable and prints a message to the console, executes it on the spot, then everything disappears.

To show I mean by "everything disappears" see this code below. What will happen if I run it?

```js
(function (){
    var message = "Hello"
    console.log(message)
})()

console.log(message)
```

I will get the first "Hello" in the console because it's part of the function but then I'll get a "message is not defined" error because after the function is run the function and its variable is not available any more.

I hope this article has made IIFEs easier to understand. Thank you for reading!

## Conversation

Have you ever used IIFEs? [Join the conversation in the thread](https://twitter.com/SavvasStephnds/status/1417819885342806021)