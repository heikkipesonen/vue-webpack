import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  view: {
    x: 0,
    y: 0,
    scale: 1,
    size: {
      width: 0,
      height: 0
    }
  }
}

const mutations = {
  setView (state, view) {
    state.view = view
  }
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
