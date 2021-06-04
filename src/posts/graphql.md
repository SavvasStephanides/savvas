---
series: explained
title: GraphQL, explained.
publishDate: 2021/06/03 14:33
thumbnail: gql.png
description: A simple introduction to GraphQL and why it's used
keywords: graphql, web development, api
twitterimage: https://savvas.me/assets/gql-tw.png
---

You probably heard of GraphQL as a new way to retrieve data from a web service. Possibly as an alternative to REST services. But what is it exactly?

## Let's explain!

Imagine you need to retrieve some data about a certain user from a web service. The web service is REST based.

To get information about a user if you know the ID of the user is to make a request to a specific URL.

If you're trying to get the details of the user with ID `101`, then the URL would be:

```
https://api.mydatabase.com/user/101
```

The user details are returned as a `JSON` file, like this:

```json
{
    "id": 101,
    "username": "juliet",
    "name": "Juliet",
    "surname": "Annora",
    "dateOfBirth": "04/05/1985",
    "email": "jannora@mymail.com",
    "phone": "090292192",
    "countryOfResidence": "Kiribati"
}
```

Now, that's a lot of information returned by the web service. You only need specific information, such as the username, the name and surname. Can you *only* get this specific information?

This can only happen if the developer of the API has specficically added functionality to retrieve specific information and that would be weird and unintuitive with REST-ful services.

Basically in most cases, you're stuck with all this data which most will end up being junk.

What if there was a more explicit way of saying, "I need this information and I don't need anything else?"

## Enter GraphQL!

GraphQL is basically a way of saying something like this:

> I need to get data about a specific user. I only need to get their username, their first name and last name. Nothing less, nothing more.

GraphQL will do it. It will give you exactly what you need.

## So how does it work?

We start of with a basic URL:

```
https://api.mydatabase.com
```

This URL will be the same for the entire API, whether we need user data, or anything else.

Next we need our GraphQL statement. The statement to retrieve the username, name and surname from a user with ID `101` would look something like this:

```
{
    user(id: 101){
        username
        name
        surname
    }
}
```

GraphQL will give you back exactly what you asked for in the exact format you requested it:

```json
{
    user{
        "username": "juliet",
        "name": "Juliet",
        "surname": "Annora"
    }
}
```

So not only did it give you back only what you asked for, the response is the exact same format as the request, as if you gave it some blanks and the API filled them in! Isn't that amazing? No more wasted data!

## What's next?

I hope this simple explanation helped you understand the basics of GraphQL and why it has become so popular.

To get started with GraphQL, TheNetNinja has an *amazing* free course on YouTube on how to build your first GraphQL service with Node and React. Enjoy!

<iframe width="560" height="315" src="https://www.youtube.com/embed/ed8SzALpx1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>