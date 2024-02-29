import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(router);

import { useStore } from "./stores/user.js";
app.provide("store", useStore());



import PrimeVue from 'primevue/config';
app.use(PrimeVue);
import 'primevue/resources/themes/aura-light-green/theme.css'


app.mount('#app');