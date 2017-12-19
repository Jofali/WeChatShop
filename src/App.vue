<template>
  <div id="app">
    <router-view></router-view>
    <nav-wechatshop slot="bottom"></nav-wechatshop>
    <divider>
      <p>豫ICP备17025838号-1</p>
    </divider>
  </div>
</template>

<script>
import nav from './components/nav'
import { Divider } from 'vux'

export default {
  name: 'app',
  components: {
    'nav-wechatshop': nav,
    Divider
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/less/index.less';
</style>
