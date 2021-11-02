---
series: explained
title: Unit testing, explained
publishDate: 2021/04/27 15:30
thumbnail: tube.png
description: The best way to make sure your program works as it should. So what is it? Let's explain.
keywords: unit testing, testing, programming, software development
twitterimage: https://savvas.me/assets/unittesting-tw.png
---

You’ve heard about it, heard people talk about it, people swear by it. But what is it?

Let's explain...

Let's say you're building an app. An app that needs to know whether a number is even or odd.

The function is quite straightforward for whole numbers:

```js
function oddOrEven(number){
    if (number % 2 == 0){
        return "EVEN"
    }
    else {
        return "ODD"
    }
```

Now how do you test to see if this works as it should? If you’re like most programmers, you open a console and call the function:

```sh
oddOrEven(44)
>> ODD
oddOrEven(85)
>> EVEN
```

Great! Seems to work fine!

Now there’s a problem with the function. What if the `number` input is not a whole number? Something like `4.2`? In mathematics, decimal numbers are neither even or odd but if we try our function:

```sh
oddOrEven(4.2)
>> ODD
```

That’s not right!

So we add a special case for decimal numbers:

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
}
```

Again, we do a quick test in our console to check if it's correct:

```sh
oddOrEven(4.2)
>> NONE
```

Excellent!

Now to make sure we haven't broken anything since our last change, we check the function against a whole number again:

```sh
oddOrEven(12)
>> EVEN

oddOrEven(501)
>> ODD
```

Great! Still works!

Now what if the function gets given something other than a number? Say, a string? You need to extend your function so it throws an error if this happens:

```js
function oddOrEven(number){
    if(isNaN(number)){
        throw "Input must be a number"
    }
    if(number % 1 !== 0){
        return “NONE”
    }
    else if (number % 2 == 0){
        return “EVEN”
    }
    else {
        return “ODD”
    }
}
```

You test and it works fine. Now you need to test your function for all other conditions to make sure nothing is broken:

* when you give it an odd number

* when you give it an even number

* when you give it a decimal

* when you give it a string

As you may have noticed, the list of checks you need to do for every small change is getting bigger and bigger. 

This is when you need something that can automate this for your whole app, which can run several tests with a single command.

🧪 UNIT TESTS do exactly that! 🧪

All languages have what we call "unit testing frameworks". Tools that run tests like the ones I mentioned with a single command.

All you need is to install the tool, write your tests in "test files" and that’s it! Every time you run the appropriate command, all tests are run!

What are these tools called? That would depend on the programming language used. Here are some examples:

* Javascript: Mocha, Jasmine, Jest

* Python: PyTest, testing

* Java: JUnit

* R: testThat

For details on how to use each one, check the documentation for the language you’re using.

For example this is a test in Jest (Javascript testing framework), which checks if `evenOrOdd` returns "EVEN" when an even number is given:

```js
test("evenOrOdd returns EVEN when even number is given", () => {
    var result = evenOrOdd(66)
    expect(result).toBe("EVEN")
})
```

You can run this test plus any other test you write the same way, with the `jest` command in your console!

With unit testing, your app is more likely to be bug free, because of better, more thorough testing.

🧪 Better testing means

👩‍💻 happier developers,

💻 better apps,

😃 happier users!

Enjoy writing better apps!