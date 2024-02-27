//Src/main.js

import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());

import { useStore } from "./stores/user.js";

app.provide("store", useStore());

app.use(router);

app.mount("#app");
