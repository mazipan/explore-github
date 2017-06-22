import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import App from 'src/App'

describe('App.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
