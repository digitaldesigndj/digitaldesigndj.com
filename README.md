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

### Install a new client side dependancy

1. define a new item in `bower.json` - `vi bower.json`
2. run `bower install`
3. run `grunt default`
4. start dev server `docpad run`
5. define exports `jquery{ exports: $ },`
6. use lib via `require(['jquery'],function($){});`
7. for now, before build, copy paths to app.build.js

### Production Process

build docpad

	docpad generate --env static

this will create the `stg/` directory

optimize/compile JavaScript

	node r.js -o app.build.js

This will render a flat site to the `/out` dir

The out dir is not tracked here, but in another git repository. You can find it [here](https://github.com/digitaldesigndj/digitaldesigndj.com.out).

Don't forget to change the env - note that generating the static site first is important, or the live reload script will get built into the final product. This is because during development, the stg folder (where docpad's out has been configured to point in this repo) contains the env=development build of the site, and the r.js optimizer should be used on a env=static build of the site

You can look into the `bin/` folder to see some deploy scripts that connect with ssh via private key and move or build the site on a remote server.


### Files

app.build.js - paths for r.js optimization step
bin - helper scripts
bower.json - defines client side deps
docpad.coffee - docpad configuration
Gruntfile.js - grunt config
LICENSE.md
node_modules - location of server side  
out - static site, ready for 
package.json - defines server side deps
Procfile
r.js - r.js optimizer script
README.md
src - EDIT THINGS IN HERE
stg - preview files, dev server files
