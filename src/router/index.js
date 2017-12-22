import Vue from 'vue'
import Router from 'vue-router'

import Home from 'src/pages/Home'
import Profile from 'src/pages/Profile'
import Repositories from 'src/pages/Repositories'
import Following from 'src/pages/Following'
import Followers from 'src/pages/Followers'
import SearchResult from 'src/pages/SearchResult'
import About from 'src/pages/About'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:user/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/:user/repositories',
      name: 'Repositories',
      component: Repositories
    },
    {
      path: '/:user/following',
      name: 'Following',
      component: Following
    },
    {
      path: '/:user/followers',
      name: 'Followers',
      component: Followers
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
