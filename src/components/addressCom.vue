<template>
<div id="addresscom">
  <div class="add-header">
    <h3>{{ header.name }}</h3>
    <p>{{ header.tel }}</p>
  </div>
  <div class="add-content">
    <p>{{ content }}</p>
  </div>
  <div class="add-footer">
    <div class="add-footer-default">
      <checker v-model="key" default-item-class="default-item" selected-item-class="default-item-selected">
        <checker-item value="1" @on-item-click="setDefaultAddress">{{ value }}</checker-item>
      </checker>
    </div>
    <div class="add-footer-operat">
      <router-link to="#">
        <img src="../assets/images/icon/delete.png" alt="">
        删除
      </router-link>
      <router-link to="/editaddress/edit">
        <img src="../assets/images/icon/edit.png" alt="">
        编辑
      </router-link>
    </div>
  </div>
  <toast v-model="showp" type="text" is-show-mask :time="2000" :text="text" position="middle"></toast>
</div>
</template>

<script>
import { Checker, CheckerItem, Toast } from 'vux'
export default {
  props: ['header', 'content', 'footer'],
  data () {
    return {
      showp: false,
      text: '',
      value: '默认地址',
      key: 0
    }
  },
  components: {
    Checker,
    CheckerItem,
    Toast
  },
  created: function () {
    if (!this.key) {
      this.value = '设为默认'
    }
  },
  methods: {
    setDefaultAddress () {
      this.showp = true
      if (!this.key) {
        this.text = '<h3 style="color:#fff;">设置成功!</h3>' + this.key
        this.value = '默认地址'
      } else {
        this.text = '<h3 style="color:#fff;">取消成功!</h3>' + this.key
        this.value = '设为默认'
      }
    }
  }
}
</script>

<style lang="less" scoped>
#addresscom {
  margin: 20px 0;
  padding: 10px; 
  background: #fff;
  .add-header{
    h3,p {
      display: inline-block;
    }
    p{
      padding-left: 20px; 
      font-size: 18px;
    }
  }
  .add-content{
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    p{
      color: #999;
      font-size: 14px;
    }
  }
  .add-footer{
    font-size: 16px;
    &:after{
      content: '';
      display: block;
      clear: both;
    }
    .add-footer-operat {
      width: 140px;
      float: right;
      padding: 6px 0;
      box-sizing: border-box;
      a{
        padding-left: 10px;
        img {
          font-size: 0;
          max-width: 12%;
        }
      }
    }
    .add-footer-default{
      width: 30%;
       float: left;
      .default-item {
        border: 1px solid #ccc;
        padding: 5px 20px;
      }
      .default-item-selected{
        border-color: #33425B;
        background: url('../assets/images/icon/select.png') no-repeat top right;
      }
    }
  }
}
</style>
