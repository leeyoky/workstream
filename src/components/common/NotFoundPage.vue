<template>
  <div class="notFound-page">
    <div class="notFound-page-container">
        <span class="notFound-404">404</span>
        <span class="notFound-text">
            Page not found :-&#40; 
        </span>
        <span class="notFound-kor">주소가 잘못되었거나 제공되지 않는 페이지입니다.</span>
        <router-link to="/" class="notFound-routers">메인 화면으로 이동</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.notFound-page{
    height: 100%;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    background-color: white;
    
}
.notFound-page-container{
    position: absolute;
    top: 45%;
    left: 55%;
    transform: translate(-50%, -50%);
}

.notFound-404{
    font-size: 10rem;
    line-height: 10rem;
    font-weight: bolder;
    color: cadetblue;
}
.notFound-text{
    font-size: 2.5rem;
    font-weight: bolder;
    color: rgb(77, 77, 77);
    display: block;
    line-height: 5rem;
}
.notFound-page p{
    font-size: 1.5rem;
}
.notFound-kor{
    font-size: 1.3rem;
}
.notFound-routers{
    display: block;
    color: black;
    border: 2px dashed black;
    border-radius: 5px;
    width: 180px;
    margin: 0 auto;
    text-decoration: none;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    transform: translate(0%, 90%);
    padding: 5px 5px;
}
.notFound-routers:hover{
    border: 2px dotted rgb(255, 145, 0);
    transition: 0.5s;
}
</style>