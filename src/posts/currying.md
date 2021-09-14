---
series: explained
title: Currying in Javascript, explained.
publishDate: 2021/09/14 12:00
thumbnail: currying.png
description: An introduction to currying in Javascript
keywords: programming, javascript, currying
twitterimage: https://savvas.me/assets/currying-tw.png
---

"CURRYING" is an excellent way in Javascript to keep your code more organised and meaningful.

But what is currying and why is it so great?

Let's explain.

So suppose you decided to keep yourself more organised. So it makes sense that you'd use a to-do app.

You decide to create one yourself.

To-do apps are a great way to get organised because you can easily add tasks to a list whenever you think of something.

You can easily mark them as in progress when you start working on those tasks, or complete once you're done with them.

You decide to create it in Javascript. One of the major parts of your app, is a function that actually adds new items to your task list.

It looks like this:

```js
addTask(status, title){
    console.log(`${title}: ${status}`)
}
```

The `status` argument takes in a string which is the stage of progress of your task: "NEW", "INPROGRESS", or "COMPLETE".

The `title` argument, is just the text that appears as your task.

For example, to create a task with status "NEW", you'd do this:

```js
addTask("NEW", "Buy milk")
```

Sometimes, you'd want to add a task that you've already started working on, so you set the status as "INPROGRESS":

```js
addTask("INPROGRESS", "Buy milk")
```

But that's a rare occurrence. Most of the time however, for new tasks, the status will be "NEW" since the most usual thing is to create a task that you'd revisit later to get it started.

We need a way to say: "Keep the addTask function as is, but create another function based on addTask which always creates a 'NEW' task without me telling it to".

Something like this:

```js
addNewTask("Cut the grass")
```

This can be done using CURRYING.

Currying basically turns the `addTasks` function from this:

```js
addTask("INPROGRESS", "Buy milk")
```

To this:

```js
addTask("INPROGRESS")("Buy milk")
```

But why?

Now we can use this to create our `addNewTask` function which always adds a task with status 'NEW':

```js
let addNewTask = addTask("NEW")
```

So we can use it like this:

```js
addNewTask("Cut the grass")
```

Now we have a task for the most common usage of our function, thanks to currying!

So how can we create a "curried" function?

Let's go back to our old `addTask` function, which just prints the title and status to the console:

```js
addTask(status, title){
    console.log(`${title}: ${status}`)
}
```

Currying is essentially a function returning another function.

In our case, it'll be something like this:

We start with `addTask` having only one argument (status):

```js
addTask(status){

}
```

Then this function will return another function with the second argument:

```js
addTask(status){
    return function(title){

    }
}
```

Which in turn will print the title and status in the console:

```js
addTask(status){
    return function(title){
        console.log(`${title}: ${status}`)
    }
}
```

That's it! Now you can use it like this:

```js
addTask("NEW")("Buy milk")

let addNewTask = addTask("NEW")
addNewTask("Cut the grass")
```

Currying helps you write Javascript code that just makes sense.

👉 Better code.

👉 Happier developers.

👉 Better apps

👉 Happier users.

👋 Thanks for reading!

