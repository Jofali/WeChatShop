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
      <card :header="{title: '我的钱包'}">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>1130</span>
            <br/>
            战网点
          </div>
          <div class="vux-1px-r">
            <span>15</span>
            <br/>
            优惠卷
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <br/>
            会员卡
          </div>
          <div>
            <span>88</span>
            <br/>
            贷款
          </div>
        </div>
      </card>
      <group title="例子">
        <cell title="客服电话" value="0372-88888888" is-link @click.native="callTel">
          <img slot="icon" src="../assets/images/icon/tel.png" alt="">
        </cell>
        <cell title="我的订单" is-link link="/order">
          <img slot="icon" src="../assets/images/icon/order.png" alt="">
        </cell>
        <cell title="我的消息" is-link>
          <img slot="icon" src="../assets/images/icon/msg.png" alt=""><badge text="1"></badge>
        </cell>
        <cell title="反馈建议" is-link>
          <img slot="icon" src="../assets/images/icon/feedback.png" alt="">
        </cell>
        <cell title="帮助中心" is-link>
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

