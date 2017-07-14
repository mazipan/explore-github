import api from 'src/api'

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
  setShowSidebar (state, value) {
    state.isShowSidebar = value
  },
  setBookmarkUser: (state, value) => {
    state.bookmarkUser = value
    localStorage.setItem('bookmarked-user', value)
  },
  setUserData (state, value) {
    state.userData = value
  },
  setUserRepositories (state, value) {
    state.userRepositories = value
  },
  setUserFollowers (state, value) {
    state.userFollowers = value
  },
  setUserFollowing (state, value) {
    state.userFollowing = value
  },
  setUserSearchResult (state, value) {
    state.userSearchResult = value
  },
  setUserActionTab (state, value) {
    state.userActionTab = value
  },
  setLoading (state, value) {
    state.loading = value
  }
}

export const actions = {
  readBookmarkUser ({commit}) {
    let user = localStorage.getItem('bookmarked-user')
    if (user) {
      commit('setBookmarkUser', user)
    } else {
      localStorage.setItem('bookmarked-user', state.bookmarkUser)
    }    
  },
  getUserData ({commit}, username) {
    commit('setLoading', true)
    api.getUserData((response) => {
      commit('setLoading', false)    
      commit('setUserData', response.body)
      let tabAct = {
        login: response.body.login,
        repos: response.body.public_repos,
        follower: response.body.followers,
        following: response.body.following,
        isOrg: response.body.type !== 'User',
        hideHome: state.bookmarkUser === response.body.login
      }
      commit('setUserActionTab', tabAct)
    }, () => {
      commit('setLoading', false)
    }, username)
  },
  getUserRepositories ({commit}, data) {
    commit('setLoading', true)
    api.getUserRepositories((response) => {
      commit('setLoading', false)
      let array = response.body
      if (array) {
        array = array.sort(function (a, b) {
          let starA = a.stargazers_count
          let starB = b.stargazers_count
          return starB > starA ? 1 : starB < starA ? -1 : 0
        })
      }
      commit('setUserRepositories', array)
    }, () => {
      commit('setLoading', false)
    }, data)
  },
  getUserFollowers ({commit}, data) {
    commit('setLoading', true)
    api.getUserFollowers((response) => {
      commit('setLoading', false)
      commit('setUserFollowers', response.body)
    }, () => {
      commit('setLoading', false)
    }, data)
  },
  getUserFollowing ({commit}, data) {
    commit('setLoading', true)
    api.getUserFollowing((response) => {
      commit('setLoading', false)
      commit('setUserFollowing', response.body)
    }, () => {
      commit('setLoading', false)
    }, data)
  },
  searchUser ({commit}, keyword) {
    commit('setLoading', true)
    api.searchUser((response) => {
      commit('setLoading', false)
      commit('setUserSearchResult', response.body)
    }, () => {
      commit('setLoading', false)
    }, keyword)
  }
}


