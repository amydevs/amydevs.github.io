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

```ts
export async function getStaticProps() {
    
}
```

But these images take forever to load! What do I do?!?!

![about page loads so slowly!](./2024-07-15-piggyback-gh-camo/slow_load.gif)

Ah right, silly me. I'm using Next.js, which means I should be able to take advantage of the `next/image` package for image optimization/caching right?

Well when I first started working on this site, I had the brilliant idea of wanting it to be hosted on GitHub pages so that all my individual repository-specific pages will be routed by GitHub automagically. So unfortunately, I can't take advantage of Vercel's image caching with `next/image`.

## Cloudflare?

Well the fantastic thing about the `next/image` package, is that it supports a variety of custom "loaders" that allow for different CDNs do be used for image caching.

Well I've been wanting to switch over to using Cloudflare nameservers for a long while. So I might as well make the switch and get a CDN along with it, right?

So I logged into my dashboard, went over to NameCheap, and pointed my nameservers to CloudFlare, and...


## Piggybacking Off GitHub's Own CDN