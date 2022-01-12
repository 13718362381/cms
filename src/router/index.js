import { createRouter, createWebHashHistory } from "vue-router"
import Home from './../components/Home.vue'

const routes = [
    {
        component: Home,
        name: 'home',
        path: '/',
        meta: {
            title: '首页'
        },
        redirect: '/welcome',
        children: [
            {
                component: () => import('./../views/Welcome.vue'),
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎页'
                },
            }
        ]
    },
    {
        component: () => import('./../views/Login.vue'),
        name: 'login',
        path: '/login',
        meta: {
            title: '登录'
        },
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router