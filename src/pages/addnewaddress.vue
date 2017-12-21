<template>
  <div id="addAddress">
    <div class="address-header">
      <h1>{{ title }}</h1>
    </div>
    <div class="address-form">
      <group>
        <x-input 
          v-model="name" 
          is-type="text" 
          title="姓名" 
          :max="30" 
          placeholder="请输入姓名">
          </x-input>
      </group>
      <group>
        <x-input 
          v-model="tel" 
          keyboard="number"
          is-type="china-mobile" 
          title="电话" 
          :max="13"
          mask="999 9999 9999">
          </x-input>
      </group>
      <group>
        <x-address
          title="所在地区"
          v-model="address1"
          :list="addressData"
        ></x-address>
      </group>
      <group>
        <x-input
          v-model="address2" 
          is-type="text"
          title="具体地址"
          :max="200"
          placeholder="请输入具体地址"></x-input>
      </group>
    </div>
    <div class="address-footer">
      <x-button type="primary">保存</x-button>
    </div>
  </div>  
</template>

<script>
import { Group, XInput, XButton, XAddress, ChinaAddressV4Data, Cell } from 'vux'
export default {
  data () {
    return {
      name: '',
      tel: '',
      address1: [],
      address2: '',
      addressData: ChinaAddressV4Data
    }
  },
  computed: {
    title () {
      if (this.$route.params.tid === 'add') {
        return '新增地址'
      }
      if (this.$route.params.tid === 'edit') {
        return '修改地址'
      }
    }
  },
  components: {
    Group,
    XInput,
    XButton,
    XAddress,
    Cell
  }
}
</script>

<style lang="less" scoped>
#addAddress{
  .address-header{
    text-align: center;
    padding: 20% 0;
    background: #F9F8EB;
  }
  .address-footer{
    padding: 20% 25% 10%;
  }
}
</style>
