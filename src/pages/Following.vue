<template>
  <div class="grid__row">

    <user-list 
      :list-user="userFollowing"
      :user-showing="userShowing"
      list-title="Following list from user">
    </user-list>
    
    <user-profile-action 
      :hide-home-icon="true"
      :user-showing="userShowing">
    </user-profile-action>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserList from 'components/UserList'
import UserProfileAction from 'components/UserProfileAction'

export default {
  name: 'FollowingPage',
  components: {UserList, UserProfileAction},
  computed: {
    userShowing: function () {
      return this.$route.params.user
    },
    ...mapGetters(['userFollowing'])  
  },
  activated () {
    this.$store.dispatch('getUserFollowing', this.userShowing)
  }
}

</script>

<style lang="scss" scoped>

</style>
