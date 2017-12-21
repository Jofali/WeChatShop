<template>
  <div id="product">
    <h1>{{ product }}</h1>
    <p>{{ pid }}</p>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      product: '商品详情'
    }
  },
  computed: {
    pid () {
      return this.$route.params.pid
    }
  }
}
</script>

<style lang="less" scoped>

</style>
