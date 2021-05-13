---
series: explained
title: async/await, explained.
publishDate: 2021/05/14 08:00
thumbnail: await.png
---

## Introduction

[So as we mentioned before](/explained/promises), Promises are a way of telling Javascript, "go fetch some data but I'm not going to sit and wait because my browser would freeze. When you *DO* get a response eventually, do *THIS* with the data":

For example:

```js
getData("http://api.example.com/data")
    .then((response) => {
        console.log(response)
    })
```

What the code basically does is:
- request the data
- *when the data is received* print them to the console

## Now imagine this scenario:

- You need to make an API call to get user details
- You then need to extract the User ID from the details
- Then you need to make another API call to get user records using the User ID you got from the first API call

To accomplish this, you will need to call a Promise within a Promise:

```js
getData("http://api.example.com/get-user-details")
    .then((userDetails) => {
        getData("http://api.example.com/records/" + userDetails.id)
            .then((recordsById) => {
                console.log(recordsById)
            })
    })
```

You can see how this can become messy. What if you need to do 3 API calls? Or 4? Or more? It will become a nightmare to maintain! Take a look at this:

```js
getData("http://api.example.com/get-user-details")
    .then((userDetails) => {
        getData("http://api.example.com/records/" + userDetails.id)
            .then((recordsById) => {
                post("http://api.example.com/save", {records: recordsById})
                    .then((response) => console.log(response))
        })
    })
```

🤷‍♂️ Is there a better way to do this? A cleaner, less messy way that doesn't involve nesting promises within promises within promises?

Yes there is. 👍

## Enter: async and await!

`async`/`await` is a way to tell the browser, "please sit and wait for data to return before proceeding to the next line (like how other programming languages do it), **BUT DO NOT WORRY!** I will *STILL* return a Promise at the end of all this so you won't freeze!"

How do we use this? 

### Step 1. Tell the browser your function *will* be returning a Promise

First we want to make a commitment that this whole thing will return a Promise. This is what `async` does. It declares a function as "asynchronous", basically meaning that it will return a Promise.

This is how it's done:

```js
async function stuffWithData(){

}
```

No matter what you return here, it will be returned as a Promise.

### Step 2. Make your browser wait for responses

Now we can tell this function, "whenever you request data, sit and wait for a response before proceeding to the next line. And we do this with the `await` keyword.

Example:

```js
async function stuffWithData(){
    console.log("Getting user details...")
    var userDetails = await getData("http://api.example.com/get-user-details")
    console.log("All done!")
    return userDetails
}
```

What the code above does:

- It prints "Getting user details..." in the console
- Requests some data and *awaits* for them to be returned
- Saves the response in the `userDetails` variable
- Once this is done, print "All done!" to the console.
- Return the contents of `userDetails`

### Hang on a minute...

*"But"*, I hear you ask, *"didn't we say that sitting and waiting for data to be received will freeze my browser? What's going on here?"*

In this case, **NO!** Why? Because we used `async` at the beginning of our function, the function can only return a Promise at the end, which in this case contains the contents of `userDetails` as a response. That means your browser is safe from freezing! 🙌

With `async`/`await`, this is what your code now looks like: 

```js
async function stuffWithData(){
    var userDetails = await getData("http://api.example.com/get-user-details")
    var recordsById = await getData("http://api.example.com/records/" + userDetails.id)
    var response = await post("http://api.example.com/save", {records: recordsById})
    return response
}
```

Compare this with the previous code. Much less messy right?

Because this function returns a Promise, you'll need to call it the usual way to get the response:

```js
stuffWithData()
    .then((response) => {
        console.log(response)
    })
```

And this is what makes `async`/`await` so great and so friendly to both the browser, the user and the developer!

Happy browser 💻

Happy user 💁‍♂️

Happy developer! 👨‍💻

Thank you for reading. I hope this made async/await a little clearer!

