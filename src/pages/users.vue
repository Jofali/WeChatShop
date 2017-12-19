<template>
  <div id="user">
    <div class="user-head">
      <div class="user-head-list-1">
        <h3>用户信息</h3>
      </div>
      <div class="user-head-list-2">
        <img src="../assets/images/icon/avatar.png" alt="">
        <p>用户昵称</p>
      </div>
    </div>
    <div class="user-info">
      <card :header="{title: '我的订单'}">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <router-link to="/pending/pay">
              <span>1</span>
              <br/>待付款
            </router-link>
          </div>
          <div class="vux-1px-r">
            <router-link to="/pending/receiving">
              <span>15</span>
              <br/>待收货
            </router-link>
          </div>
          <div class="vux-1px-r">
            <router-link to="/pending/evaluate">
              <span>100</span>
              <br/>待评价
              </router-link>
          </div>
        </div>
      </card>
      <group>
        <cell title="客服电话" value="0372-88888888" is-link @click.native="callTel">
          <img slot="icon" src="../assets/images/icon/tel.png" alt="">
        </cell>
        <cell title="收货地址" is-link link="/address">
          <img slot="icon" src="../assets/images/icon/address.png" alt="">
        </cell>
        <cell title="我的订单" is-link link="/order">
          <img slot="icon" src="../assets/images/icon/order.png" alt="">
        </cell>
        <cell title="我的消息" is-link @click.native="setBadge">
          <img slot="icon" src="../assets/images/icon/msg.png" alt="">
          <badge v-if="seen" :text="msgNumber"></badge>
        </cell>
        <cell title="反馈建议" is-link link="/support">
          <img slot="icon" src="../assets/images/icon/feedback.png" alt="">
        </cell>
        <cell title="帮助中心" is-link link="/help">
          <img slot="icon" src="../assets/images/icon/help.png" alt="">
        </cell>
      </group>    
    </div>
  </div>
</template>

<script>
import { Cell, Group, Card, Badge, Alert } from 'vux'

export default {
  data () {
    return {
      showNum: false
    }
  },
  computed: {
    msgNumber () {
      return this.$store.state.text
    },
    seen () {
      return this.$store.state.seen
    }
  },
  components: {
    Group,
    Cell,
    Card,
    Badge,
    Alert
  },
  methods: {
    callTel () {
      window.location.href = 'tel:0372-88888888'
    },
    setBadge () {
      this.$store.commit('UPDATE_SEEN', false)
      this.$store.commit('UPDATE_TEXT', '0')
      this.$router.push('message')
    }
  }
}
</script>

<style lang="less" scoped>
.user-head {
  width: 100%;
  height: 350px;
  background: #f9f8eb;
  .user-head-list-1 {
    h3 {
      display: inline-block;
      height: 50px;
    }
    padding: 10px 10px 55px;
  }
  .user-head-list-2 {
    text-align: center;
    img {
      max-width: 120px;
      display: inline-block;
    }
  }
}
.user-info {
  img {
    max-width: 20px;
    display: block;
    margin-right: 10px;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
}
</style>

