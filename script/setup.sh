rm -fr .hbuilderx
ln -s hybird/uniapp/.hbuilderx .hbuilderx
rm -fr manifest.json
ln -s hybird/uniapp/manifest.json manifest.json
rm -fr pages.json
ln -s hybird/uniapp/pages.json pages.json
rm -fr uni.scss
ln -s hybird/uniapp/uni.scss uni.scss
rm -fr main.js
ln -s src/main.js main.js
rm -fr pages
ln -s src/pages pages