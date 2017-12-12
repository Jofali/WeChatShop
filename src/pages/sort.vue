<template>
  <div id="sort">
    <div class="sort-head">
          <h1>{{ msg }}</h1>
    </div>
    <button-tab v-model="sort" class="tab">
      <button-tab-item @on-item-click="goTo()">热门</button-tab-item>
      <button-tab-item @on-item-click="goTo()">最新</button-tab-item>
      <button-tab-item :selected="isShow" @on-item-click="goTo()">全部</button-tab-item>
    </button-tab>
    <router-view></router-view>
    <divider>
      <p>豫ICP备17025838号-1</p>
    </divider>
  </div>
</template>

<script>
import { ButtonTab, ButtonTabItem, Divider } from 'vux'
export default {
  data () {
    return {
      msg: 'Sort',
      sort: 0,
      isShow: true
    }
  },
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider
  },
  methods: {
    goTo () {
      if (this.sort === 0) {
        this.$router.push('/sort/hot')
      }
      if (this.sort === 1) {
        this.$router.push('/sort/new')
      }
      if (this.sort === 2) {
        this.$router.push('/sort')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .sort-head {
    background: #F9F8EB;
    height: 350px;
    text-align: center;
    line-height: 350px;
  }
  .tab {
    padding: 0 20px;
    margin: 20px 0;
  }
</style>

