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
                    src="/explore-github/static/images/logo.png" 
                    alt="Brand">
          </router-link>
      </div>
      <div class="header__nav">
        <button class="header__search">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div> 
  </header>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    toggleSidebar: function () {
      this.$emit('toggleSidebar')
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

</style>