---
series: explained
title: Javascript Prototypes, explained.
publishDate: 2021/10/14 14:33
thumbnail: jsproto.png
description: The concept of Javascript Prototypes, in simple terms
keywords: programming, javascript, concepts, prototypes, constructors
twitterimage: https://savvas.me/assets/jsprototypes-tw.png
---

Suppose you decided to create a to-do app in Javascript.

A great way to stay organised!

For the to-do app to work you'll need to have your tasks as Javascript objects.

Like this:

```js
{
    "title": "Make dinner"
    "status": "COMPLETED"
}
```

A great way to make object creation easier, is to create a function that creates them for you:

```js
function Task(title, status){
    this.title = title,
    this.status = status
}
```

So now, if you want to create a new task object, all you have to do is to call the function with the `new` keyword:

```js
var myTask = new Task("Make dinner", "COMPLETED")
```

Because this function creates new objects, this type of function is called a "constructor".

You can even include functions within the constructor, like this:

```js
function Task(title, status){
    this.title = title,
    this.status = status

    this.isCompleted = function(){
        return this.status === "COMPLETED"
    }
}
```

So you can call the function from the object:

```js
var myTask = new Task("Make dinner", "COMPLETED")
console.log(myTask.isCompleted())
//> true
```

To create an array of tasks, simply use the constructor:

```js
var tasks = [
    new Task("Make dinner", "COMPLETED"),
    new Task("Take out the trash", "PENDING"),
]
```

To see how many tasks you have in your tasks array, just use the `length` variable:

```js
tasks.length
//> 2
```

But... hang on a minute! When did we define the `length` variable? I don't remember defining a constructor for the array! Where does the `length` variable come from?

The answer is this: it has been borrowed from a list of variables and functions specific to arrays!

This list of variables and functions that are brought over without you specifically defining them is called the Prototype.

So for arrays, it has an Array Prototype which contains the functions you are familiar with:

```js
tasks.length
tasks.forEach()
tasks.map()
tasks.push()
```
etc.

So, how can you change the Prototype for my own objects?

For example, I need to add another function to my Task objects:

```js
myTask.setAsCompleted()
```

You can set it with Prototypes:

```js
function Task(title, status){
    this.title = title,
    this.status = status

    this.isCompleted = function(){
        return this.status === "COMPLETED"
    }
}

Task.prototype.setAsCompleted = function(){
    this.status = "COMPLETED"
}
```

So you can now easily set the status to COMPLETED:

```js
var task = new Task("Do the dishes", "NEW")

console.log(task.status)
//> NEW

task.setAsCompleted()

console.log(task.status)
//> COMPLETED
```

And that's it! This is how prototypes work in Javascript!