## [DigitalDesignDj](http://digitaldesigndj.com)

This is an example of RequireJS and live-reload playing nicely together, while excluding live-reload from the final build. 

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

note that generating the static site first is important, or the live reload script will get built into the final product. This is because during development, the stg folder (where docpad's out has been configured to point in this repo) contains the env=development build of the site, and the r.js optimizer should be used on a env=static build of the site
