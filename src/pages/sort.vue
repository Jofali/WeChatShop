<template>
  <div id="sort">
        <div class="search">
      <search placeholder="搜索钟爱的商品"
       :results="results"
       v-model="value"
       auto-scroll-to-top
       @on-submit="subSearch"
       @on-change="getResult(value)"
       @on-cancel="setValue"
      >
        <search-content @onRecommend="reCommend" slot="default" :seen="seen" :exresult="value"></search-content>
      </search>
    </div>
    <div class="sort-head">
          <h1>{{ msg }}</h1>
    </div>
    <button-tab v-model="sort" class="tab">
      <button-tab-item :selected="isShow" @on-item-click="goTo()">全部</button-tab-item>
      <button-tab-item @on-item-click="goTo()">热门</button-tab-item>
      <button-tab-item @on-item-click="goTo()">最新</button-tab-item>
    </button-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import { ButtonTab, Search, Divider, ButtonTabItem } from 'vux'
import searchContent from '@/components/search'
export default {
  data () {
    return {
      seen: true,
      msg: '类别浏览',
      sort: 0,
      isShow: true,
      arr: [],
      value: ''
    }
  },
  computed: {
    results: function () {
      return this.arr
    }
  },
  components: {
    ButtonTab,
    ButtonTabItem,
    Search,
    Divider,
    'search-content': searchContent
  },
  methods: {
    goTo () {
      if (this.sort === 0) {
        this.$router.push('/sort')
      }
      if (this.sort === 1) {
        this.$router.push('/sort/hot')
      }
      if (this.sort === 2) {
        this.$router.push('/sort/new')
      }
    },
    getResult (value) {
      this.value = value
      if (value !== '') {
        this.seen = false
      } else {
        this.seen = true
      }
    },
    setValue () {
      this.seen = true
    },
    subSearch () {
      this.$refs.search.setBlur()
    },
    reCommend (url) {
      this.value = url
      this.seen = false
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

