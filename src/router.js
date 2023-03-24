import Vue from 'vue'
import Router from 'vue-router'
// import router_view from '@/router_view'

import home from '@/pages/home/index'

import schedule from '@/pages/auction/schedule'

import how_to from '@/pages/auction/info/how_to'
import definiton from '@/pages/auction/info/definition'
import rules from '@/pages/auction/info/rules'
import news from '@/pages/auction/info/news'
import article from '@/pages/auction/info/article'
import detail_article from '@/pages/auction/info/detail_article'

import about_us from '@/pages/about_us/index'
import location from '@/pages/location/index'
import search from '@/pages/search/index'
import product_detail from '@/pages/search/detail'
import sell from '@/pages/sell/index'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '',
      component: home,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/schedule',
      component: schedule,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/definiton',
      component: definiton,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/rules',
      component: rules,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/news',
      component: news,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/how-to',
      component: how_to,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/about-us',
      component: about_us,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/location',
      component: location,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/search',
      component: search,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/sell',
      component: sell,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/article',
      component: article,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/article/detail',
      component: detail_article,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/product/detail',
      component: product_detail,
      meta: {
        requiresAuth: false
      },
    },
  ],
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      sessionStorage.setItem('redirect',to.fullPath)
      next({
        path: '/auth/login',
      })
    }
    else
      next()
  }
  else
    next()
})

export default router
