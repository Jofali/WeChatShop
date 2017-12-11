<template>
  <div id="app">
    <router-view></router-view>
    <nav-wechatshop></nav-wechatshop>
  </div>
</template>

<script>
import nav from './components/nav'
export default {
  name: 'app',
  components: {
    'nav-wechatshop': nav
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/less/index.less';
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  ul{
    li{
      list-style: none;
    }
  }
  a{
    text-decoration: none;
    color: @link;
  }
}
</style>
