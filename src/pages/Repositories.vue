<template>
  <div class="grid__row">

    <repository-list 
      :repositories="userRepositories">
    </repository-list>

    <user-profile-action 
      :hideHomeIcon="true"
      :userShowing="userShowing">
    </user-profile-action>
    
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserProfileAction from 'components/UserProfileAction'
import RepositoryList from 'components/RepositoryList'

export default {
  name: 'repositories',
  components: {UserProfileAction, RepositoryList},
  computed: {
    userShowing: function () {
      return this.$route.params.user
    },
    ...mapGetters(['userRepositories'])   
  },
  mounted () {
    if (this.userRepositories === null) {
      this.$store.dispatch('getUserRepositories', this.userShowing)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
