<template>
  <basic-layout>
    <template #mainContext>
      <suspense>
        <template #default>
          <router-view/>
        </template>
        <template #fallback>
          <h1>loading...</h1>
        </template>
      </suspense>
    </template>
  </basic-layout>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'
import Products from "@/views/products/index.vue";
import Home from "@/views/home/index.vue";
import BasicLayout from "@/components/basicLayout/index.vue";

export default defineComponent({
  name: 'App',
  components: {
    BasicLayout,
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

</style>