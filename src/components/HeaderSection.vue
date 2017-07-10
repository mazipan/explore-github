<template>
  <header class="header">  
    <div class="header__sticky">
      <div class="header__nav">
        <button class="header__hamburger" @click="toggleSidebar">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <div class="header__content">
          <router-link to="/">
              <img class="header__brand" 
                    v-lazy="'/explore-github/static/images/github-explorer-white.png'" 
                    alt="Brand">
          </router-link>
      </div>
      <div class="header__nav">
        <button class="header__search" @click="toggleSearchBlock">
          <i class="fa fa-search"></i>
        </button>
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
        @click="doSearch">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
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

.header {
  height: 60px;

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
      text-align: left;
      padding-left: 15px;
      width: 50px;
    }
    &:last-child{
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