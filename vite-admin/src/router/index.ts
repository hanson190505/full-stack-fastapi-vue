import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from 'vue'
import { routes } from "@/router/routes";
import { createGuard } from "@/router/guard";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export function setupRouter(app: App<Element>) {
  app.use(router)
  createGuard(router)
}

export default router