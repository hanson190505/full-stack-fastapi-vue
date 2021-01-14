<template>
  <div>{{products}}</div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import { getProducts } from "@/api/products";

export default defineComponent({
  name:'products',
  setup(){
    const products = getProducts().then(data=>{
      console.log(data)
    })
    return {
      products
    }
  }
})
</script>

<style scoped>

</style>