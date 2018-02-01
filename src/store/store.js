import axios from 'axios'
import { getCache, saveCache } from "@/cache";

const base_path = 'https://api.github.com/'
const CACHEKEY_USERDATA = 'USER_DATA_'
const CACHEKEY_USERREPO = 'USER_REPO_'
const CACHEKEY_USERFOLLOWER = 'USER_FOLLOWER_'
const CACHEKEY_USERFOLLOWING = 'USER_FOLLOWING_'
const CACHEKEY_USERSEARCH = 'USER_SEARCH_'

export const state = {
  isShowSidebar: false,
  bookmarkUser: 'mazipan',
  userData: {
    "login": "mazipan",
    "id": 7221389,
    "avatar_url": "https://avatars0.githubusercontent.com/u/7221389?v=4",
    "gravatar_id": "",
    "followers_url": "https://api.github.com/users/mazipan/followers",
    "following_url": "https://api.github.com/users/mazipan/following{/other_user}",
    "name": "Irfan Maulana",
    "bio": "JS & CSS Coder",
    "public_repos": 67,
    "followers": 209,
    "following": 146
  },
  userRepositories: [{
    "id": 85024408,
    "stargazers_count": 1,
    "name": "angular-indonesia-blogs",
    "html_url": "https://github.com/mazipan/angular-indonesia-blogs"
  },
  {
    "id": 85024771,
    "stargazers_count": 1,
    "name": "angular-indonesia-homepage",
    "html_url": "https://github.com/mazipan/angular-indonesia-homepage"
  },
  {
    "id": 84786946,
    "stargazers_count": 6,
    "name": "angularjs-basic-tutorial",
    "html_url": "https://github.com/mazipan/angularjs-basic-tutorial"
  },
  {
    "id": 71746668,
    "stargazers_count": 3,
    "name": "awesome-bemcss",
    "html_url": "https://github.com/mazipan/awesome-bemcss"
  },
  {
    "id": 106997826,
    "stargazers_count": 2,
    "name": "awesome-vue-list",
    "html_url": "https://github.com/mazipan/awesome-vue-list"
  }],
  userFollowers: null,
  userFollowing: null,
  userSearchResult: null,
  userActionTab: {
    login: 'mazipan',
    repos: 67,
    follower: 200,
    following: 146,
    isOrg: false,
    hideHome: false
  },
  loading: false
}

export const getters = {
  isShowSidebar: (state) => {
    return state.isShowSidebar
  },
  bookmarkUser: (state) => {
    return state.bookmarkUser
  },
  isBookmarkUser: (state) => {
    if (state.userData) {
      return state.bookmarkUser === state.userData.login
    }
    return false
  },
  userData: (state) => {
    return state.userData
  },
  userRepositories: (state) => {
    return state.userRepositories
  },
  userFollowers: (state) => {
    return state.userFollowers
  },
  userFollowing: (state) => {
    return state.userFollowing
  },
  userSearchResult: (state) => {
    return state.userSearchResult
  },
  userActionTab: (state) => {
    return state.userActionTab
  },
  isLoading: (state) => {
    return state.loading
  }
}

export const mutations = {
  setShowSidebar(state, value) {
    state.isShowSidebar = value
  },
  setBookmarkUser: (state, value) => {
    state.bookmarkUser = value
    localStorage.setItem('bookmarked-user', value)
  },
  setUserData(state, value) {
    state.userData = value
  },
  setUserRepositories(state, value) {
    state.userRepositories = value
  },
  setUserFollowers(state, value) {
    state.userFollowers = value
  },
  setUserFollowing(state, value) {
    state.userFollowing = value
  },
  setUserSearchResult(state, value) {
    state.userSearchResult = value
  },
  setUserActionTab(state, value) {
    state.userActionTab = value
  },
  setLoading(state, value) {
    state.loading = value
  }
}

