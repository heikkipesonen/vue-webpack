import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

/**
 * state
 * @type {Object}
 */
const state = {

}

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
