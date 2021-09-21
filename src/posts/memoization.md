---
series: explained
title: Memoization, explained.
publishDate: 2021/09/21 14:00
thumbnail: memoization.png
description: How to make your functions in Javascript run faster, using memoization
keywords: javascript, optimization, functions, speed, memoization
twitterimage: https://savvas.me/assets/memoization-tw.png
---

Is your function running slow?

There is something you could, and should, do about it so that it runs faster.

It's called "memoization". What is it and how does it work?

Let's explain:

Suppose you are developing an app that manages your users.

That app is written in Javascript.

In that app, there's a function that gets the user's details by their ID.

Something like this:

```js
function getUserById(id){

}
```

That function makes an API call which gets the user information from a database:

```js
async function getUserById(id){
    return await axios.get(`https://api.myapp.com/users/${id}`).data
}
```

So for example to get the user with ID `234`, you'd make this call to the function:

```js
async function runApp(){
    let user = await getUserById(234)
    console.log(user)
}
```

Because this function makes API calls, it can sometimes get rather slow. 

Now, because of how the app works, you'd need to make several calls to the function with the same user ID.

```js
async function runApp(){
    let user1 = await getUserById(234)
    console.log(user)

    let user2 = await getUserById(234)
    console.log(user)
}
```

Every time you make that call, it will make another request to the API so that it can give you the exact same result.

This will waste time and data, especially if you're low in either of these.

What if there was a way to optimise this function so that it doesn't need to make the same requests over and over again?

You can do this, with a technique called "Memoization"!

Memoization is basically a technique which stores the returned value of a function for specified arguments in an array, so that when the function is called again with the same arguments, it gets those values back much much faster.

Let's go back to our `getUserById` function and try and make it faster:

```js
async function getUserById(id){
    return await axios.get(`https://api.myapp.com/users/${id}`).data
}
```

We'll start by creating an empty array which will contain our stored values from our function:

```js
let storedValues = []

async function getUserById(id){
    return await axios.get(`https://api.myapp.com/users/${id}`).data
}
```

Next, we're going to update `getUserById` so that it checks whether the result for a specific user ID is stored in `storedValues`:

```js
let storedValues = []

async function getUserById(id){
    if(storedValues[id] === undefined){
        return await axios.get(`https://api.myapp.com/users/${id}`).data
    }
}
```

Next, we'll update `getUserById` again so that if the value for a specific ID is stored in the `storedValues` array, it will return that value from the array and not perform an API request:

```js
let storedValues = []

async function getUserById(id){
    if(storedValues[id] === undefined){
        let user = await axios.get(`https://api.myapp.com/users/${id}`).data
        return user
    }
    else{
        return storedValues[id]
    }
}
```

Finally, the function will store the returned user details to the `storedValues` array for future use:

```js
let storedValues = []

async function getUserById(id){
    if(storedValues[id] === undefined){
        let user = await axios.get(`https://api.myapp.com/users/${id}`).data
        storedValues[id] = storedValues
        return user
    }
    else{
        return storedValues[id]
    }
}
```

Now, when the function is called, it will only make a request once for each ID. Each request after that would be much much faster since we've stored the return data in the array.

As a result, your app will perform much faster and your users will be much happier as a result!