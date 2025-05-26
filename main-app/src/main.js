import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'


const app = createApp(App)
app.use(router)
app.mount('#app')


registerMicroApps([
    {
        name: 'sub-app-vue3',
        entry: '//localhost:5174',
        container: '#subapp-viewport',
        activeRule: '/sub',
    },
])

start()