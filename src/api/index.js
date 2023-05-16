import axios from "axios";
import { setInterceptors } from './common/interceptors'

function createInstance() {
   const instance = axios.create({
      baseURL : process.env.VUE_APP_API_BASE_URL,
   });
   return setInterceptors(instance);   
}

const instance = createInstance();

// 신규 입사 API
function registerUser(userData) {
   return instance.post('join', userData);
}

// ID 중복체크 API
function checkedId(id) {
   return instance.get(`join/${id.id}`);
}

// 로그인 API
function loginUser(userData) {
   return instance.post('login', userData);
}

// 데이터 조회하는 API
function fetchPosts() {
   return instance.get('posts');
}

export{ registerUser, checkedId, loginUser, fetchPosts };

