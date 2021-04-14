---
series: explained
title: Docker, explained.
publishDate: 2021/04/14 16:20
thumbnail: docker.png
---

So you've just built a project. Let's say it's a to-do app. There are plenty of things involved:

* front-end
* back-end
* database... 

For your project, you're using React as front end, Python with Flask as a backend API, and MySQL as a database. 
 
You're also using Mac as your main operating system on your computer for developing and testing your app locally.

Anything you download for your app has been tailored for the operating system you're using. 

Now you talk to your friend about this app you're building and he seems pretty excited to try it out! Thing is, it's not hosted anywhere at the moment so it's only available locally. 

So you need to tell your friend that he needs to get the code from Github, then download the necessary stuff in order to run the app: Node, Python, MySQL etc. 

So your friend, who is running Ubuntu, goes ahead and installs the necessary tools to run your to-do app.

Once everything is up and running, your friend tries to run your to-do app. But... he fails. *WHY? WHAT IS GOING ON?*

After days of investigation, you find out that you're running different versions of MySQL and different versions of Node. It turns out, this is because you're running different operating systems! 

After days of debugging, painful googling and comparing versions, you finally manage to get your to-do app up and running on his machine. 
 
What if there was an easier way to do this? What if you could just have one version of each tool, or even the operating system, put it into a little package and send it to anyone who wants to run your app straight away? And it would run correctly every time without the hassle? 

Enter **Docker**! 
 
Docker is a tool that helps you grab everything, from the operating system, to all the frameworks, tools and libraries you might need and put them into little packages called "containers".

These packages are created so you can easily take them wherever you want. Either give it to your friend to try your app, for a colleague to be able to develop using the same environment, or even put it on a server. 

You can feel confident that no matter where you put the container, whichever operating system or environment, the app will work the same way! 

In the case of your app, with Docker, you can create a container, add a specific version of Linux, install the latest version of Python, the latest version of Node and the latest version of MySQL. You can give the container to your friend and he will have all the same versions! 

To get started with your first container is quite simple too! First install Docker [see here](https://docker.com/get-started), open a terminal and type this:

```bash
docker run -it ubuntu 
```

The command will create a new container which has Ubuntu as the operating system.

The first time you run it, it will take a while until it it downloads the stuff necessary to run Ubuntu, or the Ubuntu "image". 
Now you can run commands just like you would in a normal Ubuntu installation! Give it a go! 

You can find lots of ready-made "images" for various tools such as Node, Python, MySQL etc. in the Docker Hub.

[Check it out here](https://hub.docker.com)

Enjoy using Docker and its countless capabilities! 