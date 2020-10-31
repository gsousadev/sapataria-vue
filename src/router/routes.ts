export default [
    {
        path: "/login",
        name: "login",
        component: () => import("../components/modules/login/Login.vue"),
    },
    {
        path: "/logout",
        name: "logout",
    },
    {
        path: "/",
        redirect: { name: 'home' }
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../components/modules/home/Home.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/pedidos/cadastrar",
        component: () => import("../components/modules/order/FormOrder.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/pedidos/listar",
        component: () => import("../components/modules/order/ListOrders.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/pedidos/visualizar/:id",
        component: () => import("../components/modules/order/ViewOrder.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/clientes/cadastrar",
        component: () =>
            import("../components/modules/customer/FormCustomer.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/clientes/listar",
        component: () =>
            import("../components/modules/customer/ListCustomers.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/clientes/editar/:id",
        component: () =>
            import("../components/modules/customer/FormCustomer.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/*",
        component: () => import("../components/modules/error/NotFound.vue"),
    }
];