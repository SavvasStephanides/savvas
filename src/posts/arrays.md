---
series: explained
title: Arrays, explained.
publishDate: 2021/09/09 12:00
thumbnail: arrays.png
description: An introduction to arrays in programming
keywords: programming, arrays, basics, beginner
twitterimage: https://savvas.me/assets/arrays-tw.png
---

What are *ARRAYS* in programming?

## Let's explain.

Arrays in programming are essentially ways of storing lists of things in a program or app.

The way to store these lists, will depend on the programming language you use.

So, suppose you need to make a list of things to buy.

What you would usually do is take out a piece of paper from a notebook and write everything you need to buy.

You decide there's a better way. Make a program on your computer instead!

So how would you store this list?

We've talked about variables before. Basically a way to store things that would be used later.

[More on variables here](/explained/variables)

Same way we store text or numbers, we can store lists of text or numbers.

In our case, we want to store a list of items to buy. That means we need a text list!

In Javascript, for example, this is how we store links:

```js
let stuffToBuy = ["Milk", "Orange juice", "A laptop for coding"]
```

In Python, it's similar:

```python
stuffToBuy = ["Milk", "Orange juice", "A laptop for coding"]
```

Now you can do stuff like, select a specific item in the list, depending on its position:

```js
stuffToBuy[1]

// ==> Orange juice
```

Add (push) stuff to your list:

```js
stuffToBuy.push("Cheese")
```

Check how large a list is:

```js
let stuffToBuy = ["Milk", "Orange juice", "A laptop for coding"]
stuffToBuy.length
// 3
```

Or go through each and every element in the list and so something specific with it.

This is called a "loop" and it's something we'll talk about in another thread, so watch this space.

Thank you for reading!