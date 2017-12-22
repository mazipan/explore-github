<template>
  <div class="grid__row">

    <div class="title">
      Repository list for user <b><i>{{userShowing}}</i></b>
    </div>

    <repository-list 
      :repositories="userRepositories">
    </repository-list>
    
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import RepositoryList from 'components/RepositoryList.vue'

export default {
  name: 'RepositoriesPage',
  components: {RepositoryList},
  computed: {
    userShowing: function () {
      return this.$route.params.user
    },
    ...mapGetters(['userRepositories'])   
  },
  activated () {
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
