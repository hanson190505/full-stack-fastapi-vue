<template>
  <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router=true
  >
    <el-submenu :index="menu.name" v-for="menu in menus">
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{menu.name}}</span>
      </template>
      <el-menu-item :index="route.name" v-for="route in menu.route">{{route.meta.title}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { BaseMenu } from "@/router/routes";

export default defineComponent({
  name: "sideMenu",
  setup(){
    const menus = ref(BaseMenu)

    return {
      menus}
  }
})
</script>

<style scoped>

</style>