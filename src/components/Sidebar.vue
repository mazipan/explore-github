<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <div class="sidebar__head">
        <img v-lazy="'assets/images/github-explorer-white.png'">
      </div>
      <ul class="sidebar__menu">

        <li class="sidebar__item">
          <router-link to="/" @click.native="navigateTo" class="sidebar__link">
            <IosHomeIcon w="30px" h="30px"/>  Home
          </router-link>
        </li>

        <li class="sidebar__item">
          <router-link :to="'/' + userActionTab.login + '/profile/'"
             @click.native="navigateTo"
            v-if="userActionTab.hideHomeIcon" class="sidebar__link">
              <AndroidContactIcon w="30px" h="30px"/>  Profile
          </router-link>
        </li>

        <li class="sidebar__item">
          <router-link :to="'/' + userActionTab.login + '/repositories/'"
            @click.native="navigateTo"
            class="sidebar__link">
              <IosBoxIcon w="30px" h="30px"/>  Repositories
          </router-link>
        </li>

        <li class="sidebar__item" v-if="!userActionTab.isOrg">
          <router-link :to="'/' + userActionTab.login + '/followers/'"
            @click.native="navigateTo"
            class="sidebar__link">
              <IosPawIcon w="30px" h="30px"/>  Followers
          </router-link>
        </li>

        <li class="sidebar__item" v-if="!userActionTab.isOrg">
          <router-link :to="'/' + userActionTab.login + '/following/'"
            @click.native="navigateTo"
            class="sidebar__link">
              <IosPeopleIcon w="30px" h="30px"/>  Following
          </router-link>
        </li>

        <li class="sidebar__item">
          <router-link to="/about" @click.native="navigateTo" class="sidebar__link">
              <HelpCircledIcon w="30px" h="30px"/> About
          </router-link>
        </li>

      </ul>
    </div>
  </aside>
</template>

<script>
import IosHomeIcon from 'icons/ios-home'
import IosBoxIcon from 'icons/ios-box'
import IosPawIcon from 'icons/ios-paw'
import IosPeopleIcon from 'icons/ios-people'
import HelpCircledIcon from 'icons/help-circled'
import AndroidContactIcon from 'icons/android-contact'

export default {
  name: 'Sidebar',
  components: {
    IosHomeIcon,
    IosBoxIcon,
    IosPawIcon,
    IosPeopleIcon,
    HelpCircledIcon,
    AndroidContactIcon
  },
  computed: {
    isShowSidebar () {
      return this.$store.getters.isShowSidebar
    },
    userActionTab () {
      return this.$store.getters.userActionTab
    }
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
      display: flex;
      align-items: center;
    }
  }

</style>
