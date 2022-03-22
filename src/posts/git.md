---
series: explained
title: Git, explained.
publishDate: 2021/05/06 9:00
thumbnail: git.png
description: Git is a must for collaborating with other developers. Let's explain further.
keywords: git, software engineering, open source, github
twitterimage: https://savvas.me/assets/git-tw.png
---

What is Git?

You've heard about Git, possibly GitHub, as an essential tool for every developer. But what is Git? And what makes it *so* great that makes it almost *synonymous* with software development?

## Let's explain! 

Let's say you're building a web app. Say, a to-do app.

You've already built the basics of the app: 

* the front-end
* the back-end
* the database to store the tasks.

You've also included some basic functionality like reading, adding and completing tasks.

Now you have a list of additional stuff to add to your to-do app:

* Updating task names
* Including notes to your tasks
* Add labels
* Deleting tasks

The list goes on and on.

And everything gets overwhelming.

You remember however that one of your friends is also a software developer.

You show him the app and he loves it.

You mention that you have a whole bunch of things you want to add to your app, so he suggests you both work together.

You agree straight away!

You agree to split the tasks between you. 

He will be working on including notes to the tasks.

You will be working on updating the task names.

So your friend asks for the code you've worked on so far so he can work on his task alongside you.

You store the whole source code in a ZIP file and send it to him.

You work on your stuff while he works on his.

Your friend finally finishes his part. He can now add notes to the to-do app. So he bundles the finished code into a ZIP file and e-mails it with all the changes.

At the same time you've finished your part. You can now update the task name.

You are now tasked with taking your updated code and your friend's updated code and combine them. 

You have to put everything into a single code base without messing everything up. 

If you do you'll have to start over...

After 5 long and frustrating hours of messing with the code and fixing the bugs you've caused, you finally managed to finish the code.

Now it's on to the next tasks.

You agree on your next pieces of work and the painful cycle continues again.

And again... 

And again...

Instead of sending the code back and forth, and then wasting hours to combine the code, wouldn't it be nice if the code lived in a space somewhere you both have access to? 

And if you need to make changes, you just send the new code to that space and it would just get updated?

And if your friend sends some new code over it would automatically get updated as well? And make it a lot less likely that you'll have to painstakingly combine the code and hope that it works?

This is possible thanks to:

Git!

![](/assets/git.png)

Git is a tool that lets you put your code in a place where everyone who needs to work on the code can access it. It could be online or anywhere else. 

The important thing is, everyone who needs to update code within the same code base can do so thanks to Git!

So you and your friend have decided to use Git. You put the code base for the to-do app on GitHub, an online service for storing code like we mentioned.

So you decide to add some more features to your app.

You are tasked with setting tasks as specific colours.

Your friend is tasked with adding images to tasks.

You both add a copy of the code to your own computers. You both make the necessary changes.

Once you're done you put your code changes back to the central code on Github.

Once your friend is done with his changes, he does the same.

Much easier!

Other things you can do with Git:

* Go back to a previous version if you've made a mistake
* Keep a complete log of who made which changes since the beginning
* Create "branches" so that the main part of the code doesn't get immediately affected.

And much much more!

## Learn more about Git

This is Git in a nutshell.

There's obviously a lot more about Git which I won't cover here (maybe in a future thread). 

To learn more, here's a [very comprehensive guide by Atlassian](https://atlassian.com/git)

Thank you for reading!

If you liked this explanation, [see here for more explanations of dev tools](/explained)!