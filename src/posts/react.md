---
series: explained
title: React, explained
publishDate: 2021/03/26 10:27
thumbnail: react.png
---

React is a framework that makes it easier to create complex web pages. How does it do that? 

Imagine you're developing a to-do app. Let's say you just need to display 4-5 tasks. Ignore functionality like adding, or marking tasks as complete. 

If we were to just write some static HTML, the code would look something like this:

```html
<html>
    <h1>My To-do app</h1>

    <h2>Pending tasks</h2>
    <div id="todo-list">
        <ul>
            <li>
                <a href="/task/1">Buy groceries</a>
                <div>Added 2 days ago</div>
                <div>Deadline: end of today</div>
            </li>
            <li>
                <a href="/task/2">Wash the car</a>
                <div>Added today</div>
                <div>Deadline: this Sunday</div>
            </li>
            <li>
                <a href="/task/3">Sign up for the gym</a>
                <div>Added today</div>
                <div>Deadline: this Friday</div>
            </li>
        </ul>
    </div>
</html>
```

The tasks are included as part of an unordered list, or `<ul>`.

Each list item `<li>` contains the title of the task, the date it has been added and the the deadline. So you can see that each item is slightly complex. 

Obviously, in real life, to-do lists aren't just hard-coded HTML. You will need to get the data from somewhere, like an array of JSON objects.

Like this:

```js
var toDoItems = [
    {
        "id": 1,
        "title": "Buy groceries",
        "added": "03/11/2020",
        "deadline": "03/11/2020"
    },
    {
        "id": 2,
        "title": "Wash the car",
        "added": "02/11/2020",
        "deadline": "08/11/2020"
    },
    {
        "id": 3,
        "title": "Sign up for the gym",
        "added": "03/11/2020",
        "deadline": "06/11/2020"
    }
]
```

We would then have to use Javascript in order to display the to-do items in exactly the same format as above.

The code would look something like this:

```js
var toDoList = document.querySelector("#todo-list")
var list = document.createElement("ul")

toDoItems.forEach((item) => {
    var title = document.createElement("a")
    title.href = "/task/" + item.id
    title.innerText = item.title

    var added = document.createElement("div")
    added.innerHTML = item.added

    var deadline = document.createElement("div")
    deadline.innerHTML = item.deadline

    var listItem = document.createElement("li")
    listItem.appendChild(title)
    listItem.appendChild(added)
    listItem.appendChild(deadline)

    list.appendChild(listItem)
})

toDoList.appendChild(list)
```

We can all agree that this looks ugly and nasty. Not what you had in mind when you needed some dynamic data for your website. And it gets worse with more complex pages. 

What if we could build complex dynamic user interfaces, but instead of spaghetti JS, we used something close to HTML?

## Enter React!

React, as mentioned in its own documentation is "a JavaScript library for building user interfaces". And it's an accurate statement. It makes it a lot easier to create complex user interfaces. 

But how does it work? How can React make our ugly code above into something clearer and more comprehensive? 

In React we can do this:

```jsx
function App(){
    return(
        <div id="App">
            <h1>My To-do app</h1>

            <h2>Pending tasks</h2>
            <div id="todo-list">
                <ul>
                    {toDoItems.map((item) => <li>
                            <a href={"/task/" + item.id}>Buy groceries</a>
                            <div>Added: {item.added}</div>
                            <div>Deadline: {item.deadline}</div>
                        </li>
                    )}
                    
                </ul>
            </div>
        </div>
    )
}
```

"Hang on a minute", I hear you say. "Did we just... write simple HTML within Javascript? And then added additional Javascript ONLY when we need it?"

Well, yes we did! 

We defined a Javascript function and in that, we just wrote some HTML. And when we needed some more complex functionality, like looping through our to-do list, we just embedded some simple Javascript.

Incredible isn't it?

That's the power of React! 

This is how React makes developing complex user interfaces so simple. But that's not all... 
React also enables you to tidy up your code. How?

It enables you to break down your page's code into smaller, more manageable chunks! 

Let's say now you're building a portfolio website. You need to include a header, a list of your skills, and a list for your projects. In React, it would look something this:

```jsx
function App(){
    return(
        <div id="portfolio-website">

            {/* Header chunk */}

            <header>
                Welcome to my portfolio website!
            </header>

            {/* Skills chunk */}

            <section id="skills">
                <h2>My skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Git</li>
                </ul>
            </section>

            {/* Projects chunk */}

            <section id="projects">
                <ul>
                    <li>My to-do app</li>
                    <li>Tic-tac-toe game</li>
                    <li>Recipe website</li>
                </ul>
            </section>
        </div>
    )
}
```

In React, you can store each of these sections in their own file.

For example, the skills section can be its own file, and it would look like this:

```jsx
function Skills(){
    return(
        <section id="skills">
            <h2>My skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Git</li>
            </ul>
        </section>
    )
}
```

If all of our sections have their own files, we can then import them into our website like this:

```jsx
function App(){
    return(
        <div id="portfolio-website">
            
            <Header />

            <Skills />

            <Projects />
            
        </div>
    )
}
```

Look how clean our code has become!

Each of these sections in their own files is what in React, we call "components".

And even greater, is that we can also separate our CSS, making it much more manageable! 
So how do you get started?

First, you need NodeJS, which you can [download here](https://nodejs.org/).

Next, you need a package called "create-react-app" which you can get with this command:

```bash
npm install -g create-react-app 
```

Finally, you can create your first React app with this command:

```sh
create-react-app my-app 
```

Now point your terminal inside your app see how your app looks:

```sh
cd my-app
npm start
```
 
That's it! Now that you have a basic knowledge of React, you can [explore the official docs](https://reactjs.org/docs/getting-started.html)!

Have fun!