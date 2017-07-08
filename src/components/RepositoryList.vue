<template>
  <ul class="repos">
    <li class="repo" v-for="repo in repositories">
      <a href="#">
        <svg v-if="repo.fork" aria-hidden="true" class="octicon octicon-git-branch" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        <svg v-if="!repo.fork" version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-repo" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
        <div class="repo__name">{{ repo.name }}</div>
        <span class="star">
          {{ repo.stargazers_count }}
          <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        </span>
     </a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'repositorylist',
  props: ['repositories'],
  computed: {
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
.repos{
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: #fff;
    border: 1px #d1d5da solid;
    border-radius: 3px;
    margin: 0 0 60px;
}

.repo{
  .octicon{
    color: #282828;
    top: 14px;
    left: 12px;
    width: 16px;
    text-align: center;
    vertical-align: bottom;
  }
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

  &__name{
    display: inline-block;
    width: 70%;
    line-height: 1.2;
    vertical-align: top;
    word-wrap: break-word;

  }
}

.star{
  float: right;
  margin-bottom: 3px;
  margin-right: 25px;
  font-size: 12px;
  color: #6a737d;
}
</style>