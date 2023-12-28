import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@views/LoginView.vue'
import MainPage from '@views/layout/MainLayout.vue'
import ErrorPage from '@views/ErrorView.vue'

import HomeView from '@views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    },
    {
      path: '/',
      name: 'main',
      component: MainPage,
      children: [
        // {
        //   path: '',
        //   name: '',
        //   component: () => import('')
        // },
      ]
    }
  ]
})

export default router
