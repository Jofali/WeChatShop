<template>
  <div id="news">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'news'
      }
    }
  }
</script>

<style lang="less" scoped>
  #news {
    padding-bottom: 50px;
  }
</style>
