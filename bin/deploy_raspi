#!/bin/bash
echo __ deploying digitaldesigndj.com to raspi
ssh pi@djmux.com <<'ENDSSH'
cd digitaldesigndj.com/
echo __ npm update
npm install
echo __ getting latest commits
git pull origin master
echo __ re-generating site
docpad generate --env static
echo __ r.js optimizing site
node r.js -o app.build.js
echo __ all done! ^_^
ENDSSH