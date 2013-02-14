#!/bin/sh

echo "Uploading! $1"
image=`curl -s -F "image=@$1" -F "key=58584eba731a360f7d0b78c30e5a8d5f" http://imgur.com/api/upload.xml | grep -o http\:\/\/i\.imgur\.com\/.....[.]...`
/bin/echo -n $image | pbcopy
