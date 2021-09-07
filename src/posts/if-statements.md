---
series: explained
title: if statements, explained.
publishDate: 2021/09/07 14:33
thumbnail: ifstatements.png
description: A simple introduction to if statements in programming
keywords: programming, if statements, if, conditionals, javascript
twitterimage: https://savvas.me/assets/ifstatements-tw.png
---

What are *if statements* in programming?

Another important building block of any programming, regardless of programming language.

Every new programmer should therefore know about it. So what is it?

If statements are basically a way of saying:

> I want you to do something, but ONLY on certain specific circumstances.

In other words, do something only if certain conditions are met.

Let's see an example:

Suppose you're writing a program. In that program, you're asking your user for their name so you can give them a personalised greeting:

```js
var name = prompt("What is your name?")
console.log(`Hello, ${name}`)
```

You're also asking your user for their age. You want to tell your user "let's have a beer", but only if they're 18 years or older.

You can do this using "if" statements in your program.

An if statement (depending on language) looks something like this:

```js
if(check){
    // stuff to do if check passes
}
```

So in our example, we want to say:

> If the user is 18 years old or older, invite them for a beer

The code in Javascript would look something like this:

```js
var age = prompt("How old are you")

if(age >= 18){
    console.log("Let's have a beer!")
}
```

If statements are otherwise called "conditional statements" because the if block is only executing when a certain "condition" is met.

Using if statements, you can therefore control the flow of your program, depending on certain criteria.

But what if we want to also do something if the check DOESN'T pass? Say for example, the user isn't 18 years or older?

This is where the `else` comes in.

In our case, we want to tell the user "You're a bit too young to drink" if they're under 18.

This is what it looks like in Javascript:

```js
var age = prompt("How old are you")

if(age >= 18){
    console.log("Let's have a beer!")
}
else{
    console.log("You're a bit too young to drink")
}
```

Thanks for reading this thread! 👋👋👋
