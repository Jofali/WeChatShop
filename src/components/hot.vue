<template>
  <div id="hot">
    <group-title>
      <h2>{{ msg }}</h2>
    </group-title>
    <grid :cols="2">
      <grid-item v-for="i in list" :key="i.id">
        <x-img
        :src="i.src"
         @on-success="success"
         @on-error="error"
         >
         </x-img>
        <span>Loading</span>
        <p>{{ i.content }}</p>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle, XImg } from 'vux'
export default {
  data () {
    return {
      msg: '热门',
      list: [
        {'id': 1, 'src': 'http://mycdn.lgwow.com/img/product/sample.jpg', 'content': '热门电影'},
        {'id': 2, 'src': 'http://mycdn.lgwow.com/img/product/sample.jpg', 'content': '热门音乐'},
        {'id': 3, 'src': 'http://mycdn.lgwow.com/img/product/sample.jpg', 'content': '热门商品'},
        {'id': 4, 'src': 'http://mycdn.lgwow.com/img/product/sample.jpg', 'content': '热门游戏'}
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
  img {
    max-width: 100%;
  }
</style>
