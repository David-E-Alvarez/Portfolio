---
path: "/AlphaRank-customer-journey-mapping-and-attribution"
date: "2021-03-26"
title: "How To Make A Tracking Pixel"
tags: ['customer journey mapping', 'attribution']
excerpt: "AlphaRank Lambda Fellows Project"
---

## AlphaRank Project

Hi Everyone! It's me again. Been a while. I graduated Lambda 3/5/21. I got accepted into the Lambda Fellows program and will be at <a href="https://www.alpharank.io/" target="_blank">AlphaRank</a> for a month long project. I will be working on building a tracking pixel to be deployed to their website. I had no idea what a tracking pixel was so I started doing some research on what a tracking pixel exactly was but also about AlphaRank's work in general. I don't know the AlphaRank codebase or the technologies they use but I'm going to add a tracking pixel to this site and walk you through how I did it and explain tracking pixels along the way.

#### Tracking Pixels

Here is a great resource on what a <a href="https://en.ryte.com/wiki/Tracking_Pixel" target="_blank">tracking pixel</a> is

Initially I had no idea what a tracking pixel was. The first resource I came across about tracking pixels was a <a href="http://engineering.curalate.com/2016/10/19/building-a-tracking-pixel.html" target="_blank">blog</a> dated 10/19/2016. Here's another great resource if you're more visual: <a href="https://www.youtube.com/watch?v=r5NgNWk3ONI" target="_blank">YouTube Video</a>

Basically a tracking pixel is a way for a site to better understand its users. I'll avoid the ethics of tracking pixels but know there is a lot of discussion/philosophies about data collection in relation to users' data privacy rights: <a href="https://www.emotiv.com/glossary/data-privacy/" target="_blank">Data privacy resource</a>.

#### Building a Tracking Pixel

Ok. That's enough information about tracking pixels. Let's move onto building one. As mentioned I will be adding one to this site. In the blog post I provide a link for the tracking pixel is literally an HTML <img> element. The author of the blog post says their pixel is a "checkout pixel" that is on a checkout confirmation page that collects transaction data. The pixel sends data from the webpage it lives on. The pixel is housed in a Javascript file. Besides the pixel itself you need a server to receive what you want to track and a way to stream and store the data. AWS Kinesis Firehow is how they store and stream the data but I haven't decided if I want to use that and what my options are for building a pixel because you want to choose a product depending on what you want to do.  



