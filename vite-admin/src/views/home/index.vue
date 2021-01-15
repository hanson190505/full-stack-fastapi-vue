<template>
  <h1>Home</h1>
  <router-link :to="{name: 'product'}">产品</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
  name: "home"
})
</script>

<style scoped>

</style>