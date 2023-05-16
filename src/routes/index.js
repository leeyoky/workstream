import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/main',
    }, 
    {
        path: '/login',
        name: 'login',
        // 코드 스플리팅, 싱글 페이지 어플리케이션 SPA
        // 라우팅을 백단 서버가 아닌 브라우저 단에서 구현하는 것이 핵심
        component: () => import('@/views/LoginPage.vue'),
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/components/common/MainPage.vue'),
    },
    {
        path: '/404',
        name: 'PageNotExist',
        component: () => import('@/components/common/NotFoundPage.vue'),
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'    
    },
    {
        path: '/registerUser',
        name: 'registerUser',
        component: () => import('@/views/RegisterUser.vue')
    },
    {
        path: '/todoList',
        name: 'todoList',
        component: () => import('@/views/TodoListPage.vue')
    },
    {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/NoticePage.vue')
    },
    {
        path: '/address',
        name: 'address',
        component: () => import('@/views/AddressPage.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;