import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/app' },
  {
    path: '/app',
    component: () => import('@/pages/test.vue')
  },
  {
    path: '/chat',
    component: () => import('@/pages/test.vue')
  },
  {
    path: '/contact',
    component: () => import('@/pages/test.vue')
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
