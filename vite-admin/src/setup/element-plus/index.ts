import type { App } from 'vue'
import { ElButton, ElTable, ElTableColumn, ElForm, ElFormItem } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export function setupElement(app: App<Element>) {
	app.use(ElButton).use(ElTable).use(ElForm).use(ElFormItem)
	app.component(ElTableColumn.name, ElTableColumn)
}
