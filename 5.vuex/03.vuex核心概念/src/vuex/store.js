import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import lodash from 'lodash'

Vue.use(Vuex)

const state = {
  count: Math.ceil(100 * Math.random()),
  isRequesting: false
const showLogs = store => {
  var prevState = lodash.cloneDeep(store.state)
  store.subscribe((mutation, state) => {
    state.count++
    console.log('mutation', mutation, 'state', state)
    console.log('new count:', state.count, 'prev count:', prevState.count)
    prevState = lodash.cloneDeep(store.state)
  })
}

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [ showLogs ]
})

export default store
