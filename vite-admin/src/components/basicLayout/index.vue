<template>
  <el-container>
    <el-aside width="200px">
      <side-menu>
      </side-menu>
    </el-aside>
    <el-container>
      <el-header :style="headerStyle">
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
import { menuStyle } from "@/style";

export default defineComponent({
  name: "basicLayout",
  components: {MenuHeader, SideMenu},
  setup(){
    const {backgroundColor, color} = menuStyle
    const headerStyle = {
      backgroundColor: backgroundColor,
      color: color
    }
    return {
      headerStyle
    }
  }
})
</script>

<style scoped>

</style>