---
series: explained
title: Variables, explained.
publishDate: 2021/09/06 09:00
thumbnail: variablesexplained.png
description: Programming basics - A simple explanation of one of the main building blocks of any program, variables.
keywords: programming,code,variables,explained,basics
twitterimage: https://savvas.me/assets/variablesexplained-tw.png
---

What is a *VARIABLE* in programming?

Variables are one of the basic building blocks of any program, app or website, no matter the programming language.

So what are they?

# Let's explain!

Variables in programming are essentially a way of storing information that may be used later within the program.

This information could be text, numbers, dates of a list of items.

Suppose you write a program. You want this program to give a personalised welcome message to your user, by using their name.

A great way to do this is by storing the user's name as a *variable*. You can then use that variable to display the welcome message.

For example, this is a common way to store a text variable (for example, a name) in Javascript:

```js
var name = "Savvas"
```

As you may have noticed, variables are usually declared using a name on the left side, then an equal sign, followed by the actual value of the variable.

Some more info may be needed depending on the language (such as `var` for "variable" in Javascript)

So you could then use it to display a welcome message to your user:

```js
var name = "Savvas"

console.log(`Welcome ${name}`)
```

This is especially useful, when you ask your user to type their name:

```js
var name = prompt("Hello! What is your name?")

console.log(`Welcome ${name}`)
```

Using variables, you could also store numbers:

```js
var age = 35
```

Lists of items:

```js
var friends = [
    "Savvas",
    "Alice",
    "Bob"
]
```

And many more types of data. How you declare variables will depend on the programming language you're using.

This is how you declare a variable in Python:

```py
name = "Savvas"
```

Java:

```java
String name = "Savvas"
```

*(notice that you need to specify what type of data your variable is storing. String basically means text)*

In conclusion, variables are the way for your program to store information that will be used later. Whether text, such as the name of your user, a number, such as the age of your user, a list of items, such as a list of names, and many other types of data.

Thanks for reading!