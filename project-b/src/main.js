import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import './index.css'

const app = createApp(App)

AOS.init();

app.use(router)

app.mount('#app')
