<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3 + Vite"/>
  <el-button type="info" @click="handleClick">hanson</el-button>
  <suspense>
    <products/>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Products from "@/views/products/index.vue";

export default defineComponent({
  name: 'App',
  components: {
    Products,
    HelloWorld
  },
  setup(){
    onErrorCaptured((err,ins,info) => {
      console.log(err)
      console.log('=======')
      console.log(ins)
      console.log('=======')
      console.log(info)
      return false
    })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>