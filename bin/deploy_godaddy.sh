#!/bin/bash
echo __ deploying digitaldesigndj.com to raspi
ssh eb702445@taylordyoung.com <<'ENDSSH'
. ~/.bashrc
cd html/taylor
echo __ pulling from digitaldesigndj.com.out
git pull origin master
echo __ moving the files to the correct dir
cd ../
mv taylor/* .
echo __ all done! ^_^
ENDSSH