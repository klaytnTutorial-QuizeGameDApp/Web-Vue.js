import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Mypage from '@/pages/Mypage'
import Apply from '@/pages/QuizApply'
import Detail from '@/pages/QuizDetail'
import Upload from '@/pages/QuizUpload'

Vue.use(Router)

export default new Router(
  {
    mode: 'history',
  routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/Apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: Upload
  },
]
})
