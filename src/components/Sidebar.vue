<template>
  <aside class="sidebar">    
    <div class="sidebar__content">  
      <div class="sidebar__head">      
        <img v-lazy="'/explore-github/static/images/github-explorer-white.png'">
      </div>    
      <ul class="sidebar__menu">    

        <li class="sidebar__item">
          <router-link to="/" @click.native="navigateTo" class="sidebar__link">
            <i class="fa fa-home"></i> Home
          </router-link>
        </li>

        <li class="sidebar__item">
          <router-link to="/about" @click.native="navigateTo" class="sidebar__link">
            <i class="fa fa-question-circle"></i> About
          </router-link>
        </li>

      </ul>
    </div>
  </aside>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['isShowSidebar'])
  },
  methods: {
    navigateTo: function (e) {
      this.$store.commit('setShowSidebar', false)
      e.preventDefault()
    },
    hideSidebar: function () {
      this.$store.commit('setShowSidebar', false)
    }
  }
}

</script>

<style lang="scss" scoped>

 .sidebar {
    position: fixed; top: 0; bottom: 0; left: 0;
    overflow: hidden;
    width: 70%;
    height: 40em;
    height: 100vh;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 20;
    transform: translateX(-100%);
    -webkit-transition: transform 300ms;
       -moz-transition: transform 300ms;
         -o-transition: transform 300ms;
            transition: transform 300ms;    

    &--open {
      -ms-transform: translateX(0);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    &__head {
      height: 60px;
      background-color: #0096d9;
      img {
        height: 50px;
        padding: 5px 0 0 15px;
      }
    }

    &__content {
      position: absolute;
      top: 0; right: 0; ; bottom: 0; left: 0;
      z-index: 1;
      overflow: auto;
      background: #fff;
    }
    
    &__menu {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    &__link {
      display: block;
      color: #000;
      text-decoration: none;
      padding: 15px 25px;
      font-size: 16px;

      i {
        font-size: 24px;
        margin-right: 15px;
        vertical-align: middle;
      }
    }
  }

</style>