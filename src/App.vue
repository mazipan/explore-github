<template>
  <div class="VueApp grid__row">


    <div class="sidebar-cover" v-show="isShowSidebar" @click="hideSidebar"></div>
    <sidebar v-bind:class="{'sidebar--open': isShowSidebar}"></sidebar>

    <header-section @toggleSidebar="toggleSidebar"></header-section>

    <div class="loading" v-show="isLoading">
      <img src="assets/images/loading.gif" alt="Loading">
    </div>

    <div class="main">
      <transition
        name="fade"
        mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

    <user-profile-action></user-profile-action>

    <simplert></simplert>

  </div>
</template>

<script>
import Sidebar from 'components/Sidebar.vue'
import HeaderSection from 'components/HeaderSection.vue'
import UserProfileAction from 'components/UserProfileAction.vue'

export default {
  name: 'app',
  components: {Sidebar, HeaderSection, UserProfileAction},
  computed: {
    isShowSidebar () {
      return this.$store.getters.isShowSidebar
    },
    userData () {
      return this.$store.getters.userData
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  created () {
    this.$store.dispatch('readBookmarkUser')
  },
  methods: {
    toggleSidebar: function () {
      this.$store.commit('setShowSidebar', !this.isShowSidebar)
    },
    hideSidebar: function () {
      this.$store.commit('setShowSidebar', false)
    }
  }
}
</script>

<style lang="scss">
  // import ionicons global scss
  @import "~vue-ionicons/ionicons.scss";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .sidebar-cover{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0px; right: 0px; bottom: 0px; left: 0px;
    height: 100%;
    z-index: 19;
  }
  .loading{
    text-align: center;
    padding-top: 50px;
  }
</style>
