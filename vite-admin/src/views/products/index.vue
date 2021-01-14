<template>
  <div>{{products}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { handleProductsApi } from "@/hooks/product";
import { getProductsAPI } from "@/api/products";

export default defineComponent({
  name: 'products',
  // setup本身是一个函数,因此可以用async-await的方法取一个Promise的返回值
  // 比如封装的axios请求结果
  async setup() {
    const {getProducts} = handleProductsApi()
    // const pp = getProductsAPI()
    const products = await getProducts()
    return {
      products
    }
  }
})

</script>

<style scoped>

</style>