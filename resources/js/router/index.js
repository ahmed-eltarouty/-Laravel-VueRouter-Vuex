import {createRouter,createWebHistory} from 'vue-router';
import TestApp from '../components/TestApp.vue'
import LoginComponent from '../components/LoginComponent.vue'
import PostsComponent from '../components/PostsComponent.vue'
import ResgisterCompontnet from '../components/ResgisterCompontnet.vue'



const routes = [
    {
        path: '/',
        component: TestApp
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/posts',
        component: PostsComponent
    },
    {
        path: '/register',
        component: ResgisterCompontnet
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
});

export default router;
