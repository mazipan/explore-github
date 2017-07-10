/* eslint-disable no-unused-vars */

import Vue from 'vue'
import config from './config'
const base_path = config.api.base_path

function getDataViaApi (path, cb, errorHandler, payload) {

  let sessionRes = checkDataFromStorage(path)
  if (sessionRes !== null) {
    console.log('Read from session data : ', path)
    cb(sessionRes)
  } else {
    Vue.http.get(path, {
      params: payload,
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    }).then((res) => {
      console.log('You just call api : ', path)
      saveDataToStorage(path, res)
      cb(res)
    }, (error) => {
      console.log('Sorry, api ' + path + ' error : ', error)
      if (typeof errorHandler === 'function') {
        errorHandler(error)
      }
    })
  }  
}

function saveDataToStorage (path, data) {
  try {
    let dataString = JSON.stringify(data)
    sessionStorage.setItem(path, dataString)    
  } catch (error) {
    console.log('failed save to storage', error)
  }
}

function checkDataFromStorage (path) {
  let res = null
  try {
    let sessionDataString = sessionStorage.getItem(path)
    res = JSON.parse(sessionDataString)
  } catch (error) {
    console.log('failed read to storage', error)
  }
  return res
}

export default {
  getUserData: (cb, errorHandler, user) => {
    let path = `${base_path}users/${user}`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getUserRepositories: (cb, errorHandler, user) => {
    let path = `${base_path}users/${user}/repos?per_page=100`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getUserFollowers: (cb, errorHandler, user) => {
    let path = `${base_path}users/${user}/followers`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getUserFollowing: (cb, errorHandler, user) => {
    let path = `${base_path}users/${user}/following`
    getDataViaApi(path, cb, errorHandler, null)
  },
  searchUser: (cb, errorHandler, keyword) => {
    let path = `${base_path}search/users?q=${keyword}`
    getDataViaApi(path, cb, errorHandler, null)
  }
}
