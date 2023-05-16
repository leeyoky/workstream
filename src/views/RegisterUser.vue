<template>
    <div class="index-box">
        <div class="board-title">
            <p>인사 > 인사발령</p>
            <hr>
        </div>
       
        <form class="register-form" @submit.prevent="submitRegister">
            <div class="user-info-wrapper box-shadow">
                <div>
                    <v-alert v-if="success" id="alt" type="success" ref="success" closable 
                        style="z-index: 2; position: absolute; left: 0; right: 0; top: 0; border-radius: 30px 30px 0px 0px;"> 
                        사용 가능한 ID입니다.</v-alert> 
                    <v-alert v-if="error" type="error" ref="unusable" color="red" closable
                        style="z-index: 2; position: absolute; left: 0; right: 0; top: 0; border-radius: 30px 30px 0px 0px;">  
                        이미 사용중인 ID입니다.</v-alert>
                </div>
                <!-- <v-alert type="error" class="alert-error" style="padding: 10px; margin-bottom:1rem;"> 이미 사용중인 ID입니다.</v-alert> -->
                <div class="user-info-radioBox">
                    <input type="radio" name="radio" id="join" value="join"
                    v-model="checked"/>
                    <label for="join">입사</label>
                    <input type="radio" name="radio" id="change" value="change"
                    v-model="checked"/>
                    <label for="change">변경</label>
                    <input type="radio" name="radio" id="quit" value="quit"
                    v-model="checked"/>
                    <label for="quit">퇴사</label>
                    <p>{{ checked }}</p>
                </div>
                <div class="user-info">
                    <div class="user-id-div">
                        <label for="id">ID</label>
                        <input name="id" id="id" type="text" v-model="id" ref="id">
                        <button type="button" class="btn_skyblue" @click="checkedId">Check</button>
                    </div>
                    <!-- <div class="logMessage-wrap">
                        <span class="logMessage">{{ logMessage }}</span>
                    </div> -->
                    <div>
                        <label for="password">Password </label>
                        <input name="password" id="password" type="text" v-model="password" ref="password">
                    </div>
                    <div>
                        <label for="name">이름 </label>
                        <input name="name" id="name" type="text" v-model="name" ref="name">
                    </div>
                    <div>
                        <label for="email">E-mail </label>
                        <input name="email" id="email" type="text" v-model="email" ref="email">
                    </div>
                    <div>
                        <label for="phone">핸드폰 </label>
                        <input name="phone"  @keyup="getPhoneMask(phone)" id="phone" type="tel" v-model="phone" ref="phone">
                    </div>
                    <hr>
                    <div>
                        <label for="join_date">입사일 </label>
                        <input name="join_date" id="join_date" type="text" v-model="join_date" ref="join_date">
                    </div>
                    <div>
                        <label for="department">부서 </label>
                        <input name="department" id="department" type="text" v-model="department">
                    </div>
                    <div>
                        <label for="position">직책 </label>
                        <input name="position" id="position" type="text" v-model="position">
                    </div>
                    <div>
                        <label for="auth">권한 </label>
                        <input name="auth" id="auth" type="text" v-model="auth">
                    </div>
                    <div class="register-button">
                        <button type="submit">등록</button>
                    </div>
                    <div>
                        <span>{{  result }}</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { 
    registerUser, 
    checkedId    
} from '@/api/index'
export default {
    data() {
        return {
            // form values
            checked: '',
            id: '',
            password: '',
            name: '',
            email: '',
            phone: '',
            join_date: '',
            department: '',
            position: '',
            auth : '',
            // log
            logMessage: '',
            result: '',
            // alert
            success : '',
            error : '',
        };
    },
    computed: {

    },
    methods: {
        // 아이디 중복 체크
        async checkedId() {
            try {
                console.log("사용자ID : " + this.id);
                const id = {
                    id : this.id,
                };
                const { data } = await checkedId(id);
                console.log(data);
                // 왜 setTimeout을 써야했는지?
                setTimeout(() => {
                    if (data.result == true) {
                        this.success = true;
                        this.logMessage = "사용가능";
                    }
                }, 10);
            } catch (error) {
                setTimeout(() => {
                    if(error.response.status == 400){
                        this.error = true;
                    }
                }, 10);
            } finally {
                this.success = false;
                this.error = false;
            }
        },
        // 전화번호 자동 하이픈 기능
        getPhoneMask(val){
            this.val = val.replace(/[^0-9]/g,'').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
            this.phone = this.val;
            console.log(this.phone);
        },

        // 회원가입
        async submitRegister() {
            /* validcheck */
            if(this.id === ''){
                alert('ID는 필수입력 사항입니다.');
                this.$refs.id.focus();
                return
            }
           if(this.password === ''){
                alert('Password는 필수입력 사항입니다.');
                this.$refs.password.focus();
                return
            }
            if(this.name === ''){
                alert('이름은 필수입력 사항입니다.')
                this.$refs.name.focus();
                return
            }
        
            const userData = {
                id: this.id,
                password: this.password,
                name: this.name,
                email: this.email,
                phone: this.phone,
                join_date: this.join_date,
                department: this.department,
                position: this.position,
                auth: this.auth,
            };
            const { data } = await registerUser(userData);
            console.log(data);
            this.logMessage = `${data.name} 님이 가입되었습니다`;
            this.initForm();
        },
        initForm() {
            // null로 해도 상관없음.
            this.id = '';
            this.password = '';
            this.name = '';
            this.email = '';
            this.phone = '';
            this.join_date = '';
            this.department = '';
            this.position = '';
            this.auth = '';
        },
        
    }

}
</script>

