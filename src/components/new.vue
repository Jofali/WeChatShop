<template>
  <div id="news">
    <group-title>
      <h2>{{ msg }}</h2>
    </group-title>
    <grid :cols="2">
      <grid-item v-for="i in list" :key="i.id">
        <router-link :to="'/product/' + i.id">
          <x-img
          :offset="1000"
          :src="i.src"
          @on-success="success"
          @on-error="error"></x-img>
          <span>Loading</span>
          <p>{{ i.content }}</p>
        </router-link>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle, XImg } from 'vux'
export default {
  data () {
    return {
      msg: '最新',
      list: [
        {'id': 5, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新电影'},
        {'id': 6, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新音乐'},
        {'id': 7, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新商品'},
        {'id': 8, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新游戏'},
        {'id': 9, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新家具'},
        {'id': 10, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新美妆'},
        {'id': 11, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新服饰'},
        {'id': 12, 'src': 'http://mycdn.lgwow.com/img/product/sample-new.jpg', 'content': '最新保健'}

      ]
    }
  },
  methods: {
    success (src, ele) {
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  components: {
    Grid,
    GridItem,
    GroupTitle,
    XImg
  }
}
</script>

<style lang="less" scoped>
</style>
