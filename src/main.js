import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

import vuetify from "@/plugins/vuetify";
app.use(vuetify);

app.mount('#app')
