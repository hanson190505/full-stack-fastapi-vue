import { RoleEnum } from "@/enums/roleEnum";
import type { RouteRecordRaw } from "vue-router";

export interface IRouteMeta {
	title:string
	ignoreAuth?: boolean
	roles?: RoleEnum[]
	ignoreKeepAlive?: boolean
	affix?: boolean
	icon?: string
	frameSrc?: string
	transitionName?: string
	hideBreadcrumb?: boolean
	carryParam?: boolean
	single?: boolean
	currentActiveMenu?: string
	hideTab?: boolean
	hideMenu?: boolean
}

// export interface IAppRouteRecordRaw extends RouteRecordRaw {
// 	path: string,
// 	name:string,
// 	meta?: IRouteMeta
// 	component?: Component | string
// 	components?: Component
// 	children?: IAppRouteRecordRaw[]
// 	props?: Recordable
// 	fullPath?: string
// }

export interface IMenuTag {
	type?: 'primary' | 'error' | 'warn' | 'success'
	content?: string
	dot?: boolean
}

export interface IMenu{
	name: string
	icon?: string
	disabled?: boolean
	route: RouteRecordRaw[]
	orderNo?: number
	roles?: RoleEnum[]
	meta?: Partial<IRouteMeta>
	tag?: IMenuTag
}