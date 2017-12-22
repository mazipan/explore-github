<template>
  <div class="grid__row">

    <div v-if="!showingUserData" class="empty-state">
      <svg version="1.1" width="100" height="100" viewBox="0 0 16 16" class="octicon octicon-broadcast" aria-hidden="true"><path fill-rule="evenodd" d="M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z"/></svg>
      <br/><br/>
      Bookmark user was not found!
      <br/>
    </div>
    <user-profile 
      :isBookmarked="isBookmarkUser"
      :userData="userData" 
      v-if="showingUserData">
    </user-profile>
    
    <repository-list 
      :repositories="userRepositories"
      v-if="showingRepoData">
    </repository-list>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserProfile from 'components/UserProfile'
import RepositoryList from 'components/RepositoryList'

export default {
  name: 'HomePage',
  components: {UserProfile, RepositoryList},
  data () {
    return {
      selectedUser: 'mazipan'
    }
  },
  computed: {
    showingUserData: function () {
      let self = this
      if (self.userData && self.userData.avatar_url) {
        return true
      } else return false
    },
    showingRepoData: function () {
      let self = this
      if (self.userRepositories && self.userRepositories.length > 0) {
        return true
      } else return false
    },
    ...mapGetters(['bookmarkUser', 'isBookmarkUser', 'userData', 'userRepositories'])    
  },
  activated () {
    let self = this
    if (self.userData === null) {
      console.log('user data null, bookmark user = ', self.bookmarkUser)
      self.$store.dispatch('getUserData', self.bookmarkUser)
      setTimeout(() => {
        self.$store.dispatch('getUserRepositories', self.bookmarkUser)
      }, 1000)
    } else if (self.userData.login !== self.bookmarkUser) {
      console.log('user data login ' + self.userData.login + ' !== bookmark user ', self.bookmarkUser)
      self.$store.dispatch('getUserData', self.bookmarkUser)
      setTimeout(() => {
        self.$store.dispatch('getUserRepositories', self.bookmarkUser)
      }, 1000)
    } else {
      console.log('else ', self.bookmarkUser)
    }
  }
}

</script>

<style lang="scss" scoped>
.empty-state{
  text-align: center;
  font-size: 24px;
  margin-top: 100px;
  color: #ccc;
}
</style>
