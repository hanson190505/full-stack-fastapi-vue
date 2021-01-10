import type { App } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export function setupElement(app: App<Element>) {
	app.use(ElButton)
}
