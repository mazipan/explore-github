<template>
  <div class="grid__row">
    <h1>Hello World!</h1>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  
</style>
