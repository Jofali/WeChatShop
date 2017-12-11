<template>
  <div id="hot">
    <img src="../assets/images/product/1.jpg" alt="">
    <group-title>{{ msg }}</group-title>
    <grid :cols="2">
      <grid-item v-for="i in mun" :key="i.num">
        <x-img
        :src="i.src"
         @on-success="success"
         @on-error="error"
         >
         </x-img>
        <span>Loading</span>
        <h3>{{ i.content }}</h3>
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
      mun: [
        {'num': 1, 'src': '../assets/images/product/1.jpg', 'content': '11'},
        {'num': 2, 'src': '../assets/images/product/2.jpg', 'content': '22'},
        {'num': 3, 'src': '../assets/images/product/3.jpg', 'content': '33'},
        {'num': 4, 'src': '../assets/images/product/4.jpg', 'content': '44'}
      ]
    }
  },
  methods: {
    success (src, ele) {
      console.log('success load', src)
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
