<template>
  <header class="header">
    <div class="header__sticky">
      <div class="header__nav">
        <a class="header__hamburger" href="javascript:void(0)" @click="toggleSidebar" title="Open Sidebar">
          <AndroidMenuIcon w="30px" h="30px" />
        </a>
      </div>
      <div class="header__content">
          <router-link to="/">
              <img class="header__brand"
                    v-lazy="'assets/images/github-explorer-white.png'"
                    alt="Brand">
          </router-link>
      </div>
      <div class="header__nav pointer">
        <a class="header__search" href="javascript:void(0)" @click="toggleSearchBlock" title="Search User">
          <AndroidSearchIcon w="30px" h="30px" />
        </a>
      </div>
    </div>
    <div class="search" v-if="showSearchBlock">
      <input
        type="text"
        name="keyword"
        placeholder="Type keyword to search"
        class="search__text"
        @keyup.enter="doSearch"
        v-model="keyword"/>
      <button
        class="search__btn"
        @click="doSearch"  title="Search User">
          <AndroidSearchIcon w="1em" h="1em" />
      </button>
    </div>
  </header>
</template>

<script>
import AndroidMenuIcon from 'icons/android-menu'
import AndroidSearchIcon from 'icons/android-search'

export default {
  name: 'Header',
  components: {
    AndroidMenuIcon,
    AndroidSearchIcon
  },
  data () {
    return {
      showSearchBlock: false,
      keyword: ''
    }
  },
  methods: {
    toggleSidebar: function () {
      this.$emit('toggleSidebar')
    },
    toggleSearchBlock: function () {
      this.showSearchBlock = !this.showSearchBlock
    },
    doSearch: function () {
      if (this.keyword !== '') {
        this.showSearchBlock = false
        this.$router.push('/search/?q=' + this.keyword)
        this.keyword = ''
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.pointer{
  cursor: pointer;
}
.header {
  height: 60px;
  color: #fff;

  &__sticky{
    position: fixed; top: 0; right: 0; left: 0;
    z-index: 10;
    display: table;
    margin: 0;
    height: 60px;
    background: #0096d9;
    text-align: center;
    color: #fff;
    width: 100%;
  }

  &__content {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  &__brand{
    width: auto;
    height: 50px;
  }
  &__nav {
    color: #fff;
    display: table-cell;
    vertical-align: middle;

    &:first-child{
      color: #fff;
      text-align: left;
      padding-left: 15px;
      width: 50px;
    }
    &:last-child{
      color: #fff;
      text-align: right;
      padding-right: 15px;
      width: 50px;
    }
  }

  &__hamburger, &__search {
    background: none;
    border: none;
    padding: 0;
    outline: none;
    color: #fff;
    font-size: 30px;
  }
}

.search{
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    text-align: center;
    color: #fff;
    border-bottom: .5em solid #0096d9;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text{
      width: 100%;
      padding: 12px;
      outline: none;
      border: 0;
    }
    &__btn{
      width: 70px;
      padding: 12px;
      outline: none;
      border: 0;
    }
}
</style>
