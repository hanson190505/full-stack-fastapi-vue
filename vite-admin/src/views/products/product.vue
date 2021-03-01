<template>
  <div>
    <product-table></product-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductTable from '@/views/products/productTable.vue';

export default defineComponent({
  name: 'products',
  components: { ProductTable },
});
</script>

<style scoped></style>
