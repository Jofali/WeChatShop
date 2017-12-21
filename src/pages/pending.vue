<template>
  <div id="pending">
    <div class="pending-head">
      <img :src="'http://mycdn.lgwow.com/img/icon/' + msg + '.png'" alt="">
      <h3>{{ pending }}</h3>
    </div>
    <div class="pending-content">
      <pend-list
        :header="header"
        :contents="list"
        :footer="buttons1"
        :total="total"
      ></pend-list>
    </div>
  </div>
</template>

<script>
import Pend from '../components/pend'

export default {
  data () {
    return {
      pending: '有待解决',
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
  computed: {
    msg () {
      return this.$route.params.id
    }
  },
  created: function () {
    if (this.msg === 'pay') {
      this.buttons1 = [{
        style: 'primary',
        text: '现在支付'
      }, {
        style: 'default',
        text: '评论晒单'
      }]
      this.pending = '未支付的订单列表'
    }
    if (this.msg === 'receiving') {
      this.buttons1 = [{
        style: 'primary',
        text: '确认收货'
      }, {
        style: 'default',
        text: '评论晒单'
      }]
      this.pending = '未收货的订单列表'
    }
    if (this.msg === 'evaluate') {
      this.buttons1 = [{
        style: 'default',
        text: '评论晒单'
      }]
      this.pending = '待评价的订单'
    }
  },
  components: {
    'pend-list': Pend
  }
}
</script>

<style lang="less" scoped>
  #pending{
    .pending-head{
      text-align: center;
      padding: 20% 0;
      background: #F9F8EB;
      img{
        max-width: 50%;
      }
    }
  }
</style>
