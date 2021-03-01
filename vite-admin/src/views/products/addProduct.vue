<template>
  <div>
<!--    <el-form :model="formData">-->

<!--    </el-form>-->
    <h1>add form data</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { IProduct } from "@/api/products/model/products";

export default defineComponent( {
  name: "addProduct",
  setup(){
    // const formData:IProduct = reactive({
    //   id: 0,
    //   name: '',
    //   detail: {},
    //   category_id: 0,
    // })
    // return {
    //   formData
    // }
  }
})
</script>

<style scoped>

</style>