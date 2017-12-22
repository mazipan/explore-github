<template>
  <div class="grid__row">

    <user-list 
      :list-user="userFollowers"
      :user-showing="userShowing"
      list-title="Followers of user">
    </user-list>
        
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserList from 'components/UserList.vue'

export default {
  name: 'FollowersPage',
  components: {UserList},
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
