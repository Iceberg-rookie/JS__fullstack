<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{count}}</h2>
    <h1>{{msg}}</h1>
    <p>
      <button @click="$store.commit('add')">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // computed: {
    // newCount() {
      // return this.$store.state.count*2
    // }
  // }
  data () {
    return {
      msg: ''
    }
  },
  computed: mapState(['count'])
}
</script>

<style>

</style>