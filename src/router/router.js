import Vue from "vue";
import Router from "vue-router";
import AuthHelper from "@/helpers/authHelper";
import routes from './routes';

Vue.use(Router);

var router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!AuthHelper.isAuthenticated()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }

  if (to.name === 'login') {
    if (AuthHelper.isAuthenticated()) {
      next({
        path: '/home',
      })
    } else {
      next()
    }
  }

  if (to.name === 'logout') {
    AuthHelper.logout();
    next({
      name: 'login',
    });
  }

});


export default router;

