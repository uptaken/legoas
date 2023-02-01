import Vue from 'vue'
import Router from 'vue-router'
// import router_view from '@/router_view'

import home from '@/pages/home/index'

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
