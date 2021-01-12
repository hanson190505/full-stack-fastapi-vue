<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <el-button type="info" @click="handleClick">hanson</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
const SET_TO:string = 'SET_TO'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    [SET_TO](){
      console.log(123)
    },
    handleClick(){

    }
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