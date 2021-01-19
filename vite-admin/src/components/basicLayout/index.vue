<template>
  <el-container>
    <el-aside width="200px">
      <side-menu>
      </side-menu>
    </el-aside>
    <el-container>
      <el-header>
        <menu-header>
        </menu-header>
      </el-header>
      <el-main>
        <slot name="mainContext"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideMenu from "@/components/basicLayout/sideMenu.vue";
import MenuHeader from "@/components/basicLayout/menuHeader.vue";

export default defineComponent({
  name: "basicLayout",
  components: {MenuHeader, SideMenu}
})
</script>

<style scoped>

</style>