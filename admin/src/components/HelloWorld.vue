<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in data_list">{{ item.detail }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})

export default class HelloWorld extends Vue {
  msg!: string
  data_list = {}
  async getData () {
    this.data_list = await fetch('http://localhost:8000/api/v1/product/').then(res=>{
      return res.json()
    })
    console.log(this.data_list)
  }
  mounted() {
    this.getData()
  }
  created() {
    console.log('is created')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
