import { createRouter, createWebHistory } from 'vue-router'
import Race from '../views/RaceView.vue'
import HippodromeView from '@/views/HippodromeView.vue'
import { store } from '@/store/store'

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

// Cleanup race intervals when navigating away from hippodrome page
router.beforeEach((to, from, next) => {
  // If navigating away from hippodrome page, cleanup any running intervals
  if (from.name === 'Hippodrome' && to.name !== 'Hippodrome') {
    if (store.state.raceInterval) {
      store.commit('clearRaceInterval')
      store.commit('setPaused', true)
    }
  }
  next()
})

export default router
