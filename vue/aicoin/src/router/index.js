import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/login'
import Register from '@/views/register/register'
import Home from '@/views/home/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home'),
    meta: {
      title: 'AICoin量化交易分析平台'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
