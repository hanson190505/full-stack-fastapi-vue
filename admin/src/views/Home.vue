<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button type="primary">{{ name }}</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref, defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  },
  props: {}
})
export default class Home extends Vue {
  category: string = 'Electronic';
  products: string = 'USB0001';

  get name() {
    return this.category + '-' + this.products;
  }
  set name(value) {
    const splited = value.split(' ');
    console.log(splited);
  }
}
</script>
