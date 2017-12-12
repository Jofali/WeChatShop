<template>
  <div id="app">
    <view-box ref="viewBox">
    <router-view></router-view>
    <nav-wechatshop slot="bottom"></nav-wechatshop>
    </view-box>
  </div>
</template>

<script>
import nav from './components/nav'
import { ViewBox } from 'vux'
export default {
  name: 'app',
  components: {
    'nav-wechatshop': nav,
    ViewBox
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/less/index.less';
</style>
