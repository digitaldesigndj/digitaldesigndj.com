## [DigitalDesignDj](http://digitaldesigndj.com)

This site combines DocPad and RequireJs into what I like to call the **Double Build** process. This site, via NodeJS, is using JavaScript client side and server side. Docpad is used server side to create a flat static site, while RequireJs is used to flatten and minify client side.

### Get Started

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

