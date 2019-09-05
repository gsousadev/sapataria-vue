import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      customerId:""
  },
  mutations: {
      SET_CUSTOMER_ID(store,customerId){
        store.customerId = customerId
      }
  },
  actions: {
    setCustomerId(context,customerId){
      context.commit('SET_CUSTOMER_ID',customerId);
    }
  },
  getters:{
    getCustomerId(state){
      return state.customerId;
    }
  }
})
