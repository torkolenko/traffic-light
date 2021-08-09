import Vue from 'vue'
import Router from 'vue-router'
import ColorSection from './components/ColorSection'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/', redirect: '/red',
      component: ColorSection
    },
    {
      path: '/red',
      component: ColorSection
    },
    {
      path: '/yellow',
      component: ColorSection
    },
    {
      path: '/green',
      component: ColorSection
    }
  ]
})