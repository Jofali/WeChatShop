<template>
  <div id="index">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <hot-list></hot-list>
    <new-list></new-list>
  </div>
</template>

<script>
import Hot from '../components/hot'
import New from '../components/new'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'hot-list': Hot,
    'new-list': New
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
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>

