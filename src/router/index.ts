import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Home, About } from '../views'


const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export const router = createRouter({

  history: createWebHistory(),
  routes
})
