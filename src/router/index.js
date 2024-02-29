import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/information',
    name: 'info',
    component: () => import('../views/Informatie.vue')
  },
  {
    path: '/program',
    name: 'program',
    component: () => import('../views/Programma.vue')
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: () => import('../views/Kaarten.vue')
  },
  {
    path: '/horeca',
    name: 'horeca',
    component: () => import('../views/horeca.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
