import _ from "lodash-es";
import type { RouteRecordRaw } from "vue-router";
import { IMenu } from "@/router/types";


export const BaseMenu: IMenu[] = [
  {
    name: 'Home',
    icon: 'el-icon-s-home',
    route: [
      {
        path: "/",
        name: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'Home',
        }
      }
    ]
  },
  {
    name: 'Product',
    icon: 'el-icon-s-goods',
    route: [
      {
        path: "/product",
        name: 'product',
        component: () => import('@/views/products/index.vue'),
        meta: {
          title: 'Product'
        }
      }
    ]
  },
]

export function baseRoute(): RouteRecordRaw[] {
  let tempList: RouteRecordRaw[] = []
  BaseMenu.forEach(el=>{
    tempList = _.concat(tempList, el.route) as RouteRecordRaw[]
  })
  return tempList
}

const loginRoute:RouteRecordRaw = {
  name: 'login',
  path: '/login',
  component: () => import('@/views/login/index.vue')
}

export const routes = [...baseRoute(), loginRoute]
