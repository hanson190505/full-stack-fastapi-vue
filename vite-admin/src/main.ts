import { createApp } from 'vue'
import App from './App.vue'
import { setupElement } from "./setup/element-plus";

const app = createApp(App)

setupElement(app)

app.mount('#app')
