import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import User from '../pages/users'
import Sort from '../pages/sort'
import news from '../components/new'
import hot from '../components/hot'
import Order from '../pages/order'
import all from '../components/all'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/sort',
      component: Sort,
      children: [
        {
          path: '/',
          component: all
        },
        {
          path: 'new',
          component: news
        },
        {
          path: 'hot',
          component: hot
        }
      ]
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/order',
      component: Order
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
