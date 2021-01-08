import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setupElement } from '@/setup/element';

const app = createApp(App);

setupElement(app);

app.use(router).mount('#app');
