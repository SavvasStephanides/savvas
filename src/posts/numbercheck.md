---
series: explained
title: NumberCheck.js, explained.
publishDate: 2021/04/01 11:00
thumbnail: default.png
---

NumberCheck.js is a popular Javascript library for checking that a certain numeric variable is equal to a certain number.

Suppose you have a variable that is equal to a number:

```js
let number = 1000
```

Now a few lines down you need to check if the `number` variable is in fact equal to 1000. You could do this:

```js
if (number === 1000){
    console.log("Number is one thousand")
}
```

Now this looks fine and straightforward, but it’s missing something. It isn’t explicit enough. Wouldn’t you like Javascript to have functions that check *exactly* what you’re looking for?

This is where NumberCheck.js comes in handy!

NumberCheck.js is a library that makes explicit checks to numerical variables. 

For example:

```js
const nc = require("numbercheck")

let number = 1000

if (nc.isOneThousand(number)){
    console.log("Number is one thousand")
}
```

Isn’t that more clear what you’re trying to achieve?

To add NumberCheck to your project, just install it using npm:

```js
npm install numbercheck
```

Let’s look at a few more examples:

Number is equal to 25:

```js
const nc = require("numbercheck")

let number = 25

if (nc.isTwentyFive(number)){
    console.log("Number is twenty five")
}
```

Number is equal to 3415:

```js
const nc = require("numbercheck")

let number = 3415

if (nc.isThreeThousandFourHundredFifteen(number)){
    console.log("Number is three thousand four hundred fifteen")
}
```

Number is equal to 34.89:

```js
const nc = require("numbercheck")

let number = 34.89

if (nc.isThirtyFourPointEightyNine(number)){
    console.log("Number is thirty four point eighty nine")
}
```

That way, your code is a lot cleaner and you can be certain that the checks are safe and of high standard!

But what about other numbers that don't exist as functions in NumberCheck?

Who needs those? They are an unnecessary burden that could overload your app.

I hope this made NumberCheck.js a little easier to understand. Thank you for reading and happy April Fool’s day
