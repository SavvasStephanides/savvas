---
series: tips
title: Create a complete semantic HTML page with a single shortcut 
publishDate: 2021/06/14 14:33
thumbnail: semantichtml.png
description: This single-line Emmet shortcut will create an HTML page complete with a header, navigation, main and footer.
keywords: html, emmet, semantic html, header, footer, navigation, web development
twitterimage: https://savvas.me/assets/semantichtml-tw.png
---

Emmet shortcut are simply amazing and can save minutes of code-writing when building HTML pagesin VSCode or Sublime.

What's even more amazing is that you can write Emmet shortcuts yourself to build HTML pages as complex as you like!

The Emmet shortcut below builds a structurally complete web page, which includes a `<header>` including `<nav>` and 5 navigation elements, `<main>` and a `<footer>`:

```emmet
html:5>(header>nav>ul>li*5>a)+main+footer
```

If you paste the snippet above and press <kbr>Tab</kbr> on VS Code, you'll get this HTML page as a result:

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
    <header>
        <nav>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </nav>
    </header>
    <main></main>
    <footer></footer>
</body>
</html>
```

This is probably the most common structure for a web page and using a single line shortcut you can build it in 1 second!