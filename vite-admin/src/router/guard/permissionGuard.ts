import { Router } from "vue-router";

export function permissionGuard(router:Router) {
	router.beforeEach(async (to, from) => {
		console.log(to)
		console.log(from)
		return true
	})
}