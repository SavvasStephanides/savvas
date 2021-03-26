---
series: tips
title: Need search for your website? THIS is the easiest way to do it!
thumbnail: default.png
publishDate: 2021/03/04 00:00
---

Do you have a website with loads of data? Chances are your users will have a difficult time finding what they need *unless* you have a search box they can use. But that sounds like a difficult task! What if I told you there's a fast and easy way to add powerful search functionality to your website?

## Introducing Lunr

![Lunr website homepage](https://dev-to-uploads.s3.amazonaws.com/i/a51nwfcxpfmglhlo3gf8.png)
 
[Lunr](https://lunrjs.com/) is a Javascript library that makes it easy to add search to your website. So how does it work?

In this article, we're going to use Lunr with vanilla JS (ie. no React or any other library is needed to follow along).

👉 [The full code for this tutorial is available here](https://github.com/SavvasStephanides/tutorial-lunr)

👉 [Fully working demo available here](https://savvasstephanides.github.io/tutorial-lunr/)

## 1. Let's create our html file

First things first, let's create our HTML file. Create a new directory for your project and in that, create a file called `index.html`. It can be a simple `html` file with just the basic code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

## 2. Let's add some data

Then, let's add some data Lunr can query so it can give us some search results back. In your new directory, create a file called `post-data.js` which contains some blog post data:

* the path (or slug)
* the title of your post
* a brief description

```js
var data = [
    {
        path: "intro-to-js",
        title: "Introduction to Javascript",
        description: "This is a beginner's introduction to Javascript"
    },
    {
        path: "add-search-to-your-website",
        title: "How to add search to your website",
        description: "This Javascript library is the easiest way to add powerful search to your website"
    },
    {
        path: "git-cheat-sheet",
        title: "Git Cheat Sheet",
        description: "Git is the most popular version control system out there. Here is a list of the most useful commands"
    },
    {
        path: "javascript-promises",
        title: "What are Promises in Javascript?",
        description: "Promises are a great tool in Javascript for making external requests without freezing your browser"
    },
    {
        path: "rest-api-expressjs-tutorial",
        title: "Building a RESTful API with ExpressJS",
        description: "APIs are everywhere. Let's build one with ExpressJS"
    },
    {
        path: "framework-or-library",
        title: "Is this Javascript tool a library or framework? The answer will blow your mind!",
        description: "Is it a framework? Is it a library? THE WORLD MUST KNOW!"
    }
]
```

You can now add this data to your `index.html` file. Add them using the `<script>` tag:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
+    <script src="post-data.js"></script>
</head>
<body>
</body>
</html>
```

## 3. Get Lunr to your project

Next, we will import Lunr to our project. To do this, the quickest way is to use a `<script>` tag:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="post-data.js"></script>
+    <script src="https://unpkg.com/lunr/lunr.js"></script>
</head>
<body>
</body>
</html>
```

*Note: If you're using Node you can install Lunr with NPM instead (not needed for this tutorial):*

```bash
npm install lunr
```

## 4. Give the data to Lunr

The next step is to tell Lunr what we want it to search for. To do this we will need to create a "search index", which is basically a `lunr` object. 

### 4.1. Create a new file

Firstly, go ahead and create a new file called `search.js` in the same directory.

### 4.2. Create a `lunr` object

Create a variable in that file called `index`, which is a new `lunr` object. The object itself expects a function as a single argument. Let's add an empty function which we'll populate in the next steps:

```js
var index = lunr(function () {
})
```

### 4.3. Tell Lunr what fields to search for

Next, we'll tell Lunr which fields from our data to look at when performing our searches. For our data, we want Lunr to perform searches on the `title` and `description` fields. Let's update our `index` object to reflect this:

```diff
var index = lunr(function () {
+    this.field('title')
+    this.field('description')
})
```

### 4.4. Tell Lunr what to give us back when it finds results

When Lunr gives you back results it will give back some text for each result as a "reference". This is usually an ID or, in our case, the `path` of each post. 

We can tell Lunr what our reference for each post is like so:

```diff
var index = lunr(function () {
    this.field('title')
    this.field('description')
+    this.ref('path')
})
```

### 4.5. Add all our posts to the Lunr index

Finally, we can add our post data for Lunr to index using the settings we specified above:

```diff
var index = lunr(function () {
    this.field('title')
    this.field('description')
    this.ref('path')


+    data.forEach(function (post) {
+        this.add(post)
+    }, this)
})
```

### 4.6. Add our search index to our html file

Our search index has been created successfully in our `search.js` file. The final step is to add our file to our `index.html` file:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script src="post-data.js"></script>
+    <script src="search.js"></script>
</head>
<body>
</body>
</html>
```

🎉🎉🎉 That's it! Your website is ready to perform searches!

## 5. Let's do a few searches!

Now that we have Lunr up and running on our website, let's perform a few searches on our posts. We can do that with the `search()` function of the Lunr `index` object.

For example: perform a search with "git":

```js
var searchResponse = index.search("git")
```

The response will be something like this:

```js
console.log(searchResponse)
```
```json
[
    {
        "ref": "git-cheat-sheet",
        "score": 1.96,
        "matchData": {
            "metadata": {
                "git": {
                    "title": {},
                    "description": {}
                }
            }
        }
    }
]
```

Since our data has only one post about Git, it will give us back one record.

Two main things to notice here:

1. The "reference" we told Lunr to give us is right there in the response as `ref`
1. A `score` value. This is a value of how relevant each post is to the search query you provided. This helps in sorting your posts by relevance.

Let's perform another search. This time for "javascript":

```js
var searchResponse = index.search("javascript")
console.log(searchResponse)
```

Result:

```json
[
    {
        "ref": "intro-to-js",
        "score": 0.186,
        "matchData": {
            "metadata": {
                "javascript": {
                    "title": {},
                    "description": {}
                }
            }
        }
    },
    {
        "ref": "javascript-promises",
        "score": 0.152,
        "matchData": {
            "metadata": {
                "javascript": {
                    "title": {},
                    "description": {}
                }
            }
        }
    },
    {
        "ref": "add-search-to-your-website",
        "score": 0.069,
        "matchData": {
            "metadata": {
                "javascript": {
                    "description": {}
                }
            }
        }
    },
    {
        "ref": "framework-or-library",
        "score": 0.053,
        "matchData": {
            "metadata": {
                "javascript": {
                    "title": {}
                }
            }
        }
    }
]
```

This time we have 4 posts relevant to "javascript". Notice how the results are sorted by `score`. This means that we know which posts are the most relevant so we can display them on top of the other results. 

This is one of the things that makes Lunr so powerful!

## 6. Let's get the actual posts

The results we got are great and all, but there's a problem. A single `ref` string means nothing when we want to show the search results to our users.

To get the actual posts, we'll need to do two things:

Extract the `path`s from all posts using `map()`:

```js
var postPaths = searchResponse.map((item) => item.ref)
```

For each path, get the equivalent post from our `data` using `map()` and `find()`:

```js
var results = postPaths.map((path) => data.find((post) => post.path === path))
```

The result should now be this:

```json
[
    {
        "path": "intro-to-js",
        "title": "Introduction to Javascript",
        "description": "This is a beginner's introduction to Javascript"
    },
    {
        "path": "javascript-promises",
        "title": "What are Promises in Javascript?",
        "description": "Promises are a great tool in Javascript for making external requests without freezing your browser"
    },
    {
        "path": "add-search-to-your-website",
        "title": "How to add search to your website",
        "description": "This Javascript library is the easiest way to add powerful search to your website"
    },
    {
        "path": "framework-or-library",
        "title": "Is this Javascript tool a library or framework? The answer will blow your mind!",
        "description": "Is it a framework? Is it a library? THE WORLD MUST KNOW!"
    }
]
```

**NOW** we're getting somewhere!

## 7. Let's update our website!

Now that we have everything set up and we know how to run search queries, let's make something useful from it. We're going to update our `index.html` file to include:

* A search box
* A button
* The search results below

Let's start with a `<div>` to wrap our whole app:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script src="post-data.js"></script>
    <script src="search.js"></script>
</head>
<body>
+    <div id="app">
+        
+    </div>
</body>
</html>
```

Now let's add our input box (with a label) and a Search button:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script src="post-data.js"></script>
    <script src="search.js"></script>
</head>
<body>
    <div id="app">
+        <label for="search-box">Search for a post:</label>
+        <input type="text" id="search-box">
+        <button>Search</button>
    </div>
</body>
</html>
```

Your `index.html` file should now look like this in a browser:

![Your homepage in a Chrome browser](https://dev-to-uploads.s3.amazonaws.com/i/d3l32akdp9ncp2onsovy.png)
 
Lastly, we're going to add an empty list `<ul>` which we will dynamically fill with our search results:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script src="post-data.js"></script>
    <script src="search.js"></script>
</head>
<body>
    <div id="app">
        <label for="search-box">Search for a post:</label>
        <input type="text" id="search-box">
        <button>Search</button>
+        <ul id="search-results"></ul>
    </div>
</body>
</html>
```

Now we're going to create a function which gets executed when a user clicks on the Search box. Let's call it `respondToSearchboxClick()`.

We'll also use the `onclick` attribute of our button to execute our function whenever the button is clicked:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script src="post-data.js"></script>
    <script src="search.js"></script>
+    <script>
+        function respondToSearchboxClick(){
+            
+        }
+    </script>
</head>
<body>
    <div id="app">
        <label for="search-box">Search for a post:</label>
        <input type="text" id="search-box">
-        <button>Search</button>
+        <button onclick="respondToSearchboxClick()">Search</button>

        <ul id="search-results">

        </ul>
    </div>
</body>
</html>
```

Now we just need to complete our function with the search logic we described above:

* Get the text from the search box
* Perform a search

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script src="post-data.js"></script>
    <script src="search.js"></script>
    <script>
        function respondToSearchboxClick(){
+            var query = document.querySelector("#search-box").value
+            var searchResponse = index.search(query)
+            var postPaths = searchResponse.map((item) => item.ref)
+            var results = postPaths.map((path) => data.find((post) => post.path === path))
        }
    </script>
</head>
<body>
    <div id="app">
        <label for="search-box">Search for a post:</label>
        <input type="text" id="search-box">
        <button onclick="respondToSearchboxClick()">Search</button>

        <ul id="search-results">

        </ul>
    </div>
</body>
</html>
```

Lastly, for each result, use the `map()` function to create a list item (`<li>`) and display it in our `#search-results` list:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script src="post-data.js"></script>
    <script src="search.js"></script>
    <script>
        function respondToSearchboxClick(){
            var query = document.querySelector("#search-box").value
            var searchResponse = index.search(query)
            var postPaths = searchResponse.map((item) => item.ref)
            var results = postPaths.map((path) => data.find((post) => post.path === path))
+
+            document.querySelector("#search-results").innerHTML = results.map((post) => {
+                return `
+                <li><a href="/${post.path}">${post.title}</a></li>
+                `
+            }).join("")
        }
    </script>
</head>
<body>
    <div id="app">
        <label for="search-box">Search for a post:</label>
        <input type="text" id="search-box">
        <button onclick="respondToSearchboxClick()">Search</button>

        <ul id="search-results">

        </ul>
    </div>
</body>
</html>
```

That's it! Congratulations! You now have search in your website! Let's give it a try:

"git":

![Search results for 'Git'](https://dev-to-uploads.s3.amazonaws.com/i/l49z69e587eaotktncn4.png)

"javascript":

![Search results for 'Javascript'](https://dev-to-uploads.s3.amazonaws.com/i/ylghxnk6siuaeqq14f05.png)

"library":

![Search results for 'library'](https://dev-to-uploads.s3.amazonaws.com/i/6usxe0re12c07ch70fjm.png)
 
 🎉🎉🎉 Your search engine is good to go! Go ahead and create your own. 

Let me know:

* What have you built with this tutorial?
* What have you learned from it?
* What problems have you faced?