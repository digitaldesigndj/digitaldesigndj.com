## [DigitalDesignDj](http://digitaldesigndj.com)

### Goals

1. A light as possible (Runs well on RaspberryPi)
1. Use DocPad (Awesome developer tools)
1. Use RequireJS & r.js optimizer (Client side build process)
1. Live updating of content via Sockets.io

The first 3 are complete.

### How to run it locally

Install NodeJs (This will install NPM too)

* [http://nodejs.org/install](http://nodejs.org/install)

Install Docpad Globally

	npm install docpad -g

Clone the repo

	git clone https://github.com/digitaldesigndj/digitaldesigndj.com

install dependancies

	npm install

During development, we don't use the optimized JS. To fire up the dev server just do:

	docpad run
	
I successful you should have the dev site running at http://localhost:9887, the files being served are in `stg/`, the `src/` dir holds the source files before they are parsed by docpad. Do your editing in there.

### Production Process

build docpad

	docpad generate --env static

optimize/compile JavaScript

	node r.js -o app.build.js

This will render a flat site to the `/out` dir

note that generating the static site first is important, or else the live reload scripts will get built into the final product.

### Why DocPad?

1. NodeJS
2. Live Pre-Processing
3. Live Reload

### Changelog

Github Widget
LastFm Widget
Navigation
Site Layout