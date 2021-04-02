---
title: The problem with social media icons and how to fix it
series: accessibility
thumbnail: socials.png
publishDate: 2021/04/02 00:00
---

## About

If you have a personal website, chances are, you've put some social media icons somewhere in the site. Whether at the header next to the site name, or at the footer, before the copyright notice. And any wouldn't you want to let your visitors know where else they can find you?

However, these icons have a major problem when not implemented correctly. And it has to do with **accessibility**.

## The problem

If you're adding a series of social media icons, chances are, you're adding them without any accompanying text. Do you really need to? Everybody knows what the Facebook, Twitter or Github icon looks like! You can therefore add so much in so little space.

But if you're not adding any text, what is a screen reader supposed to read?

As an example, suppose we need to add a Twitter icon from FontAwesome that links to your profile. In code, it would look like this:

```html
<a href="https://twitter.com/SavvasStephnds">
    <i class="fab fa-twitter"></i>
</a>
```

And on the page, if you set up FontAwesome corrently, it would look like this:

![The Twitter icon as it appears on a webpage](/assets/twitter-fa.png)

[CodePen](https://codepen.io/SavvStudio/pen/OJWmLRp)

It looks great but if a screen reader gets the focus on the icon this is what it reads to the user:

> Link. Main. Landmark.

[Video](https://vimeo.com/532387546)

That's it. No information of what the link is about or where it goes! Not helpful at all for screen reader users who can't see what's going on otherwise! This need to be fixed!

## The solution

There is an easy and straightforward way to fix accessibility issues with the help of some `aria` tags. Specifically, we'll be using 2 tags:

* `aria-label` will be used to add a label to the `<a>` tag, to tell the screen reader what to read.
* `aria-hidden` will be used to hide the `<i>` tag which contains the icon, since this doesn't serve any purpose to the screen reader user.

So to fix the code snippet above, first we add `aria-label`:

```diff
- <a href="https://twitter.com/SavvasStephnds">
+ <a href="https://twitter.com/SavvasStephnds" aria-label="Follow me on Twitter">
    <i class="fab fa-twitter"></i>
</a>
```

Then `aria-hidden`:

```diff
<a href="https://twitter.com/SavvasStephnds" aria-label="Follow me on Twitter">
-    <i class="fab fa-twitter"></i>
+    <i class="fab fa-twitter" aria-hidden="true"></i>
</a>
```

[CodePen](https://codepen.io/SavvStudio/pen/LYxyPKZ)

Now the screen reader will read something like this:

> Follow me on Twitter. Link. Main. Landmark

[Video](https://vimeo.com/532391130)

Now the screen reader user will have a clear idea of the purpose of the link and where it goes. Much clearer!

## Conclusion

Remember to be considerate and inclusive in everything you do and develop. Have you found this guide helpful? Has it helped in making your social media icons more accessible? [Let me know on Twitter](https://twitter.com/SavvasStephnds)!