#!/bin/sh

echo "Uploading! $1"
image=`curl -s -F "image=@/Users/steve/Desktop/test.jpg" -F "key=58584eba731a360f7d0b78c30e5a8d5f" http://imgur.com/api/upload.xml | tr -d '\n' | sed -e 's/.*<original\_image>\(.*\)<\/original\_image>.*/\1/'`
/bin/echo -n $image | pbcopy
