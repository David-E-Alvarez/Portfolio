---
path: "/how-i-added-blog"
date: "2020-09-16"
title: "How I(emphasis on my process) added blog to my site"
tags: ['blog']
excerpt: "Going to blog about adding a blog to my portfolio site"
---

Hi! This is my first blog post on how I added a blog to my portfolio site. 
I am currently a Lambda School student in their "Full Stack Web" course.
This site is using Gatsby and we used React to learn "front end" stuff so 
it seemed like a natural choice. I didn't have a blog in mind when I got my site
up and running so I didn't use a ["blog starter"](https://www.gatsbyjs.com/starters/?v=2). I did however use Gatsby's default starter. I could not have added a blog to my site without [egghead.io's](https://egghead.io/) "Build a Blog with React and Markdown using Gatsby" by Taylor Bell. I had to rewatch stuff because there was Gatsby specific things I didn't know like GraphQL and overall putting stuff together. Here are some steps:


If you're starting from the ground up I used [Gatsby's default starter](https://www.gatsbyjs.com/tutorial/part-zero/)

Note: If you're completely new to programmaing/deving then this is not for you (sorry. unless ur a genius. im not.)

Although I learned a lot from [Dustin Schau's blog tutorial](https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/#gatsby-skip-here), as previously mentioned I really 
relied on the [Egghead](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby) one. [Dave Ceddia](https://daveceddia.com/start-blog-gatsby-netlify/) has one too where he uses a "blog starter". GTS(google that stuff).

I'll provide some of my Gatsby directory screen shots to see my setup because people do things differently. I'll highlight and touch on main files and there is two or few Gatsby pluggins that make the magic happen. 

1.) You ran `gatsby develop` and your local site is up on `http://localhost:8000`. If you're new to Gatsby definitely play around with `http://localhost:8000/___graphiql` by making you're own Gatsby queries.

2.) Install pluggins: 

The `gatsby-source-filesystem` plugin is how your site can use the markdown files you write your blog on. pretty much. I think. don't quote me. 


Note: I installed my pluggins via npm so make sure you have that and then you do something like `npm i gatsby-source-filesystem`. 

`package.json` will show you if pluggins installed correctly. 

`gatsby-transformer-remark` is the other main one. Google them and check out my `gatsby-config.js` on my repo but look at other devs' repo's to see how they set stuff up to get an idea of what you need and how stuff works. I know I'm a tinkerer and need to play around by running bits and pieces of code here and there. I can't just read a tutorial or docs. I DID learn though that videos definitely work for me but I have to be coding along and pause to experiment on my own. 

3.) Gatsby directory file structure

![gatsby file directory](https://user-images.githubusercontent.com/10346209/94084935-9cd2e500-fdbb-11ea-93a8-8b356f6c1336.PNG)

Let's focus on the `blog` folder which contains our markdown file, `blog.js` in the `pages` folder, `blog-post.js` in the `templates` folder, and `gatsby-node.js`.

4.) GraphQL queries

`blog.js` contains a query that get's info in from `index.md` file's to show me what posts there is. `blog.js` is also a "component" which is React speak(GTS.google that stuff) 

`blog-post.js` is also a component (this page is that component) and this one has a query that gets all the information you're looking at on this page.

5.) `gatsby-node.js`

This file is what makes the magic happen. Honestly this is still something I have to research to really understand but basically `gatsby-node.js` contains information about `blog-post.js` and renders the information from the md files onto the `blog-post.js` component. Google. [Link](https://www.gatsbyjs.com/tutorial/part-seven/).

SUMMARY: If you're new and I confused you more ignore everything I said. If you already have a Gatsby site just watch the Egghead video. If you're starting from scratch maybe you can use a blog starter, if not and you're new to Gatsby like me play around with the Gatsby queries and try to understand the Gatsby ecosystem. If you already know React things shouldn't feel too bad. Basically for me the biggest challenge was understanding the queries and how to make stuff render from `gatsby-node.js`. Good luck and eventually I want to add an email so you can spam me but really to suggest things or offer feedback. Thank you and take care. 

