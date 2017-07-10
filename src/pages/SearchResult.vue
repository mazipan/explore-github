<template>
  <div class="grid__row">

    <user-list 
      :list-user="listResult"
      :user-showing="keyword"
      list-title="Search result for keyword">
    </user-list>
    
    <user-profile-action></user-profile-action>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserList from 'components/UserList'
import UserProfileAction from 'components/UserProfileAction'

export default {
  name: 'searchResult',
  components: {UserList, UserProfileAction},
  data () {
    return {
    }
  },
  computed: {
    listResult: function () {
      let res = []
      if (this.userSearchResult && this.userSearchResult.items.length > 0) {
        res = this.userSearchResult.items
      }
      return res
    },    
    keyword: function () {
      return this.$route.query.q
    },
    ...mapGetters(['userSearchResult'])    
  },
  mounted () {
    this.$store.dispatch('searchUser', this.keyword)
  }
}

</script>

<style lang="scss" scoped>

</style>
