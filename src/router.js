import Vue from 'vue'
import Vuerouter from 'vue-router'
import Canvas from './components/canvas'

Vue.use(Vuerouter)
/* eslint-disable no-new */
const router = new Vuerouter({
  routes: [
    {
      path: '/',
      component: Canvas
    }
  ]
})

export default router
