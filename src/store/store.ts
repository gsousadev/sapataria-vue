import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: {
      isVisible: false,
      title: "",
      textLines: [],
      confirmButton: true,
      cancelButton: false,
    },
    loader: {
      isVisible: false
    },
    authentication: {
      signedIn: false,
      token: ""
    }
  },
  getters: {
    getModalInfo(state) {
      return state.modal;
    },
    loaderVisibility(state) {
      return state.loader.isVisible;
    },
    authenticationStatus(state) {
      return state.authentication.signedIn;
    }
  },
  mutations: {
    changeModalData(state, payload) {
      state.modal = payload;
    },
    loaderVisibility(state, payload: boolean) {
      state.loader.isVisible = payload;
    },
    logout(state) {
      state.authentication.signedIn = false;
      state.authentication.token = '';
    },
    login(state, token: string) {
      state.authentication.signedIn = true;
      state.authentication.token = token;
    }
  },
});
