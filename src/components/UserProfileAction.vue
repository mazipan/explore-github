<template>
  <div class="action">
    <div class="action__tab">        
      <router-link to="/" class="action__link" v-if="!userActionTab.hideHomeIcon">
        <i class="fa fa-home action__icon"></i>          
      </router-link>    
      <router-link :to="'/' + userActionTab.login + '/profile/'"  v-if="userActionTab.hideHomeIcon" class="action__link">
        <i class="fa fa-user action__icon"></i>          
      </router-link>
    </div>
    <div class="action__tab"  v-if="!userActionTab.isOrg">        
      <router-link :to="'/' + userActionTab.login + '/repositories/'" class="action__link">
        <i class="fa fa-cubes action__icon"></i>   
        <span class="action__badge" v-if="userActionTab.repos">{{ userActionTab.repos }}</span>            
      </router-link>
    </div>
    <div class="action__tab"  v-if="!userActionTab.isOrg">
      <router-link :to="'/' + userActionTab.login + '/followers/'" class="action__link">
        <i class="fa fa-paw action__icon"></i>   
        <span class="action__badge" v-if="userActionTab.followers">{{ userActionTab.followers }}</span>  
      </router-link>
    </div>
    <div class="action__tab"  v-if="!userActionTab.isOrg">
      <router-link :to="'/' + userActionTab.login + '/following/'" class="action__link">
        <i class="fa fa-users action__icon"></i>   
        <span class="action__badge" v-if="userActionTab.following">{{ userActionTab.following }}</span>  
      </router-link>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'userprofileaction',
  computed: {
    ...mapGetters(['userActionTab'])
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
      display: block;
      padding: .7em 1.3em;
      color: #fff;
      text-decoration: none;
    }

    &__icon {    
      font-size: 24px;
    }

    &__badge {
      font-size: 12px;
      padding: 2px 5px;
      line-height: 1;
      background-color: rgba(27,31,35,0.08);
      border-radius: 20px;
    }
  }
</style>
