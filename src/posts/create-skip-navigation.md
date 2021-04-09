---
series: accessibility
title: How to create a Skip Navigation link
thumbnail: skipnav.png
publishDate: 2021/04/08 09:39
---

## About

When navigating a website with a keyboard, it's often that you'll have to tab through the website's navigation header before getting to the main content. It gets especially frustrating when you get through loads of pages to get where you want. In this tutorial, I will walk you through creating a "Skip Navigation" link so that your keyboard users can easily avoid tabbing through the navigation and get straight to the main content.

## What are we building?

What we are creating here is basically a link that is invisible while browsing the website but becomes visible once it gains focus when the user navigates the site with the <kbd>Tab</kbd> key.

![](/assets/skipnav1.png)

## Why?

Before we move on to the tutorial let's answer the common question: 

> Why do I need to make my site fully accessible with a keyboard?

Some users rely on the keyboard for navigating the web. Users with motor disabilities often find it difficult to navigate with a mouse or any other device. We therefore need to make sure that our website is 100% accessible with a keyboard.

[This article from WebAIM does a better job at explaining the importance of keyboard accessibility.](https://webaim.org/techniques/keyboard/)

## Setting up our website

First things first, let's create the basic layout of our website. The end result will look something like this:

![A basic homepage with a navigation containing 4 elements and a main section](/assets/skipnav2.png)

It'll be a basic home page with:

* A `<header>` which contains `<nav>` which contains the navigation elements in a `<ul>`
* A `<main>` section which contains the main section of our website, with some dummy "lorem ipsum" text

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#" id="site-name">MySite</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <p><a href="#">Lorem ipsum dolor</a> sit amet consectetur adipisicing elit. Explicabo aperiam distinctio nostrum, cum incidunt pariatur consequuntur ullam. Odit laboriosam magni amet eligendi perferendis corporis quae. Obcaecati eaque iusto, magnam mollitia porro tenetur temporibus ex magni, vero inventore nulla hic ipsum nostrum repellendus, ut reiciendis repellat. Aliquam consequuntur in perferendis beatae.</p>
            <p>At placeat natus nemo quam, fuga ipsam accusantium in vitae nam quae velit numquam alias perspiciatis veniam quod eligendi aliquam fugiat ipsum doloremque laudantium. Id eum nobis cupiditate laudantium est in soluta quasi accusantium, rem quos unde iusto voluptates quibusdam dolore quaerat, provident laboriosam ipsum natus nam perspiciatis possimus. Laborum!</p>
            <p>Minima pariatur accusamus sequi hic fuga consequatur eaque, veritatis molestias vel atque fugiat, natus, nesciunt suscipit laborum non sunt quaerat cum ea assumenda deserunt voluptates vitae iusto sed ducimus. Eligendi quos nam exercitationem et adipisci vero iure, quidem ad. Amet quia exercitationem illum soluta doloremque dolorum aperiam totam vel ipsum!</p>
            <p>Animi beatae dolores laborum placeat sed corporis minus, reprehenderit commodi officia eligendi, magni expedita, alias sunt saepe quas! Mollitia cum rerum aperiam reprehenderit. Aliquam tempora nemo mollitia sed tenetur eaque labore sit fugit illo consequuntur? At quibusdam, adipisci beatae a reprehenderit iure vitae maxime perspiciatis. Necessitatibus aperiam ratione ad perspiciatis.</p>
            <p>Repudiandae fugiat veniam sint quibusdam itaque earum, expedita provident quasi dolor repellendus! Maiores, expedita? Ut neque quo, doloremque quaerat repellat corporis laudantium voluptatibus omnis a qui blanditiis dolorem odio, quia voluptatem ullam nam harum necessitatibus cupiditate, pariatur distinctio aliquam labore! Beatae in reprehenderit sint! Quae molestiae reiciendis voluptates dolor pariatur!</p>
            <p>Voluptate, enim minus omnis beatae quisquam, perspiciatis ea atque eos quaerat ab, vitae tenetur explicabo nisi tempora exercitationem amet ullam debitis earum dolore. Unde ea quia aliquid similique delectus culpa, molestias neque dignissimos corporis odit ab necessitatibus impedit deserunt dolore? Rem, blanditiis vel? Doloribus, minima alias facere iure nemo consequuntur!</p>
            <p>Fugit laudantium reiciendis vero molestiae facere! Voluptate maiores similique vitae ipsa nam ipsum saepe, sit rem sapiente debitis nihil temporibus asperiores laborum velit odio inventore, recusandae ratione! Officiis laborum fuga nostrum, quo cum repellendus soluta expedita iusto qui corporis aliquam perspiciatis minus accusantium in ut. Voluptates quia omnis fuga ipsum.</p>
            <p>Porro sint numquam placeat molestias soluta hic velit ratione, commodi nam earum et a delectus molestiae praesentium officia eaque adipisci error aut asperiores. Voluptates, quos eveniet magni optio amet culpa dolorum ad quidem ipsam incidunt illum explicabo non atque rerum blanditiis labore harum dolore repudiandae quod repellat. Quisquam, nobis odit?</p>
            <p>Eaque, quos eveniet voluptas commodi assumenda nostrum id in veniam nulla, tenetur itaque provident. Ex numquam nesciunt quaerat est quos ab doloremque debitis harum facere quae? Dicta non, doloremque, aperiam a nisi totam modi quis assumenda deserunt animi quaerat! Ratione veritatis enim cupiditate ut et facere veniam quasi? Tenetur, autem.</p>
            <p>Sit, hic consequuntur? Dicta adipisci nobis voluptatibus excepturi nemo veritatis iusto in, vel magni laborum, perspiciatis impedit? Dolorum ducimus soluta consectetur neque voluptate totam architecto temporibus autem veritatis perferendis, sit ratione officia illum, quidem vel iste obcaecati eaque consequatur! Autem quo repellendus nihil quisquam. Doloremque repellendus natus magni illum tempora.</p>
        </article>
    </main>
    <footer>
        2021 Savvas Stephanides
    </footer>
</body>
</html>
```

### CSS

```css
*{
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body{
    background-color: #2b2e4a;
}
header{
    background-color: #903749;
    box-shadow: 0 0 30px 6px #e84545;
}

header nav{
    width: 900px;
    margin: auto;
}

header nav ul{
    list-style: none;
    display: flex;
}

header nav ul li a{
    color: white;
    display: block;
    padding: 21px;
    text-decoration: none;
}

header nav ul li a:hover{
    text-decoration: underline;
}

header nav ul li a#site-name{
    font-weight: bold;
    color: white;
}

main article{
    width: 900px;
    margin: auto;
    margin-top: 60px;
}

main article p{
    padding: 15px 21px;
    line-height: 1.5;
}

main article p,
main article p a{
    color: white;
}
```

## Create the Skip Navigation link

Now we need to create our link. For this we need to do 2 things:

1. Make our `<main>` tag an anchor so we can navigate to it easily
2. Create a link which takes the user to the main section
3. Hide it with CSS
4. Use CSS to make the link visible on focus

### 1. Make our `<main>` tag an anchor

To do this all we need to do is give an ID to our `<main>` tag. Let's call it `main-part`:

```diff
- <main>
+ <main id="main-part">
```

### 2. Create the link

Now we need to create our "Skip navigation" link right under our `<body>` tag and right before the `<header>` tag:

```diff
<body>
+    <a href="#main-part" id="skip-navigation">Skip navigation</a>
    <header>
```

### 3. Make it invisible

Now we need to hide it from the user. We do that with CSS:

```css
#skip-navigation{
    position: fixed;
    top: -100%;
    left: 0;
    background-color: #903749;
    color: white;
    text-decoration: none;
    padding: 18px;
    border: 3px solid #e84545;
}
```

Notice the `position: fixed` and `top: -100%` lines. These are the lines that make the link invisible.

### 4. Make it visible on `:focus`

Lastly, we set the `top` parameter of the link when it has the focus:

```css
#skip-navigation:focus{
    top: 0;
}
```

And that's it! As soon as you open the page and press the <kbd>Tab</kbd> button, the Skip Navigation button should show up. Pressing the <kbd>Enter</kbd> key should take you straight to the main content!

![](/assets/skipnav3.png)

[See live demo](https://relaxed-shirley-6e6d82.netlify.app/)

## Conclusion

Has this tutorial been helpful? Let me know on [Twitter](https://twitter.com/SavvasStephnds)!