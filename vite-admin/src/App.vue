<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from "vue";
import BasicLayout from "@/components/basicLayout/index.vue";

export default defineComponent({
  name: "App",
  components: {
    BasicLayout,
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
  },
});
</script>

<style></style>
