import { createStore } from "vuex"; 
import { 
    saveAuthToCookie, 
    saveUserToCookie,  
    getAuthFromCookie, 
    getUserFromCookie 
} from "@/utils/cookies";
import { 
    loginUser,
} from "@/api/index";

export default createStore({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    },
    getters: {
        isLogin(state){
            return state.username !== '';
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = '';
        },
    },
    actions: {
        async LOGIN({ commit }, userData) {
            const data = await loginUser(userData);
            console.log(data);
            // Token 값 받아오기
            console.log(data.headers.authorization);
            // Baearer replace
            /* const bearerToken = data.headers.authorization;
            const token = bearerToken.replace(/^Bearer\s+/, ''); */

            commit('setToken', data.headers.authorization);
            commit('setUsername', data.data.username);
            saveAuthToCookie(data.headers.authorization);
            saveUserToCookie(data.data.username);
            return data;
        },
    },
    
});