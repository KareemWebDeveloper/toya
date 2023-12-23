import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/elmasna3',
      name: 'el_masna3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MasnaaView.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/providers/:id',
      name: 'providers',
      component: () => import('../views/ProvidersView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