<style scoped>
.register-form{
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.register-form input{
    border: none;
    background-color: rgb(245, 245, 245);
    padding: 4px;
}
.register-form input::placeholder{
    color:rgb(148, 148, 148);
    text-align: center;
}
.user-info-radioBox p {
    font-size: 8pt;
    text-align: center;
    display: inline;
}
.user-info-radioBox{
    padding-bottom: 1.5rem;
    align-items: center;
}
.user-info-radioBox label{
    margin: 0rem 0.2rem;
}
.user-info-radioBox input[type="radio"]{
    width: 1rem;
    height: 1rem;
}
.user-info-wrapper{
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 14%;
    left: 0;
    /* bottom: 0; */
    right: 0;
    width: 25rem;
    height: auto;
    border-radius: 30px;
    color: rgb(72, 76, 80);
}
.user-info-wrapper > div {
    margin-bottom: 5px;
    margin: 0 auto;
    display: flex;
}
.user-info {
    display: flex;
    flex-direction: column;
}
.user-info input{
    height: 1.7rem;
    padding: 2px 5px;
    font-size: 10pt;
    width: 11rem;
    font-weight: 100;
}
.user-info hr {
    background-color: aqua;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
}
.user-info > div {
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
}
.user-info label {
    width: 5.5rem;
    font-size: 11pt;
    font-weight: 500;
}
.user-id-div button{
    font-size: 9pt;
    font-weight: 500;
    padding: 4px 6px;
    border-radius: 3px;
    width: 3.4rem;
}
.user-id-div button:hover{
    background-color: rgba(166, 216, 216, 0.95);
    transition: 0.3s;
    color: black;
}

.user-id-div input {
    width: 7rem;
    margin-right: 0.6rem;
}
.register-button{
    text-align: center;
    margin-top: 2rem;
    justify-content: center;
}
.register-button button{
    background-color: rgb(125, 190, 190);
    font-family: 'Noto Sans KR', sans-serif;
    padding: 5px 15px 7px 15px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 13pt;
    justify-content: center;
} 
.register-button button:hover{
    background-color: rgba(166, 216, 216, 0.95);
    transition: 0.3s;
    color: black;
}
.register-button button{
    justify-content: center;
}
.logMessage{
    font-size: 10pt;
}
.logMessage-wrap{
    justify-content: center;
    color: #0000c7;
}
</style>