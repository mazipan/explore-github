import Vue from 'vue'
import Router from 'vue-router'

// read more about lazy loading router : https://router.vuejs.org/en/advanced/lazy-loading.html
const Home = () => import(/* webpackChunkName: "home" */ 'pages/Home.vue')
const Profile = () => import(/* webpackChunkName: "profile" */ 'pages/Profile.vue')
const Repositories = () => import(/* webpackChunkName: "repo" */ 'pages/Repositories.vue')
const Following = () => import(/* webpackChunkName: "following" */ 'pages/Following.vue')
const Followers = () => import(/* webpackChunkName: "followers" */ 'pages/Followers.vue')
const SearchResult = () => import(/* webpackChunkName: "search" */ 'pages/SearchResult.vue')
const About = () => import(/* webpackChunkName: "about" */ 'pages/About.vue')

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
