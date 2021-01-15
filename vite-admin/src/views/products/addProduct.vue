<template>
  <div>
    <el-form :model="formData">

    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { IProduct } from "@/api/products/model/products";

export default defineComponent( {
  name: "addProduct",
  setup(){
    const formData:IProduct = reactive()
    return {
      formData
    }
  }
})
</script>

<style scoped>

</style>