export const actions = {
  readBookmarkUser({ commit }) {
    console.log('calling action readBookmarkUser()')
    let user = localStorage.getItem('bookmarked-user')
    if (user) {
      commit('setBookmarkUser', user)
    } else {
      localStorage.setItem('bookmarked-user', state.bookmarkUser)
    }
  },
  setUserActionTab({ commit }, data) {
    let userActionTab = {
      login: data.login,
      repos: data.public_repos,
      follower: data.followers,
      following: data.following,
      isOrg: data.type !== 'User',
      hideHome: state.bookmarkUser === data.login
    }
    commit('setUserActionTab', userActionTab)
  },
  getUserData({ commit, dispatch }, user) {
    console.log('calling action getUserData()')
    commit('setLoading', true)
    let cache = getCache(`${CACHEKEY_USERDATA}${user}`)
    if (cache) {
      commit('setLoading', false)
      commit('setUserData', cache)
      dispatch('setUserActionTab', cache)
    } else {
      axios.get(`${base_path}users/${user}`)
        .then(function (response) {
          console.log('response ', response.data)
          saveCache(`${CACHEKEY_USERDATA}${user}`, response.data)
          commit('setLoading', false)
          commit('setUserData', response.data)
          dispatch('setUserActionTab', response.data)
        })
        .catch(function (error) {
          commit('setLoading', false)
        });
    }
  },
  getUserRepositories({ commit }, user) {
    console.log('calling action getUserRepositories()')
    commit('setLoading', true)
    let cache = getCache(`${CACHEKEY_USERREPO}${user}`)
    if (cache) {
      commit('setLoading', false)
      cache = cache.sort(function (a, b) {
        let starA = a.stargazers_count
        let starB = b.stargazers_count
        return starB > starA ? 1 : starB < starA ? -1 : 0
      })
      commit('setUserRepositories', cache)
    } else {
      axios.get(`${base_path}users/${user}/repos?per_page=100`)
        .then(function (response) {
          console.log('response ', response.data)
          commit('setLoading', false)
          saveCache(`${CACHEKEY_USERREPO}${user}`, response.data)
          let array = response.data
          if (array) {
            array = array.sort(function (a, b) {
              let starA = a.stargazers_count
              let starB = b.stargazers_count
              return starB > starA ? 1 : starB < starA ? -1 : 0
            })
          }
          commit('setUserRepositories', array)
        })
        .catch(function (error) {
          commit('setLoading', false)
        });
    }

  },
  getUserFollowers({ commit }, user) {
    console.log('calling action getUserFollowers()')
    commit('setLoading', true)
    let cache = getCache(`${CACHEKEY_USERFOLLOWER}${user}`)
    if (cache) {
      commit('setLoading', false)
      commit('setUserFollowers', cache)
    } else {
      axios.get(`${base_path}users/${user}/followers`)
        .then(function (response) {
          console.log('response ', response.data)
          commit('setLoading', false)
          saveCache(`${CACHEKEY_USERFOLLOWER}${user}`, response.data)
          commit('setUserFollowers', response.data)
        })
        .catch(function (error) {
          commit('setLoading', false)
        });
    }

  },
  getUserFollowing({ commit }, user) {
    console.log('calling action getUserFollowing()')
    commit('setLoading', true)
    let cache = getCache(`${CACHEKEY_USERFOLLOWING}${user}`)
    if (cache) {
      commit('setLoading', false)
      commit('setUserFollowing', cache)
    } else {
      axios.get(`${base_path}users/${user}/following`)
        .then(function (response) {
          console.log('response ', response.data)
          commit('setLoading', false)
          saveCache(`${CACHEKEY_USERFOLLOWING}${user}`, response.data)
          commit('setUserFollowing', response.data)
        })
        .catch(function (error) {
          commit('setLoading', false)
        });
    }

  },
  searchUser({ commit }, keyword) {
    console.log('calling action searchUser()')
    commit('setLoading', true)
    let cache = getCache(`${CACHEKEY_USERSEARCH}${keyword}`)
    if (cache) {
      commit('setLoading', false)
      commit('setUserSearchResult', cache)
    } else {
      axios.get(`${base_path}search/users?q=${keyword}`)
        .then(function (response) {
          console.log('response ', response.data)
          commit('setLoading', false)
          saveCache(`${CACHEKEY_USERSEARCH}${keyword}`, response.data)
          commit('setUserSearchResult', response.data)
        })
        .catch(function (error) {
          commit('setLoading', false)
        });
    }
  }
}


