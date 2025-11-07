import { createRouter, createWebHistory } from 'vue-router'
import Race from '../views/RaceView.vue'
import HippodromeView from '@/views/HippodromeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Race',
      component: Race,
    },
    {
      path: '/hippodrome',
      name: 'Hippodrome',
      component: HippodromeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
