import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

/* App use Vuex Store */
import store from "./store";
app.use(store);

/* App use Vuetify */
import vuetify from "@/plugins/vuetify";
app.use(vuetify);

/* App use Router */
import router from "@/plugins/router"
app.use(router);

/* Mount App */
app.mount('#app')
