---
title: Piggybacking Off of GitHub's Camo Image Cache for Fun and Profit
topic: JavaScript
created: 2024-07-15T04:27:39.872Z
updated: 2024-07-15T04:27:39.872Z
description: >
    I don't wanna pay for a CDN just to serve the badge images on my about page on this website. But if my about page is statically generated from my GitHub profile readme, then why not just piggyback off of their Camo CDN cache?
---

When I was first remaking my personal site (the one you're on right now), I decided I wanted to solve one of the major annoyances I've had with my [about page](https://amydev.me/about).



For some context, the about page is statically generated from my [GitHub profile readme](https://github.com/amydevs) for the sake of my laziness. I use little GitHub profile badges that kind of look like this:

![readme profile](./2024-07-15-piggyback-gh-camo/about.png)



