<template>
  <h1>登录页面</h1>
  <el-button @click="goHome">回到首页</el-button>
</template>

<script>
export default {
  name: 'login',
  methods: {
    goHome () {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style>
</style>
