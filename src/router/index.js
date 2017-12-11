import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import User from '../pages/users'
import Sort from '../pages/sort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/user',
      component: User
    }
  ]
})
