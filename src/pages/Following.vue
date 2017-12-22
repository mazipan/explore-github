<template>
  <div class="grid__row">

    <user-list 
      :list-user="userFollowing"
      :user-showing="userShowing"
      list-title="Following list from user">
    </user-list>
        
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserList from 'components/UserList.vue'

export default {
  name: 'FollowingPage',
  components: {UserList},
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
