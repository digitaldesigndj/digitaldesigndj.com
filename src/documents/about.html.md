---
title: About
layout: default
isPage: true
order: 2
---
This site is hosted on a Raspberry Pi

![RaspberryPi](/images/raspi.jpg)

That's it, the server, where it's actually sitting right now, on my dresser. If you made it this far, it's still plugged in :P

## The Goals of this site

### Fast

Using Nginx as a webserver, pre-rendering files with docpad, and optimizing client side JavaScript with r.js makes this site fast. The max uplink speed of my consumer connection is only 2Mbps.

### Low Power

The site needs to run on my RaspberryPi, so the tech used should be a light as possible.

### Fun

Since the site is nice and quick, I have taken the luxury of adding 400ms of delay when you change pages (200ms each for in and out transitions). This gives me a chance to do some quick animation (fades) and really set the site experience apart.

### JavaScript

The site is built frontend and back in JavaScript.

### Building and Deploying

Building and Depoying websites is something I find enjoyable. I think it similar to the allure of a new 'Hello World' program. The build process is awesome, because I get to use the terminal with its 

[NodeJS](http://nodejs.org/) and [NPM](http://npmjs.org) are used to manage scripts on the backend

I use [AMD](http://en.wikipedia.org/wiki/Asynchronous_module_definition) via [RequireJS](http://requirejs.org) on the client side to mangage dependencies and optimize the final output.

### Awesome Developer Enviornment

**Docpad** allows me to use live-reload and live-preprocessing at the same time. It works over a websocket, so I can have it running on a tablet, phone and computer ( multiple browsers too ) all at the same time
<!-- If the site is a little slow, its because my consumer Internet connection will only let me squeeze out about 2 Mbps up. The server is also very simple, running an ARM chipset like you would find in a smartphone, but I beleive it's more than powerful enough to saturate the network connection before the hardware starts to hold things up. -->

## Double Build Optimization

This site, via NodeJS, is using JavaScript client side and server side. Docpad is used server side to create a flat static site, while RequireJs is used to flatten and minify client side.

<!-- The site is built using Docpad and RequireJs, each has a build optimization step that I am using. First Docpad renders the `src/` directory into `stg/`. This step does all the pre-processing; Sass->CSS CoffeeScript->JavaScript etc... and compiles the templates into flat .html site. 

From `stg/` (the flat HTML site), r.js (the RequireJs optimizer) compiles `out/`. The `out/` or production version of the site is completely flat (all files served are static and present on the server) just like `stg/` but also combines all of the JavaScript used across the site into a single file.
 -->

## Technology

#### Devlopment

- MacBook 13-inch, Early 2008 (+SSD)
- OSX 10.7
- Sublime Text
- Terminal
- Chrome, Safari, FireFox
- iOS 5
- iPad
- iPhone

#### Version Control

- Git
- Source Tree
- GitHub
- Bitbucket

#### Server

- Raspberry Pi
- Raspbian (Debian Squeeze)
- NodeJS
- NPM
- Nginx

#### Frameworks

- Express
- Docpad
- jQuery
- Underscore

#### Pre-Processers

- Stylus
- Coffee Script
- Markdown

#### Templates

- Eco
- Handlebars

#### Frontend

- RequireJs (client-side async script loader)
- TypeKit (Museo Sans)
- Photoshop (backgrounds)

#### Languages

- JavaScript
- HTML5
- CSS3

#### APIs

- Last FM (Scrobbling from Spotify)
- Github
- GitHubBadge
- Gravatar
- TypeKit (Via WebFontLoader)
- 

I prefer Open Source Software
