<template>
  <div id="wrapper">
    <login-wall></login-wall>
    <login-page></login-page>
  </div>
</template>

<script>
import LoginPage from './components/common/LoginPage.vue'
import LoginWall from './components/common/LoginWall.vue'

export default {
  components : {
    LoginPage,
    LoginWall
  }
}
</script>

<style>
body{
        margin: 0;
        padding: 0;
    }
</style>
