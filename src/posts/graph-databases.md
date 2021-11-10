---
series: explained
title: Graph databases, explained.
publishDate: 2021/11/10 12:25
thumbnail: graphdb.png
description: Graph databases is a type of NoSQL database that makes it easier to store relationships between entries. Let's explain further
keywords: graph databases, graph, database, neo4j
twitterimage: https://savvas.me/assets/graphdb-tw.png
---

Suppose you have a bunch of phone numbers from all of your friends.

You want a way to store these numbers so you can easily find them whenever you want on your computer.

Since you know about databases, you decide to make an SQL database and store the phone numbers there.

![](/assets/graph-table.png)

That’s great! Now you have a place where you can store your friends’ phone numbers!

Now, you decide to store your friends' parents' phone numbers as well. 

Just in case you forget, you decide to label the new numbers as your friends' parents.

How would you do that?

If your answer is to create a ”relationships” table and work with that, then yes, that would be the relational way of tackling this problem.

However, this seems to overcomplicate stuff. What if there was a different type of database, not dependent on SQL, that is specifically designed to store relationships between entries?

There is: 

## Enter GRAPH DATABASES 

Graph databases are basically databases, just like any other, but instead of tables, the entries are connected by their relationships.

For example, you can store the names of your friends:

![](/assets/graph-entities.png)

But now you can join them together and put a label.

![](/assets/graph-relationship.png)

And you can obviously include everyone's phone numbers as well:

![](/assets/graph-incphone.png)

This way of storing relationships is such more clear and makes much more sense than just storing these in a relational database! Right? 

## So how do I get started?

One such database is called Neo4J. It is a graph database based on a language called Cypher. 

Here’s how it works:

The Cypher code below, firstly creates the two entries for Alice and Frank and then binds them together by their relationship:

```
CREATE (frank:Person {name: “Frank”, phone: “989522577”})
CREATE (alice:Person {name: “Alice”, phone: “519198724”})

CREATE (frank)-[:IS_PARENT_OF]->(alice)
```

And this, in very general terms, is how graph databases work!