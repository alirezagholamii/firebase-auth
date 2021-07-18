import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/signup.vue'

const routes = [
  {
    path: '/',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },{
    path: '/:catchAll(.*)*',
    redirect: {name: 'signup'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
