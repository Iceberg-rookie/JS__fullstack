import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/login'

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
    name: 'Home',
    component: () => import('@/views/home/Home'),
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
