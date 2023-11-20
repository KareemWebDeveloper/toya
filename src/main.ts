import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import YouTube from 'vue3-youtube'
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
                
const app = createApp(App)

app.use(PrimeVue)
app.directive('animateonscroll', AnimateOnScroll);
app.use(createPinia())
app.use(router)
app.component('YouTube' , YouTube)

app.mount('#app')
