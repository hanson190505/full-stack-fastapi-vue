import { createApp } from 'vue'
import App from './App.vue'
import { setupElement } from "./setup/element-plus";
import router, { setupRouter } from "@/router";

const app = createApp(App)

setupElement(app)
setupRouter(app)

router.isReady().then(()=>{
	app.mount('#app')
})


