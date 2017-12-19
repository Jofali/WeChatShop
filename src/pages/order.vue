<template>
  <div id="order">
    <h1>{{ msg }}</h1>
    <form-preview 
    header-label="头部标题"
    header-value="头部内容"
    body-items=""
    :footer-buttons="buttons1"
    ></form-preview>
  </div>
</template>

<script>
  import { FormPreview } from 'vux'
  export default {
    data () {
      return {
        msg: '订单管理',
        buttons1: [
          {
            style: 'default',
            text: '辅助操作'
          }
        ]
      }
    },
    components: {
      FormPreview
    }
  }
</script>

<style lang="less" scoped>
  .loading {
    .weui-toast__content{
      color: #fff;
    }
  }
</style>

