import { createApp } from 'vue'
import App from './App.vue'
// 引入所有element组件
import ElementPlus from 'element-plus'

// 环境变量可以修改 package.json下scripts.dev值。 默认"vite"; 开发环境 "vite --mode dev".
console.log("环境变量", import.meta.env)
createApp(App).mount('#app')
