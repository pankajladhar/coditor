  
#!/usr/bin/env bash

if [ -d "./static" ]
then
    rm -rf static
fi

if [ -d "./fonts" ]
then
    rm -rf fonts
fi

if [ -d "./404.html" ]
then
    rm -rf 404.html
    cp index.html 404.html
fi

rm -rf precache-manifest.*

mv ./build/* ./

today=`date '+%Y_%m_%d__%H_%M_%S'`;
git add .
git commit -am "Deployed at $today"
git push origin gh-pages
git checkout master