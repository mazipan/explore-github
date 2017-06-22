import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, actions } from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  mutations,
  actions
})
