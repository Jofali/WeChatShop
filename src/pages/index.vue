<template>
  <div id="index">
    <div class="logo">
      <img src="http://mycdn.lgwow.com/img/logo.png" alt="">
    </div>
    <hot-list></hot-list>
    <new-list></new-list>
    <divider>
      <p>豫ICP备17025838号-1</p>
    </divider>
  </div>
</template>

<script>
import Hot from '../components/hot'
import New from '../components/new'
import { Divider } from 'vux'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'hot-list': Hot,
    'new-list': New,
    Divider
  }
}
</script>

<style lang="less" scoped>
  #index {
    width: 100%;
    text-align: center;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    .logo {
      height: 100px;
      background: #F9F8EB;
      padding: 50px 0;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>

