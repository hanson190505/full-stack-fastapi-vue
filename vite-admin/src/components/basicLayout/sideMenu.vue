<template>
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :router="true"
  >
    <el-submenu :index="menu.name" v-for="menu in menus" :key="menu.name">
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
      </template>
      <el-menu-item
        :index="route.name"
        v-for="route in menu.route"
        :key="route.name"
        @click="sendRoute(route)"
        >{{ route.name }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { baseMenu } from '@/router/routes';
import { menuStyle } from '@/style';
import { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'sideMenu',
  emits: ['addTab'],
  setup(props, ctx) {
    const menus = ref(baseMenu);
    const { backgroundColor, textColor, activeTextColor } = menuStyle;
    const sendRoute = (route: RouteRecordRaw) => {
      ctx.emit('addTab', route);
    };
    return {
      menus,
      backgroundColor,
      textColor,
      activeTextColor,
      sendRoute,
    };
  },
});
</script>

<style scoped></style>
