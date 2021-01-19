import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from 'vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/product",
      name: 'product',
      component: () => import('@/views/products/index.vue')
    },
    {
      path: "/",
      name: 'home',
      component: () => import('@/views/home/index.vue')
    }
  ]
});

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router