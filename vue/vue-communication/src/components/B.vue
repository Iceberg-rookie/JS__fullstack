<template>
  <div class="wrap">
    BBBBBBBBB
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data() {
    return {
      msg: ''
    }
  },
  mouted () {
    Bus.$on('sendA', (e) => {
      console.log(e);
      this.msg = e
    })
  }
}
</script>

<style>

</style>
