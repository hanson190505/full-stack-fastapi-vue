import type { RouteRecordRaw } from "vue-router";

const customRoutes:RouteRecordRaw[] = [
	{
		path: "/product",
		name: 'product',
		component: () => import('@/views/products/index.vue'),
		meta: {
			title: 'Product',
			roles: ''
		}
	}
]

const loginRoute: RouteRecordRaw = {
	name: 'login',
	path: '/login',
	component: () => import('@/views/login/index.vue')
}

const rootRoute: RouteRecordRaw = {
	path: "/",
	name: '/',
	component: () => import('@/views/home/index.vue'),
	meta: {
		title: 'Home',
		icon: 'el-icon-s-home'
	}
}

export const routes = [loginRoute, rootRoute]