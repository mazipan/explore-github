<template>
  <div class="grid__row about">
    <img v-lazy="'assets/images/github-explorer-blue.png'" />
    <h1>Vue Github Explorer</h1>
    <h5>See Source Code :
      <a href="https://github.com/mazipan/explore-github"
          target="_blank" rel="noopener">
        https://github.com/mazipan/explore-github
      </a>
    </h5>
    <h5>API by Github API v3 :
      <a href="https://developer.github.com/v3/" target="_blank" rel="noopener">
        https://developer.github.com/v3/
      </a>
    </h5>

    <div class="google-ads">
      <InArticleAdsense
          root-class="wrapper VueInArticleAdsense"
          :data-ad-client="client"
          :data-ad-slot="slot">
      </InArticleAdsense>
    </div>

    <br>

    <div class="author">
          <CodeIcon />
          with
          <AndroidFavoriteIcon />
          by&nbsp;
          <a href="https://github.com/mazipan"
              target="_blank" rel="noopener">
              Irfan Maulana
          </a>
    </div>

    <div class="author">
      Copyright © 2017
    </div>


  </div>
</template>

<script>
import constant from '@/constant'
import AndroidFavoriteIcon from 'icons/android-favorite'
import CodeIcon from 'icons/code'

export default {
  name: 'AboutPage',
  components: {
    AndroidFavoriteIcon,
    CodeIcon
  },
  data () {
    return {
      slot: constant.ADS.slotInArticle,
      client: constant.ADS.client
    }
  }
}

</script>

<style lang="scss" scoped>
.google-ads{
  width: 90%;
}
.about{
  text-align: center;

  a{
    color: #0096d9;
    text-decoration: none;
  }
  .badge{
    width: auto;
    height: 20px;
  }
  .author{
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
}
.ion{
  fill: red;
  margin: 0 5px;
}
</style>
