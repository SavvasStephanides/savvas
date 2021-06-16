---
series: explained
title: Vue, explained.
description: Vue is a progressive Javascript framework for building complex user interfaces. This is a simple explanation of what it is.
thumbnail: vue.png
publishDate: 2021/06/16 13:17
keywords: vue, vuejs, javascript, ui, interactive
twitterimage: https://savvas.me/assets/tw-vue.png
---

Vue is a Javascript framework that makes it really easy to create interactive user interfaces. It calls itself the <q cite="https://vuejs.org/">The Progressive JavaScript Framework</q> and it's used by [many organisations](https://madewithvuejs.com/), including Apple, Adobe and Google.

So what is it?

## Let's explain

Let's suppose you're building a complex website. Let's say, a job search website.

This website has lots of sections:

* The header with the website name
* The search bar
* The results page
* The footer

![](/assets/vuejs-careersearch.png)

All this will go on a single page which will get updated automatically, according to the user's choices in the search bar.

You can already imagine how complex the html page will get if it's all on a single page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <header>
            <h1>CareerSearch</h1>
        </header>

        <nav>
            <form>
                <label for="job-title">Job Title</label>
                <input type="text" id="job-title"/>

                <label for="location">Location</label>
                <input type="text" id="location"/>

                <label for="job-type">Job type</label>
                <select id="job-type">
                    <option value="permanent">Permanent</option>
                    <option value="temporary">Temporary</option>
                    <option value="intern">Intern</option>
                </select>

                <button>Search</button>
            </form>
        </nav>

        <main>
            <h2>Search results</h2>

            <ul>
                <li>
                        <h3><a href="/1">Software engineer</a></h3>
                        <div>Cardiff, UK</div>
                        <div>Permanent</div>
                    </a>
                </li>
            </ul>
        </main>
        <footer>
            2021 (c) CareerSearch
        </footer>
    </div>
</body>
</html>
```

And this is for a relatively simple page, imagine how it'd look like for more complex interfaces. Maintaining this would be a nightmare.

What this page need is some structure. Wouldn't it be nice if we could separate our HTML code into several pages? Something like:

```html
<body>
    <div id="app">
        <Header />
        <Navigation />
        <Main />
        <Footer />
    </div>
</body>
```

Then each of these tags would have their own page. For example, the header would live on its own:

```html
<header>
    <h1>CareerSearch</h1>
</header>
```

Much cleaner and much easier to maintain right? Does it seem impossible?

Not with Vue JS!

## Enter VueJS

VueJS has been built with components in mind, so that your web page is well-structured.

Each component exists in its own `.vue` file, including an `App.vue` file which is your app's homepage:

![The file structure of a Vue app, including App.vue and a components directory with 4 .vue files: Header, Navigation, Main and Footer](/assets/vuejs-app.png)

And each file is basically some normal HTML you're used to writing. For example, the `Header` component looks like this:

```html
<template>
    <header>
        <h1>CareerSearch</h1>
    </header>
</template>
```

Then with some very simple scripting, you can import these components into other components as needed. Simple and effective!

Another awesome thing about VueJS is that you can create events and method with much less effort than vanilla Javascript. For example, updating the job list when you update anything from the search form.

Basically VueJS is exactly what your HTML code is missing. Some much-needed structure. Like React but with the important difference that it's *much* easier to create components.

Try VueJS. You'll thank me later.

Thank you for reading.

## Get started

This was an introduction to VueJS, not a get started guide. If you're convinced and want to try out VueJS, check this [Getting Started](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started) guide from MDN. Happy coding!