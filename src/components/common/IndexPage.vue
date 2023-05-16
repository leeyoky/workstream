<template>
  <div class="index-container">
    <div class="index-box">
      <loading-spinner v-if="isLoading"></loading-spinner>
      <!-- 재활용 할 인덱스 페이지 -->
      <div v-else>
        <router-view v-slot="{ Component }">
          <transition name="page">
            <component :is="Component" />
          </transition>
        </router-view> 
        <h1>인덱스페이지</h1>
      </div>
    </div>
  </div>
</template>

<script>
/* import { fetchPosts } from '@/api/index'; */
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
/* import { getUserFromCookie } from '@/utils/cookies' */
export default {
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    async fetchData() {
      // this.isLoading = true;
      /* const { data } = await fetchPosts(); */
      this.isLoading = false;
      /* console.log(data); */
    },
  },
  created() {
/*     const data = {
      header : {
        userId: getUserFromCookie(),
      },
      payload: {},
    } */
    this.fetchData();
  }
}
</script>

<style scoped>
.index-container{
    width: 100%;
    height: 100%;
    /* 사이드바 width값 만큼 똑같이 margin-left */
    margin-left: 12%;
    margin-top: 1%;
    background-color: white;
  }

</style>