import { createApp } from 'vue'
import App from './App.vue'
import { setupElement } from "./setup/element-plus";
import { setupRouter } from "@/router";

const app = createApp(App)

setupElement(app)
setupRouter(app)

app.mount('#app')
