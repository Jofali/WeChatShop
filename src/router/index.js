import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import User from '../pages/users'
import Sort from '../pages/sort'
import news from '../components/new'
import hot from '../components/hot'
import Order from '../pages/order'
import all from '../components/all'
import Support from '../pages/support'
import Help from '../pages/help'
import Message from '../pages/message'
import Address from '../pages/address'
import Pending from '../pages/pending'
import EditAddress from '../pages/addnewaddress'
import Product from '../pages/product/product'

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
    },
    {
      path: '/support',
      component: Support
    },
    {
      path: '/help',
      component: Help
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/pending/:id',
      component: Pending
    },
    {
      path: '/editaddress/:tid',
      component: EditAddress
    },
    {
      path: '/product/:pid',
      component: Product
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
