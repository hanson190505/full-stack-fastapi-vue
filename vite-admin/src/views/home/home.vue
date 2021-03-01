<template>
  <basic-layout>
    <template #mainContext>
      <suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <h1>loading...</h1>
        </template>
      </suspense>
    </template>
  </basic-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicLayout from "@/components/basicLayout/index.vue";

export default defineComponent({
  name: "home",
  components: {
    BasicLayout,
  },
});
</script>

<style scoped></style>
