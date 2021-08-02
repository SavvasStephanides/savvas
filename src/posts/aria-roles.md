---
series: explained
title: ARIA roles, explained.
publishDate: 2021/07/29 14:00
thumbnail: a11y.png
description: What ARIA roles are in accessibility
keywords: html, accessibility, aria roles, button, aria
twitterimage: https://savvas.me/assets/aria-tw.png
---

What are ARIA "roles" and how can they make your website more accessible?

## Let's explain.

Let's suppose you have a website. On this website you have simple form where your users can subscribe to your newsletter using their email address:

![](/assets/simple-form.png)

The form is quite simple and straightforward:

* A label for the email input box
* The email input box
* A submit button

For the label you use the `<label>` tag. For the input box you use `<input>`. All within a `<form>` tag:

```html
<form>
  <label for="email">Email: </label>
  <input type="text" id="email" id="email"/>
</form>
```

For the button however, for various reasons, instead of using the `<button>` tag, you decide to create a `<span>` instead:

```html
<form>
  <label for="email">Email: </label>
  <input type="text" id="email" id="email"/>
  
  <span onclick="submitForm()">Submit</span>
</form>
```

You style the span to look like a button. You add some code which makes it act like a button. But there's a problem:

Semantically, it's not a button. A screen reader, for example, won't be able to know that this actually a button...

...unless you specifically tell it so.

You can turn your span into a semantic button by using an ARIA `role` attribute.

So to turn our span into a button, we add `role="button"` as an attribute:

```diff
<form>
  <label for="email">Email: </label>
  <input type="text" id="email" id="email"/>
  
-  <span onclick="submitForm()">Submit</span>
+  <span onclick="submitForm()" role="button">Submit</span>
</form>
```

Now the screen reader knows that this acts like a button which is supposed to do something, and it will announce it as such.

But how about keyboard access? Spans aren't focusable by default so we need to include `tabindex` to our span:

```diff
<form>
  <label for="email">Email: </label>
  <input type="text" id="email" id="email"/>
  
-  <span onclick="submitForm()" role="button">Submit</span>
+  <span onclick="submitForm()" role="button" tabindex="0">Submit</span>
</form>
```

That's it. We now have a custom element that looks, acts and is semantically a button.

`button` is just an example of the many ARIA roles that exist out there.

Examples:

* `alert`: used to signify that this element is dynamically updated.

* `dialog`: used to signify that this element is a dialog, usually displayed on top of the rest of the page.

And that's it. Thanks for reading. Which ARIA roles do you frequently use and why? Let me know on Twitter!