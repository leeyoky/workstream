<template>
  <div class="header">
    <div class="header-logo margin-right">
      <img class="full-screen" src="/logo.png" alt="로고">
      <v-img class="media-1200" src="@/components/common/img/favicon.png"></v-img>
    </div>
    <div class="header-logo">
      <ul class="toolbar-menus underline">
        <li class="toolbar-menu underline"><router-link to="/">프로젝트</router-link></li>
        <li class="toolbar-menu underline"><router-link to="/">CRM</router-link></li>
        <li class="toolbar-menu underline"><router-link to="/">제품</router-link></li>
        <li class="toolbar-menu underline"><router-link to="/">영업</router-link></li>
        <li class="toolbar-menu underline"><router-link to="/">인사</router-link>
          <ul class="toolbar-dropdown">
            <li><router-link to="/registerUser" ref="registerUser"> 인사발령 </router-link></li>
            <li><router-link to="/"> 인사정보 </router-link></li>
            <li><router-link to="/"> 인사평가</router-link></li>
            <li><router-link to="/"> 사내활동</router-link></li>
            <li><router-link to="/"> 근태관리</router-link></li>
            <li><router-link to="/"> 휴가관리</router-link></li>
          </ul>
        </li>
        <li class="toolbar-menu underline"><router-link to="/">총무</router-link>
          <ul class="toolbar-dropdown">
            <li><router-link to="/"> MENU1 </router-link></li>
            <li><router-link to="/"> MENU2 </router-link></li>
          </ul></li>
        <li class="toolbar-menu underline"><router-link to="/">재무</router-link></li>
        <li class="toolbar-menu underline"><router-link to="/">통계</router-link></li>
        <li class="toolbar-menu underline"><router-link to="/">관리자</router-link></li>
        <li class="toolbar-menu underline"><router-link to="/">사이트맵</router-link></li>
      </ul>
    </div>
    
    <div class="user-photo margin-left">
      <router-link to="/main">
          <i class="fa-solid fa-house"></i>
      </router-link>
        <ul class="toolbar-menus padding-0">
          <li class="toolbar-menu">
            <router-link to="/">
              <i class="fa-solid fa-user"></i>
            </router-link>
            <ul class="toolbar-dropdown my-page">
              <li><router-link to="/"> MENU1 </router-link></li>
              <li><a href="javascript:;" @click="logoutUser"> 로그아웃 </a></li>
            </ul>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { deleteCookie } from '@/utils/cookies'
export default {
  methods: {
    logoutUser() {
        this.$store.commit('clearUsername');
        this.$store.commit('clearToken');
        deleteCookie('auth');
        deleteCookie('user');
        this.$router.push('/');
    }
  },
   
}
</script>

<style scoped>
.header{
    color: rgb(255, 255, 255);
    background-color: rgb(255, 255, 255);
    display: flex;
    padding: 0px 10px;
    justify-content: center;
    position: relative;
    z-index: 999;
    align-items: center;
    box-shadow: #9a9a9a2e 0px 0px 10px 2px;
}
.logo-circle{
  display: inline-block;
}
.header img {
  width: 150px;
}
.header .router-link-exact-active {
  color: #35495e;
}

.margin-right {
  margin-right: auto;
  margin-top: 2px;
}
.user-photo span{
  color:black;
}
.user-photo i {
  padding-left: 10px;
  font-size: 1.5rem;
  color: #35495e;
  margin: 0px 5px;
  padding-bottom: 10px;
  margin-top: 7px;
}

.user-photo i:hover{
  color:black;
  transform: scale(1.05);
  transition: all .1s;
}
.margin-left {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.toolbar-menus {
  display: flex;
  list-style: none;
  text-align: center;
  color: #35495e;
  text-decoration: none;
  padding: 10px 0px 0px 0px;
  font-size: 12pt;
  letter-spacing: -1pt;
  margin: 0;
}

.toolbar-menus a {
  letter-spacing: -0.5pt;
  width: 80px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #5c6f80;
  font-weight: 700;
}
.underline a:hover {
  color: black;
  transition: 1s;
}
.underline a:after {
  display:block;
  content: '';
  border-bottom: solid 5px rgb(36, 163, 104);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
  padding-bottom: 3px;
}

.underline a:hover:after {
  transform: scaleX(1);
}

.toolbar-dropdown a:hover{
  text-decoration: none;
  background-color: rgb(232, 232, 236);
  border-bottom: none;
}
.my-page{
  position: absolute;
  padding: 0;
  background-color: rgb(249, 249, 255);
  width: 80px;
  right: 0%;
  line-height: 2.2rem;
  display: none;
}
.my-page a {
  justify-content: flex-start;
}
.padding-0{
  padding: 0;
}
.header-logo > ul > li{
  display: flex;
  flex-direction: column;
  position: relative;
}
.header-logo > ul > li > ul {
	position: absolute;
	font-size:14px;
  background-color: rgb(249, 249, 255);
  text-align: center;
  display: none;
  /* display:flex; */
  height: auto;
  line-height: 2.2rem;
  width: 80px;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-radius: 5px;
  top: 32px;
  position: absolute;
}
.header-logo .media-1200 {
  display: none;
}
.header-logo > ul >li:hover > ul {
  display:flex;
}
.toolbar-menu:hover > ul{
  display:block;
}
.header-logo > ul > li > ul > li {
  width: 100%;
}

.toolbar-dropdown a {
  font-size: 10pt;
  display: flex;
  width: 100%;
  justify-content: center;
}
.fa-circle{
  padding: 0 7px;
  font-size: 1.1rem;
  vertical-align: super;
}

@media screen and (max-width: 1200px){
.toolbar-menus a {
  width: 60px;
  color: #5c6f80;
  font-weight: 700;
}
.header-logo > ul > li > ul{
  width: 60px;
  line-height: 2rem;
  font-weight: 500;
}
.header-logo .full-screen{
  display: none;
}
.header-logo .media-1200{
  display: block;
  width: 2rem;
  min-width: 2rem;
}
.header{
  min-width: 700px;
}
}
</style>