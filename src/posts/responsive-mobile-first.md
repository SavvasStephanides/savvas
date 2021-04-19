---
series: tips
title: Building a responsive website? Start with mobile first!
thumbnail: mobfirst.png
publishDate: 2021/04/19 12:25
---

When designing a new responsive layout, which one do you do first, desktop or mobile? Here, I'll show you why it's best to develop the mobile version first and desktop second.

Two main reasons:

## 1. Start simple, enhance gradually

Take a look at the two layouts below, the left is mobile and the right is desktop:

![Comparison of mobile and desktop layout. The mobile layout follows the default browser flow layout while the desktop implements a grid layout](/assets/mobfirst1.png)

Which one of the two looks easier to build? 

The mobile follows the "default" layout applied by all browsers without any special CSS, which is the "flow layout". So to keep things simple, start with the mobile layout and *enhance* to a grid for screen sizes that allow it:

```css

#gallery{
    /* enter basic CSS to style the gallery here */
}

@media (min-width: 600px){
    #gallery{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
```

## 2. More people will visit your site on a phone than on a desktop

More and more people visit the Internet using their mobile devices, and there's a good chance that the same is true for your website.

![Bar chart showing the growing trend of visiting the web with a mobile device. 2020 is at over 50%.](/assets/mobfirst2.png)

Designing for mobile first, means you are developing for the growing majority of your visitors. You can later enhance for your desktop audience from that point on.

Thanks for reading. Do you build responsive layouts mobile first or desktop first? Why? [Join the discussion on Twitter](https://twitter.com/SavvasStephnds/status/1384129106166521864)!