---
series: explained
title: Regular expressions, explained
publishDate: 2021/05/25 11:01
thumbnail: regex.png
---

What are regular expressions? They are a great way of expressing patterns to help with matching and validation.

But what does that mean?

## Let's explain!

So let's suppose you have a website. This website relies on user input.

For example, you ask your users for their age:

![](/assets/regex-ageform.png)

You expect the input to be a *number* from *0 to 100*. This is something you need to check within your form. The easiest (and recommended) way is to use HTML tags in your form:

```html
<form action="">
    <label for="age">Age: </label>
    <input id="age" type="number" min="0" max="100">
</form>
```

So if you attempt to write a non-numeric input or a number below 0 or over 100, it will give you an error:

![](/assets/regex-formerror1.png)

Validation for numbers is pretty straightforward. What if you need to validate something more complex? 

Let's suppose your website asks for an ID. That ID is slightly complex. It has to follow these rules:

* The first 3 characters are capital letters
* Followed by 3 numeric characters
* Followed by a dash (-) symbol
* Followed by 4 letters, but this time lower case.

So, for example, this is a valid ID: `ABC123-abcd`

This is invalid: `fre123-AbC`.

To validate this, our website will have a Validate button:

![](/assets/regex-idform.png)

If the ID input is valid, a message will appear saying "The ID is valid". If not, a message "The ID is invalid" will appear.

How can we validate the ID using Javascript?

We can take the **long** route:

1. Check the ID is 11 characters long
2. If it is, get the 3 first letters. Check each one is a capital letter (A-Z)
3. If that's true get the next 3 characters. Check each one is a number (0-9)
4. If *that's* true, check if the 7th character is a dash
5. Then if *that's* true, extract the last 4 characters and check if they are lower case letters.

In case you didn't realise it, this is *a lot* of work for checking a string of characters.

What if there was an easier way of saying:

> This is the pattern I want the ID to follow. Please check if that's true

...without going through all those steps? A more straightforward way of expressing the pattern needed?

## Enter Regular Expressions

Regular expressions (or "regex" for short) is a way of expressing complex patterns like the one above in a single string.

Because they can express patterns that are quite complex, regular expressions often look like an alien language.

## Regex for our ID

The regular expression for our ID looks like this:

```re
^[A-Z]{3}[0-9]{3}-[a-z]{4}$
```

Let's break it down:

* `^` means "the start of the line"
* `[A-Z]{3}` means "3 capital letters from A-Z"
* `[0-9]{3}` means "3 numbers from 0-9"
* `-` is a literal dash symbol
* `[a-z]{4}` means "4 lower case letters a-z"
* `$` means the end of the line.

So basically the pattern we need. Sure it looks quite complex, but if you get the hang of regex, it will be a lot simpler than checking the validity of the ID any other way.

## Validate the ID in our website

Let's go back to our website. Let's first create a function that validates the ID input and shows a message:

```js
function validateId(){
    let id = document.querySelector("#id").value
    let isValid = id.search(/^[A-Z]{3}[0-9]{3}-[a-z]{4}$/g) === 0
    if(isValid){
        document.querySelector("#message").innerHTML = "The ID is valid"
    }
    else{
        document.querySelector("#message").innerHTML = "The ID is invalid"
    }
}
```

If we attach this to our button's click event, we'll get these on our page:

For a valid ID:

![A message saying "The ID is valid" for a valid ID](/assets/regex-validregex.png)

For an invalid ID:

![A message saying "The ID is invalid" for an invalid ID](/assets/regex-invalidregex.png)

## Learn more

The purpose of this article is to introduce you to regular expressions with a simple explanation. To help you get started with regex,you can learn more about regular expressions, by checking the [MDN guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)!
