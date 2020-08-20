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
    }
  },
  getters: {
    getModalInfo(state) {
      return state.modal;
    }
  },
  mutations: {
    changeModalData(state, payload) {
        state.modal = payload;
    }
  },
});
