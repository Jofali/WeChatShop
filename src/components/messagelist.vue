<template>
  <div id="addresslist">
    <card>
      <img class="image" slot="header" src="http://placeholder.qiniudn.com/640x300" alt="" style="width:100%">
      <h3 class="word" slot="content">标题</h3>
      <p class="word" slot="footer">内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
    </card>
  </div>
</template>

<script>
import { Card } from 'vux'
export default {
  props: ['head', 'content', 'foot'],
  components: {
    Card
  }
}
</script>

<style lang="less" scoped>
  #addresslist{
    margin: 30px 0 30px;
    background: #fff;
    padding:0 0 10px 0;
    .image {
      font-size: 0;
      display: inline-block;
    }
    .word{
      margin: 0 20px;
      padding-top: 10px; 
    }
    p{
      font-size: 14px;
      color: #999;
    }
  }
</style>
