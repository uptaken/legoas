import Vue from 'vue'

import moment from 'moment'
import $ from 'jquery'
import axios from 'axios'
import I18n from "i18n-js"
import Toasted from 'vue-toasted'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons'

// Register components in your 'main.js'
import "@/assets/scss/app.scss";

import App from './App.vue'
import router from './router'
import i18n from './utils/i18n'

library.add(faUserSecret)
library.add(faPhone)
library.add(faFacebook)
library.add(faTwitter)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

window.$ = $
window.axios = axios
window.I18n = I18n
window.moment = moment
window.base_url = ''

window.axios.defaults.headers['Authorization'] = localStorage.token
window.axios.defaults.headers['Content-Type'] = 'application/json'

Vue.use(Toasted, {
  position: 'top-right',
  duration: 5000,
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
