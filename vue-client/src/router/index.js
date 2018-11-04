import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/views/web/landing';
import login from '@/views/account/login';
import signin from '@/views/account/signin';
import dashboard from '@/views/home/dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
});
