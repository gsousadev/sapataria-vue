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
    }
  },
  getters: {
    getModalInfo(state) {
      return state.modal;
    },
    loaderVisibility(state) {
      return state.loader.isVisible;
    }
  },
  mutations: {
    changeModalData(state, payload) {
      state.modal = payload;
    },
    loaderVisibility(state, payload: boolean) {
      state.loader.isVisible = payload;
    }
  },
});
