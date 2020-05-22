import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/modules/home/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/pedidos/cadastrar",
      component: () => import("../components/modules/order/FormOrder.vue"),
    },
    {
      path: "/pedidos/listar",
      component: () => import("../components/modules/order/ListOrders.vue"),
    },
    {
      path: "/pedidos/visualizar/:id",
      component: () => import("../components/modules/order/ViewOrder.vue"),
    },
    {
      path: "/clientes/cadastrar",
      component: () =>
        import("../components/modules/customer/FormCustomer.vue"),
    },
    {
      path: "/clientes/listar",
      component: () =>
        import("../components/modules/customer/ListCustomers.vue"),
    },
    {
      path: "/clientes/editar/:id",
      component: () =>
        import("../components/modules/customer/FormCustomer.vue"),
    },
  ],
});
