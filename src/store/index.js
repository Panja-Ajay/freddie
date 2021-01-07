import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {}
  },
  getters: {
    form: state => {
      return state.form
    }
  },
  mutations: {
    form: (state, payload) => {
      Vue.set(state, 'form', payload)
    },
  },
  actions: {
    storeForm: ({commit}, payload) => {
      commit("form", payload)
    }
  },
  modules: {

  }
})