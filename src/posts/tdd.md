---
series: explained
title: Test-driven Development, explained.
publishDate: 2021/07/29 14:00
thumbnail: tdd.png
description: A very simple jargon-free introduction to Test-Driven Development
keywords: unit testing, test-driven development, javascript, tdd
twitterimage: https://savvas.me/assets/tdd-tw.png
---

What is *TEST DRIVEN DEVELOPMENT (TDD)*?

## Let's explain! 🧵👇

Let's say you are creating an app. Part of the app is a function for figuring out whether a number is odd or even.

Your function should look something like this:

```js
function oddOrEven(number){
    if (number % 2 == 0){
        return "EVEN"
    }
    else {
        return "ODD"
    }
}
```

You check to see if this function returns the correct values, so you quickly run a couple of checks in the console:

```
oddOrEven(6)
>>> EVEN

oddOrEven(43)
>>> EVEN
```

But since you need some more permanent checks for your function which you can run whenever you need with a single command, you write some unit tests:

```js
test("evenOrOdd returns EVEN when even number is given", () => {
    var result = evenOrOdd(66)
    expect(result).toBe("EVEN")
})

test("evenOrOdd returns ODD when odd number is given", () => {
    var result = evenOrOdd(83)
    expect(result).toBe("ODD")
})
```

Now you realise that when you give this function a decimal like "4.3" it returns "ODD". This is wrong since decimal numbers can be neither odd or even. So you fix your function to include this special case:

```js
function oddOrEven(number){
    if(number % 1 !== 0){
        return "NONE"
    }
    else if (number % 2 == 0){
        return "EVEN"
    }
    else {
        return "ODD"
}
```

Without bothering with writing unit tests, you move on to the next feature of your function: throwing an error when the input is a string.

```js
if(isNaN(number)){
        throw “Input must be a number”
    }
    if(number % 1 !== 0){
        return "NONE"
    }
    else if (number % 2 == 0){
        return "EVEN"
    }
    else {
        return "ODD"
    }
}
```

But there's a problem. You are now left with at least one change to your function that is left untested. Two if you count both the decimal check and the string check.

It makes sense that you'd want to just get the function working and once it does, move on to the next feature, without bothering with writing unit tests.

You need a change in the way you work to "push" you to write as many tests as possible to cover as much code as possible.

🧪 This is where TEST DRIVEN DEVELOPMENT (or TDD) becomes useful! 🧪

TDD works this way:

🧪 Before you write any code, write the test FIRST

🧪 Run the tests and watch the latest test fail (obviously)

🧪 Write just enough code to make the test pass

🧪 Rerun the test to see it pass

🧪 Fix the code. Repeat.

If you follow this way every time you make a small change, you'll make sure you write tests and not leave it for after you've completed the feature. Chances are, you'll be satisfied by the function working you'll leave the unit tests out.

So suppose we're back to our function before the decimal check:

```js
function oddOrEven(number){
    if (number % 2 == 0){
        return "EVEN"
    }
    else {
        return "ODD"
    }
}
```

Now BEFORE we make any changes, we write our test:

```js
test("evenOrOdd returns NONE when input is decimal", () => {
    var result = evenOrOdd(5.2)
    expect(result).toBe("NONE")
})
```

Now obviously the test will fail because the function falsely returns "ODD":

```
❌  evenOrOdd returns NONE when input is decimal
    Expected "NONE" but got "ODD"
```

That is perfectly OK. Now we have a clear goal: make the test pass. NOW we can update our code:

```js
function oddOrEven(number){
    if(number % 1 !== 0){
        return "NONE"
    }
    else if (number % 2 == 0){
        return "EVEN"
    }
    else {
        return "ODD"
}
```

Now if we run our tests again, our latest test should pass!

Now we have our new functionality AND a unit test ready for us!

```
✅ evenOrOdd returns NONE when input is decimal
```

Same can be done for our string or any other change coming.

Thank you for reading!