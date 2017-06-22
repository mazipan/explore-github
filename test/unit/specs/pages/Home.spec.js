import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import Home from 'src/pages/Home'

describe('Home.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Home)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
