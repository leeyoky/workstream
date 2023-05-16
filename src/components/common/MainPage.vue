<template>
  <div class="index-box">
    <!-- 변경되는 URl에 따라 해당 컴포넌트 뿌려주기 -->
     <h1>Main View</h1>
  </div>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    }
  },
}


</script>

<style>


</style>