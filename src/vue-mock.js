import Vue from 'vue'
import VueResource from 'vue-resource'
import MockRoutes from 'src/api/mock'

let routes = MockRoutes.routes

import Url from 'url'

Vue.use(VueResource)

if (process.env.NODE_ENV !== 'production') {
  Vue.http.interceptors.unshift((request, next) => {
    let urlParse = Url.parse(request.url, true)
    let urlPath = urlParse.pathname
    let urlQuery = urlParse.query
    let route = routes.find((item) => {
      return (request.method === item.method && urlPath === item.url)
    })
    if (!route) {
      // we're just going to return a 404 here, since we don't want our test suite making a real HTTP request
      next(request.respondWith({status: 404, statusText: 'Oh no! Not found!'}))
    } else {
      let validParams = true
      let errors = {}

      if (route.param_body) {
        if (request.body) {
          let body = JSON.parse(request.body)
          for (let i in route.param_body) {
            if (typeof body[route.param_body[i]] === 'undefined') {
              validParams = false
              errors[route.param_body[i]] = ['BLANK', 'Required']
            }
          }
        } else {
          validParams = false
          for (let i in route.param_body) {
            validParams = false
            errors[route.param_body[i]] = ['BLANK', 'Required']
          }
        }
      }

      if (validParams && route.params) {
        for (let i in route.params) {
          if (typeof urlQuery[i] === 'undefined') {
            validParams = false
            errors[i] = ['BLANK', 'Required']
          }
        }
      }
      if (validParams) {
        next(
          request.respondWith(
            route.response,
            {status: 200}
          )
        )
      } else {
        next(
          request.respondWith(
            {
              code: 400,
              status: 'Error',
              errors: errors
            },
            {status: 400}
          )
        )
      }
    }
  })
}
