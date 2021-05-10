---
series: accessible-tic-tac-toe
title: Accessible tic-tac-toe Part 1 - Create the app
thumbnail: tic.png
publishDate: 2021/04/23 13:17
---

## Introduction

First step is to create a new project. I'll make this into a React project using `create-react-app` since it's easier to build complex web interfaces with.

## Creating the app

So I've already installed `create-react-app` on my system but if you want to do that, you can do use this command:

```sh
npm install -g create-react-app
```

Next step is to create the app itself:

```sh
create-react-app tictactoe
```

This will take a few minutes to complete...

![](/assets/tictactoe-createreactapp.png)

Any minute now...

![](/assets/tictactoe-create2.png)

There we go!

![](/assets/tictactoe-done.png)

Running the `npm start` command from the project folder and opening http://localhost:3000 in a browser, I get the well-loved React welcome screen! So far so good!

![](/assets/tictactoe-reactwelcome.png)

Opening the project folder in VS Code, this is what the files look like:

![](/assets/tictactoe-filesinit.png)

Let's clean things up a little so we're left with the bare necessities:

![](/assets/tictactoe-aftercleanup.png)

That's more like it.

Our app now looks more like this:

![](/assets/tictactoe-hello.png)

See the [Github repository](https://github.com/SavvasStephanides/accessible-tic-tac-toe/tree/part1) to see how the project looks like after Part 1.

Now we're ready to build our game, beginning with the tic-tac-toe board component. This will be created in Part 2.
