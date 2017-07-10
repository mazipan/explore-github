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

    <user-profile-action 
      :userShowing="userShowing"
      :repos="userData.public_repos" 
      :followers="userData.followers" 
      :following="userData.following" 
      v-if="showingUserData">
    </user-profile-action>
    
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserProfile from 'components/UserProfile'
import UserProfileAction from 'components/UserProfileAction'
import RepositoryList from 'components/RepositoryList'

export default {
  name: 'ProfilePage',
  components: {UserProfile, UserProfileAction, RepositoryList},
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
  mounted () {
    if (this.userData === null) {
      this.$store.dispatch('getUserData', this.userShowing)
      this.$store.dispatch('getUserRepositories', this.userShowing)
    } else if (this.userData.login !== this.userShowing) {
      this.$store.dispatch('getUserData', this.userShowing)
      this.$store.dispatch('getUserRepositories', this.userShowing)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
