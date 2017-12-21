<template>
  <div id="support">
    <div class="support-header">
      <h1>{{ support }}</h1>
    </div>
    <div class="support-content">
      <group>
        <x-textarea
          placeholder="勇敢的说出你的建议" 
          v-model="msg"
          :autosize="true"
          :max="300"
          title="反馈/建议："></x-textarea>
      </group>
    </div>
    <div class="message-footer">
      <x-button type="primary" text="提交"></x-button>
    </div>
  </div>  
</template>

<script>
import { Group, XTextarea, XButton } from 'vux'
export default {
  data () {
    return {
      support: '建议',
      msg: ''
    }
  },
  components: {
    Group,
    XTextarea,
    XButton
  }
}
</script>

<style lang="less" scoped>
  #support{
    .support-header{
      padding: 20% 0;
      background: #F9F8EB;
      h1 {
        text-align: center;
      }
    }
  }
  .message-footer{
    padding-top: 15%;
    margin: 0 10%;
  }
</style>
