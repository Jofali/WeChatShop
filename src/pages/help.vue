<template>
  <div id="help">
    <div class="help-header">
      <h1>{{ help }}</h1>
    </div>
    <div v-html="content" class="help-content"></div>
    <div class="help-footer">
      <h3>没有帮助？点击<a href="tel:88888888">客服电话</a>联系我们</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      help: '帮助文档',
      content: '<h3 style="text-align: center">我是文档标题</h3><p>我是文档内容我是文档内容我是文档内容我是文档内容我是文档内容我是文档内容</p>'
    }
  }
}
</script>

<style lang="less" scoped>
  #help{
    .help-header{
      padding: 20% 0;
      background: #F9F8EB;
      h1 {
        text-align: center;
      }
    }
    .help-content{
      padding: 10% 10px;
    }
    .help-footer{
      text-align: center;
      padding: 5% 0 10%;
    }
  }
</style>
