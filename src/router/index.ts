import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@views/LoginView.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@views/ErrorView.vue')
    },
    {
      path: '/',
      name: 'container',
      component: () => import('@views/ContainerView.vue')
    }
  ]
})

export default router
