<template>
  <h1>login</h1>
  <el-button @click="onchange">前进</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";


export default defineComponent({
  name: "login",
  setup(){
    function onchange(){
      router.replace('/')
    }
    return {
      onchange
    }
  }
})
</script>

<style scoped>

</style>