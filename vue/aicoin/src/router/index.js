import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import (
                /* webpackChunkName: "dashboard" */
                "../views/Dashboard.vue")
            }, {
                path: "/settings",
                name: "settings",
                meta: {
                    title: '个人设置'
                },
                component: () => import (
                /* webpackChunkName: "setting" */
                "../views/Setting.vue")
            }, {
                path: "/orders",
                name: "orders",
                meta: {
                    title: '我的订单'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/Orders.vue")
            }, {
                path: "/Bitcoin",
                name: "Bitcoin",
                meta: {
                    title: '比特币'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/BTC.vue")
            }, {
                path: "/Litecoin",
                name: "Litecoin",
                meta: {
                    title: '莱特币'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/LTC.vue")
            }, {
                path: "/Dogecoin",
                name: "Dogecoin",
                meta: {
                    title: '狗狗币'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/DOGE.vue")
            }, {
                path: "/trading-strategy",
                name: "trading-strategy",
                meta: {
                    title: '交易策略'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/TrandingStrategy.vue")
            }, {
                path: "/trading-record",
                name: "trading-record",
                meta: {
                    title: '交易记录'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/TradingRecord.vue")
            }, {
                path: "/robots",
                name: "robots",
                meta: {
                    title: '机器人列表'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/RobotList.vue")
            }, {
                path: "/Bitcoin-price",
                name: "Bitcoin-price",
                meta: {
                    title: '比特币价格'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/BTCPrice.vue")
            }, {
                path: "/Litecoin-price",
                name: "Litecoin-price",
                meta: {
                    title: '莱特币价格'
                },
                component: () => import (
                /* webpackChunkName: "form" */
                "../views/LTCPrice.vue")
            }, {
                path: "/Dogecoin-price",
                name: "Dogecoin-price",
                meta: {
                    title: '狗狗币价格'
                },
                component: () => import (
                /* webpackChunkName: "form" */
                "../views/DOGEPrice.vue")
            },
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import (
        /* webpackChunkName: "login" */
        "../views/Login.vue")
     }, {
        path: "/register",
        name: "Register",
        meta: {
            title: '注册'
        },
        component: () => import (
        /* webpackChunkName: "register" */
        "../views/Register.vue")
     },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | AICoin量化交易分析系统`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});

export default router;