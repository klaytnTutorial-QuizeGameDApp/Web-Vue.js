import Vue from 'vue'
import Router from 'vue-router'
import Hoem from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hoem',
    component: Hoem
  }]
})
