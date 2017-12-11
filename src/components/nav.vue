<template>
  <div id="nav">
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon" src="../assets/images/icon/index.png" alt="">
        <span slot="label">{{ items[0] }}</span>
      </tabbar-item>
      <tabbar-item show-dot link="/sort">
        <img slot="icon" src="../assets/images/icon/sort.png" alt="">
        <span slot="label">{{ items[1] }}</span>
      </tabbar-item>
      <tabbar-item :badge="num" link="/user">
        <img slot="icon" src="../assets/images/icon/user.png" alt="">
        <span slot="label">{{ items[2] }}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  data () {
    return {
      items: ['主页', '分类', '用户中心'],
      num: '20'
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less" scoped>
#nav {
  height: 100%;
  ul {
    li {
      float: left;
      width: 33%;
      height: 50px;
      border: 1px solid red;
      box-sizing: border-box;
      list-style: none;
      text-align: center;
    }
  }
}
</style>

