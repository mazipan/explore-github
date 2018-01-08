<template>
  <div>
    <div v-if="isEmptyResult" class="empty-state">
      <svg version="1.1" width="100" height="100" viewBox="0 0 16 16" class="octicon octicon-broadcast" aria-hidden="true"><path fill-rule="evenodd" d="M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z"/></svg>
      <br/><br/>
      Not found any list here, Keep Work!
      <br/>
    </div>
    <div v-if="!isEmptyResult" class="title">
      {{ listTitle }} <b><i>{{ userShowing }}</i></b>
    </div>
    <ul class="results">
      <li v-for="(res, index) in listUser" :key="res.id" class="result">
        <div class="google-ads" v-if="index === 5">
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ins class="adsbygoogle"
              style="display:block"
              data-ad-format="fluid"
              data-ad-layout-key="-fg+5n+6t-e7+r"
              data-ad-client="ca-pub-5442972248172818"
              data-ad-slot="2105028631"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
        <router-link :to="'/' + res.login + '/profile/'">
          <img class="result__img" v-lazy="res.avatar_url" />
          <span class="result__name">{{ res.login }}</span>
          <i class="fa fa-chevron-right icon"></i>
        </router-link>
      </li>
    </ul>
</div>
</template>

<script>

export default {
  name: 'followerlist',
  props: ['listUser', 'listTitle', 'userShowing'],
  computed: {
    isEmptyResult: function () {
      let res = true
      if (this.listUser && this.listUser.length > 0) {
        res = false
      }
      return res
    }
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
.google-ads{
  width: 100%;
  height: 100px;
}
.empty-state{
  text-align: center;
  font-size: 24px;
  margin-top: 100px;
  color: #ccc;
}
.results{
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: #fff;
    border: 1px #d1d5da solid;
    border-radius: 3px;
    margin: 0 0 60px;
}
.result{
  &:first-child{
    a{
      border-top: 0;
    }
  }
  a {
    position: relative;
    display: block;
    padding: 14px 15px 14px 14px;
    line-height: inherit;
    text-align: left;
    color: #0096d9;
    text-decoration: none;
    border-top: 1px solid #eaecef;
  }

  &__img{
    height: 40px;
    width: 40px;
    vertical-align: middle;
    margin-right: 15px;
    border-radius: 50%;
    border: 2px solid #0096d9;
  }
  &__name{
    font-size: 24px;
  }
}
.title{
  margin: 10px;
  font-size: 24px;
}
.icon{
  float: right;
  padding-top: 10px;
  font-size: 24px;
  color: #DDD;
}
</style>
