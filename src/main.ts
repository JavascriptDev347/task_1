import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import 'mosha-vue-toastify/dist/style.css'
const pinia = createPinia();

const app = createApp(App);
app
    .use(router)
    .use(pinia)
    .mount('#app')
