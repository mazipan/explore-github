<template>
  <div class="grid__row">

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
  name: 'ProfilePage',
  components: {UserProfile, RepositoryList},
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
    userShowing: function () {
      return this.$route.params.user
    },
    ...mapGetters(['isBookmarkUser', 'userData', 'userRepositories'])   
  },
  activated () {
    let self = this
    let callApi = () => {      
      self.$store.dispatch('getUserData', self.userShowing)
      setTimeout(() => {
        self.$store.dispatch('getUserRepositories', self.userShowing)
      }, 1000)
    }
    
    if (self.userData === null) {
      callApi()
    } else if (self.userData.login !== self.userShowing) {
      callApi()
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
