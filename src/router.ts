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
      path: '/pedidos/cadastrar',
      component: () => import('./views/order/FormOrder.vue')
    },
    {
      path: '/pedidos/listar',
      component: () => import('./views/order/ListOrders.vue')
    },
    {
      path: '/pedidos/visualizar/:id',
      component: () => import('./views/order/ViewOrder.vue')
    },
    {
      path: '/clientes/cadastrar',
      component: () => import('./views/customer/FormCustomer.vue')
    },
    {
      path: '/clientes/listar',
      component: () => import('./views/customer/ListCustomers.vue')
    },
    {
      path: '/clientes/editar/:id',
      component: () => import('./views/customer/FormCustomer.vue')
    }
  ]
});
