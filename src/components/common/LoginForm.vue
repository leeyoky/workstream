<template>
  <form class="login-form" @submit.prevent="submitLogin">
    <div class="account-container login-box">
        <h2>WorkStream</h2>
        <div class="account-box account">
            <div class="bar"></div>
            <label for="username">
                <span>ID</span><br>
                <input type="text" id="username" class="userId" placeholder="ID" 
                    v-model.trim="username" ref="username">
            </label>
        </div>
        <div class="account-box pw">
            <div class="bar"></div>
            <label for="password">
                <span>Password</span><br>
                <input type="password" id="password" class="userPw" placeholder="password" v-model.trim="password" ref="password">
            </label>
        </div>
        <!-- Remember me -->
        <input class="remember-me-input" type="checkbox" name="remember-me" id="remember-me"
                v-model="status" true-value="remember" false-value="not-remember">
        <label class="remember-me-label" for="remember-me">Remember me</label>
    </div>

    <div class="account-container login-btn-box">
        <!-- Login Button -->
        <button class="custom-btn login-btn" type="submit">
        <span>Login</span>
        </button>
        <!-- Forgot Password -->
        <button class="forgot-pw-btn">Forgot Password?</button>
        <p class="logMessage">{{ logMessage }}</p>

    </div>
   </form>
</template>

<script>
import { validateEmail } from '@/utils/validation'
import { 
    // saveAuthToCookie, 
    // saveUserToCookie, 
    // getAuthFromCookie, 
    // getUserFromCookie 
} from "@/utils/cookies";
export default {
    data() {
        return{
            username: '',
            password: '',
            logMessage: '',
            status: "not_remember",
        }
    },
    created() {
        if(this.$cookies.get("user")){
            this.status = "remember"
            this.username = this.$cookies.get("user");
            this.password = this.$cookies.get("auth");
        }else{
            this.status = "not_remember"
        }
        console.log(this.status);
        console.log(this.username);
        console.log(this.password);
    },
    computed: {
        isUsernameValid() {
            return validateEmail(this.username);
        },
    },
    methods: {
        async submitLogin() {
            /* validcheck */
            if(this.username === ''){
                alert('ID를 입력하세요');
                this.$refs.username.focus();
                return
            }else if(this.password === ''){
                alert('비밀번호를 입력하세요');
                this.$refs.password.focus();
                return
            }

            try {
                // 비즈니스 로직
                const userData = {
                    username: this.username,
                    password: this.password,
                };
                await this.$store.dispatch('LOGIN', userData);
                this.$router.push('/main');
            } catch (error) {
                console.log(error.response.data);
                this.logMessage = error.response.data ;
            } finally {
                this.initForm();
            }
        },
        initForm() {
            this.username = '';
            this.password = '';
        }
    },
}
</script>

<style scoped>
.login-btn-box span {
    color: white;
}
</style>