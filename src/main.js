import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './socket/index.js'
// import generatedRoutes from 'virtual:generated-pages'
// import { setupLayouts } from 'virtual:generated-layouts'
// import { createRouter, createWebHashHistory } from 'vue-router'
const app = createApp(App)
// const routes = setupLayouts(generatedRoutes)
// app.use(
//   createRouter({
//     history: createWebHashHistory(),
//     routes // `routes: routes` 的缩写
//   })
// )
app.mount('#app')
