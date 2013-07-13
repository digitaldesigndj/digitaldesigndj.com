#!/bin/bash
echo __ generating site with --env static
docpad generate --env static
echo __ r.js optimizing the site
node r.js -o app.build.js
echo __ copying files
# rm -rf ~/digitaldesigndj.com.out
# mkdir ~/digitaldesigndj.com.out
# mv ~/digitaldesigndj.com/out ~/digitaldesigndj.com.out/godaddy
# cd ~/digitaldesigndj.com.out/godaddy

