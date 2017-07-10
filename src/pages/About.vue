<template>
  <div class="grid__row about">
    <img src="/explore-github/static/images/github-explorer-blue.png" />
    <h1>Vue Github Explorer</h1>
    <h5>See Source Code : 
      <a href="https://github.com/mazipan/explore-github" target="_blank">
        https://github.com/mazipan/explore-github
      </a>
    </h5>
    <h5>API by Github API v3 : 
      <a href="https://developer.github.com/v3/" target="_blank">
        https://developer.github.com/v3/
      </a>
    </h5>
    <br>
    <p>
      <h5>Crafted with <i class="fa fa-heart"></i> by : </h5>
      <a href="mailto:mazipanneh@gmail.com">
        <img src="https://camo.githubusercontent.com/bad35f239835c8c4799884f38312b36d023e8d93/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d617a6970616e6e65682d456d61696c2d79656c6c6f772e7376673f6d61784167653d33363030" alt="Email" data-canonical-src="https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600" style="max-width:100%;">
      </a>
      <a href="https://mazipanneh.com/blog/">
        <img src="https://camo.githubusercontent.com/0cb033a3662dda989da09a723930806e09fcd0d1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d617a6970616e6e65682d426c6f672d627269676874677265656e2e7376673f6d61784167653d33363030" alt="Website" data-canonical-src="https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600" style="max-width:100%;">
      </a>
      <a href="https://facebook.com/mazipanneh">
        <img src="https://camo.githubusercontent.com/32ea5ed2ddfc3e2b9d21710d902350f6a5fa8812/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d617a6970616e6e65682d46616365626f6f6b2d626c75652e7376673f6d61784167653d33363030" alt="Facebook" data-canonical-src="https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600" style="max-width:100%;">
      </a>
    </p>
    <p>
      <a href="https://twitter.com/Maz_Ipan"><img src="https://camo.githubusercontent.com/c0be088e4b84fc84e6a2175e0e15502a36a9b91b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d617a5f4970616e2d547769747465722d3535616365652e7376673f6d61784167653d33363030" alt="Twitter" data-canonical-src="https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600" style="max-width:100%;"></a>
      <a href="https://id.linkedin.com/in/irfanmaulanamazipan"><img src="https://camo.githubusercontent.com/9392a886805791fbeb47795c33c9a22bf61b67ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f697266616e6d61756c616e616d617a6970616e2d4c696e6b6564696e2d3030373762352e7376673f6d61784167653d33363030" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600" style="max-width:100%;"></a>
      <a href="https://www.slideshare.net/IrfanMaulana21"><img src="https://camo.githubusercontent.com/3da5e5aa2cb800cc3296d029f0fdb3c0fa0733b2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f497266616e4d61756c616e6132312d536c69646573686172652d3030373762352e7376673f6d61784167653d33363030" alt="Slideshare" data-canonical-src="https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600" style="max-width:100%;"></a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  computed: {}
}

</script>

<style lang="scss" scoped>
.about{
  text-align: center;

  a{
    color: #0096d9;
    text-decoration: none;
  }

  .fa-heart{
    color: red;
  }
}
</style>
