rm -fr .hbuilderx
ln -s hybird/uniapp/.hbuilderx .hbuilderx
rm -fr manifest.json
ln hybird/uniapp/manifest.json manifest.json
rm -fr pages.json
ln hybird/uniapp/pages.json pages.json
rm -fr uni.scss
ln hybird/uniapp/uni.scss uni.scss
rm -fr main.js
ln src/main.js main.js
rm -fr pages
ln -s src/pages pages
# 给App.vue创建一个硬链接，让HBuilderX识别为uniapp项目
rm -fr App.vue
ln src/App.vue App.vue