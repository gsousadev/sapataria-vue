import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pedidos/cadastro',
      component: () => import('./views/order/NewOrder.vue')
    },
    {
      path: '/pedidos/lista',
      component: () => import('./views/order/ListOrders.vue')
    },
    {
      path: '/clientes/cadastro',
      component: () => import('./views/customer/NewCustomer.vue'),
    },
    {
      path: '/clientes/lista',
      component: () => import('./views/customer/ListCustomers.vue')
    }
  ]
});
