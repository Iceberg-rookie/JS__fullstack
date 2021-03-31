import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add(state, num) {
    setTimeout(() => {
      state.count += num
    }, 3000)
    console.log('我后出现');
  },
  reduce(abc) {
    abc.count--
  }
}

const getters = {
  newCount: (state) => {
    return state.count ** 2
  }
}

const actions = {
  addAction (context, n) {
    setTimeout(() => {
      context.commit('add', n)
    }, 3000)
    console.log('我先出现');
  }
}

export default new Vuex.Store({
  state,
  mutations: mutations,
  getters,
  actions
})