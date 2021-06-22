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
        path: "/pedidos/cadastrar/:cliente_id",
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
        path: "/pedidos/imprimir/:id",
        component: () => import("../components/modules/order/ViewOrderToPrint.vue"),
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
        path: "/produtos/cadastrar",
        component: () => import("../components/modules/product/FormProduct.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/produtos/listar",
        component: () => import("../components/modules/product/ListProducts.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/produtos/editar/:id",
        component: () => import("../components/modules/product/FormProduct.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/servicos/cadastrar",
        component: () => import("../components/modules/service/FormService.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/servicos/listar",
        component: () => import("../components/modules/service/ListServices.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/servicos/editar/:id",
        component: () => import("../components/modules/service/FormService.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/*",
        component: () => import("../components/modules/error/NotFound.vue"),
    }
];