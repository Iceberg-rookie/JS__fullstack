<template>
  <div class="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import { getSeller } from '@/api'
export default {
  data () {return {
    seller: {
      id: 1
    }
    }
  },
  components: {
    Header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      console.log(seller);
    })
  }
}
</script>

<style lang="stylus">

</style>