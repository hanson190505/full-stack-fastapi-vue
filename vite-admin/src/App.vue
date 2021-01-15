<template>
  <suspense>
    <template #default>
      <products/>
    </template>
    <template #fallback>
      {{error}}
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'
import Products from "@/views/products/index.vue";

export default defineComponent({
  name: 'App',
  components: {
    Products,
  },
  setup(){
    const error = ref('')
    onErrorCaptured((err) => {
      error.value = err.message
      return true
    })
    return {
      error
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