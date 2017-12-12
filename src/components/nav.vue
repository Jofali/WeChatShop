<template>
  <div id="nav">
    <tabbar>
      <tabbar-item :show-dot="isDot1" @on-item-click="onItemClick" selected link="/">
        <img slot="icon" src="../assets/images/icon/index.png" alt="">
        <img slot="icon-active" src="../assets/images/icon/index-active.png" alt="">
        <span slot="label">{{ items[0] }}</span>
      </tabbar-item>
      <tabbar-item :show-dot="isDot2" @on-item-click="onItemClick" link="/sort">
        <img slot="icon" src="../assets/images/icon/sort.png" alt="">
        <img slot="icon-active" src="../assets/images/icon/sort-active.png" alt="">
        <span slot="label">{{ items[1] }}</span>
      </tabbar-item>
      <tabbar-item :badge="num" link="/user">
        <img slot="icon" src="../assets/images/icon/user.png" alt="">
        <img slot="icon-active" src="../assets/images/icon/user-active.png" alt="">
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
      num: '20',
      isDot1: true,
      isDot2: true
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    onItemClick (index) {
      if (index === 0) {
        this.isDot1 = false
      }
      if (index === 1) {
        this.isDot2 = false
      }
      if (index === 2) {
        this.num = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>

