import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './includes/firebase'
import './index.css'
import store from './store'
let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(store);
        app.use(router);
        app.mount('#app')
    }
 
});

