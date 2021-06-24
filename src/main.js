import Vue from 'vue'
import App from './App.vue'

import './plugins/axios'
import './plugins/element.js'

import i18n from '@locales/i18n'
import router from './router'

i18n.locale = localStorage.getItem('localeLanguage') || 'en'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
