<template>
  <div id="pending">
    {{ pending }}
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pending: '有待解决'
    }
  },
  computed: {
    msg () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="less" scoped>

</style>
