/* eslint-disable space-before-blocks */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from 'src/router'
import store from 'src/store'
import App from 'App'

Vue.use(VueResource)

if (process.env.NODE_ENV !== 'production') {
  require('vue-mock')
  Vue.config.devtools = true
}

require("octicons/build/octicons.min.css")
/* -- CEK SVG 
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
