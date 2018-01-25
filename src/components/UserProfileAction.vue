<template>
  <div class="action">
    <div class="action__tab">
      <router-link to="/" class="action__link" v-if="!userActionTab.hideHomeIcon">
          <IosHomeIcon w="30px" h="30px"/>
      </router-link>
      <router-link :to="'/' + userActionTab.login + '/profile/'"  v-if="userActionTab.hideHomeIcon" class="action__link">
          <IosHomeIcon w="30px" h="30px"/>
      </router-link>
    </div>
    <div class="action__tab">
      <router-link :to="'/' + userActionTab.login + '/repositories/'" class="action__link">
        <IosBoxIcon w="30px" h="30px"/>
        <span class="action__badge" v-if="userActionTab.repos">{{ userActionTab.repos }}</span>
      </router-link>
    </div>
    <div class="action__tab" v-if="!userActionTab.isOrg">
      <router-link :to="'/' + userActionTab.login + '/followers/'" class="action__link">
        <IosPawIcon w="30px" h="30px"/>
        <span class="action__badge" v-if="userActionTab.followers">{{ userActionTab.followers }}</span>
      </router-link>
    </div>
    <div class="action__tab" v-if="!userActionTab.isOrg">
      <router-link :to="'/' + userActionTab.login + '/following/'" class="action__link">
        <IosPeopleIcon w="30px" h="30px"/>
        <span class="action__badge" v-if="userActionTab.following">{{ userActionTab.following }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import IosHomeIcon from 'icons/ios-home'
import IosBoxIcon from 'icons/ios-box'
import IosPawIcon from 'icons/ios-paw'
import IosPeopleIcon from 'icons/ios-people'
import HelpCircledIcon from 'icons/help-circled'
import AndroidContactIcon from 'icons/android-contact'

export default {
  name: 'userprofileaction',
  components: {
    IosHomeIcon,
    IosBoxIcon,
    IosPawIcon,
    IosPeopleIcon,
    HelpCircledIcon,
    AndroidContactIcon
  },
  computed: {
    userActionTab () {
      return this.$store.getters.userActionTab
    }
  },
}
</script>

<style lang="scss" scoped>
  .action {
    list-style: none;
    margin: 0;
    padding: 0;
    display: table;
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid grey;
    background: #0096d9;

    &__tab {
      width: 25%;
      display: table-cell;
      text-align: center;
    }

    &__link {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .7em 1.3em;
      color: #fff;
      text-decoration: none;

      .ion{
        fill: #fff;
      }
    }

    &__badge {
      font-size: 12px;
      padding: .25em .5em;
      line-height: 1;
      background-color: rgba(27,31,35,0.08);
      border-radius: 20px;
    }
  }
</style>
