import Vue from 'vue'
import Vuerouter from 'vue-router'
import View from './components/view'

Vue.use(Vuerouter)
/* eslint-disable no-new */
const router = new Vuerouter({
  routes: [
    {
      path: '/',
      component: View
    }
  ]
})

export default router
