import Vue from "vue";
import App from "./components/App.vue";
import router from "./router/router";
import store from "./store/store";
import "../theme/global.scss";
import VueTheMask from "vue-the-mask";

Vue.use(VueTheMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    this.$store.commit('initialiseStore');
  },
}).$mount("#app");
