<template>
  <suspense>
    <template #default>
      <router-view/>
    </template>
    <template #fallback>
      <h1>loading...</h1>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'
import Products from "@/views/products/index.vue";
import Home from "@/views/home/index.vue";

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Products,
  },
  setup() {
    // const error = ref('')
    // onErrorCaptured((err) => {
    //   error.value = err.message
    //   console.log(error)
    //   return true
    // })
    // return {
    //   error
    // }
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