/* eslint-disable no-unused-vars */

import Vue from 'vue'
import config from './config'
const base_path = config.api.base_path

function getDataViaApi (path, cb, errorHandler, payload) {
  console.log('call api : ', path)
  Vue.http.get(path, {
    params: payload,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Cache-Control': 'no-cache'
    }
  }).then((res) => {
    cb(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

export default {
  getUserData: (cb, errorHandler, user) => {
    let path = `${base_path}users/${user}`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getUserRepositories: (cb, errorHandler, user) => {
    let path = `${base_path}users/${user}/repos`
    getDataViaApi(path, cb, errorHandler, null)
  }
}
