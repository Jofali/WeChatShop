<template>
  <div id="order">
    <div class="order-header">
      <h1>{{ msg }}</h1>
    </div>
    <divider>我是待付款的订单</divider>
    <pend-list
      :header="header"
      :contents="list"
      :footer="buttons1"
      :total="total"
    ></pend-list>
    <divider>我是待收货的订单</divider>
      <pend-list
        :header="header"
        :contents="list"
        :footer="buttons1"
        :total="total"
      ></pend-list>
    <divider>我是待评价的订单</divider>
      <pend-list
        :header="header"
        :contents="list"
        :footer="buttons1"
        :total="total"
      ></pend-list>
    <divider>我是已完成的订单</divider>
      <pend-list
        :header="header"
        :contents="list"
        :footer="buttons1"
        :total="total"
      ></pend-list>
  </div>
</template>

<script>
  import Pend from '../components/pend'
  import { Divider } from 'vux'
  export default {
    data () {
      return {
        msg: '订单管理',
        header: {
          title: '智能手机'
        },
        list: [{
          img: 'http://mycdn.lgwow.com/img/product/pending.jpg',
          title: '小米手机MAX，64G版本，全面屏，送钢化膜，蓝牙耳机，精品礼品' // 限制三十个字符
        }, {
          img: 'http://mycdn.lgwow.com/img/product/pending.jpg',
          title: '小米手机MAX，64G版本，全面屏，送钢化膜，蓝牙耳机，精品礼品' // 限制三十个字符
        }],
        buttons1: [{
          style: 'primary',
          text: '现在支付'
        }, {
          style: 'default',
          text: '评论晒单'
        }],
        total: {
          num: 2,
          price: '200'
        }
      }
    },
    components: {
      'pend-list': Pend,
      Divider
    }
  }
</script>

<style lang="less" scoped>
  .order-header{
    padding: 20% 0;
      background: #F9F8EB;
      h1 {
        text-align: center;
      }
  }
  .loading {
    .weui-toast__content{
      color: #fff;
    }
  }
</style>

