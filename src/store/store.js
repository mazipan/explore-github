import axios from 'axios'
const base_path = 'https://api.github.com/'

export const state = {
  isShowSidebar: false,
  bookmarkUser: 'mazipan',
  userData: null,
  userRepositories: null,
  userFollowers: null,
  userFollowing: null,
  userSearchResult: null,
  userActionTab: {
    login: 'mazipan',
    repos: '',
    follower: '',
    following: '',
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
    let user = localStorage.getItem('bookmarked-user')
    if (user) {
      commit('setBookmarkUser', user)
    } else {
      localStorage.setItem('bookmarked-user', state.bookmarkUser)
    }
  },
  getUserData({ commit }, user) {
    commit('setLoading', true)
    axios.get(`${base_path}users/${user}`)
      .then(function (response) {
        commit('setLoading', false)
        commit('setUserData', response.data)
        let tabAct = {
          login: response.data.login,
          repos: response.data.public_repos,
          follower: response.data.followers,
          following: response.data.following,
          isOrg: response.data.type !== 'User',
          hideHome: state.bookmarkUser === response.data.login
        }
      })
      .catch(function (error) {
        commit('setLoading', false)
      });
  },
  getUserRepositories({ commit }, user) {
    commit('setLoading', true)
    axios.get(`${base_path}users/${user}/repos?per_page=100`)
      .then(function (response) {
        commit('setLoading', false)
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
  },
  getUserFollowers({ commit }, user) {
    commit('setLoading', true)
    axios.get(`${base_path}users/${user}/followers`)
      .then(function (response) {
        commit('setLoading', false)
        commit('setUserFollowers', response.data)
      })
      .catch(function (error) {
        commit('setLoading', false)
      });
  },
  getUserFollowing({ commit }, user) {
    commit('setLoading', true)
    axios.get(`${base_path}users/${user}/following`)
      .then(function (response) {
        commit('setLoading', false)
        commit('setUserFollowing', response.data)
      })
      .catch(function (error) {
        commit('setLoading', false)
      });
  },
  searchUser({ commit }, keyword) {
    commit('setLoading', true)
    axios.get(`${base_path}search/users?q=${keyword}`)
      .then(function (response) {
        commit('setLoading', false)
        commit('setUserSearchResult', response.data)
      })
      .catch(function (error) {
        commit('setLoading', false)
      })
  }
}


