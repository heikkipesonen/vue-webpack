import Vue from 'vue'
import Vuerouter from 'vue-router'
import Main from './views/main'

Vue.use(Vuerouter)
/* eslint-disable no-new */
const router = new Vuerouter({
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})

export default router
