import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 给根组件添加路由器-其中可以提供很多路由信息
createApp(App).use(router).mount('#app')
