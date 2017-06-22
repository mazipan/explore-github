/* eslint-disable space-before-blocks */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import {store} from './store'
import App from 'App'

if (process.env.NODE_ENV !== 'production') {
  if (process.env.MOCK_ENV === 'mock') {
    require('vue-mock')
  }
  Vue.config.devtools = true
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {App}
})
