<template>
  <div id="all">
    <hot-list></hot-list>
    <new-list></new-list>
  </div>
</template>

<script>
import Hot from './hot'
import New from './new'
export default {
  data () {
    return {}
  },
  components: {
    'hot-list': Hot,
    'new-list': New
  }
}
</script>

<style lang="less" scoped>

</style>

