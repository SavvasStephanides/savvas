---
series: explained
title: MongoDB, explained.
publishDate: 2021/11/17 9:30
thumbnail: mongodb.png
description: MongoDB is a document-based NoSQL database that is faster and easier to store data. What is it? Let's explain.
keywords: mongo, mongodb, databases, nosql, document, json
twitterimage: https://savvas.me/assets/mongodb-tw.png
---

You've heard about MongoDB as a better alternative to SQL databases. You've even heard the term "NoSQL" being thrown around.

So what is MongoDB anyway?

## Let's explain.

Suppose you are tasked to build a web service, where you give it an ID and it gives you back details about a user. These details include their home address and a list of hobbies. It would give you back a JSON file like so:

```json
{
    "id": 105,
    "firstName": "Emily",
    "lastName": "Matilda",
    "address": {
        "street": "101 High St",
        "city": "Thurgarton",
        "postCode": "NR11 6YD"
    },
    "hobbies": ["Running", "Painting"]
}
```

You obviously need to store this data somewhere. How would this work if you were to store this data in an SQL database?

As this data looks quite complex, you'd need at least 3 tables in your SQL database:

A `users` table for the basic info

![](/assets/mongodb-userstable.png)

An `address` table to store home address details

![](/assets/mongodb-addresstable.png)

A hobbies table to store the list of hobbies for each user.

![](/assets/mongodb-hobbiestable.png)


So if you request the user details for a specific ID, the web service would:

* Get the basic user details by ID (first name, last name)
* Get the home address details from the address table
* Get the hobbies list from the hobbies table
* Assemble everything into JSON, like above, and return it to the user.

If this looks unnecessarily complex and slow to you, you'd be *right*!

What if there was a database that can store data in a JSON format for me, so I don't have to do the whole conversion thing so my app is easier to code and also faster?

## Enter MongoDB!

MongoDB is a database that, instead of relying on SQL technology to store data, the data is stored as documents. 

So instead of storing each entry as a "row", like it happens in SQL, it is stored as a "document".

So suppose we need to store the data for Emily, so if we search for the user by ID, it will give us the results in a `JSON` format, like above.

In MongoDB, all we need to do is to store the data for Emily in a document, in the JSON format we want it to be returned!

```json
{
    "id": 105,
    "firstName": "Emily",
    "lastName": "Matilda",
    "address": {
        "street": "101 High St",
        "city": "Thurgarton",
        "postCode": "NR11 6YD"
    },
    "hobbies": ["Running", "Painting"]
}
```

So in your favourite programming language, you can just request the document and MongoDB will just give it back to you. 

That's it! No conversions, no slow processing of data!

So not only is your data stored in a format that just makes sense, and your app is faster because it doesn't need to process the data, but because of this speed you can just store a HUMONGOUS amound of data.

That is where the name Mongo comes from. It's short for Humongous! 😀

Can't wait to get started? Visit the [MongoDB documentation to get started](https://docs.mongodb.com/manual/tutorial/getting-started/)