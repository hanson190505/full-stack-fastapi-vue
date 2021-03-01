<template>
  <el-form :model="formData">
    <el-form-item label="用户名">
      <el-input type="text" v-model="formData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" v-model="formData.password">
      <el-input type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="info" @click="handleRegister">注册</el-button>
      <el-button type="primary" @click="handleLogin">登录</el-button>
      <el-button type="info" @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
  <el-button @click="onchange">前进</el-button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import router from "@/router";


export default defineComponent({
  name: "login",
  setup(){
    const formData = reactive({
      username:'',
      password:''
    })
    function handleRegister(){}
    function handleLogin(){}
    function handleReset(){}
    function onchange(){
      router.replace('/')
    }
    return {
      onchange,
      formData,
      handleRegister,
      handleLogin,
      handleReset
    }
  }
})
</script>

<style scoped>

</style>