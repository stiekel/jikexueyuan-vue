import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  count: Math.ceil(100 * Math.random()),
  isRequesting: false
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
