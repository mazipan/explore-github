<template>
  <div class="grid__row about">
    <img v-lazy="'assets/images/github-explorer-blue.png'" />
    <h1>Vue Github Explorer</h1>
    <h5>See Source Code :
      <a href="https://github.com/mazipan/explore-github" target="_blank" rel="noopener">
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
    <div>
      <h5>Crafted with <i class="fa fa-heart"></i> by : </h5>
      <a href="mailto:mazipanneh@gmail.com">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600'" alt="Email" class="badge">
      </a>
      <a href="https://mazipanneh.com/blog/">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600'" alt="Website" class="badge">
      </a>
      <a href="https://facebook.com/mazipanneh">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600'" alt="Facebook" class="badge">
      </a>
    </div>
    <div>
      <a href="https://twitter.com/Maz_Ipan">
      <img v-lazy="'https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600'" alt="Twitter"  class="badge"></a>
      <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
      <img v-lazy="'https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600'" alt="Linkedin" class="badge"></a>
      <a href="https://www.slideshare.net/IrfanMaulana21">
      <img v-lazy="'https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600'" alt="Slideshare" class="badge"></a>
    </div>
  </div>
</template>

<script>
import constant from '@/constant'

export default {
  name: 'AboutPage',
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

  .fa-heart{
    color: red;
  }

  .badge{
    width: auto;
    height: 20px;
  }
}
</style>
