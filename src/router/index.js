import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Profile from '../pages/Profile.vue'
import Repositories from '../pages/Repositories.vue'
import Following from '../pages/Following.vue'
import Followers from '../pages/Followers.vue'
import SearchResult from '../pages/SearchResult.vue'
import About from '../pages/About.vue'

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
