<template>
  <div>
    <h1>主页面-{{msg}}</h1>
    <router-link to="/login">去登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  props: ['msg']
}
</script>

<style scoped>

</style>
