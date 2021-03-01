import { Router } from 'vue-router';
import { getRoutes } from '@/router/routes';
import { dynamicImport, dynamicViewsModules } from '../helper/roureHelper';

export function permissionGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    // console.log("to:", to);
    // console.log("from----->", from);
    // 判断路由权限
    const routes = getRoutes('general');
    if (to.name === undefined) {
      await router.replace('/');
    }
    routes.forEach((route) => {
      router.addRoute('Root', route);
    });
    return true;
  });
}
