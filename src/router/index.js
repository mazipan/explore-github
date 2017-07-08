import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: view('Home')
    },
    {
      path: '/:user/profile/',
      name: 'Profile',
      component: view('Profile')
    },
    {
      path: '/:user/repositories',
      name: 'Repositories',
      component: view('Repositories')
    },
    {
      path: '/:user/following',
      name: 'Following',
      component: view('Following')
    },
    {
      path: '/:user/followers',
      name: 'Followers',
      component: view('Followers')
    }
  ]
})

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view (name) {
  return function (resolve) {
    require(['../pages/' + name + '.vue'], resolve)
  }
}

window.activeCollabRouter = router

export default router
