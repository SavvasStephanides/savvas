---
series: explained
title: For loops, explained.
publishDate: 2021/10/04 14:33
thumbnail: forloops.png
description: A simple introduction to for loops in programming
keywords: programming, for, forEach, loops, programming basics, python, javascript
twitterimage: https://savvas.me/assets/for-tw.png
---

Another one of the absolute basic programming concepts are "loops".

The `for` loop is one of the most common types of it.

So what is it and how does it work?

Let's explain:

A `for` loop is basically a way of saying:

> Here's a list of stuff, grab each one and do something specific with each one of them

This could be something like:

> Here's a list of names, grab each one of them and display them on the screen

Or

> Here's a list of text strings, check each one is under 5 characters long

"For" and "for each" loops are created for this very purpose. For example, in Python this is how you'd say:

> Here's a list of names, grab each one of them and display them on the screen

```py
names = ["Savvas", "Alice", "Bob"]

for name in names:
    print(name)
```

In Javascript, there are two ways to do it.

With a "for" loop:

```js
let names = ["Savvas", "Alice", "Bob"]

for(let i = 0 ; i < names.length ; i++){
    console.log(names[i])
}
```

Or with a "for each" loop:

```js
let names = ["Savvas", "Alice", "Bob"]

names.forEach((name) => {
    console.log(name)
})
```

And to say:

"Here's a list of text strings, check each one is under 5 characters long",

in Javascript we could do:

```js
let textStrings = ["a", "bbb", "cccccc"]

names.forEach((text) => {
    if(text.length < 5){
        console.log("The text is under 5 characters long")
    }
    else{
        console.log("The text is NOT under 5 characters long")
    }
})
```

In conclusion, "for" and "for each" loops are a straightforward ways to perform an action for each element in an array of strings, numbers or objects.