<template>
  <div id="search" class="seacth-content">
    <div class="search-recommend" v-if="seens">
      <h2>推荐商品</h2>
      <ul>
        <li v-for="item in recommend" :key="item.id" @click="doRecommend(item.url)">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="search-result" v-else>
      <h2>搜索结果</h2>
      <ul>
        <li v-for="(result, index) in results" :key="index">
          这是结果{{ result + ': ' + exresults }}
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['seen', 'exresult'],
  data () {
    return {
      results: ['1', '2', '3', '4', '5', '6', '7', '8'],
      recommend: [
        {
          id: 0,
          url: 'apple',
          title: '苹果手机'
        },
        {
          id: 1,
          url: 'cherry',
          title: '樱桃键盘'
        },
        {
          id: 2,
          url: 'razer',
          title: '雷蛇鼠标'
        },
        {
          id: 3,
          url: 'cruiser',
          title: '漫步者音箱'
        },
        {
          id: 4,
          url: 'xiaomi',
          title: '小米笔记本'
        },
        {
          id: 5,
          url: 'hitthetiger',
          title: '上山打老虎'
        }
      ]
    }
  },
  created () {
    console.log(this.seens)
  },
  computed: {
    seens () {
      return this.seen
    },
    exresults () {
      return this.exresult
    }
  },
  methods: {
    doRecommend (url) {
      this.$emit('onRecommend', url)
    }
  }
}
</script>

<style lang="less" scoped>
.seacth-content {
  padding-bottom: 100%;
  text-align: center;
  h2 {
    font-size: 16px;
    color: #999;
    padding: 50px 0 10px;
  }
  .search-recommend {
    ul{
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      li{
        display:inline-block;
        box-sizing: border-box;
        color: #38817A;
        width: 30%;
        padding: 10px;
      }
    }
  }
  .search-result{
    ul{
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      li{
        box-sizing: border-box;
        text-align: center;
        color: #38817A;
        width: 90%;
        margin: 10px auto;
        background: #F9F8EB;
        padding: 10px;
      }
    }
  }
}
</style>
