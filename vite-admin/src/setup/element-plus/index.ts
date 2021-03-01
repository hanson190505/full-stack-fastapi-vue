import type { App } from 'vue';
import {
  ElButton,
  ElTable,
  ElTableColumn,
  ElForm,
  ElFormItem,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElInput,
  ElTabs,
  ElTabPane,
} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

export function setupElement(app: App<Element>) {
  app
    .use(ElButton)
    .use(ElTable)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElContainer)
    .use(ElHeader)
    .use(ElAside)
    .use(ElMain)
    .use(ElMenu)
    .use(ElSubmenu)
    .use(ElMenuItem)
    .use(ElMenuItemGroup)
    .use(ElInput)
    .use(ElTabs)
    .use(ElTabPane);
  app.component(ElTableColumn.name, ElTableColumn);
}
