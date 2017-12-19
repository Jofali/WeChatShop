<template>
  <div id="nav">
    <tabbar>
      <tabbar-item link="/">
        <img slot="icon" src="../assets/images/icon/index.png" alt="">
        <img slot="icon-active" src="../assets/images/icon/index-active.png" alt="">
        <span slot="label">{{ items[0] }}</span>
      </tabbar-item>
      <tabbar-item link="/sort">
        <img slot="icon" src="../assets/images/icon/sort.png" alt="">
        <img slot="icon-active" src="../assets/images/icon/sort-active.png" alt="">
        <span slot="label">{{ items[1] }}</span>
      </tabbar-item>
      <tabbar-item link="/user" :show-dot="isDot">
        <img slot="icon" src="../assets/images/icon/user.png" alt="">
        <img slot="icon-active" src="../assets/images/icon/user-active.png" alt="">
        <span slot="label">{{ items[2] }}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Badge } from 'vux'
export default {
  data () {
    return {
      items: ['主页', '分类', '用户中心']
    }
  },
  computed: {
    isDot () {
      return this.$store.state.seen
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Badge
  }
}
</script>

<style lang="less" scoped>
</style>

