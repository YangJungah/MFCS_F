import { createRouter, createWebHistory } from 'vue-router';
import Console from '@/views/console/Console.vue';
import MainContents from '@/views/MainContents.vue';
import Login from '@/views/Console/Login.vue';
import JoinUs from '@/views/Console/JoinUs.vue';

const routes = [
  {
    path: '/console',
    name: 'console',
    component: Console
  },
  {
    path: '/',
    name: 'mainpage',
    component: MainContents
  },
  {
    path: '/console/login',
    name: 'login',
    component: Login
  },
  {
    path: '/console/joinus',
    name: 'joinUs',
    component: JoinUs
  },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;
