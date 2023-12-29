import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@views/Login.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@views/Error.vue')
    },
    {
      path: '/',
      name: 'container',
      component: () => import('@views/Container.vue')
    }
  ]
})

export default router
