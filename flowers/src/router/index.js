import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import balcony from '@/pages/balcony/balcony'
import getOne from '@/pages/getone/getone'
import interested from '@/pages/interested/interested'
import seasons from '@/pages/seasons/seasons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/balcony',
      name: 'balcony',
      component: balcony
    },
    {
      path: '/getone',
      name: 'getOne',
      component: getOne
    },
    {
      path: '/interested',
      name: 'interested',
      component: interested
    },
    {
      path: '/seasons',
      name: 'seasons',
      component: seasons
    }
  ]
})
