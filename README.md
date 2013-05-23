## [DigitalDesignDj](http://digitaldesigndj.com)

This site combines DocPad and RequireJs into what I like to call the **Double Build** process. This site, via NodeJS, is using JavaScript client side and server side. Docpad is used server side to create a flat static site, while RequireJs is used to flatten and minify client side.

### Get Started

Install NodeJs (This will install NPM too)

* [http://nodejs.org/install](http://nodejs.org/install)
  
Install Docpad Globally

    npm install docpad -g

Clone the repo

    git clone

install dependancies

    npm install
  
During development, I dont just the optimized JS. To fire up the dev server just do:

    docpad run
  
### Production Process

build docpad

    docpad generate --env static
  
optimized js

    node r.js -o app.build.js
  
This will render a flat site to the `/out` dir

