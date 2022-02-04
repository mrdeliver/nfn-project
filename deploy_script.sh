cd dist
git init
git add .
git commit -am "deploy"
git push --force gh-pages master
rm -rf .git
cd ..
