<template>
  <div class="action">
    <div class="action__tab">        
      <router-link to="/" class="action__link" v-if="!hideHomeIcon">
        <i class="fa fa-home action__icon"></i>          
      </router-link>    
      <router-link :to="'/' + userShowing + '/profile/'"  v-if="hideHomeIcon" class="action__link">
        <i class="fa fa-user action__icon"></i>          
      </router-link>
    </div>
    <div class="action__tab">        
      <router-link :to="'/' + userShowing + '/repositories/'" class="action__link">
        <i class="fa fa-cubes action__icon"></i>   
        <span class="action__badge" v-if="repos">{{ repos }}</span>            
      </router-link>
    </div>
    <div class="action__tab">
      <router-link :to="'/' + userShowing + '/followers/'" class="action__link">
        <i class="fa fa-paw action__icon"></i>   
        <span class="action__badge" v-if="followers">{{ followers }}</span>  
      </router-link>
    </div>
    <div class="action__tab">
      <router-link :to="'/' + userShowing + '/following/'" class="action__link">
        <i class="fa fa-users action__icon"></i>   
        <span class="action__badge" v-if="following">{{ following }}</span>  
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userprofileaction',
  props: ['userShowing', 'repos', 'followers', 'following', 'hideHomeIcon']
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
