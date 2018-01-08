import Vue from 'vue'
import Router from 'vue-router'

// read more about lazy loading router : https://router.vuejs.org/en/advanced/lazy-loading.html
const Home = () => import('pages/Home.vue')
const Profile = () => import('pages/Profile.vue')
const Repositories = () => import('pages/Repositories.vue')
const Following = () => import('pages/Following.vue')
const Followers = () => import('pages/Followers.vue')
const SearchResult = () => import('pages/SearchResult.vue')
const About = () => import('pages/About.vue')

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
