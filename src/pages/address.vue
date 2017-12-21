<template>
  <div id="address">
    <div class="address-header">
       <h1>{{ address }}</h1>
    </div>
    <ul>
      <li v-for="(item, index) in addressList" :key="index">
        <address-list
          :header="item.header"
          :content="item.content"
          :footer="item.footer"
        ></address-list>
      </li>
    </ul>
    <div class="add-address">
      <x-button type="primary" @click.native="addAddress">+ 新增地址</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
import Address from '../components/addressCom'
export default {
  data () {
    return {
      address: '收货地址',
      addressList: [{
        header: {
          name: 'Lee',
          tel: '88888888'
        },
        content: '这好似地址的速度撒打算',
        footer: false
      }, {
        header: {
          name: 'Andy',
          tel: '18545555854'
        },
        content: '美国纽约第几街区，第几号楼，第几层，那个公司',
        footer: false
      }]
    }
  },
  components: {
    XButton,
    'address-list': Address
  },
  methods: {
    addAddress () {
      this.$router.push('/editaddress/add')
    }
  }
}
</script>

<style lang="less" scoped>
  #address {
    height: 100%;
    padding-bottom: 50%;
    .address-header{
      padding: 20% 0;
      background: #F9F8EB;
      h1 {
        text-align: center;
      }
    }
    .add-address{
    width: 100%;
    position: fixed;
    bottom: 80px;
    padding: 0 10%;
    box-sizing: border-box; 
  }
  }
  
</style>
