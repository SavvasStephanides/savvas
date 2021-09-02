---
series: explained
title: Type coercion in Javascript, explained.
publishDate: 2021/09/02 09:00
thumbnail: typecoercion.png
description: A simple explaination of the Javascript concept known as type coercion
keywords: javascript, equality, type coercion
twitterimage: https://savvas.me/assets/typecoercion-tw.png
---

Type coercion in Javascript can cause a lot of confusion and unpredicted behaviour.

So what is it?

## Let's explain

Type coercion in Javascript is a fancy way of basically saying:

> If you're trying to compare two things with `==` that aren't the same type, try to make them the same type before comparing them.

Take this code example:

```js
if (1 == 1){
    console.log("Both sides are equal")
}
```

Obviously this statement will print `"Both sides are equal"` to the console. Why?

Because both sides are equal to `1`.

And they're both numbers.

Now, how about this?

```js
if (1 == "1"){
    console.log("Both sides are equal")
}
```

Both sides are equal to `1`, but the right side has quotes around it.

This means that the left and right sides are different types (integer and string).

What will happen in this case?

Once again, this statement will print `"Both sides are equal"` to the console.

But why?

Because of a concept in Javascript called **Type Coercion**.

In the case of our example, before performing the equality check, Javascript will try to convert one type into the other.

The integer on the left will be converted to a string.

Basically it'd be the same as this:

```js
if ("1" == "1"){
    console.log("Both sides are equal")
}
```

Let's have a look at a different example:

```js
if (1 == true){
    console.log("Both sides are equal")
}
```

The left side is an integer, the right side is a boolean. What will happen in this case?

Javascript will try to convert the integer into a boolean. If the integer is `1`, it will be converted to `true`. 

If it's `0` it will be converted to `false`.

So it's basically like doing this:

```js
if (true == true){
    console.log("Both sides are equal")
}
```

Once again, `"Both sides are equal"` will be printed to the console.

This behaviour can be rather strange and unpredictable, so how can we avoid this?

How can we make sure that the check only returns true if boths sides are equal AND they are of the same type?

With something called *"STRICT EQUALITY"*.

This can be done with adding 3 equal signs instead of two (`===`).

For example:

```js
if (1 === "1"){
    console.log("Both sides are equal")
}
```

In this case, nothing gets converted (or coerced) so the check is much more strict.

Nothing will be printed to the console because the two sides are of different types.

It is highly recommended to use strict equality in your code to avoid unpredictable behaviour.

And this concludes this explanation on Type Coercion. Thank you for reading.