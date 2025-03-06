import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {  QueryClient ,VueQueryPlugin } from "@tanstack/vue-query";
const queryClient = new  QueryClient ();


const app = createApp(App)
app.use(VueQueryPlugin, { queryClient });
app.mount("#app");
