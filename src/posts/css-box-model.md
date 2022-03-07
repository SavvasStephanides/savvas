---
series: explained
title: The CSS Box Model, explained.
publishDate: 2022/03/07 14:00
thumbnail: boxmodel.png
description: The box model is what makes styling possible with CSS. Let's explain what it is.
keywords: css, box model, margin, padding, content, styling, web development
twitterimage: https://savvas.me/assets/boxmodel-tw.png
---

This is a website:

![Screenshot of a simple website with a title, two paragraphs and a link](/assets/box01.png)

This simple website has these elements:

* A title
* Two paragraphs
* A link in the first paragraph.

It's fair to say that each of these elements lives in its own little space, with its own little borders. It's also safe to say that these boundaries are shaped like squares.

![](/assets/box02.png)

These boxes aren't there just to put stuff on a page. The boxes the elements are in, are also used to style each element with CSS.

Let's focus for a minute, on a single paragraph.

![](/assets/box03.png)

Styling happens in various parts of the element's borders:

The content of the element...

![](/assets/box04.png)

The space within the border...

![](/assets/box05.png)

The border itself that wraps the content and the space inside it...

![](/assets/box06.png)

And the space *outside* the border

![](/assets/box07.png)

All these parts together make up an element's *box*.

This is why the way the layout and styling of an element within a box is called *The Box Model*.

## The Box Model

Everything I've mentioned above is part of an element's **box**. 

![](/assets/box08.png)

1. **Content**: the element's content. Usually text or other elements within it

2. **Padding**: the area around the content but within the borders of the element.

3. **Border**: The border mark itself.

4. **Margin**: The area outside the border mark.

All these parts can be styled individually, so let's see use some CSS to do that for each one.

Let's start with some basic HTML of a basic element:

```html
<p id="my-element">
This is the content
</p>
```

![](/assets/box09.png)


### Styling the content

The content in an element can be anything, but in our example our element only has some text in it, for simplicity. Let's style our text to give it a red color and make it slightly bigger:

```css
#my-element{
    color: red;
    font-size: 30px;
}
```

![](/assets/box10.png)

### Styling the padding

Next, let's style the area around the content. Let's increase the padding to 30 pixels and change its background colour to a light grey:

```css
#my-element{
    padding: 30px;
    background-color: lightgrey;
}
```

![](/assets/box11.png)

### Styling the border

Now, let's style the border of the element. Let's give it a size of 21 pixels and make its color black:

```css
#my-element{
    border: 21px solid black;
}
```

![](/assets/box12.png)

### Styling the margin

Finally, let's style the area outside the border. Let's give our element a top margin so that it has a space from the element on top of it of 60 pixels:

```css
#my-element{
    margin-top: 60px;
}
```
![](/assets/box13.png)

With everything together, this is how our CSS would look like for our element:

```css
#my-element{
/*     Content */
    color: red;
    font-size: 30px;
  
/*     Padding */
    padding: 30px;
    background-color: #eee;
  
/*   Border */
    border: 21px solid black;
  
/*   Margin */
    margin-top: 60px;
}
```

And this is how the box model makes layouts and styling possible.

## More information

To learn more about the box model, check this [amazing documentation by the MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)