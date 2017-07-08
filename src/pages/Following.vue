<template>
  <div class="grid__row">

    Following
    
    <user-profile-action 
      :hideHomeIcon="true"
      :userShowing="userShowing">
    </user-profile-action>
  </div>
</template>

<script>

import UserProfileAction from 'components/UserProfileAction'

export default {
  name: 'following',
  components: {UserProfileAction},
  computed: {
    userShowing: function () {
      return this.$route.params.user
    } 
  }
}

</script>

<style lang="scss" scoped>

</style>
