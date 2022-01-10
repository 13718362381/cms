import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入所有element组件
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import axios from 'axios'

// 环境变量可以修改 package.json下scripts.dev值。 默认"vite"; 开发环境 "vite --mode dev".
console.log("环境变量", import.meta.env)
const app = createApp(App);

app.use(router)
    .use(ElementPlus)
    .mount('#app')
