import api from 'src/api'

export const state = {
  isShowSidebar: false,
  bookmarkUser: 'mazipan',
  userData: null,
  userRepositories: null,
  userFollowers: null,
  userFollowing: null,
  userSearchResult: null
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
    api.getUserData((response) => {
      commit('setUserData', response.body)
    }, null, username)
  },
  getUserRepositories ({commit}, data) {
    api.getUserRepositories((response) => {
      let array = response.body
      if (array) {
        array = array.sort(function (a, b) {
          let starA = a.stargazers_count
          let starB = b.stargazers_count
          return starB > starA ? 1 : starB < starA ? -1 : 0
        })
      }
      commit('setUserRepositories', array)
    }, null, data)
  },
  getUserFollowers ({commit}, data) {
    api.getUserFollowers((response) => {
      commit('setUserFollowers', response.body)
    }, null, data)
  },
  getUserFollowing ({commit}, data) {
    api.getUserFollowing((response) => {
      commit('setUserFollowing', response.body)
    }, null, data)
  },
  searchUser ({commit}, keyword) {
    api.searchUser((response) => {
      commit('setUserSearchResult', response.body)
    }, null, keyword)
  }
}


