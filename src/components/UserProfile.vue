<template>
  <div class="profile">
    <img v-lazy="profileImg" class="profile__img" :alt="userData.name"/>

    <a class="thropy"  title="See Git Award"
      :href="'http://git-awards.com/users/search?login=' + userData.login" target="_blank" rel="noopener">
      <TrophyIcon w="50px" h="50px" />
    </a>

    <div class="is-bookmarked"
      :class="{'is-bookmarked--yes' : isBookmarked}" title="Bookmark User"
      @click="bookmarkUser">
      <IosBookmarksIcon w="50px" h="50px" />
    </div>

    <div class="profile__identity">
      <div class="profile__name">{{ userData.name }}</div>
      <small class="profile__login">{{ userData.login }}</small>
    </div>

    <div class="profile__bio">
      {{ userData.bio }}
    </div>
  </div>
</template>

<script>
import TrophyIcon from 'icons/trophy'
import IosBookmarksIcon from 'icons/ios-bookmarks'

export default {
  // http://git-awards.com/users/search?login=mazipan
  name: 'userprofile',
  props: ['userData', 'isBookmarked'],
  components: {
    TrophyIcon,
    IosBookmarksIcon
  },
  computed: {
    profileImg: function () {
      let img = 'assets/images/brand.png'
      if (this.userData && this.userData.avatar_url) {
        img = `${this.userData.avatar_url}&s=100`
      }
      return img
    }
  },
  methods: {
    bookmarkUser: function () {
      if (!this.isBookmarked) {
        this.$store.commit('setBookmarkUser', this.userData.login)
      } else alert('User has been bookmarked')
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile{
    text-align: center;
    color: #282828;

    &__img{
      height: 100px;
      border-radius: 50%;
      border: 5px solid #0096d9;
    }

    &__identity, &__bio {
      margin-bottom: 10px;
    }

    &__name{
      font-size: 24px;
      margin: 10px 0 0px;
    }

    &__login {
      color: #a49c9c;
      font-size: 16px;
    }

  }
  .thropy{
    position: absolute;
    top: 70px;
    left: 10px;
    cursor: pointer;
    color: #0096d9;
    font-size: 50px;
  }
  .is-bookmarked{
    position: absolute;
    top: 70px;
    right: 10px;
    cursor: pointer;
    color: #282828;

    &--yes{
      color: #0096d9;
    }
  }

</style>
