<template>
  <div class="container">
    <!-- 로그인O 메인페이지로 -->
    <template v-if="isUserLogin">
      <tool-bar></tool-bar>
      <side-tool-bar></side-tool-bar>
      <div class="index-wrapper">
        <router-view></router-view>
      </div>
    </template>
    <!-- 로그인X 로그인페이지로 -->
    <template v-else>
      <login-page></login-page>
    </template>
  </div>
</template>

<script>
import SideToolBar from '@/components/common/SideToolBar.vue';
import ToolBar from '@/components/common/ToolBar.vue';
import LoginPage from '@/views/LoginPage.vue'
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    }
  },
  components: {
    LoginPage,
    ToolBar,
    SideToolBar,
  },

}
</script>
<style>

</style>
