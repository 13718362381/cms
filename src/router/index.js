import { createRouter, createWebHashHistory } from "vue-router"
import Home form './../components/Home.vue'
import Welcome form './../components/Welcome.vue'
import Login form './../components/Login.vue'

const router = [
    {
        name: 'home',
        path: '/',
        meta : {
            title : '首页'
        },
        component: Home,
        children : [
            {
                name:'welcome',
                path:'/welcome',
                meta : {
                    title : '欢迎页'
                },
                component:Welcome
            },
            {
                name:'login',
                path:'/login',
                meta : {
                    title : '登录'
                },
                component:Login
            }
        ]
    }
]