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
      path: '/novo-pedido',
      name: 'newOrder',
      component: () => import('./views/NewOrder.vue')
    },
    {
      path: '/pedidos',
      name: 'ListOrders',
      component: () => import('./views/ListOrders.vue')
    }

  ]
})
