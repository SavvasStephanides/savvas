---
series: tips
title: Make your code look beautiful using HighlightJS!
thumbnail: codehighlight.png
publishDate: 2021/05/26 12:25
---

If you have any sort of code on your website, making it look good can be a nightmare. HighlightJS is a Javascript library that can save you from that hassle. HighlightJS detects and easily gives your code some much needed colour. Here's how.

## Using HighlightJS

![](/assets/codecolour-hljs.png)

For this project, we're working on a vanilla JS project, but the project's website has instructions on how to add it on your React apps, or any other app built with `npm`.

### 1. Add HighlightJS to your project

First things first, let's download the necessary files. Head to [HighlightJS's download page](https://highlightjs.org/download/) and find the Download button.

![](/assets/codecolour-download.png)

You can also choose which languages you are most likely to use.

A `zip` file is going to be downloaded. We're going to use the file called `highlight.pack.js` and the folder called `styles`. Grab those and add them to the folder of your project.

![](/assets/codecolour-folder.png)

### 2. Create your HTML file

Now let's create our HTML file. Begin with the basic structure of an HTML file:

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
</body>
</html>
```

💡 Tip: on Visual Studio Code or any editor that supports Emmet, use the `html:5` shortcut to produce the above.

### 3. Add some code to your page

Next, we're going to add some code to our HTML. We are going to use the `<pre>` and `<code>` tags. Let's add some basic Javascript code:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
+    <pre>
+        <code>
+function printHello(){
+    console.log("Hello")
+}
+        </code>
+    </pre>
</body>
</html>
```

If you open your page in your browser, you'll see the code written on it.

![](/assets/codecolour-pagenohl.png)

Now it's time to give it some colour.

### 4. Import HighlightJS to your page

To add the library to our project, we must first import `highlight.pack.js`:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
+    <script src="highlight.pack.js"></script>
</head>
<body>
    <pre>
        <code>
function printHello(){
    console.log("Hello")
}
        </code>
    </pre>
</body>
</html>
```

Next, we need to choose a theme. Choose any one you like from the `styles` folder:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="highlight.pack.js"></script>
+    <link rel="stylesheet" href="styles/a11y-dark.css">
</head>
<body>
    <pre>
        <code>
function printHello(){
    console.log("Hello")
}
        </code>
    </pre>
</body>
</html>
```

Finally, we need to run a function called `highlightAll()` from our Javascript file:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="highlight.pack.js"></script>
    <link rel="stylesheet" href="styles/a11y-dark.css">
+    <script>hljs.highlightAll();</script>

</head>
<body>
    <pre>
        <code>
function printHello(){
    console.log("Hello")
}
        </code>
    </pre>
</body>
</html>
```

Et, voila! Our code becomes colour coded according to the programming language and the theme we have chosen!

![Code coloured on a page](/assets/codecolour-endresult.png)

What's amazing is that HighlightJS automatically detects the programming language and sets the colours automatically.

However, if you want to explicitly tell the library which language your code is on, you can specify it:

```html
<pre>
    <code style="javascript">
function printHello(){
    console.log("Hello")
}
    </code>
</pre>
```

And just like that, your website has code that looks beautiful.