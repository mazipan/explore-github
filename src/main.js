/* eslint-disable space-before-blocks */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import router from 'src/router'
import store from 'src/store'
import App from 'App'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/explore-github/images/brand.png',
  loading: '/explore-github/images/loading.gif',
  attempt: 1
})

if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

require("octicons/build/octicons.min.css")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {App}
})
