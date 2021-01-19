import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from 'vue'
import { baseRoute } from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoute()
});

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router