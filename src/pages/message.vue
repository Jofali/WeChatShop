<template>
  <div id="message">
    <div class="message-header">
      <h1>{{ message }}</h1>
    </div>
     <div class="message-content-list" v-for="i in 10" :key="i">
       <message-list></message-list>
     </div>
  </div>  
</template>

<script>
import messageList from '../components/messagelist'
export default {
  data () {
    return {
      message: '最新资讯'
    }
  },
  components: {
    'message-list': messageList
  }
}
</script>

<style lang="less" scoped>
  #message{
    .message-header{
      padding: 20% 0;
      background: #F9F8EB;
      h1 {
        text-align: center;
      }
    }
  }
</style>
