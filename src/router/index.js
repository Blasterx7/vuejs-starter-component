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
      path: '/home', 
      redirect: '/' 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    { 
      path: '/georges/:name/hu/:var',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'nex',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
