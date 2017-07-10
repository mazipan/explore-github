<template>
  <div class="grid__row">

    <div class="title">
      Repository list for user <b><i>{{userShowing}}</i></b>
    </div>

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
  name: 'RepositoriesPage',
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
.title{
  margin: 10px;
  font-size: 24px;
}
</style>
