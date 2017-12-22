<template>
  <div class="grid__row">

    <user-list 
      :list-user="listResult"
      :user-showing="keyword"
      list-title="Search result for keyword">
    </user-list>
    
  </div>
</template>

<script>
import UserList from 'components/UserList.vue'

export default {
  name: 'searchResult',
  components: {UserList},
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
    userSearchResult () {
      return this.$store.getters.userSearchResult
    }
  },
  activated () {
    this.$store.dispatch('searchUser', this.keyword)
  }
}

</script>

<style lang="scss" scoped>

</style>
