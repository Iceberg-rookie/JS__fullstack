import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/login'
import Register from '@/views/register/register'
import Home from '@/views/home/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
