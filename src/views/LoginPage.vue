<template>
   <div class="wrapper">
        <!-- login Main image  -->
        <div class="login-main-wrapper">
           <!-- <img src="main.jpg" alt=""> -->
        </div>
        <div class="login-wrapper">
            <!-- Language -->
            <div class="login-selectBox">
                <select class="login-selectBox lang-select" name="" id="" >
                    <option value="">Language</option>
                    <option value="">Korean</option>
                    <option value="">English</option>
                </select>
            </div>
        <loginForm></loginForm>
        <!-- footer logo -->
            <div class="login-wrapper-img">
                <img src="/logo.png" alt="로고">
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/common/LoginForm.vue'
/* import reactive from "vue"; */
export default {
  components: { LoginForm },
}

</script>
<style>
    .wrapper{
        width: 100%;
        height: 100%;
        display: grid;
        /* max-width: 1270px; */
        margin: 0 auto;
        grid-template-columns: 8fr 3fr;
        grid-template-rows: auto;
        position: relative;
        grid-column: span;
    }
    .login-wrapper{
        font-weight: bolder;
        background-color: rgb(249, 249, 255);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 450px;
        justify-content: space-between;
    }
    /* 테블릿 가로 */
    @media all and (min-width: 768px) and (max-width: 1023px){
    .login-wrapper {
       min-width: 450px;
    }
    .login-main-wrapper{
        display: none;
    }
    }
    /* 모바일 가로 / 테블릿 세로 */
    @media all and (max-width: 767px){
    .login-wrapper {
       min-width: 560px;
       width: 100%;
       height: 100%;
       min-height: 1000px;
    }
    .login-main-wrapper{
        display: none;
    }
    }
    .login-selectBox {
        float: right;
    }
    .lang-select{
        border: 1px solid #dadada;
        font-family: Arial, Helvetica, sans-serif;
        padding: 2px 10px;
        border-radius: 5px;
        margin-top: 10px;
        margin-right: 10px;
        box-shadow: none;
        /* appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none; */
        background-color: transparent;
        background-position: center right;
        background-repeat: no-repeat;
        background-size: 15px 10px;
        padding: 2px 10px;
        color: #8b8b8b;
        font-size: 9pt;
    }
    .login-form{
        margin: 0 auto;
        margin-top: 5em;
    }
    .lang-select:focus{
        border: 1px solid #dadada;
    }
    .bar{
        width: 5px;
        height: 20px;
        margin-right: 0.5rem;
        background-color: rgb(0, 0, 116);
        display:inline-block;
    }
    .account-box input{
        height: 1.8rem;
        border: 1px solid gainsboro;
        width: 300px;
        padding: 5px;
        padding-left: 10px;
        font-size: 11pt;
        border-radius: 3px;
    }
    .account-box input::placeholder{
        color: rgb(170, 170, 170);
    }
    .outline{
        width: fit-content;
    }
    .login-btn{
        border: none;
        background-color: rgb(0, 66, 141);
        color: white;
        width: 320px;
        height: 50px;
        border-radius: 5px;
        font-size: 18pt;
        font-weight: 500;
        transition: 0.5s all ease;
        line-height: 45px;
        padding: 0;
        font-family: 'Lato', sans-serif;
        box-shadow:inset 2px 2px 2px 0px rgba(255, 255, 255, 0.555),
        7px 7px 20px 0px rgba(0,0,0,.1),
        4px 4px 5px 0px rgba(0,0,0,.1);
        display: inline-block;
        outline: none;
    }
    .login-btn span{
        /* position: relative; */
        display: block;
        width: 100%;
        height: 100%;
    }
    .login-btn span::before,
    .login-btn span::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
    }
    .login-btn span:before {
        width: 2px;
        height: 0%;
    }
    .login-btn span:after {
        width: 0%;
        height: 2px;
    }
    .login-btn span:hover:before {
        height: 100%;
    }
    .login-btn span:hover:after {
        width: 100%;
    }
    .login-btn:hover{
        background-color: rgb(0, 27, 58);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }

    .login-main-wrapper {
         width: 100%;
         height: 100%;
         background: url(../components/common/img/main.jpg) no-repeat center; /* css 이미지 url */
         background-size: cover;
         display: inline-block;
    }

    .login-main-wrapper img {
        height: 100%;
        width: 100%;
    }
    .account-container{
       margin: 0 auto;
    }
    .login-box{
        width: fit-content;
        margin-top: 20%;
        margin-bottom: 100px;
        font-size: 19pt;
    }
    .login-box h2{
        font-size: 40pt;
        color: midnightblue;
        font-weight: bolder;
        letter-spacing: -1px;
    }
    .login-box span{
        letter-spacing: -1pt;
        color: rgb(20, 20, 122);
    }
    .account-box{
        margin-top: 20px;
    }
    .login-wrapper-img {
        display: flex;
        justify-content: center;
    }
    .login-wrapper-img img{
        width: 150px;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    .forgot-pw-btn{
        border: none;
        background-color: transparent;
        display: block;
        margin-top: 15px;
        cursor: pointer;
        color: #0e009b;
        font-size: 10pt;
    }
    .remember-me-label{
        font-size: 9pt;
        font-weight: 100;
        vertical-align: middle;
        padding-left: 5px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .remember-me-input{
        width: 15px;
        padding-right: 0.5rem;
        margin: 0;
    }



</style>