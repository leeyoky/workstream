<template>
    <div class="login-main-wrapper">
    </div>
</template>

<script>
import $ from 'jquery';
    
export default {
    mounted(){
        $(".login-main-wrapper").ripples({
            resolution: 346, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
            perturbance: 0.02, // 잔물경 굴절 강도. 0은 굴절 없음
        }); 
    }
}
</script>

<style>
    .login-main-wrapper {
         width: 100%;
         height: 100vh;
         background: url(main.jpg) no-repeat center; /* css 이미지 url */
         background-size: cover;
      }
    .login-main-wrapper{
        display: inline-block;
    }

    .login-main-wrapper img {
        height: 100%;
        width: 100%;
    }
</style>