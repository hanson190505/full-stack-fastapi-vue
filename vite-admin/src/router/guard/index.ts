import { Router } from "vue-router";
import { permissionGuard } from "@/router/guard/permissionGuard";

export function createGuard(router:Router){
	permissionGuard(router)
}