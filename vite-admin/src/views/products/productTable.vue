<template>
  <div>
    <el-table :data="products" style="width: 100%;">
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="category_id" label="category_id">
      </el-table-column>
      <el-table-column prop="create_time" label="create_time">
      </el-table-column>
      <el-table-column prop="update_time" label="update_time">
      </el-table-column>
      <el-table-column label="uid">
        <template #default="scope">
          {{scope.row.detail.uid}}
        </template>
      </el-table-column>
      <el-table-column label="color">
        <template #default="scope">
          {{scope.row.detail.color}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { getProductsAPI } from "@/api/products";

export default defineComponent({
  name: "productTable",
  async setup(){
    // const data = ref(null)
    // data.value = await getProductsAPI()
    // return {
    //   products: computed(()=>{
    //     return data.value
    //   })
    // }
    const products = await getProductsAPI()
    return {
      products
    }
  }
})
</script>

<style scoped>

</style>