<template>
  <div class="grid__row">

    <user-list 
      :list-user="userFollowers"
      :user-showing="userShowing"
      list-title="Followers of user">
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
  name: 'FollowersPage',
  components: {UserList, UserProfileAction},
  computed: {
    userShowing: function () {
      return this.$route.params.user
    },
    ...mapGetters(['userFollowers'])  
  },
  activated () {
    this.$store.dispatch('getUserFollowers', this.userShowing)
  }
}

</script>

<style lang="scss" scoped>

</style>
