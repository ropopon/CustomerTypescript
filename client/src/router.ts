import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Customers from './views/Customers.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
      children: [
        {
          path: '',
          component: () => import('./components/CustomerList.vue'),
        },
        {
          path: 'add',
          component: () => import('./components/CustomerAdd.vue'),
        },
        {
          path: 'edit/:code',
          component: () => import('./components/CustomerEdit.vue'),
        },
      ],
    },
  ],
});
