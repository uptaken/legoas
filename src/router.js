import Vue from 'vue'
import Router from 'vue-router'
// import router_view from '@/router_view'

import home from '@/pages/home/index'
import schedule from '@/pages/auction/schedule'
import definiton from '@/pages/auction/definition'
import how_to from '@/pages/auction/how_to'

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
      path: '/how-to',
      component: how_to,
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
