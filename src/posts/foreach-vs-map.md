---
series: explained
title: Should I use forEach() or map()?
publishDate: 2021/03/28 15:46
thumbnail: loop.png
---

If you're learning Javascript, sooner or later you'll come across the `forEach()` and `map()` functions. It is quite often that there is some confusion about what each one does. What we know for certain is that they are both ways to take all elements in an array and do *something* with each element individually.

So how are they different?

To explain, let's start with an array, since both functions deal with looping through arrays:

```javascript
let names = ["Savvas", "Laura", "Morgan"]
```

Above I've initialised an array that contains three names.

Now let's say, you just need to print these three names. The straightforward solution to this is to use `forEach()`! And you'll be right! `forEach()` is the best way to do this.

It looks like this:

```javascript
names.forEach((name) => {
    console.log(name)
})
```

Same if you need to do something slightly more complex, like storing these names into a database:

```javascript

names.forEach((name) => {
    database.storeName(name)
})
```

Now let's suppose that you want to create a new array, but with all the names in `names` in lowercase. If we were to use `forEach()`, we would need to:

* Create an empty array `lowercaseNames`
* Loop through the `names` array using `forEach`
* For each item, turn the name into lowercase and store it into the empty array

So the code would look like this:

```javascript
let lowercaseNames = []

names.forEach((name) => {
    let nameInLowercase = name.toLowerCase()
    lowercaseNames.push(nameInLowercase)
})
```

Which could work, but the solution seems a bit complex and not-so straightforward. Also, creating an empty array and populating it works, but it doesn't look particularly clean.

What if there was a better way of saying:

> I want to do something with each element in an array and I want to get back an array of the same length as a result

You can do this... with `map()`!

`map()` is basically an easy way to loop through an array, but for each element, something is returned.

For example, we can say:

> Return the lowercase version of each element in the `names` array.

It would look something like this:

```javascript
names.map((name) => {
    let nameInLowercase = name.toLowerCase()
    return nameInLowercase
})
```

That's it! And since at the end, everything that is returned gets stored in a new array, we can just initialise it like so:

```javascript
let lowercaseNames = names.map((name) => {
    var nameInLowercase = name.toLowerCase()
    return nameInLowercase
})
```

It's that simple! Isn't this much nicer than the above example with `forEach()`?

I hope this short post made `forEach` and `map` a little easier to understand! 👋