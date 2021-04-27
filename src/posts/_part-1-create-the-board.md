---
series: accessible-tic-tac-toe
title: Accessible tic-tac-toe Part 1 - Create the board
thumbnail: tic.png
publishDate: 2021/04/23 13:17
---

## Introduction

For Part 1 we're going to be using HTML and CSS to create an empty board for our game. Just a 3 by 3 grid of empty squares.

## The HTML

Let's start with the basic structure of our page, the HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic tac toe</title>
    <link rel="stylesheet" href="board.css">
</head>
<body>
    <div id="app">
    </div>
</body>
</html>
```

The `<div id="app>` will act as a base for our board and will help us center our board on the page later on.

Now let's create another `<div>`, this time for our actual board:

```diff
<body>
    <div id="app">
+        <div id="board">
+        </div>
    </div>
</body>
```

Inside the `board`, we're going to add our 9 squares. `<div>`s will do:

```diff
<div id="board">
+    <div class="square">
+    </div>

+    <div class="square">
+    </div>

+    <div class="square">
+    </div>

+    <div class="square">
+    </div>

+    <div class="square">
+    </div>

+    <div class="square">
+    </div>

+    <div class="square">
+    </div>

+    <div class="square">
+    </div>

+    <div class="square">
+    </div>
</div>
```