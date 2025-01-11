import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

/* App use Vuetify */
import vuetify from "@/plugins/vuetify";
app.use(vuetify);

/* Mount App */
app.mount('#app')
