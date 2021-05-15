import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/login'),
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
    },
    children: [
      // 个人信息
      {
        path: '/home/personalMessage',
        name: 'personalMessage',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 修改信息
      {
        path: '/home/editMessage',
        name: 'editMessage',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 我的订单
      {
        path: '/home/myOrders',
        name: 'myOrders',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 比特币价格预测
      {
        path: '/home/Bitcoin',
        name: 'Bitcoin',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 莱特币价格预测
      {
        path: '/home/Litecoin',
        name: 'Litecoin',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 狗狗币价格预测
      {
        path: '/home/Dogecoin',
        name: 'Dogecoin',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 交易策略
      {
        path: '/home/trading-strategy',
        name: 'trading strategy',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 交易记录
      {
        path: '/home/trading-record',
        name: 'trading-record',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 机器人列表
      {
        path: '/home/robots',
        name: 'robots',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 比特币价格
      {
        path: '/home/Bitcoin-price',
        name: 'Bitcoin-price',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 莱特币价格
      {
        path: '/home/Litecoin-price',
        name: 'Litecoin-price',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
      // 狗狗币价格
      {
        path: '/home/Dogecoin-price',
        name: 'Dogecoin-price',
        component: () => import('@/components/BTC-price'),
        meta: {
          title: 'AICoin量化交易分析平台'
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
