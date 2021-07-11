import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './includes/firebase'
import './index.css'

createApp(App).use(router).mount('#app')
