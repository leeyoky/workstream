<template>
  <div class="side-bar-wrapper">
    <div class="side-bar-container">
      <div class="side-bar-menus">
          <i class="fa-solid fa-bars" ref="foldMenu"></i>
      </div>
      <div class="side-bar-1200">
        <div class="side-bar-profile-wrapper">
          <v-img src="@/components/common/img/profile.png">
          </v-img>
        </div>
        <div class="side-bar-profile">
          <h3>{{ $store.state.username }}
            <span><!-- 직급 -->사원</span>
          </h3>
          <p>KM팀</p>
        </div>
      </div>
      <div class="side-bar-list-wrapper">
        <ul>
          <li>
            <router-link to="/notice">
              <i class="fa-regular fa-heart"></i>
              <span>전사공지</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-regular fa-pen-to-square"></i>
              <span>전자결재</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-regular fa-calendar"></i>
              <span>회의예약</span>
            </router-link>
          </li>
          <li>
            <router-link to="/todoList">
              <i class="fa-regular fa-circle-check"></i>
              <span>ToDo+</span>
          </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-regular fa-paper-plane"></i>
              <span>요청사항</span>
          </router-link>
          </li>
          <li>
            <router-link to="/address">
              <i class="fa-regular fa-address-book"></i>
              <span>사내연락망</span>
          </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
}
</script>

<style scoped>
.side-bar-wrapper {
    background-color: #FF9800;
    width: 15rem;
    height: 100%;
    overflow-x: hidden;
    /* border-radius: 0px 50px 0px 0px; */
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: absolute;
  }
.side-bar-list-wrapper .router-link-exact-active {
  color: white;
}
.side-bar-container{
  margin: 0 auto;
  color: #131313;
}
.side-bar-1200{
  display: flex;
  flex-direction: column;
  margin-top: -2rem;
}
.fa-bars{
  font-size: 2rem;
  color: white;
}
.side-bar-menus{
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1.5rem;
}
.side-bar-menus i:hover{
  color: #303030;
  font-weight: 900;
}

.side-bar-container p {
  color: #6d3e00;
  font-weight: bolder;
  font-size: 10pt;
  line-height: 2rem;
  
}
.side-bar-profile {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
}
.side-bar-profile-wrapper{
  background-color: rgba(255, 255, 255, 0.925);
  width: 10rem;
  height: 10rem;
  border-radius: 0px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  margin-bottom: 1rem;
}

.side-bar-list-wrapper{
  margin-left: 2rem;
}

.side-bar-wrapper ul{
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 10rem;
}
.side-bar-wrapper ul li{
    list-style: none;
    font-size: 14pt;
    letter-spacing: -1pt;
    line-height: 2.5rem;
    font-weight: 600;
    color: #1b1b1b;
    display: flex;
    align-items: center;
  }
  .side-bar-wrapper ul li i {
    padding-right: 2.5rem;
    color: white;
    font-size: 1.5rem;
    margin-right: auto;
    width: 1rem;
}

.fa-paper-plane{
  font-size: 1.2rem;
}

.side-bar-list-wrapper a{
  text-decoration: none;
  color:#1b1b1b;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
}

.side-bar-list-wrapper a:hover {
  color: #ffffff;
  transition: 0.2s;
}


@media screen and (max-width: 1200px){
  .side-bar-wrapper{
    width: 3.5rem;
    justify-content: space-evenly;
    border-radius: 0px 20px 0px 0px;
  }
  .side-bar-menus{
    display: flex;
    position: absolute;
    top: 0;
    margin-left: 13px;
  }
  .side-bar-1200{
    display: none;
  }

  .side-bar-list-wrapper span{
    visibility: hidden;
  }
  .side-bar-list-wrapper i:hover{
    color: #303030;
    font-weight: 900;
  }
  .side-bar-list-wrapper{
    margin-left: 1.1rem;
  }
}



</style>