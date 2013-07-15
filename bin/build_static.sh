#!/bin/bash
echo __ generating site with --env static
docpad generate --env static
echo __ r.js optimizing the site
node r.js -o app.build.js
echo __ copying files to ../digitaldesigndj.com.out
grunt copy
echo __ commiting changes to digitaldesigndj.com.out
cd ../digitaldesigndj.com.out
date=$(eval date +%Y%m%d:%H:%M)
git commit -a -m "build - $date"