import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from 'vue'
import { routes } from "@/router/routes";
import { createGuard } from "@/router/guard";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name:'login',
      path:'/login',
      component:() => import('@/views/login/index.vue')
    },
    {
      path: "/",
      name: '/',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'Home'
      },
      children: [
        {
          path: "/product",
          name: 'product',
          component: () => import('@/views/products/index.vue'),
          meta: {
            title: 'Product'
          }
        }
      ]
    }
  ]
});

export function setupRouter(app: App<Element>) {
  app.use(router)
  createGuard(router)
}

export default router