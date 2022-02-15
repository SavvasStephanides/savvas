---
series: explained
title: Javascript Callback functions, explained.
publishDate: 2022/01/06 14:00
thumbnail: callback.png
description: Callback functions in Javascript, explained.
keywords: javascript, promises, callback functions
twitterimage: https://savvas.me/assets/callback-tw.png
---

Javascript has a ton of features that make programming great.

One of them is functions.

The idea is to put lots of lines of code into a single block and call them with a single line as often as you like.

Example:

```js
function doStuff(){
    doSomething()
    doSomethingElse()
    doOneMoreThing()
}
```

With functions you can specify a few things that will be used within it while running:

Like numbers:

```js
function doStuff(number){
    doSomething()
    doSomethingElse()
    if(number === 1){
        // only run this if number = 1
        doOneMoreThing()
    }   
}
```

Or text:

```js
function sayHi(name){
    console.log(`Hello ${name}`)
}
```

Which you can then run by calling it:

```js
sayHi("Savvas")
//> prints "Hello Savvas" to the console
```

Now let's suppose your function's purpose is to grab some data and once they arrive, do something specific with them.

You'll need to tell the function: Get some data, but when you do run another function. A different function for different occasions I run the function.

How can we do this? We'll need to give a function to our function and tell it to run it.

What do we mean by that?

If you've ever tried to grab some data in Javascript using fetch() or axios() it would look something like this:

```js
printResponse(data){
    console.log(data)
}

axios.get("https://somedata.com")
    .then(printResponse)
```

What's happening?

When you call `axios.get()`, it gives back a "promise", basically something that says "I'll give you back a response in a bit, but not straight away".

It has a function called then(). If you noticed, we gave it another function called `printResponse()`.

What we're doing here is basically telling Javascript:

"Go fetch some data and when you do, run this function I gave you using the data you get back".

That function is called the CALLBACK function.

Simply put, a callback function is just a function called within another function.

The most common usage is when some data needs to be fetched and something needs to be done with that data once it arrives.

Like in Promises.

And that's it! That's what callback functions are in Javascript.

I hope this made sense. I'll link some additional stuff to read on.

Thanks for reading! 👋👋👋

[1] https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

[2] https://www.w3schools.com/js/js_callback.asp

[3] https://en.wikipedia.org/wiki/Callback_(computer_programming)