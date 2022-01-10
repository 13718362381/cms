<template>
  <h1>登录页面</h1>
  <el-button @click="goHome">回到首页</el-button>
</template>

<script>
export default {
  name: 'login',
  mounted () {
    this.$request.post('/office/findByPage',
      {
        name: 'jack',
        page: 1,
        pageSize: 10
      },
      { mock: true, loading: true }
    ).then((resp) => {
      console.log(resp)
    })
  },
  methods: {
    goHome () {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style>
</style>
