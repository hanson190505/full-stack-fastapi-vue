import type { RouteRecordRaw } from "vue-router";
import { RoleEnum } from "@/enums/roleEnum";
import type { Component } from '@/components/types'

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

export interface IAppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'>{
	name:string
	meta: IRouteMeta
	component?: Component | string
	components?: Component
	children?: IAppRouteRecordRaw[]
	props?: Recordable
	fullPath?: string
}

export interface IMenuTag {
	type?: 'primary' | 'error' | 'warn' | 'success'
	content?: string
	dot?: boolean
}

export interface IMenu{
	name: string
	icon?: string
	path: string
	disabled?: boolean
	children?: IMenu[]
	orderNo?: number
	roles?: RoleEnum[]
	meta?: Partial<IRouteMeta>
	tag?: IMenuTag
}