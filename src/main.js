/* eslint-disable space-before-blocks */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

import router from 'src/router'
import store from 'src/store'
import App from 'App'

Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/explore-github/static/images/brand.png',
  loading: '/explore-github/static/images/loading.gif',
  attempt: 1
})

if (process.env.NODE_ENV !== 'production') {
  // require('vue-mock')
  Vue.config.devtools = true
}

require("octicons/build/octicons.min.css")
/*
-- CEK SVG
var octicons = require("octicons")
let svg = octicons.broadcast.toSVG({ "width": 100 })
console.log(svg)
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {App}
})
