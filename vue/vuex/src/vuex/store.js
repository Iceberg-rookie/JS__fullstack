import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
state.count = 2

export default new Vuex.Store({
  state
})