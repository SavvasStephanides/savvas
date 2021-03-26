---
series: explained
title: Javascript Scopes, explained.
publishDate: 2021/03/18 00:00
thumbnail: scope.png
---

Scope in Javascript is basically where a variable or function can be accessed from after it has been declared.

For example, a variable could only be accessed within an if statement, not outside it.

See the code below:

```js
let x = 5

if(x > 3){
    let y = 10
}

console.log(y)
```

Variable `y` is declared inside an `if` block. However, the code tries to access `y` OUTSIDE the `if` block. What would happen if we run this code?

You would get this error:

> "Uncaught ReferenceError: y is not defined".

But why?

Because `y` was created within the `if` block, using the `let` keyword, it can only be accessed within that `if` block.

In other words, `y` can only be accessed within the SCOPE that exists between the curly brackets of your `if` statement

```js
let x = 5

if(x > 3){
    // if block scope begins
    let y = 10
    // if block scope ends
}

console.log(y)
```

But what about variable `x`? `x` is declared outside of any blocks. It can therefore be accessed from anywhere, including `if` blocks and functions.

In other words, `x` is a "GLOBAL variable".

Scope sets limits to where variables and functions can be accessed. But why? What's the point of this?

There are lots of benefits to taking advantage of scopes!

1. Variables are only present where they're needed

See the code below. If we need a date object inside an `if` statement, there's no point in expanding its usage outside the `if` block. 

This makes for more understandable code:

```js
let x = 5

if(x > 3){
    let date = new Date() // This object is only needed within the if statement
    console.log(date);
}

console.log(date); // Not needed here
```

2. Avoid naming collisions

If we limit the scope of our variables, we can reuse them depending on context. See example below:

```js
let occasion = "CHRISTMAS"

if(occasion === "CURRENT"){
    let date = new Date()
    console.log(date);
}

if(occasion === "VALENTINES"){
    let date = new Date("2021/02/14")
    console.log(date);
}

if(occasion === "CHRISTMAS"){
    let date = new Date("2021/12/25")
    console.log(date);
}
```

Thanks for reading and I hope this makes Javascript scopes slightly easier.